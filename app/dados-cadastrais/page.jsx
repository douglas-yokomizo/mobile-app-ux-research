import Link from "next/link";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import Image from "next/image";
import arrow from "../assets/menu/arrow.svg";

export default function DadosCadastrais() {
	return (
		<div>
			<HeaderNavigation title={"Dados Cadastrais"} />
			<div className="p-6 space-y-10">
				<Tabs
					titles={["Vida individual", "Vida empresarial"]}
					spaceBetween={false}
				/>
				<div>
					<ul className="*:py-6 *:text-[2.6rem]">
						<li>
							<div className="flex items-center font-bold py-6 ">
								<p>Dados pessoais</p>
								<Image
									src={arrow}
									width={40}
									height={40}
									className="mr-12 fixed right-0"
								/>
							</div>
							<div className="border-b-2 border-gray-300 my-5" />
						</li>
						<li>
							<Link href={"/dados-cadastrais/contatos"}>
								<div className="flex items-center font-bold py-6 ">
									<p>Contatos</p>
									<Image
										src={arrow}
										width={40}
										height={40}
										className="mr-12 fixed right-0"
									/>
								</div>
								<div className="border-b-2 border-gray-300 my-5" />
							</Link>
						</li>
						<li>
							<Link href={"/enderecos"}>
								<div className="flex items-center text-[2.6rem] font-bold py-6 ">
									<p>Endereços</p>
									<Image
										src={arrow}
										width={40}
										height={40}
										className="mr-12 fixed right-0"
									/>
								</div>
								<div className="border-b-2 border-gray-300 my-5" />
							</Link>
						</li>
						<li>
							<div className="flex items-center font-bold py-6  ">
								<p>Dados de pagamento</p>
								<Image
									src={arrow}
									width={40}
									height={40}
									className="mr-12 fixed right-0"
								/>
							</div>
							<div className="border-b-2 border-gray-300 my-5" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
