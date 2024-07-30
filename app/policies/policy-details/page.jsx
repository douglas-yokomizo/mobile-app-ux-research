"use client";
import Image from "next/image";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import Tabs from "@/app/components/Tabs";
import TitleWithIcon from "@/app/components/TitleWithIcon";
import resumeCheck2 from "@/app/assets/resumeCheck2.svg";
import edit from "@/app/assets/editBlue.svg";
import { Button } from "@/app/components/Button";
import download from "@/app/assets/pagamento/download.svg";
import { arrow, coin, heartShield, peopleGroup } from "@/app/assets/homePage";
import { coverages } from "@/app/data/coverages";
import { useRouter } from "next/navigation";
import InfoCard from "@/app/components/InfoCard";
import plus from "@/app/assets/pagamento/plus.svg";
import idCard from "@/app/assets/idCard.svg";
import googlePay from "@/app/assets/googlePay.png";
import Modal from "@/app/components/Modal";
import { useState } from "react";

const PolicyDetailsPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const modalButtons = [
    {
      text: "Cancelar",
      onClick: closeModal,
      className: "w-1/2 px-4 py-6 text-3xl text-blue-text font-semibold",
    },
    {
      text: "Prosseguir",
      onClick: () => router.push("/"),
      className:
        "bg-blue-text px-4 py-6 w-1/2 text-3xl rounded-full text-white font-semibold",
    },
  ];

  const cardItems = [
    {
      title: "Valor de pagamento",
      value: "R$ 550,00",
    },
    {
      title: "Responsável pelo pagamento",
      value: "João Paulo Pereira Santini",
    },
    {
      title: "Frequência",
      value: "Mensal",
    },
    {
      title: "Dia do vencimento",
      value: "19",
    },
    {
      title: "Forma de pagamento",
      value: "Débito em conta - Bradesco - Ag: 1234 | Conta 123456-7",
    },
  ];

  return (
    <>
      <HeaderNavigation title={"Detalhes da apólice"} />
      <Tabs titles={["Apólice", "Coberturas", "Pagamento", "Beneficiários"]} />
      <Modal
        buttons={modalButtons}
        title={"Link externo"}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <p className="text-3xl my-16">
          Ao clicar em ”Prosseguir” você será redirecionado para fora do
          aplicativo, tem certeza que deseja realizar esta ação?
        </p>
      </Modal>
      <section className="h-full text-3xl bg-blue-white p-12">
        <TitleWithIcon
          title={"Apólice"}
          iconSrc={resumeCheck2}
          iconAlt={"resume with check icon"}
          iconHeight={60}
          className="flex items-center text-6xl font-bold mt-4 mb-8"
        />
        <div className="bg-white p-8 rounded-3xl">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <h2 className="text-4xl font-bold">Família</h2>
              <Image
                src={edit}
                alt="edit icon"
                height={40}
                className="filter-blue"
              />
            </div>
            <span className="font-bold text-green-dark rounded-lg px-4 py-2 bg-green-light border-2 border-green-dark">
              Ativa
            </span>
          </div>
          <p className="text-gray-text mt-10 mb-4">Seguro contratado</p>
          <p>Doenças Graves</p>
          <p className="text-gray-text mt-10 mb-4">Data de vigência</p>
          <p>10/10/2023 à 10/10/2033</p>
          <div className="flex justify-between items-center">
            <div className="mt-10 mb-4">
              <p className="text-gray-text mb-4">Apólice</p>
              <p>001543914</p>
            </div>
            <div>
              <p className="text-gray-text mb-4">Proposta</p>
              <p>12345A</p>
            </div>
          </div>
        </div>
        <Button
          icon={download}
          text={"PDF com detalhes da Apólice"}
          iconPosition="left"
          className="bg-transparent text-blue-text border-2 border-blue-text mt-10"
          iconAlt="download icon"
          iconSize={30}
        />
        <p className="text-3xl mt-12 mb-8 text-gray-text">
          Consulte as condições gerais vigentes e obtenha as informações
          contratadas para esta apólice.
        </p>
        <button
          onClick={openModal}
          className="flex items-center text-blue-text gap-4 font-semibold pb-8"
        >
          Consultar condições gerais
          <Image src={arrow} height={30} alt="arrow icon" />
        </button>
      </section>
      <section>
        <div className="bg-white text-3xl mt-10 p-12 rounded-2xl">
          <TitleWithIcon
            title={"Coberturas"}
            iconSrc={heartShield}
            iconAlt={"resume with check icon"}
            iconHeight={60}
            className="flex items-center text-6xl font-bold"
          />
          <div className="bg-blue-white p-10 rounded-2xl mt-16">
            <h4 className="font-bold">Extensão de cobertura</h4>
            <p className="my-8">
              Você precisa autorizar o aumento de tempo da sua proteção.{" "}
            </p>
            <Button text={"Aumentar duração"} className="text-white" />
          </div>
        </div>
        <div className="bg-white">
          {coverages.map((coverage, index) => (
            <div key={coverage.id}>
              <div className="p-12 mb-2 flex flex-col gap-4 border-t-8 border-blue-white">
                <h2 className="text-4xl font-bold">{coverage.name}</h2>
                <p className="text-3xl text-blue-bold font-bold hover:cursor-pointer">
                  {coverage.duration}
                </p>
                <p className="text-3xl text-gray-text">{coverage.brief}</p>
                <div className="flex justify-between items-center">
                  <p className="text-4xl">{coverage.value}</p>
                  <button
                    onClick={() =>
                      index === 0 &&
                      router.push("/insurance-coverages/coverage-details")
                    }
                    className="text-3xl text-blue-text flex gap-5 items-center font-semibold"
                  >
                    {coverage.details}
                    <Image src={arrow} alt="" height={30} />
                  </button>
                </div>
                {coverage.types && coverage.types.length > 0 && (
                  <>
                    <hr className="border border-divider my-8" />
                    <div className="pl-12">
                      {coverage.types.map((type) => (
                        <div key={type.id} className="flex flex-col gap-4">
                          <h4 className="text-3xl text-gray-text font-bold">
                            {type.name}
                          </h4>
                          <p className="text-3xl text-gray-text">
                            {type.brief}
                          </p>
                          <div className="flex justify-between">
                            <p className="text-4xl"> {type.value}</p>
                            <button
                              onClick={() =>
                                router.push(
                                  "/insurance-coverage/coverage-details"
                                )
                              }
                              className="text-3xl text-blue-text flex gap-5 items-center font-semibold"
                            >
                              {type.details}
                              <Image src={arrow} alt="" height={30} />
                            </button>
                          </div>
                          <hr className="border border-divider my-8" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-12 bg-blue-white">
        <TitleWithIcon
          iconSrc={coin}
          title={"Pagamento"}
          iconHeight={60}
          className="flex items-center text-6xl font-bold"
        />
        <div className="my-10">
          <InfoCard
            items={cardItems}
            showButton={true}
            buttonText="Editar"
            buttonIcon={edit}
            buttonClassName="text-blue-text mb-6 bg-transparent border-2 border-blue-text"
          />
        </div>
      </section>
      <section className="p-12 text-3xl">
        <TitleWithIcon
          iconSrc={peopleGroup}
          title={"Beneficiários"}
          iconHeight={60}
          className="flex items-center text-6xl font-bold"
        />
        <p className="my-12">
          Você ainda não indicou quem vai receber os benefícios da apólice.{" "}
        </p>
        <Button
          text={"Adicionar beneficiário"}
          className="text-white"
          icon={plus}
          iconSize={30}
        />
      </section>
      <section className="bg-blue-white p-20">
        <div className="text-4xl rounded-3xl bg-white p-6 text-captions-heading font-bold flex justify-between items-center">
          <h5>Valor de resgate</h5>
          <Image
            src={arrow}
            className="rotate-90"
            alt="arrow icon"
            height={36}
          />
        </div>
        <div className="text-4xl my-10 rounded-3xl bg-white p-6 text-captions-heading font-bold flex justify-between items-center">
          <h5>Como funciona</h5>
          <Image
            src={arrow}
            className="rotate-90"
            alt="arrow icon"
            height={36}
          />
        </div>
        <div className="text-4xl rounded-3xl bg-white p-6 text-captions-heading font-bold flex justify-between items-center">
          <h5>Regras</h5>
          <Image
            src={arrow}
            className="rotate-90"
            alt="arrow icon"
            height={36}
          />
        </div>
      </section>
      <section className="p-12 text-3xl ">
        <TitleWithIcon
          title={"PruPass"}
          iconSrc={idCard}
          className="flex items-center text-6xl font-bold"
          iconHeight={60}
        />
        <p className="w-2/3 my-12 text-gray-text">
          Leve a sua apólice em sua carteira digital de forma rápida e simples.
        </p>
        <Image src={googlePay} alt="plus icon" width={600} />
      </section>
      <section className="bg-gray-light p-12 text-3xl font-semibold text-blue-text">
        <p className="flex items-center gap-3">
          Informações sobre cancelamento
          <Image src={arrow} alt="arrow icon" height={30} />
        </p>
      </section>
    </>
  );
};

export default PolicyDetailsPage;
