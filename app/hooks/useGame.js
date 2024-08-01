import { useContext } from "react";
import { GameContext } from "../context/GameChallenge";

export function useGame() {
	const context = useContext(GameContext);

	return context;
}
