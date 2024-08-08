"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { useGame } from "@/app/hooks/useGame";
import { CHALLENGES } from "../../data/challenges";
import { Spinner } from "@/app/components/Spinner";
import { StartIcon } from "./StartIcon";
import PrudentialLogo from "./Prudential-Logo.png";
import Image from "next/image";
import { RunnerIcon } from "./RunnerIcon";

//deus esta morto
export default function Auth() {
	const [message, setMessage] = useState("");
	const { setGameSession, setGamePlayer, session } = useGame();
	const [countdown, setCountdown] = useState(5);
	const [gameStarted, setGameStarted] = useState(false);
	const [waiting, setWaiting] = useState(false);

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
						if (newSession.game_started) {
							setGameStarted(true);
						}
					}
				},
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
				return;
			}

			if (!user) {
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
					return;
				}

				session = newSession;
				setWaiting(true); // Inicia a animação
			} else {
				session = sessions[0];
				const challenge = CHALLENGES[~~(Math.random() * CHALLENGES.length)];

				const { data: updatedSession, error: updateSessionError } =
					await supabase
						.from("sessions")
						.update({
							player2_id: user.id,
							is_active: true,
							game_challenge: challenge,
							game_started: sessions.length > 0,
							countdown_start_time:
								sessions.length > 0 ? new Date().toISOString() : null,
						})
						.eq("id", session.id)
						.select()
						.single();

				if (updateSessionError) {
					console.error("Erro ao entrar na sessão:", updateSessionError);
					return;
				}

				session = updatedSession;
			}

			setGameSession(session);
		} catch (err) {
			console.error("Erro inesperado:", err);
		}
	};

	useEffect(() => {
		if (gameStarted) {
			const timer =
				countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
			if (countdown === 0) {
				clearInterval(timer);
				return window.location.replace("/home");
			}

			return () => clearInterval(timer);
		}
	}, [gameStarted, countdown]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1F508E] to-[#031F45] text-white flex-col">
			<Image src={PrudentialLogo} className=" my-10 fixed top-0 w-[300px]" />

			<div className="w-full  max-w-2xl p-9 space-y-10 bg-[#FCFCFC] rounded-xl shadow-lg text-[#1F1F24]">
				{gameStarted ? (
					<>
						<span className="w-full items-center justify-center flex">
							<RunnerIcon />
						</span>
						<p className="text-center text-2xl">Seu objetivo é</p>

						<p className=" font-bold text-3xl text-center">
							{session.game_challenge[0].toUpperCase() +
								session.game_challenge.substring(1).toLowerCase()}
						</p>

						<div className="flex items-center flex-col gap-2 p-6 bg-[#F0EFF2] rounded-3xl">
							<p className="text-xl">O desafio vai começar em...</p>

							<p className="font-bold text-3xl">{countdown}</p>
						</div>
					</>
				) : (
					<>
						<span className="w-full items-center justify-center flex">
							<StartIcon />
						</span>
						<h2 className="font-bold text-center text-6xl text-black">
							Boas vindas
						</h2>
						<p className="text-center text-2xl ">
							O aplicativo Prudential vem aí, por isso <br />
							preparamos esse jogo para a rede de
							<br /> franquia conhecer algumas
							<br /> funcionalidades do app.
						</p>
						<p className="text-center text-2xl">
							Para vencer, seja ágil e complete seu
							<br /> objetivo antes do seu adversário.
						</p>
						<button
							onClick={startGame}
							className="w-full p-6 text-xl text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 disabled:bg-[#F0EFF2] disabled:text-[#5E5E63]"
							disabled={waiting}
							type="button"
						>
							{waiting ? (
								<div className="flex items-center justify-center gap-6">
									<Spinner height="w-7" />
									Aguardando adversário
								</div>
							) : (
								"Começar a jogar"
							)}
						</button>
					</>
				)}
			</div>
		</div>
	);
}
