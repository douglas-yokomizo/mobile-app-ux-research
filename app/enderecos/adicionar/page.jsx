"use client";

import { Button } from "@/app/components/Button";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import { Input } from "@/app/components/Input";
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'framer-motion';

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
  const router = useRouter();
  const pathname = usePathname();

  const inputs = [
    { label: "CEP", value: "02961-100", disabled: true },
    { label: "Endereço", value: "R. Dr. Otávio Lobo", disabled: true },
    { label: "Número", value: "288", disabled: true },
    { label: "Complemento", value: "Apartamento 1023, Bloco B", disabled: true },
    { label: "Bairro", value: "02961-100" },
    { label: "Cidade", value: "02961-100" },
    { label: "Estado", value: "02961-100" },
  ];

  return (
    <div className="h-screen ">
      <HeaderNavigation title={"Adicionar endereço"} />

      <div className="flex flex-col gap-16 p-6 mt-32">
        {inputs.map((input, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={fadeInVariants}
          >
            <Input label={input.label} value={input.value} disabled={input.disabled} />
          </motion.div>
        ))}
        <motion.div initial="hidden" animate="visible" custom={inputs.length} variants={fadeInVariants}>
          <Button
            text={"Salvar"}
            onClick={() => router.push("/revisão?tab=enderecos")}
          />
        </motion.div>
        <motion.div initial="hidden" animate="visible" custom={inputs.length + 1} variants={fadeInVariants}>
          <Button text={"Cancelar"} variant="secondary" />
        </motion.div>
      </div>
    </div>
  );
}
