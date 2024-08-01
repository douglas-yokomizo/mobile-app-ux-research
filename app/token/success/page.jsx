"use client";

import Image from "next/image";
import trophy from "@/app/assets/trophy.svg";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGame } from "@/app/hooks/useGame";
export default function SuccessPage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { finishGame } = useGame();

	const search = searchParams.get("tab");

	useEffect(() => {
		switch (search) {
			case "endereco":
				setTimeout(() => {
					router.push("/resumo?tab=endereco");
				}, 5000);
				break;
			case "beneficiario":
				setTimeout(() => {
					router.push("/resumo?tab=beneficiarios");
				}, 5000);
				break;
			default:
				finishGame();
				break;
		}
	});

	return (
		<div className="h-screen overflow-hidden bg-[#031F45] flex items-center justify-center px-16">
			<div className="bg-white w-full flex flex-col gap-16 items-center justify-center h-[30rem] rounded-xl">
				<Image src={trophy} height={200} width={200} />
				<h1 className="text-4xl font-bold">Código validado com sucesso!</h1>
			</div>
		</div>
	);
}
