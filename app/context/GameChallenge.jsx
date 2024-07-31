"use client";

import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
	const playerId = useSearchParams();
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
		localStorage.clear();
		setChallenge("");
		setPlayer({});
		setSession(null);
		return router.replace("/");
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
