"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { useGame } from "@/app/hooks/useGame";
import VirtualKeyboard from "../../components/VirtualKeyboard";
import { CHALLENGES } from "../../data/challenges";

export default function Auth() {
	const [message, setMessage] = useState("");
	const { setGameSession, session, setGamePlayer, player } = useGame();

	const [pin, setPin] = useState(["", "", "", "", "", ""]);
	const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
	const [focusedInput, setFocusedInput] = useState(null);
	const [player1Name, setPlayer1Name] = useState("");
	const [player2Name, setPlayer2Name] = useState("");
	const [gameStarted, setGameStarted] = useState(false);
	const [countdown, setCountdown] = useState(null);
	const router = useRouter();
	const inputRefs = useRef([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
								: "Esperando pelo outro jogador...",
						);
						setGameSession(newSession);
						await fetchPlayerNames(newSession);

						if (newSession.game_started) {
							setGameStarted(true);

							calculateCountdown(newSession.countdown_start_time);
						}
					}
				},
			)
			.subscribe();

		return () => {
			supabase.removeChannel(subscription);
		};
	}, []);

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
		if (!session) {
			setMessage("Nenhuma sessão ativa.");
			return;
		}

		const countdownStartTime = new Date().toISOString();
		const { error } = await supabase
			.from("sessions")
			.update({ game_started: true, countdown_start_time: countdownStartTime })
			.eq("id", session.id);

		if (error) {
			setMessage("Erro ao iniciar o jogo.");
			console.error("Erro ao iniciar o jogo:", error.message);
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
				setMessage("Jogo iniciado!");
				return router.push("/home");
			}
		}, 1000);
	};

	const handleChange = (value, index) => {
		if (value.length > 1) return;

		const newPin = [...pin];
		newPin[index] = value;
		setPin(newPin);

		if (value !== "" && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}

		if (newPin.every((val) => val !== "")) {
			authenticatePin(newPin.join(""));
		}
	};

	async function authenticatePin(completePin) {
		const { data: user, error } = await supabase
			.from("users")
			.select("*")
			.eq("pin", completePin)
			.single();

		if (error || !user) {
			setMessage("PIN inválido, tente de novo.");
			return;
		}
		setGamePlayer(user);

		setMessage(`Welcome, ${user.name}!`);
		const { data: existingSession, error: existingSessionError } =
			await supabase
				.from("sessions")
				.select("*")
				.eq("is_active", false)
				.or("player1_id.is.null,player2_id.is.null")
				.single();

		if (existingSessionError || !existingSession) {
			const { _, error: newSessionError } = await supabase
				.from("sessions")
				.insert([{ player1_id: user.id, is_active: false }])
				.single();

			if (newSessionError) {
				return setMessage("Erro ao criar a sessão.");
			}
		} else {
			const challenge = CHALLENGES.map((value) => ({
				value,
				sort: Math.random(),
			}))
				.sort((a, b) => a.sort - b.sort)
				.map(({ value }) => value)
				.at(Math.floor(Math.random() * 3));
			const { data: updatedSession, error: updateSessionError } = await supabase
				.from("sessions")
				.update({
					player2_id: user.id,
					is_active: true,
					game_challenge: challenge,
				})
				.eq("id", existingSession.id)
				.single();

			if (updateSessionError) {
				return setMessage("Erro ao entrar na sessão.");
			}

			setGameSession(updatedSession);
		}
	}

	const handleFocus = (index) => {
		setFocusedInput(index);
		setIsKeyboardVisible(true);
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
				<h1 className="flex justify-center mt-8 space-x-2 text-white text-5xl font-bold">
					Insira seu PIN
				</h1>
				<div className="flex justify-center mt-8 space-x-2 text-black">
					{pin.map((digit, index) => (
						<input
							key={index}
							ref={(el) => (inputRefs.current[index] = el)}
							type="text"
							maxLength="1"
							value={digit}
							onChange={(e) => handleChange(e.target.value, index)}
							onFocus={() => handleFocus(index)}
							className="w-12 h-12 text-xl text-center border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
						/>
					))}
				</div>
				{message && <p className="mt-4 text-center text-white">{message}</p>}
				{countdown !== null && (
					<p className="mt-4 text-center">Contagem regressiva: {countdown}</p>
				)}
				{session &&
					session.player1_id &&
					session.player2_id &&
					!gameStarted && (
						<button
							onClick={startGame}
							className="w-full p-4 text-xl font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
						>
							Começar
						</button>
					)}
				<VirtualKeyboard
					isVisible={isKeyboardVisible}
					onChange={(value) => handleChange(value, focusedInput)}
					focusedInput={focusedInput}
				/>
			</div>
		</div>
	);
}
