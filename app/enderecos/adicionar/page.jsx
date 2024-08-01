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
        <Input label={"Bairro"} value={"Jardim Monjolo"} disabled />
        <Input label={"Cidade"} value={"São Paulo"} disabled />
        <Input label={"Estado"} value={"SP"} disabled />
        <Button
          text={"Salvar"}
          onClick={() => router.push("/revisao?tab=enderecos")}
          className="text-white"
        />
        <Button text={"Cancelar"} variant="secondary" className="text-white" />
      </div>
    </div>
  );
}
