"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { useGame } from "@/app/hooks/useGame";
import { CHALLENGES } from "../../data/challenges";

//deus esta morto
export default function Auth() {
    const [message, setMessage] = useState("");
    const { setGameSession, session, setGamePlayer, player } = useGame();
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [waiting, setWaiting] = useState(false);
    const router = useRouter();
    const inputRefs = useRef([]);

    useEffect(() => {
        const subscription = supabase
            .channel("realtime:sessions")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "sessions" },
                async (payload) => {
                    console.log("Payload received:", payload);
                    const newSession = payload.new;
                    if (newSession.is_active) {
                        setMessage(
                            newSession.player2_id
                                ? "Ambos jogadores estão conectados!"
                                : "Esperando pelo outro jogador..."
                        );
                        setGameSession(newSession);
                        await fetchPlayerNames(newSession);

                        if (newSession.game_started) {
                            setGameStarted(true);
                            calculateCountdown(newSession.countdown_start_time);
                        }
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, []);

    useEffect(() => {
        if (waiting) {
            let index = 0;
            const messages = [
                "Sessão criada, aguardando outro jogador.",
                "Sessão criada, aguardando outro jogador..",
                "Sessão criada, aguardando outro jogador...",
            ];
            const interval = setInterval(() => {
                setMessage(messages[index]);
                index = (index + 1) % messages.length;
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [waiting]);

    const fetchPlayerNames = async (session) => {
        if (session.player1_id) {
            const { data: player1, error: player1Error } = await supabase
                .from("users")
                .select("name")
                .eq("id", session.player1_id)
                .single();
            if (!player1Error) setPlayer1Name(player1.name);
        }

        if (session.player2_id) {
            const { data: player2, error: player2Error } = await supabase
                .from("users")
                .select("name")
                .eq("id", session.player2_id)
                .single();
            if (!player2Error) setPlayer2Name(player2.name);
        }
    };

    const startGame = async () => {
        try {
            // Criar um novo jogador com nome aleatório
            const playerName = `Player_${Math.random().toString(36).substring(2, 15)}`;
            const { data: user, error: userError } = await supabase
                .from("users")
                .insert([{ name: playerName }])
                .select()
                .single();

            if (userError) {
                console.error("Erro ao criar jogador:", userError);
                setMessage(`Erro ao criar jogador: ${userError.message}`);
                return;
            }

            if (!user) {
                setMessage("Erro ao criar jogador: nenhum dado retornado.");
                return;
            }

            setGamePlayer(user);
            const { data: sessions, error: sessionsError } = await supabase
                .from("sessions")
                .select("*")
                .eq("is_active", false)
                .is("player2_id", null);

            if (sessionsError) {
                console.error("Erro ao buscar sessões:", sessionsError);
                setMessage("Erro ao buscar sessões.");
                return;
            }

            let session;
            if (sessions.length === 0) {
                const { data: newSession, error: newSessionError } = await supabase
                    .from("sessions")
                    .insert([{ player1_id: user.id, is_active: false }])
                    .select()
                    .single();

                if (newSessionError) {
                    console.error("Erro ao criar a sessão:", newSessionError);
                    setMessage("Erro ao criar a sessão.");
                    return;
                }

                session = newSession;
                setWaiting(true); // Inicia a animação
            } else {
                session = sessions[0];
                const challenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];

                const { data: updatedSession, error: updateSessionError } = await supabase
                    .from("sessions")
                    .update({
                        player2_id: user.id,
                        is_active: true,
                        game_challenge: challenge,
                        game_started: sessions.length > 0,
                        countdown_start_time: sessions.length > 0 ? new Date().toISOString() : null,
                    })
                    .eq("id", session.id)
                    .select()
                    .single();

                if (updateSessionError) {
                    console.error("Erro ao entrar na sessão:", updateSessionError);
                    setMessage("Erro ao entrar na sessão.");
                    return;
                }

                session = updatedSession;
                setMessage("Sessão iniciada, ambos jogadores estão conectados!");
            }

            setGameSession(session);
            fetchPlayerNames(session);
            if (session.game_started) {
                calculateCountdown(session.countdown_start_time);
            }
        } catch (err) {
            console.error("Erro inesperado:", err);
            setMessage(`Erro inesperado: ${err.message}`);
        }
    };

    const calculateCountdown = (startTime) => {
        const endTime = new Date(startTime);
        endTime.setSeconds(endTime.getSeconds() + 10);
        const interval = setInterval(() => {
            const now = new Date();
            const timeLeft = Math.max(0, Math.ceil((endTime - now) / 1000));
            setCountdown(timeLeft);
            if (timeLeft === 0) {
                clearInterval(interval);
                setMessage("Jogo iniciado!");
                return router.push("/home");
            }
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white flex-col">
            <h1 className="text-7xl my-10 font-bold text-center">
                Desafio Prudential
            </h1>
            <div className="w-full max-w-md p-8 space-y-6 bg-blue-800 rounded-lg shadow-lg">
                {session && (
                    <div className="mt-6 space-y-4 text-center flex justify-center flex-col">
                        <p>Jogador 1: {player1Name || session.player1_id}</p>
                        <p>Jogador 2: {player2Name || session.player2_id}</p>
                        <p className="mt-6 text-3xl">
                            Seu desafio é: {session.game_challenge}
                        </p>
                    </div>
                )}
                {message && <p className="mt-4 text-center text-white">{message}</p>}
                {countdown !== null && (
                    <p className="mt-4 text-center">Contagem regressiva: {countdown}</p>
                )}
                <button
                    onClick={startGame}
                    className="w-full p-4 text-xl font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                    Começar
                </button>
            </div>
        </div>
    );
}
