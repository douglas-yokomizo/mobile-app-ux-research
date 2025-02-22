"use client";

import HeaderNavigation from "@/app/components/HeaderNavigation";
import { Spinner } from "@/app/components/Spinner";
import arrow from "@/app/assets/pagamento/arrow-right.svg";
import Image from "next/image";
import { useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Token() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const search = searchParams.get("tab");

	return (
		<div className="h-screen overflow-hidden">
			<HeaderNavigation title={"Verificação de segurança"} />

			<div className="flex flex-col justify-center items-center p-24 h-full">
				<div className="shadow-xl rounded-2xl w-full space-y-16 text-center flex items-center flex-col px-6 h-[70rem] justify-center">
					<h1 className="text-6xl font-bold">Código de verificação</h1>
					<p className="text-3xl">
						O código foi enviado para o e-mail
						<br /> cadastrado.
					</p>

					<p className="text-3xl">
						O código enviado expira às <span className="font-bold">15:35</span>
					</p>

					<div className="flex space-x-5 *:border-[#8D8D97] *:h-[6.5rem] *:flex *:items-center *:p-6 *:border-[4px] *:rounded-2xl">
						<div>
							<span className="text-3xl">1</span>
						</div>
						<div>
							<span className="text-3xl">2</span>
						</div>
						<div>
							<span className="text-3xl">3</span>
						</div>
						<div>
							<span className="text-3xl">4</span>
						</div>
						<div>
							<span className="text-3xl">5</span>
						</div>
						<div>
							<span className="text-3xl">6</span>
						</div>
					</div>

					<div className="flex flex-col gap-6 w-full">
						<button
							className=" w-full bg-[#226CF2] p-6 rounded-full text-white text-3xl"
							type="button"
							onClick={() =>
								router.push(
									search
										? `${pathname}/success?tab=${search}`
										: `${pathname}/success`,
								)
							}
						>
							Validar
						</button>
						<button
							className=" w-full bg-[#F0EFF2] p-6 rounded-full text-[#B4B4BB] text-3xl flex items-center justify-center gap-6"
							type="button"
						>
							<Spinner />
							Solicitar novamente
						</button>
					</div>
				</div>
				<div className="mt-24">
					<p className="text-3xl text-[#226CF2] cursor-pointer flex items-center font-semibold">
						Problemas com o código de verificação{" "}
						<Image src={arrow} height={40} width={40} className="mt-1" />
					</p>
				</div>
			</div>
		</div>
	);
}
