"use client";

import { Button } from "@/app/components/Button";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import { Input } from "@/app/components/Input";
import { usePathname, useRouter } from "next/navigation";

export default function Enderecos() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="h-screen ">
			<HeaderNavigation title={"Adicionar endereço"} />

			<div className="flex flex-col gap-16 p-6 mt-32">
				<Input label={"CEP"} value={"02961-100"} disabled />
				<Input label={"Endereço"} value={"R. Dr. Otávio Lobo"} disabled />
				<Input label={"Número"} value={"288"} disabled />
				<Input
					label={"Complemento"}
					value={"Apartamento 1023, Bloco B"}
					disabled
				/>
				<Input label={"Bairro"} value={"02961-100"} />
				<Input label={"Cidade"} value={"02961-100"} />
				<Input label={"Estado"} value={"02961-100"} />
				<Button
					text={"Salvar"}
					onClick={() => router.push("/revisão?tab=enderecos")}
				/>
				<Button text={"Cancelar"} variant="secondary" />
			</div>
		</div>
	);
}
