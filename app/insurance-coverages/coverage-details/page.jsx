"use client"
import Image from "next/image";
import { policy } from "@/app/assets/brokers";
import { arrow, peopleGroup } from "@/app/assets/homePage";
import cautionBlue from "@/app/assets/cautionBlue.svg";
import { questionMark } from "@/app/assets/rewards";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import TitleWithIcon from "@/app/components/TitleWithIcon";
import { coverages } from "@/app/data/coverages";
import { useGame } from "@/app/hooks/useGame";
import { useEffect } from "react";

const CoverageDetails = () => {
  const { finishGame } = useGame();

  useEffect(() => {
    if (finishGame) {
      finishGame();
    }
  }, [finishGame]);
  return (
    <div>
      <HeaderNavigation title={"Mais detalhes"} />
      <div className="px-12 py-20 flex flex-col gap-4 bg-blue-white">
        <h1 className="text-4xl font-bold">{coverages[0].name}</h1>
        <p className="text-3xl">{coverages[0].brief}</p>
        <p className="text-4xl mt-4">{coverages[0].value}</p>
      </div>
      <div className="px-12 py-16">
        <TitleWithIcon
          title="Proteção nas coberturas a seguir:"
          iconSrc={policy}
          iconWidth={56}
          className="flex items-center gap-2 text-4xl font-bold"
        />
        <div className="flex flex-col gap-4 bg-gray-light rounded-2xl p-8 mt-16 mb-12">
          <h2 className="text-4xl font-bold">Vida inteira mais</h2>
          <h3 className="text-3xl font-bold text-blue-text">Vitalício</h3>
          <p className="text-3xl">R$ 300.000,00</p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-light rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold">Renda Familiar</h2>
          <h3 className="text-3xl font-bold text-blue-text">Até 2028*</h3>
          <p className="text-3xl">R$ 200.000,00</p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-light rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold">Temporário</h2>
          <h3 className="text-3xl font-bold text-blue-text">Até 2028*</h3>
          <p className="text-3xl">R$ 500.000,00</p>
        </div>
        <p className="text-3xl text-gray-text">
          *Extensão de vigência automática
        </p>
        <hr className="border-2 border-blue-white mt-16" />
      </div>
      <div className="px-12">
        <TitleWithIcon
          title="Como funciona"
          iconSrc={questionMark}
          iconWidth={56}
          className="flex items-center gap-2 text-4xl font-bold"
        />
        <p className="text-3xl text-gray-text mt-16 mb-12">
          Em caso de morte natural ou acidental, o valor da indenização do seu
          seguro de vida será recebido pelas pessoas indicadas como
          beneficiárias na apólice.
        </p>
        <h4 className="text-3xl font-bold text-blue-text mb-3">
          Cobertura em caso
        </h4>
        <p className="text-3xl text-gray-text mb-12">
          Morte por qualquer causa, natural ou acidental.
        </p>
        <h4 className="text-3xl font-bold text-blue-text mb-3">
          Valor da indenização{" "}
        </h4>
        <p className="text-3xl text-gray-text mb-12">
          Em caso de morte natural ou acidental, seus beneficiários receberão o
          valor total da indenização do seguro.{" "}
        </p>
        <h4 className="text-3xl font-bold text-blue-text mb-3">Carência </h4>
        <p className="text-3xl text-gray-text mb-16">
          Essa cobertura não possui carência{" "}
        </p>
        <hr className="border-2 border-blue-white" />
      </div>
      <div className="px-12 py-16">
        <TitleWithIcon
          title={"Beneficiários"}
          iconSrc={peopleGroup}
          iconHeight={56}
          className="flex items-center gap-2 text-4xl font-bold"
        />
        <p className="text-3xl text-gray-text">
          Ana Morais, Pedro Morais e Vitor Almeida
        </p>
        <hr className="border-2 border-blue-white mt-16" />
      </div>
      <div className="px-12 pb-16">
        <TitleWithIcon
          title={"Atenção"}
          iconSrc={cautionBlue}
          iconHeight={56}
          className="flex items-center gap-2 text-4xl font-bold"
        />
        <p className="text-3xl text-gray-text mt-16 mb-12">
          Para saber mais, confira as condições gerais de cada apólice do seu
          seguro.
        </p>
        <button className="text-3xl text-blue-text font-semibold flex items-center gap-4">
          Consultar condições gerais{" "}
          <Image src={arrow} alt="arrow icon" height={30} />
        </button>
      </div>
    </div>
  );
};

export default CoverageDetails;
