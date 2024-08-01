"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import trophyIcon from "@/app/assets/trophy.svg";
import cautionIcon from "./caution-icon.svg";
import copyIcon from "./copy-icon.svg";
import { Button } from "../components/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGame } from "../hooks/useGame";

export default function Resumo() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const { finishGame } = useGame();

	useEffect(() => {
		setTimeout(() => {
			finishGame();
		}, 3000);
	}, []);

	const search = searchParams.get("tab");

	return search === "endereco" ? (
		<div className="flex flex-col h-screen items-center overflow-auto py-24 px-16 gap-10">
			<header className="flex items-center gap-6">
				<Image src={trophyIcon} height={100} width={100} />
				<p className="text-4xl font-bold leading-snug">
					Pedido de edição
					<br />
					realizado com sucesso!
				</p>
			</header>
			<div className="p-[1px] w-full bg-[#CECED4]" />

			<div className="bg-[#F7EAD3] p-16 rounded-2xl space-y-6 w-full flex flex-col items-center">
				<div className="flex items-center gap-6 w-[500px]">
					<Image src={cautionIcon} height={40} width={40} />
					<p className="text-3xl font-bold">Alteração feita após as 21h.</p>
				</div>
				<div className="flex gap-6 w-[500px]">
					<div className="h-10 w-10" />
					<p className="text-2xl">
						As alterações realizadas entre 21h
						<br /> e 06h serão refletidas após
						<br /> este horário.
					</p>
				</div>
			</div>
			<div className="bg-[#F6F6F7] p-16 rounded-2xl space-y-4 w-full flex flex-col ">
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Data da soliticação</p>
					<p className="text-2xl">24/11/2023 10:00</p>
				</div>
				<div className="flex gap-6 flex-col">
					<p className="text-3xl text-[#5E5E63]">
						Número de protocolo da solicitação
					</p>
					<p className="text-2xl flex items-center">
						13377897
						<Image src={copyIcon} height={45} width={45} />
					</p>
				</div>
			</div>

			<div className="bg-[#EEF5FF] p-16 rounded-2xl space-y-4 w-full flex flex-col ">
				<h1 className="text-4xl font-bold mb-6">Dados de inclusão</h1>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">CEP</p>
					<p className="text-2xl">05144-085</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Endereço</p>
					<p className="text-2xl">Avenida Aparecida do Rio Negro</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Número</p>
					<p className="text-2xl">580</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Complemento</p>
					<p className="text-2xl">Apartamento 12, Bloco B</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Bairro</p>
					<p className="text-2xl">Jardim Iris</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Cidade</p>
					<p className="text-2xl">São Paulo</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="text-3xl text-[#5E5E63]">Estado</p>
					<p className="text-2xl">SP</p>
				</div>
			</div>
			<Button
				text={"Fechar"}
				variant="secondary"
				classNames="border border-[#226CF2]"
				onClick={() => router.push("/")}
			/>
		</div>
	) : (
		search === "beneficiarios" && (
			<div className="flex flex-col h-screen items-center overflow-auto py-24 px-16 gap-16">
				<header className="flex items-center gap-6">
					<Image src={trophyIcon} height={100} width={100} />
					<p className="text-4xl font-bold leading-snug">
						Pedido de edição
						<br />
						realizado com sucesso!
					</p>
				</header>
				<div className="p-[1px] w-full bg-[#CECED4]" />
				<div className="bg-[#F6F6F7] p-16 rounded-2xl space-y-6 w-full flex flex-col ">
					<div className="flex flex-col gap-6">
						<p className="text-3xl text-[#5E5E63]">Data da soliticação</p>
						<p className="text-2xl">24/11/2023 10:00</p>
					</div>
					<div className="flex gap-6 flex-col">
						<p className="text-3xl text-[#5E5E63]">
							Número de protocolo da solicitação
						</p>
						<p className="text-2xl flex items-center">
							13377897
							<Image src={copyIcon} height={45} width={45} />
						</p>
					</div>
				</div>
				<div className="bg-[#EEF5FF] p-16 rounded-2xl space-y-7 w-full flex flex-col ">
					<h1 className="text-4xl font-bold mb-6">Dados de inclusão</h1>
					<div className="flex flex-col gap-6">
						<p className="text-3xl text-[#5E5E63]">Apólices associadas</p>
						<p className="text-2xl">05144-085</p>
					</div>
					<div className="flex flex-col gap-6">
						<p className="text-3xl text-[#5E5E63]">Beneficiários primários</p>
						<p className="text-2xl">Avenida Aparecida do Rio Negro</p>
					</div>
					<div className="flex flex-col gap-6">
						<p className="text-3xl text-[#5E5E63]">
							Percentual de distribuição
						</p>
						<p className="text-2xl">Tatiana Lima - 50%</p>
						<p className="text-2xl">Pedro Linhares - 50%</p>
					</div>
				</div>
				<div className="p-[1px] w-full bg-[#CECED4]" />
				<div className="w-full flex flex-col items-center justify-center gap-16">
					<p className="text-3xl leading-normal text-justify">
						Declaro que tenho interesse em deixar o(a) indicado(a) acima como
						beneficiário na minha Apólice de Seguro de Vida, pois ele(a) depende
						de mim financeiramente e minha ausência acarretará a ele(a) perda
						financeira, ou ainda, possuo uma relação de apreço com o(a) mesmo(a)
					</p>
					<Button
						text={"Fechar"}
						variant="secondary"
						classNames="border border-[#226CF2]"
						onClick={() => router.push("/")}
					/>
				</div>
			</div>
		)
	);
}
