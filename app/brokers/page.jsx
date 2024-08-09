"use client";
import HeaderNavigation from "../components/HeaderNavigation";
import BrokersList from "../components/BrokerCard";
import { useGame } from "../hooks/useGame";
import { useEffect } from "react";

const BrokersPage = () => {
	const { finishGame } = useGame();
	useEffect(() => {
		finishGame();
	});
	return (
		<div>
			<HeaderNavigation title="Corretorres franqueados" />
			<section>
				<BrokersList />
			</section>
		</div>
	);
};

export default BrokersPage;
