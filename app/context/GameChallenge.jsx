"use client";

import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
	const router = useRouter();
	const [challenge, setChallenge] = useState(() => {
		const storedChallenge =
			typeof window !== "undefined" && localStorage.getItem("challenge");
		if (storedChallenge) {
			return storedChallenge;
		}
		return "";
	});
	const [player, setPlayer] = useState(() => {
		const storedPlayer =
			typeof window !== "undefined" && localStorage.getItem("player");
		if (storedPlayer) {
			return JSON.parse(storedPlayer);
		}
		return {};
	});
	const [session, setSession] = useState(() => {
		const storedSession =
			typeof window !== "undefined" && localStorage.getItem("session");
		if (storedSession) {
			return JSON.parse(storedSession);
		}
		return null;
	});

	function setGameChallenge(challenge) {
		setChallenge(challenge);
		localStorage.setItem("challenge", challenge);
	}

	useEffect(() => {
		const channel = supabase
			.channel("public:session")
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "sessions",
				},
				({ new: session }) => {
					if (session.winner !== null && session.winner !== player.id) {
						setTimeout(() => {
							router.replace("/loser");
							localStorage.clear();
							setChallenge("");
							setPlayer({});
							setSession(null);
						}, 5000); // 5 segundos
					}
				},
			)
			.subscribe();

		return () => {
			supabase.removeChannel(channel);
		};
	});

	function setGameSession(session) {
		setSession(session);
		localStorage.setItem("session", JSON.stringify(session));
	}

	function setGamePlayer(player) {
		setPlayer(player);
		localStorage.setItem("player", JSON.stringify(player));
		console.log(player);
	}

	async function finishGame() {
		await supabase
			.from("sessions")
			.update({ winner: player.id })
			.eq("id", session.id);
		setTimeout(() => {
			router.replace("/winner");
			localStorage.clear();
			setChallenge("");
			setPlayer({});
			setSession(null);
		}, 5000); // 5 segundos
	}

	return (
		<GameContext.Provider
			value={{
				setGameChallenge,
				challenge,
				setGameSession,
				session,
				setGamePlayer,
				player,
				finishGame,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
