"use client";
import Image from "next/image";
import { arrow } from "../assets/homePage";
import HeaderNavigation from "../components/HeaderNavigation";
import { coverages } from "../data/coverages";
import { useRouter } from "next/navigation";
import { useGame } from "../hooks/useGame";
import { VEJA_SUAS_COBERTURAS_DE_MORTE } from "../data/challenges";

const CoveragesPage = () => {
	const router = useRouter();
	const { challenge } = useGame();

	return (
		<>
			<HeaderNavigation title={"Coberturas"} />
			<div className="bg-blue-white">
				{coverages.map((coverage, index) => (
					<div key={coverage.id}>
						<div className="bg-[#F5F9FF] p-12 mb-2 flex flex-col gap-4">
							<h2 className="text-4xl font-bold">{coverage.name}</h2>
							<p className="text-3xl text-blue-bold font-bold hover:cursor-pointer">
								{coverage.duration}
							</p>
							<p className="text-3xl text-gray-text">{coverage.brief}</p>
							<div className="flex justify-between items-center">
								<p className="text-4xl">{coverage.value}</p>
								<button
									onClick={() =>
										index === 0 &&
										challenge === VEJA_SUAS_COBERTURAS_DE_MORTE &&
										router.push("/insurance-coverages/coverage-details")
									}
									className="text-3xl text-blue-text flex gap-5 items-center font-semibold"
								>
									{coverage.details}
									<Image src={arrow} alt="" height={30} />
								</button>
							</div>
							{coverage.types && coverage.types.length > 0 && (
								<>
									<hr className="border border-divider my-8" />
									<div className="pl-12">
										{coverage.types.map((type) => (
											<div key={type.id} className="flex flex-col gap-4">
												<h4 className="text-3xl text-gray-text font-bold">
													{type.name}
												</h4>
												<p className="text-3xl text-gray-text">{type.brief}</p>
												<div className="flex justify-between">
													<p className="text-4xl"> {type.value}</p>
													<button
														onClick={() =>
															router.push(
																"/insurance-coverage/coverage-details",
															)
														}
														className="text-3xl text-blue-text flex gap-5 items-center font-semibold"
													>
														{type.details}
														<Image src={arrow} alt="" height={30} />
													</button>
												</div>
												<hr className="border border-divider my-8" />
											</div>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default CoveragesPage;
