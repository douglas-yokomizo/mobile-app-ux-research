"use client";

import { Button } from "@/app/components/Button";
import { useRouter } from "next/navigation";

export function EnderecosComponent() {
	const router = useRouter();
	return (
		<div className="flex flex-col space-y-16">
			<h1 className="font-bold text-6xl leading-tight">
				Antes de confirmar a edição,
				<br />
				revise as informações.
			</h1>
			<div className="bg-[#EEF5FF] flex flex-grow flex-col p-16 rounded-2xl gap-16">
				<p className="font-bold text-5xl">Dados incluidos</p>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">CEP</span>
						<br /> 02961-100
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Endereço</span>
						<br /> Avenida Aparecida do Rio Negro
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Número</span>
						<br /> 580
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Complemento</span>
						<br /> Apartamento 12, Bloco B
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Bairro</span>
						<br /> 02961-100
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Cidade</span>
						<br /> 02961-100
					</p>
				</div>
				<div className="text-3xl">
					<p className="leading-tight">
						<span className="opacity-80">Estado</span>
						<br /> 02961-100
					</p>
				</div>
			</div>

			<Button
				text={"Confirmar"}
				onClick={() => router.push("/token?tab=endereco")}
			/>
			<Button text={"Cancelar"} variant="secondary" />
		</div>
	);
}
