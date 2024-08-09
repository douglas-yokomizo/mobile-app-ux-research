"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import PrudentialLogo from "../assets/Prudential-Logo.png";
import { useEffect } from "react";
import { XIcon } from "../components/XIcon";
import Link from "next/link";

export default function Loser() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 15000); // 15 segundos
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1F508E] to-[#031F45] text-white flex-col">
			<Image src={PrudentialLogo} className=" my-10 fixed top-0 w-[300px]" />
			<div className="w-full flex flex-col  max-w-2xl p-9 space-y-10 bg-[#FCFCFC] rounded-xl shadow-lg text-[#1F1F24]">
				<span className="w-full items-center justify-center flex">
					<XIcon />
				</span>
				<h2 className="font-bold text-center text-5xl text-black">
					Não foi dessa vez
				</h2>
				<p className="text-center text-3xl">
					Seu adversário foi mais rápido, mas já foi <br />
					possível conhecer um pouco do novo app
					<br />
					Prudential. Em breve para todos clientes.
				</p>
				<Link
					href={"/"}
					className="w-full text-center p-6 text-2xl text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 disabled:bg-[#F0EFF2] disabled:text-[#5E5E63]"
				>
					Voltar ao inicio
				</Link>
			</div>
		</div>
	);
}
