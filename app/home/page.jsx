"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FooterNavigationHome from "../components/FooterNavigation";
import * as homeAssets from "../assets/homePage";
import Badge from "../components/Badge";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";
import dados from "../data/extratoDetails";
import { useGame } from "../hooks/useGame";
import {
	ACESSE_AS_INFORMACOES_DOS_SEUS_LIFE_PLANNERS,
	ACESSE_SEU_EXTRATO_DE_NOVEMBRO,
	ADICIONE_UM_NOVO_EMAIL,
	ADICIONE_UM_NOVO_ENDERECO,
	EDITE_OS_DADOS_DE_UM_BENEFICIARIO,
	PAGUE_UMA_APOLICE_EM_ATRASO,
	RESGATE_UM_VOUCHER_UBER_NO_FULLY,
	VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA,
	VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO,
	VEJA_SUAS_COBERTURAS_DE_MORTE,
} from "../data/challenges";
import { cn } from "../lib/utils";

const checkForLatePayments = () => {
	return dados.some((item) => item.status === "Em Atraso");
};

export default function Home() {
	const [isExpanded, setIsExpanded] = useState(false);
	const contentRef = useRef(null);
	const [challenges, setChallenges] = useState();
	const router = useRouter();
	const [sliderRef] = useKeenSlider({
		loop: true,
		slides: {
			perView: 3.7,
		},
	});
	const hasLatePayments = checkForLatePayments();

	const toggleDetails = () => {
		setIsExpanded(!isExpanded);
	};

	const maxHeight = isExpanded ? `${contentRef.current.scrollHeight}px` : "0px";

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

	useEffect(() => {
		setChallenges(challenge);
	}, [challenge]);

	return (
		<>
			<main className="flex flex-col w-full">
				<motion.section
					className="bg-blue-dark relative w-full text-white p-16 pb-60 flex flex-col gap-12"
					initial="hidden"
					animate="visible"
					custom={0}
					variants={fadeInVariants}
				>
					<header className="flex justify-between items-center">
						<div className="flex items-center gap-6">
							<Image
								src={homeAssets.avatar}
								alt="avatar image"
								height={120}
								width={120}
							/>
							<div className="font-bold">
								<h2 className="text-4xl mb-4">Olá, João Pedro</h2>
								<h3 className="text-2xl flex items-center gap-2">
									Meu perfil{" "}
									<Image
										className="w-6 h-6 filter invert brightness-0 saturate-100"
										src={homeAssets.arrow}
										alt="right arrow icon"
									/>
								</h3>
							</div>
						</div>
						<div className="relative">
							<Image
								src={homeAssets.alertIcon}
								alt="alert icon"
								height={60}
								width={60}
							/>
							<span className="absolute top-0 right-0 bg-yellow-400 w-7 h-7 text-black rounded-full text-lg text-center font-bold">
								<p>2</p>
							</span>
						</div>
					</header>
					{hasLatePayments && challenge === PAGUE_UMA_APOLICE_EM_ATRASO && (
						<div className=" relative bg-yellow-caution rounded-3xl text-black text-3xl p-10">
							<div className="flex">
								<Image
									src={homeAssets.caution}
									alt="caution icon"
									width={32}
									height={32}
									className="transform -translate-x-3 -translate-y-10"
								/>
								<p className="w-[70%]">
									Identificamos um pagamento em atraso, acesse para obter
									informações.
								</p>
							</div>
							<span className="absolute top-8 right-8 text-6xl font-light">
								X
							</span>
							<div className="flex justify-end">
								<button
									onClick={() => router.push("/pagamento/pagamento-detalhes")}
									className="uppercase pt-8 font-bold"
									type="button"
								>
									Acessar notificação
								</button>
							</div>
						</div>
					)}
					<nav>
						<ul className="flex gap-10 font-bold text-2xl">
							<motion.li
								className="max-w-fit w-full text-center"
								initial="hidden"
								animate="visible"
								custom={1}
								variants={fadeInVariants}
							>
								<div className="bg-blue-50 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
									<Image
										src={homeAssets.handHeart}
										alt="hand heart icon"
										height={56}
										width={56}
									/>
								</div>
								<p>
									Vida <br />
									Individual
								</p>
							</motion.li>
							<motion.li
								className="max-w-fit w-full text-center"
								initial="hidden"
								animate="visible"
								custom={2}
								variants={fadeInVariants}
							>
								<div className="bg-blue-900 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
									<Image
										src={homeAssets.globe}
										alt="globe icon"
										height={56}
										width={56}
									/>
								</div>
								<p>
									Vida <br /> Empresarial
								</p>
							</motion.li>
						</ul>
					</nav>
				</motion.section>
				<motion.section
					className="pl-12 transform -translate-y-40"
					initial="hidden"
					animate="visible"
					custom={3}
					variants={fadeInVariants}
				>
					<ul className="flex gap-4 overflow-hidden">
						<motion.li
							className="flex-shrink-0 w-[89vw] rounded-2xl bg-blue-50 text-black p-8"
							initial="hidden"
							animate="visible"
							custom={4}
							variants={fadeInVariants}
						>
							<div className="flex items-center justify-between font-bold">
								<h2 className="text-5xl">Apólice do Carlos</h2>
								<span className="text-3xl bg-green-100 text-green-950 px-4 py-3 border-2 border-green-950 rounded-md">
									Pago
								</span>
							</div>
							<div className="flex justify-between text-3xl my-10">
								<div>
									<h4 className="font-semibold mb-4">Apólice</h4>
									<p>001543914</p>
								</div>
								<div>
									<h4 className="font-semibold mb-4"> Data de vigência</h4>
									<p>10/10/2023 à 10/10/2028</p>
								</div>
							</div>
							<Link
								href={
									challenge === VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA
										? "/policies"
										: "#"
								}
								className={cn(
									"font-bold text-blue-text flex items-center text-3xl gap-2",
									challenges !==
										VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA &&
										"active:text-red-600 transition-all ease-in-out",
								)}
								scroll={
									challenge === VEJA_AS_CONDICOES_GERAIS_DA_SUA_APOLICE_FAMILIA
								}
							>
								Detalhes da apólice{" "}
								<Image src={homeAssets.arrow} alt="arrow icon" height={30} />
							</Link>
						</motion.li>
						<motion.li
							className="flex-shrink-0 w-[95vw] rounded-2xl bg-blue-50 text-black p-8"
							initial="hidden"
							animate="visible"
							custom={5}
							variants={fadeInVariants}
						>
							<div className="flex items-center justify-between font-bold">
								<h2 className="text-5xl">Apólice da Maria</h2>
								<span className="text-3xl bg-red-100 text-red-950 px-4 py-3 border-2 border-red-950 rounded-md">
									Pendente
								</span>
							</div>
							<div className="flex justify-between text-3xl my-10">
								<div>
									<h4 className="font-semibold mb-4">Apólice</h4>
									<p>002543914</p>
								</div>
								<div>
									<h4 className="font-semibold mb-4"> Data de vigência</h4>
									<p>12/12/2023 à 12/12/2028</p>
								</div>
							</div>
							<Link href={"/"} className="font-bold text-blue-500">
								Detalhes da apólice
							</Link>
						</motion.li>
					</ul>
				</motion.section>
				<motion.section
					ref={sliderRef}
					className="pl-12 -mt-16 flex-col"
					initial="hidden"
					animate="visible"
					custom={6}
					variants={fadeInVariants}
				>
					<h2 className="mt-0 font-bold text-5xl mb-6">Acesso Rápido</h2>
					<ul className="font-semibold keen-slider text-xl">
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={7}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<div className="bg-[#EEF5FF]  mb-2 rounded-2xl h-32 w-[16rem] flex justify-center">
									<Image
										src={homeAssets.guardian}
										alt="shield and sword icon"
										height={48}
										width={48}
									/>
								</div>
								<p>Guardião</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={8}
							variants={fadeInVariants}
						>
							<div
								// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
								className={` text-center flex flex-col items-center justify-center max-w-fit `}
							>
								<Link
									href={
										challenge === PAGUE_UMA_APOLICE_EM_ATRASO ||
										challenge === ACESSE_SEU_EXTRATO_DE_NOVEMBRO ||
										challenge ===
											VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO
											? "/pagamento"
											: "#"
									}
									id="pagamento"
									className={`bg-[#EEF5FF] mb-2   rounded-2xl h-32 w-[16rem] flex justify-center  ${
										challenges === PAGUE_UMA_APOLICE_EM_ATRASO ||
										challenges === ACESSE_SEU_EXTRATO_DE_NOVEMBRO ||
										challenges ===
											VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO
											? " border-transparent active:border-transparent"
											: "active:border-red-900 transition-all ease-in-out border-4 border-transparent"
									}`}
									scroll={
										challenge === PAGUE_UMA_APOLICE_EM_ATRASO ||
										challenge === ACESSE_SEU_EXTRATO_DE_NOVEMBRO ||
										challenge ===
											VEJA_QUAIS_APOLICES_VOCE_PAGA_NO_CARTAO_DE_CREDITO
									}
								>
									<Image
										src={homeAssets.coin}
										alt="Coin icon"
										height={48}
										width={48}
									/>
								</Link>
								<p>Pagamento</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={9}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<div className="bg-[#EEF5FF] mb-2  rounded-2xl h-32 w-[16rem] flex justify-center">
									<Image
										src={homeAssets.phoneStatus}
										alt="Phone status icon"
										height={48}
										width={48}
									/>
								</div>
								<p>Atendimento</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={10}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<Link
									href={
										challenge === EDITE_OS_DADOS_DE_UM_BENEFICIARIO
											? "/beneficiaries"
											: "#"
									}
									className={`bg-[#EEF5FF] mb-2 rounded-2xl h-32 w-[16rem] flex justify-center ${challenges === EDITE_OS_DADOS_DE_UM_BENEFICIARIO ? "border-transparent active:border-transparent" : "active:border-red-900  ease-in-out transition-all border-4 border-transparent"}`}
									scroll={challenge === EDITE_OS_DADOS_DE_UM_BENEFICIARIO}
								>
									<Image
										src={homeAssets.peopleGroup}
										alt="shield checked icon"
										height={48}
										width={48}
									/>
								</Link>
								<p>Beneficiários</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={10}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<Link
									href={
										challenge === VEJA_SUAS_COBERTURAS_DE_MORTE
											? "/insurance-coverages"
											: "#"
									}
									className={`bg-[#EEF5FF] mb-2 rounded-2xl h-32 w-[16rem] flex justify-center ${challenges === VEJA_SUAS_COBERTURAS_DE_MORTE ? "border-transparent active:border-transparent" : "active:border-red-900  ease-in-out transition-all border-4 border-transparent"}`}
									scroll={challenge === VEJA_SUAS_COBERTURAS_DE_MORTE}
								>
									<Image
										src={homeAssets.heartShield}
										alt="shield checked icon"
										height={48}
										width={48}
									/>
								</Link>
								<p>Coberturas</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={10}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<div className="bg-[#EEF5FF] mb-2 rounded-2xl h-32 w-[16rem] flex justify-center">
									<Image
										src={homeAssets.shield}
										alt="shield checked icon"
										height={48}
										width={48}
									/>
								</div>
								<p>Acionar Seguro</p>
							</div>
						</motion.li>
						<motion.li
							className="keen-slider__slide"
							initial="hidden"
							animate="visible"
							custom={11}
							variants={fadeInVariants}
						>
							<div className="text-center flex flex-col items-center justify-center max-w-fit">
								<Link
									href={
										challenge === ADICIONE_UM_NOVO_EMAIL ||
										challenge === ADICIONE_UM_NOVO_ENDERECO
											? "/dados-cadastrais"
											: "#"
									}
									className={`bg-[#EEF5FF] mb-2 rounded-2xl h-32 w-[16rem] flex justify-center ${challenges === ADICIONE_UM_NOVO_EMAIL || challenges === ADICIONE_UM_NOVO_ENDERECO ? "border-transparent active:border-transparent" : "active:border-red-900  ease-in-out transition-all border-4 border-transparent"}`}
									scroll={
										challenge === ADICIONE_UM_NOVO_EMAIL ||
										challenge === ADICIONE_UM_NOVO_ENDERECO
									}
								>
									<Image
										src={homeAssets.dataPerson}
										alt="resume icon"
										height={48}
										width={48}
									/>
								</Link>
								<p>
									Dados
									<br />
									cadastrais
								</p>
							</div>
						</motion.li>
					</ul>
				</motion.section>
				<motion.section
					className="pl-14 mt-20 mb-14"
					initial="hidden"
					animate="visible"
					custom={12}
					variants={fadeInVariants}
				>
					<div className="p-10 w-11/12 bg-blue-50 text-black rounded-lg shadow-lg">
						<div className="flex items-center justify-between">
							<Image
								src={homeAssets.fullyLogo}
								alt="Logo Fully"
								className="w-20"
							/>
							<button
								onClick={toggleDetails}
								className="flex p-4"
								type="button"
							>
								<Image
									src={homeAssets.arrow}
									className={`transition-transform ${
										isExpanded ? "rotate-[270deg]" : "rotate-90"
									} w-10 h-10 filter saturate-100 brightness-50`}
									alt="arrow icon"
								/>
							</button>
						</div>
						<p className="mt-4 mb-8 text-3xl text-neutral-400 flex items-center justify-between">
							Sincronizado em: 09:38:47 8 Abr 2024{" "}
							<Image src={homeAssets.info} alt="info icon" height={30} />
						</p>
						<div className="flex gap-4 justify-between items-center">
							<Badge
								src={homeAssets.starterShield}
								alt={""}
								bgColor={"bg-white"}
								badgeTitle={"Nível"}
								badgeValue={"Iniciante"}
								className="w-1/2 rounded-full"
							/>
							<Badge
								src={homeAssets.gold}
								badgeTitle={"Moedas"}
								badgeValue={"1000"}
								bgColor={"bg-white"}
								alt={""}
								className="w-1/2 rounded-full"
							/>
						</div>
						<div className="flex items-center my-12">
							<strong className="font-bold text-4xl mr-4">2 de 3</strong>
							<Image
								src={homeAssets.progressBar}
								alt="progress bar image"
								className="w-3/5 mr-4"
							/>
							<div className="flex 1/3 items-center gap-2 bg-white p-3 py-4 rounded-full">
								<Image src={homeAssets.gold} alt="gold icon" className="w-7" />
								<p className="text-3xl w-24 text-center">
									<strong>500</strong>
								</p>
							</div>
						</div>
						<Link
							href={
								challenge === RESGATE_UM_VOUCHER_UBER_NO_FULLY
									? "/rewards"
									: "#"
							}
							className={`text-blue-500 font-semibold flex items-center w-full justify-center border-4 border-blue-500 text-3xl p-4 rounded-full gap-4 ${challenges === RESGATE_UM_VOUCHER_UBER_NO_FULLY ? "" : "active:border-red-900  ease-in-out transition-all active:border-4 border-blue-500"}`}
							scroll={challenge === RESGATE_UM_VOUCHER_UBER_NO_FULLY}
						>
							<Image src={homeAssets.medal} alt="medal icon" className="w-8" />
							<span>Resgatar Recompensas</span>
						</Link>
						<div
							ref={contentRef}
							style={{ maxHeight: maxHeight }}
							className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
								isExpanded ? "max-h-96" : "max-h-0"
							}`}
						>
							<div>
								<p className="mt-10 mb-4 text-3xl text-neutral-400 ">
									Como estou hoje
								</p>
								<ul className="flex gap-6 text-center text-3xl">
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center py-10 w-1/3">
										<Image
											src={homeAssets.steps}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">Passos</span>
										<span className="font-bold text-gray-500">2.505</span>
										<span className="font-normal">7500</span>
									</li>
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
										<Image
											src={homeAssets.time}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">Tempo</span>
										<span className="font-bold text-gray-500">08:13</span>
										<span className="font-normal">30:00</span>
									</li>
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
										<Image
											src={homeAssets.heart}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">BPM</span>
										<span className="font-bold text-gray-500">102</span>
										<span>&nbsp;</span>
									</li>
								</ul>
								<p className="mt-10 mb-4 text-3xl text-neutral-400 ">
									Meu indicador de Bem-Estar
								</p>
								<ul className="flex gap-6 text-center text-3xl">
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center py-10 w-1/3">
										<Image
											src={homeAssets.goodOrange}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">Físico</span>
										<span className="font-bold text-gray-500">Bom</span>
									</li>
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
										<Image
											src={homeAssets.regular}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">Mental</span>
										<span className="font-bold text-gray-500">Razoável</span>
									</li>
									<li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
										<Image
											src={homeAssets.goodGreen}
											alt="steps icon"
											className="w-16 mb-2"
										/>
										<span className="font-normal">Financeiro</span>
										<span className="font-bold text-gray-500">Bom</span>
									</li>
								</ul>
								<p className="text-3xl flex items-center gap-2 font-semibold pt-10">
									Ir para o Fully{" "}
									<Image
										src={homeAssets.arrow}
										alt="arrow icon"
										height={30}
										className="rotate-270 filter saturate-100 brightness-0"
									/>
								</p>
							</div>
						</div>
					</div>
				</motion.section>
				<motion.section
					className="pl-6 mb-14"
					initial="hidden"
					animate="visible"
					custom={13}
					variants={fadeInVariants}
				>
					<ul className="flex overflow-hidden">
						<Image
							src={homeAssets.bannerHome}
							alt="banner image"
							className="flex-shrink-0 w-[90vw] rounded-2xl bg-cover text-black p-8"
						/>
						<Image
							src={homeAssets.bannerHome}
							alt="banner image"
							className="flex-shrink-0 w-[90vw] rounded-2xl bg-cover text-black p-8"
						/>
					</ul>
				</motion.section>
				<motion.section
					className="pl-14 pb-64 bg-[#F0EFF2]"
					initial="hidden"
					animate="visible"
					custom={14}
					variants={fadeInVariants}
				>
					<h3 className="text-5xl font-bold mt-20 mb-5">
						Fale com seu corretor
					</h3>
					<div className="flex gap-4 overflow-hidden">
						<motion.div
							className="flex-shrink-0 w-[89vw] rounded-2xl bg-white text-black p-8"
							initial="hidden"
							animate="visible"
							custom={15}
							variants={fadeInVariants}
						>
							<div className="flex flex-col gap-6">
								<h4 className="text-4xl font-bold mb-4">Túlio dos Santos</h4>
								<p className="text-3xl">Corretora franqueada</p>
								<p className="text-3xl">AC corretores de saúde LTDA</p>
							</div>
							<div className="flex items-center justify-between mt-10">
								<div className="flex items-center w-5/12 justify-start gap-8">
									<Image
										src={homeAssets.phone}
										alt="phone icon"
										className="bg-blue-50 w-32 h-32 rounded-full p-8"
									/>
									<Image
										src={homeAssets.whatsapp}
										alt="whatsapp icon"
										className="bg-blue-50 w-32 h-32 rounded-full p-8"
									/>
								</div>
								<div
									className={`text-3xl font-semibold text-blue-600 flex items-center gap-4 ${challenges === ACESSE_AS_INFORMACOES_DOS_SEUS_LIFE_PLANNERS ? "text-blue-600 " : "active:text-red-600 transition-all ease-in-out"}`}
								>
									<Link
										href={
											challenge === ACESSE_AS_INFORMACOES_DOS_SEUS_LIFE_PLANNERS
												? "/brokers"
												: "#"
										}
										scroll={
											challenge === ACESSE_AS_INFORMACOES_DOS_SEUS_LIFE_PLANNERS
										}
									>
										Mais detalhes
									</Link>
									<Image
										src={homeAssets.arrow}
										alt="arrow icon"
										className="w-7 h-7"
									/>
								</div>
							</div>
						</motion.div>
						<motion.div
							className="flex-shrink-0 w-[89vw] rounded-2xl bg-white text-black p-8"
							initial="hidden"
							animate="visible"
							custom={16}
							variants={fadeInVariants}
						>
							<h4 className="text-4xl">Túlio dos Santos</h4>
							<p className="text-3xl">Corretora franqueada</p>
							<p className="text-3xl">AC corretores de saúde LTDA</p>
						</motion.div>
					</div>
					<h3 className="text-5xl font-bold mt-10 mb-5">
						Fale com a Prudential
					</h3>
					<motion.div
						className="w-[89vw] text-3xl rounded-2xl bg-white text-black p-8"
						initial="hidden"
						animate="visible"
						custom={17}
						variants={fadeInVariants}
					>
						<p>
							Estamos aqui para oferecer o melhor atendimento e assistência
							possível.
						</p>
						<button
							className="text-blue-600 border-2 font-semibold w-full p-4 mt-10 rounded-full border-blue-600"
							type="button"
						>
							Acessar atendimento
						</button>
					</motion.div>
				</motion.section>
				<motion.div
					initial="hidden"
					animate="visible"
					custom={15}
					variants={fadeInVariants}
				>
					<FooterNavigationHome />
				</motion.div>
			</main>
		</>
	);
}
