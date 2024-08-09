"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Winner() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 15000); // 15 segundos
	}, []);

	return <div>Parabéns, o desafio foi concluído</div>;
}
