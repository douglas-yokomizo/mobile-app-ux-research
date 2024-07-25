"use client";
import Image from "next/image";
import SuccessMessage from "@/app/components/SuccessMessage";
import duplicate from "@/app/assets/success/duplicate.svg";
import { arrow, gold } from "@/app/assets/homePage";
import InfoCard from "@/app/components/InfoCard";
import Badge from "@/app/components/Badge";
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

const SuccessPage = () => {
  const cardItems = [
    { title: "Valor do voucher", value: "R$ 00,00" },
    {
      title: "Custo",
      value: (
        <Badge
          src={gold}
          badgeValue={"567"}
          bgColor={"bg-red-error"}
          className="w-40 text-red-600 place-content-center rounded-2xl"
        />
      ),
    },
    {
      title: "Validade",
      value: "Validade para 3 meses a partir da data do resgate",
    },
    {
      title: "Saldo atual de moedas",
      value: (
        <Badge
          src={gold}
          badgeValue={"610"}
          bgColor={"bg-blue-strong"}
          className="w-40 text-white place-content-center rounded-2xl"
        />
      ),
    },
  ];

  return (
    <div>
      <SuccessMessage />
      <section className="p-10">
        <motion.h2
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInVariants}
          className="font-bold text-4xl mt-5"
        >
          Código do voucher
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInVariants}
          className="text-3xl mt-8 p-6 text-center border-4 rounded-2xl border-dotted border-black bg-gray-light"
        >
          57574HGHGKNSOET145MVOF
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInVariants}
          className="w-[90vw] border-b-2 border-divider pb-14 flex items-center justify-center font-semibold flex-col text-3xl gap-6 mt-12"
        >
          <button className="bg-blue-text flex items-center justify-center gap-4 w-full p-6 rounded-full text-white">
            <Image src={duplicate} alt="" className="w-6" />
            <p>Copiar código</p>
          </button>
          <button className="w-full flex justify-center items-center text-blue-text border-2 border-blue-text p-6 rounded-full">
            <span>Acessar vouchers resgatados</span>
            <Image src={arrow} alt="" className="w-8" />
          </button>
        </motion.div>
      </section>
      <section className="px-10">
        <motion.h2
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInVariants}
          className="text-4xl font-bold mb-10"
        >
          Resumo
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInVariants}
        >
          <InfoCard items={cardItems} />
        </motion.div>
      </section>
    </div>
  );
};

export default SuccessPage;
