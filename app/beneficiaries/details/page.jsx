"use client";
import { useRef, useState, useEffect } from "react";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import Tabs from "@/app/components/Tabs";
import TitleWithIcon from "@/app/components/TitleWithIcon";
import resumeCheck from "@/app/assets/resumeCheck.svg";
import Image from "next/image";
import plusIcon from "@/app/assets/pagamento/plus.svg";
import percentage from "@/app/assets/percentage.svg";
import infoIcon from "@/app/assets/info-icon.svg";
import shareIcon from "@/app/assets/share.svg";
import { arrow } from "@/app/assets/homePage";
import BeneficiaryCard from "@/app/components/BeneficiaryCard";

const BeneficiariesDetailsPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (cardRefs.current.every((ref) => ref && !ref.contains(event.target))) {
      setActiveCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderNavigation title={"Detalhes"} />
      <Tabs titles={["Primários", "Secundários", "Terciários"]} />
      <div className="px-16 mt-14">
        <section className="text-3xl">
          <TitleWithIcon
            title={"Família"}
            iconSrc={resumeCheck}
            className="flex items-center text-5xl font-bold"
            iconHeight={48}
          />
          <p className="text-gray-text mt-12 mb-4">Número da apólice</p>
          <p>001543914</p>
          <button className="bg-blue-text gap-4 font-semibold mt-16 mb-12 flex items-center justify-center p-6 rounded-full text-white w-full">
            <Image src={plusIcon} alt="plus icon" height={30} /> Adicionar
            beneficiários
          </button>
          <button className="bg-white gap-4 font-semibold border-2 border-blue-text mt-16 mb-12 flex items-center justify-center p-6 rounded-full text-blue-text w-full">
            <Image src={percentage} alt="plus icon" height={30} /> Distribuir
            percentual
          </button>
          <div className="flex items-center justify-center rounded-2xl bg-gray-light p-8 relative">
            <Image
              src={infoIcon}
              alt="info icon"
              className="absolute top-9 left-10"
              height={32}
            />
            <p className="pl-14">
              A seguradora vai pagar o benefício ao grupo primário cadastrado
              nesta proposta de seguro, conforme as condições gerais.
            </p>
          </div>
        </section>
        <section>
          <div className="mt-12">
            <div className="flex h-8 w-full">
              <div className="bg-blue-500 rounded-l-full rounded-bl-full w-1/2"></div>
              <div className="bg-orange-base w-1/5"></div>
              <div className="bg-purple-base w-[30%] rounded-r-full rounded-br-full"></div>
            </div>
            <div className="flex justify-between mt-2 text-center text-3xl font-bold">
              <span className="w-1/2 pr-32">50%</span>
              <span className="w-1/5">20%</span>
              <span className="w-[30%]">30%</span>
            </div>
          </div>

          <div ref={(el) => (cardRefs.current[0] = el)}>
            <BeneficiaryCard
              name={"Maria Souza Linhares"}
              relationship={"Cônjuge"}
              percentage={"50%"}
              isActive={activeCard === 0}
              onToggle={() => handleToggle(0)}
              borderColor={"border-blue-text"}
            />
          </div>

          <div ref={(el) => (cardRefs.current[1] = el)}>
            <BeneficiaryCard
              name={"Jorge Souza Linhares"}
              relationship={"Filho(a)"}
              percentage={"20%"}
              isActive={activeCard === 1}
              onToggle={() => handleToggle(1)}
              borderColor={"border-orange-base"}
            />
          </div>

          <div ref={(el) => (cardRefs.current[2] = el)}>
            <BeneficiaryCard
              name={"Hariane Souza Linhares"}
              relationship={"Filho(a)"}
              percentage={"30%"}
              isActive={activeCard === 2}
              onToggle={() => handleToggle(2)}
              borderColor={"border-purple-base"}
            />
          </div>
        </section>
      </div>
      <section className="w-full bg-blue-white mt-20">
        <div className="p-16">
          <h2 className="text-5xl font-bold">Compartilhamento de acesso</h2>
          <p className="text-3xl my-10">
            Se desejar compartilhar o acesso à apólice com aqueles que você
            indicou para receber o benefício, clique no botão abaixo.
          </p>
          <button className="flex gap-4 text-blue-text border-2 border-blue-text p-4 rounded-full items-center place-content-center text-3xl w-full">
            <Image src={shareIcon} alt="share icon" height={30} /> Compartilhar
            acesso
          </button>
        </div>
      </section>
      <div className="p-16">
        <p className="text-3xl text-gray-text my-10">
          Consulte informações importantes do código civil
        </p>
        <p className="flex text-blue-text items-center text-3xl font-semibold">
          Ver Código Civil
          <Image src={arrow} alt="share icon" height={30} className="ml-4" />
        </p>
      </div>
    </>
  );
};

export default BeneficiariesDetailsPage;
