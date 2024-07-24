"use client";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import infoIcon from "./info-icon.svg";
import contactsIcon from "./contacts-icon.svg";
import Image from "next/image";
import editIcon from "./edit-icon.svg";
import emailIcon from "./email-icon.svg";
import ellipsisIcon from "./ellipsis-icon.svg";
import addIcon from "./add-icon.svg";
export default function Contatos() {
	return (
		<div className="h-screen bg-[#EEF5FF]">
			<HeaderNavigation title={"Contatos"} />

			<div className="px-6 pt-6 pb-10 flex flex-col justify-center items-center">
				<div className="w-[90%] space-y-32">
					<div className="bg-[#FCFCFC] p-6 h-[10rem] items-center justify-center rounded-xl flex">
						<div className="flex gap-6">
							<Image
								src={infoIcon}
								width={28}
								height={28}
								className="self-start mt-2"
							/>
							<p className="text-3xl font-normal">
								Mantenha estes dados sempre atualizados.
							</p>
						</div>
					</div>

					<div className="space-y-12">
						<div className="flex items-start gap-3">
							<Image src={contactsIcon} height={58} width={58} />
							<p className="font-bold text-5xl">Telefones</p>
						</div>
						<div className="bg-white rounded-xl px-12 py-12">
							<div>
								<div className="flex py-12">
									<div className="flex flex-1 space-x-[20rem]">
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Tipo</p>
											<p className="text-2xl">Celular</p>
										</div>
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Número</p>
											<p className="text-2xl">(11) 97887-6575</p>
										</div>
									</div>
									<div className="w-[5rem] flex items-center justify-center">
										<Image
											src={editIcon}
											height={60}
											width={60}
											className="self-center"
										/>
									</div>
								</div>
							</div>
							<div className="w-full h-[2px] bg-[#5E5E63] " />
							<div>
								<div className=" flex py-12">
									<div className="flex flex-1 space-x-[20rem]">
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Tipo</p>
											<p className="text-2xl">Celular</p>
										</div>
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Número</p>
											<p className="text-2xl">(11) 97887-6575</p>
										</div>
									</div>
									<div className="w-[5rem] flex items-center justify-center">
										<Image
											src={ellipsisIcon}
											height={10}
											width={10}
											className="self-center"
										/>
									</div>
								</div>
							</div>
							<div className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer">
								<Image src={addIcon} height={30} width={30} />
								<p>Adicionar telefone</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<Image src={emailIcon} height={54} width={54} />
							<p className="font-bold text-5xl">E-mails</p>
						</div>
						<div className="bg-white rounded-xl px-12 py-12">
							<div>
								<div className="flex py-12">
									<div className="flex flex-1 space-x-[20rem]">
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Tipo</p>
											<p className="text-2xl">Celular</p>
										</div>
										<div className="space-y-4">
											<p className="text-[#5E5E63] text-2xl">Número</p>
											<p className="text-2xl">(11) 97887-6575</p>
										</div>
									</div>
									<div className="w-[5rem] flex items-center justify-center">
										<Image
											src={editIcon}
											height={60}
											width={60}
											className="self-center"
										/>
									</div>
								</div>
								<div className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer">
									<Image src={addIcon} height={30} width={30} />
									<p>Adicionar e-mail</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
