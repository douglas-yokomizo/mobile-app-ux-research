"use client";

import Image from "next/image";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import infoIcon from "@/app/assets/info-icon.svg";
import locationIcon from "@/app/assets/location-icon.svg";
import addIcon from "@/app/assets/add-icon.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: (i) => ({
		opacity: 1,
		transition: {
			delay: i * 0.2, // Delay based on the index
		},
	}),
};

export default function Enderecos() {
	return (
		<div className="h-screen bg-[#EEF5FF]">
			<HeaderNavigation title={"Endereços"} />

			<Tabs titles={["Endereços", "Associar à apólice"]} />
			<div className="px-6 pt-6 pb-10 flex flex-col justify-center items-center space-y-12">
				<motion.div
					className="flex gap-6 bg-white p-10 rounded-2xl"
					initial="hidden"
					animate="visible"
					custom={0}
					variants={fadeInVariants}
				>
					<Image
						src={infoIcon}
						width={28}
						height={28}
						className="self-start mt-2"
					/>
					<p className="text-3xl font-normal">
						Utilizamos os endereços para enviar <br /> informações sobre as
						apólices.
					</p>
				</motion.div>
				<motion.div
					className="p-6 items-center justify-center rounded-xl flex w-full"
					initial="hidden"
					animate="visible"
					custom={1}
					variants={fadeInVariants}
				>
					<div className="space-y-12 w-full">
						<motion.div
							className="flex items-start gap-3"
							initial="hidden"
							animate="visible"
							custom={2}
							variants={fadeInVariants}
						>
							<Image src={locationIcon} height={58} width={58} />
							<p className="font-bold text-5xl">Endereço 1</p>
						</motion.div>
						<motion.div
							className="bg-white rounded-xl px-12 py-12"
							initial="hidden"
							animate="visible"
							custom={3}
							variants={fadeInVariants}
						>
							<div>
								<div className="flex py-12">
									<div className="flex flex-1 space-x-[20rem]">
										<p className="text-3xl">
											R. Dr. Otávio Lobo, 288 - Jardim Monjolo, São
											<br /> Paulo - SP, 02961-100
										</p>
									</div>
								</div>
							</div>
							<button
								className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer w-full"
								type="button"
							>
								<p>Editar endereço</p>
							</button>
						</motion.div>
						<motion.div
							className="flex items-center gap-3"
							initial="hidden"
							animate="visible"
							custom={4}
							variants={fadeInVariants}
						>
							<Image src={locationIcon} height={54} width={54} />
							<p className="font-bold text-5xl">Endereço 2</p>
						</motion.div>
						<motion.div
							className="bg-white rounded-xl px-12 py-12"
							initial="hidden"
							animate="visible"
							custom={5}
							variants={fadeInVariants}
						>
							<div>
								<div className="flex py-12">
									<div className="flex flex-1 space-x-[20rem]">
										<p className="text-3xl">
											Você ainda não tem endereço cadastrado.
										</p>
									</div>
								</div>
							</div>
							<Link
								className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer w-full"
								href={"/enderecos/adicionar"}
							>
								<Image src={addIcon} height={30} width={30} />
								<p>Adicionar endereço</p>
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
