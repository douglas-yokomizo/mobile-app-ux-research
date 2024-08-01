"use client";

import { useEffect } from 'react';
import Image from "next/image";
import SuccessMessage from "@/app/components/SuccessMessage";
import duplicate from "@/app/assets/success/duplicate.svg";
import { arrow, gold } from "@/app/assets/homePage";
import InfoCard from "@/app/components/InfoCard";
import infoBalloon from "@/app/assets/success/infoBalloon.svg";
import Badge from "@/app/components/Badge";
import { useGame } from "../../../hooks/useGame";

const SuccessPage = () => {
  const { finishGame } = useGame();

  useEffect(() => {
    finishGame();
  }, [finishGame]);

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
      <SuccessMessage
        title={"Voucher resgatado com sucesso!"}
        image={infoBalloon}
      />
      <section className="p-10">
        <h2 className="font-bold text-4xl mt-5">Código do voucher</h2>
        <p className="text-3xl mt-8 p-6 text-center border-4 rounded-2xl border-dotted border-black bg-gray-light">
          57574HGHGKNSOET145MVOF
        </p>
        <div className="w-[90vw] border-b-2 border-divider pb-14 flex items-center justify-center font-semibold flex-col text-3xl gap-6 mt-12">
          <button
            className="bg-blue-text flex items-center justify-center gap-4 w-full p-6 rounded-full text-white"
            onClick={finishGame}
          >
            <Image src={duplicate} alt="" className="w-6" />
            <p>Copiar código</p>
          </button>
          <button className="w-full flex justify-center items-center text-blue-text border-2 border-blue-text p-6 rounded-full">
            <span>Acessar vouchers resgatados</span>
            <Image src={arrow} alt="" className="w-8" />
          </button>
        </div>
      </section>
      <section className="px-10">
        <h2 className="text-4xl font-bold mb-10">Resumo</h2>
        <div>
          <InfoCard items={cardItems} />
        </div>
      </section>
    </div>
  );
};

export default SuccessPage;
