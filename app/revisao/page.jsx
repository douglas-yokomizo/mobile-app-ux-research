"use client";

import { useSearchParams } from "next/navigation";
import { EnderecosComponent } from "./components/Enderecos";
import { BeneficiariosComponent } from "./components/Benefericiarios";
import HeaderNavigation from "../components/HeaderNavigation";
import { useEffect } from "react";
import { useGame } from "../hooks/useGame";

export default function Revisao() {
	const searchParams = useSearchParams();

	const search = searchParams.get("tab");

	return search === "enderecos" ? (
		<div className="h-screen">
			<HeaderNavigation title={"Revisão"} />
			<div className="px-16 py-16">
				<EnderecosComponent />
			</div>
		</div>
	) : (
		<BeneficiariosComponent />
	);
}
