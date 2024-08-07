"use client";
import HeaderNavigation from "../components/HeaderNavigation";
import extrato from "../data/extrato";
import arrowRight from "../assets/pagamento/arrow-right.svg";
import filter from "../assets/extrato/filter.svg";
import carrosel from "../assets/extrato/carrosel-meses.svg";
import Image from "next/image";
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

export default function extratoCompleto() {
	return (
		<main className="">
			<HeaderNavigation title="Extrato Completo" />

			<motion.div
				className="flex justify-center items-center gap-4 py-4 mt-4"
				initial="hidden"
				animate="visible"
				custom={0}
				variants={fadeInVariants}
			>
				<Image src={filter} height={50} width={50} className="object-contain" />
				<p className="text-blue-500 text-3xl">Filtrar (0)</p>
			</motion.div>

			<motion.div
				className="border-2 border-b-gray-400 my-4 w-full"
				initial="hidden"
				animate="visible"
				custom={1}
				variants={fadeInVariants}
			></motion.div>

			<motion.div
				initial="hidden"
				animate="visible"
				custom={2}
				variants={fadeInVariants}
			>
				<Image
					src={carrosel}
					height={100}
					width={1200}
					className="object-contain"
				/>
			</motion.div>

			<motion.div
				className="border-4 border-b-blue-white my-4 w-full"
				initial="hidden"
				animate="visible"
				custom={3}
				variants={fadeInVariants}
			></motion.div>

			<ul>
				{extrato.map((item, index) => (
					<motion.li
						key={index}
						className="py-2"
						initial="hidden"
						animate="visible"
						custom={4 + index}
						variants={fadeInVariants}
					>
						<div className="px-12">
							<div className="flex justify-between">
								<h6 className="text-captions-heading text-5xl font-semibold">
									{item.mes}
								</h6>
								<div className="border-green-dark border-2 bg-green-white rounded-lg w-min">
									<p className="text-3xl p-2 text-green-dark font-semibold">
										{item.status}
									</p>
								</div>
							</div>

							<div className="pt-6 flex justify-between">
								<div>
									<p className="text-3xl mb-5">Total</p>
									<p className="text-4xl font-bold">{item.total}</p>
								</div>

								<Link href={`/extratoDetalhes?mes=${item.mes}`}>
									<p className="text-blue-600 mb-2 flex items-center gap-2 text-3xl mt-6">
										Mais detalhes{" "}
										<Image
											src={arrowRight}
											height={50}
											width={50}
											className="object-contain"
										/>
									</p>
								</Link>
							</div>
						</div>
						<div className="border-4 border-b-blue-white my-12 w-full"></div>
					</motion.li>
				))}
			</ul>
		</main>
	);
}
