"use client";

import HeaderNavigation from "@/app/components/HeaderNavigation";
import { Spinner } from "@/app/components/Spinner";
import arrow from "@/app/assets/pagamento/arrow-right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import trophy from "@/app/assets/trophy.svg";
import { useRouter } from "next/navigation";
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

export default function Token() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  }, [success]);

  return (
    <div
      className={
        !success
          ? "h-screen overflow-hidden"
          : "h-screen overflow-hidden bg-[#031F45] flex items-center justify-center px-16"
      }
    >
      {!success ? (
        <>
          <HeaderNavigation title={"Verificação de segurança"} />

          <div className="flex flex-col justify-center items-center p-24 h-full">
            <motion.div
              className="shadow-xl rounded-2xl w-full space-y-16 text-center flex items-center flex-col py-24 px-6 h-[70rem] justify-center"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInVariants}
            >
              <h1 className="text-6xl font-bold">Código de verificação</h1>
              <p className="text-3xl">
                O código foi enviado para o e-mail
                <br /> cadastrado.
              </p>

              <p className="text-3xl">
                O código enviado expira às{" "}
                <span className="font-bold">15:35</span>
              </p>

              <div className="flex space-x-5 *:border-[#8D8D97] *:h-[6.5rem] *:flex *:items-center *:p-6 *:border-[4px] *:rounded-2xl">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i}>
                    <span className="text-3xl">{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 w-full">
                <motion.button
                  className="w-full bg-[#226CF2] p-6 rounded-full text-white text-3xl"
                  type="button"
                  onClick={() => setSuccess(true)}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={fadeInVariants}
                >
                  Validar
                </motion.button>
                <motion.button
                  className="w-full bg-[#F0EFF2] p-6 rounded-full text-[#B4B4BB] text-3xl flex items-center justify-center gap-6"
                  type="button"
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={fadeInVariants}
                >
                  <Spinner />
                  Solicitar novamente
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="mt-24"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInVariants}
            >
              <p className="text-3xl text-[#226CF2] cursor-pointer flex items-center font-semibold">
                Problemas com o código de verificação{" "}
                <Image src={arrow} height={40} width={40} className="mt-1" />
              </p>
            </motion.div>
          </div>
        </>
      ) : (
        <motion.div
          className="bg-white w-full flex flex-col gap-16 items-center justify-center h-[30rem] rounded-xl"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInVariants}
        >
          <Image src={trophy} height={200} width={200} />
          <h1 className="text-4xl font-bold">Código validado com sucesso!</h1>
        </motion.div>
      )}
    </div>
  );
}
