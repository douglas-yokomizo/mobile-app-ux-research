import HeaderNavigation from "../components/HeaderNavigation";
import extrato from "../data/extrato";
import arrowRight from "../assets/pagamento/arrow-right.svg";
import filter from "../assets/extrato/filter.svg";
import carrosel from "../assets/extrato/carrosel-meses.svg";
import Image from "next/image";
import Link from "next/link"; // Import Link from 'next/link'

export default function extratoCompleto() {
	return (
		<main className="">
			<HeaderNavigation title="Extrato Completo" />
			<div className="flex justify-center items-center gap-4 py-4 mt-4">
				<Image src={filter} height={50} width={50} className="object-contain" />
				<p className="text-blue-500 text-3xl">Filtrar (0)</p>
			</div>
			<div className="border-2 border-b-gray-400 my-4 w-full"></div>
			<Image
				src={carrosel}
				height={100}
				width={1200}
				className="object-contain"
			/>
			<div className="border-4 border-b-blue-white my-4 w-full"></div>
			<ul>
				{extrato.map((item, index) => (
					<li key={index} className="py-2">
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
					</li>
				))}
			</ul>
		</main>
	);
}
