"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loser() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 15000); //15 segundos
	}, []);

	return <div>Voce foi derrotado</div>;
}
