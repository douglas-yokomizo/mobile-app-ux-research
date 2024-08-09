"use client";
import Image from "next/image";
import avatar from "../assets/edit-avatar.png";
import arrow from "../assets/menu/arrow.svg";
import sair from "../assets/menu/sair.svg";

import acionarSeguro from "../assets/menu/acionar-seguro.svg";
import acompanharSolucoes from "../assets/menu/acompanhar-solucoes.svg";
import apolices from "../assets/menu/apolices.svg";
import atendimento from "../assets/menu/atendimento.svg";
import beneficiarios from "../assets/menu/beneficiarios.svg";
import compartilhar from "../assets/menu/compartilhar-gerenciar.svg";
import dados from "../assets/menu/dados-cadastrais.svg";
import pagamento from "../assets/menu/pagamento.svg";

import FooterNavigation from "../components/FooterNavigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGame } from "../hooks/useGame";
import {
	ACESSE_SEU_EXTRATO_DE_NOVEMBRO,
	ADICIONE_UM_NOVO_EMAIL,
	ADICIONE_UM_NOVO_ENDERECO,
	EDITE_OS_DADOS_DE_UM_BENEFICIARIO,
	PAGUE_UMA_APOLICE_EM_ATRASO,
	VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA,
	VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO,
} from "../data/challenges";

export default function Menu() {
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: (i) => ({
			opacity: 1,
			transition: {
				delay: i * 0.2, // Delay based on the index
			},
		}),
	};

	const { challenge } = useGame();

	return (
		<main className="">
			<motion.header
				className="top-0 bg-blue-dark w-full p-5"
				initial="hidden"
				animate="visible"
				custom={0}
				variants={fadeInVariants}
			>
				<div className="flex justify-between gap-[30rem]">
					<h1 className="p-12 text-5xl text-white">Menu</h1>
					<h1 className="p-12 text-5xl text-white">x</h1>
				</div>
				<div className="px-5 pb-4 flex items-center gap-4">
					<div>
						<p className="text-white text-4xl">João da Costa Rodrigues</p>
						{/* TODO: puxar o nome no supabase do usuario */}
						<p className="text-white text-3xl">182.475.858-99</p>
						<p className="text-white text-3xl">28 Anos (28/01/1993)</p>
					</div>
				</div>
			</motion.header>
			<nav>
				<ul className="flex flex-col p-12">
					{[
						{ href: "/", icon: acionarSeguro, text: "Acionar Seguro" },
						{
							href: "/",
							icon: acompanharSolucoes,
							text: "Acompanhar solicitação",
						},
						{
							href:
								challenge === VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA
									? "/policies"
									: "#",
							icon: apolices,
							text: "Apólices",
						},
						{ href: "/", icon: atendimento, text: "Atendimento" },
						{
							href:
								challenge === EDITE_OS_DADOS_DE_UM_BENEFICIARIO
									? "/beneficiaries"
									: "#",
							icon: beneficiarios,
							text: "Beneficiários",
						},
						{
							href: "/",
							icon: compartilhar,
							text: "Compartilhar e gerenciar acessos",
						},
						{
							href:
								challenge === ADICIONE_UM_NOVO_EMAIL ||
								challenge === ADICIONE_UM_NOVO_ENDERECO
									? "/dados-cadastrais"
									: "#",
							icon: dados,
							text: "Dados cadastrais",
						},
						{
							href:
								challenge === PAGUE_UMA_APOLICE_EM_ATRASO ||
								challenge === ACESSE_SEU_EXTRATO_DE_NOVEMBRO ||
								challenge === VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO
									? "/pagamento"
									: "#",
							icon: pagamento,
							text: "Pagamento",
						},
					].map((item, index) => (
						<motion.li
							key={item.text}
							initial="hidden"
							animate="visible"
							custom={index + 1}
							variants={fadeInVariants}
						>
							<Link href={item.href}>
								<div className="flex items-center text-3xl p-1">
									<Image
										src={item.icon}
										width={80}
										height={80}
										alt="Menu Icon"
										className="mr-12"
									/>
									<p>{item.text}</p>
									<Image
										src={arrow}
										width={40}
										height={40}
										className="mr-12 fixed right-0"
									/>
								</div>
							</Link>
							{index < 7 && (
								<div className="border-b-2 border-gray-300 my-5"></div>
							)}
						</motion.li>
					))}
				</ul>
			</nav>
			<div className="flex justify-center">
				<motion.button
					initial="hidden"
					animate="visible"
					custom={9}
					variants={fadeInVariants}
					className="flex px-64 py-4 text-4xl gap-2 items-center text-blue-500 border-blue-500 border-2 rounded-full"
				>
					<Image src={sair} width={40} height={40} /> Sair do aplicativo
				</motion.button>
			</div>
			<div className="flex justify-center">
				<motion.p
					initial="hidden"
					animate="visible"
					custom={10}
					variants={fadeInVariants}
					className="flex my-8 text-4xl gap-2 items-center text-blue-500"
				>
					Políticas de privacidade e Termos de uso
				</motion.p>
			</div>
			<FooterNavigation />
		</main>
	);
}
