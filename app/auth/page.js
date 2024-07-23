"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';

export default function Auth() {
    const [pin, setPin] = useState('');
    const [message, setMessage] = useState('');
    const [session, setSession] = useState(null);
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const subscription = supabase
            .channel('realtime:sessions')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'sessions' }, async payload => {
                console.log('Payload received:', payload);
                const newSession = payload.new;
                if (newSession.is_active) {
                    setMessage(newSession.player2_id ? 'Ambos jogadores estão conectados!' : 'Esperando pelo outro jogador...');
                    setSession(newSession);
                    await fetchPlayerNames(newSession);

                    if (newSession.game_started) {
                        setGameStarted(true);
                        calculateCountdown(newSession.countdown_start_time);
                    }
                }
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, []);

    const fetchPlayerNames = async (session) => {
        if (session.player1_id) {
            const { data: player1, error: player1Error } = await supabase
                .from('users')
                .select('name')
                .eq('id', session.player1_id)
                .single();
            if (!player1Error) setPlayer1Name(player1.name);
        }

        if (session.player2_id) {
            const { data: player2, error: player2Error } = await supabase
                .from('users')
                .select('name')
                .eq('id', session.player2_id)
                .single();
            if (!player2Error) setPlayer2Name(player2.name);
        }
    };

    const authenticatePin = async () => {
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('pin', pin)
            .single();

        if (error || !user) {
            setMessage('PIN inválido, tente de novo.');
            return;
        }

        setMessage(`Welcome, ${user.name}!`);
        const { data: existingSession, error: existingSessionError } = await supabase
            .from('sessions')
            .select('*')
            .eq('is_active', false)
            .or('player1_id.is.null,player2_id.is.null')
            .single();

        if (existingSessionError || !existingSession) {
            const { data: newSession, error: newSessionError } = await supabase
                .from('sessions')
                .insert([{ player1_id: user.id, is_active: false }])
                .single();

            if (newSessionError) {
                setMessage('Erro ao criar a sessão.');
            } else {
                setSession(newSession);
                setPlayer1Name(user.name);
            }
        } else {
            const { data: updatedSession, error: updateSessionError } = await supabase
                .from('sessions')
                .update({ player2_id: user.id, is_active: true })
                .eq('id', existingSession.id)
                .single();

            if (updateSessionError) {
                setMessage('Erro ao entrar na sessão.');
            } else {
                setSession(updatedSession);
                if (updatedSession) {
                    setPlayer1Name(updatedSession.player1_id === user.id ? user.name : player1Name);
                    setPlayer2Name(updatedSession.player2_id === user.id ? user.name : player2Name);
                }
            }
        }
    };

    const startGame = async () => {
        if (!session) {
            setMessage('Nenhuma sessão ativa.');
            return;
        }

        const countdownStartTime = new Date().toISOString();
        const { error } = await supabase
            .from('sessions')
            .update({ game_started: true, countdown_start_time: countdownStartTime })
            .eq('id', session.id);

        if (error) {
            setMessage('Erro ao iniciar o jogo.');
            console.error('Erro ao iniciar o jogo:', error.message);
        } else {
            setMessage('Jogo iniciado!');
            setGameStarted(true);
            calculateCountdown(countdownStartTime);

            router.push({
                pathname: '/home',
                query: {
                    player1Name: player1Name,
                    player2Name: player2Name
                }
            });
        }
    };


    const calculateCountdown = (startTime) => {
        const endTime = new Date(startTime);
        endTime.setSeconds(endTime.getSeconds() + 5);
        const interval = setInterval(() => {
            const now = new Date();
            const timeLeft = Math.max(0, Math.ceil((endTime - now) / 1000));
            setCountdown(timeLeft);
            if (timeLeft === 0) {
                clearInterval(interval);
                setMessage('Jogo iniciado!');
                router.push('/home');
            }
        }, 1000);
    };

    return (
        <div>
            <h1>Insira o PIN</h1>
            <input
                type="text"
                placeholder="PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
            />
            <button onClick={authenticatePin}>Autenticar</button>
            {message && <p>{message}</p>}
            {countdown !== null && <p>Contagem regressiva: {countdown}</p>}
            {session && (
                <div>
                    <p>
                        ID da sessão: {session.id} - Jogador 1: {player1Name || session.player1_id} - Jogador 2: {player2Name || session.player2_id}
                    </p>
                    {session.player1_id && session.player2_id && !gameStarted && (
                        <button onClick={startGame}>Começar</button>
                    )}
                </div>
            )}
        </div>
    );
}
