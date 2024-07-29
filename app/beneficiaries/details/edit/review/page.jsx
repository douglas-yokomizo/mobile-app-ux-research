"use client";
import { Button } from "@/app/components/Button";
import { useRouter } from "next/navigation";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import InfoCard from "@/app/components/InfoCard";

const ChangeReviewPage = () => {
  const router = useRouter();
  const cardItem = [
    {
      title: "Apólices associadas",
      value: "Família - 001543914",
    },
    {
      title: "Beneficiários",
      value: "Jorge Souza Linhares",
    },
    {
      title: "E-mail",
      value: "linhares.jorge@gmail.com",
    },
    {
      title: "Celular",
      value: "(21) 98568-1148",
    },
  ];

  const cardItem2 = [
    {
      title: "Apólices associadas",
      value: "Família - 001543914",
    },
    {
      title: "Beneficiários",
      value: "Jorge Souza Linhares",
    },
    {
      title: "E-mail",
      value: "linhares.jorge@gmail.com",
    },
    {
      title: "Celular",
      value: "(21) 98568-2466",
    },
  ];

  return (
    <>
      <HeaderNavigation title={"Revisão"} />
      <div className="py-16 px-12">
        <h1 className="text-6xl font-bold mb-12">
          Antes de continuar a edição, revise as informações:
        </h1>
        <InfoCard
          items={cardItem}
          bgColor="bg-blue-white"
          title={"Dados após alteração"}
        />
        <div className="my-12"></div>
        <InfoCard items={cardItem2} title={"Dados anteriores"} />
        <div className="mt-10"></div>
        <Button text="Continuar" onClick={() => router.push("/token")} />
        <div className="mt-10"></div>
        <Button
          text="Cancelar"
          className="bg-transparent place-self-center w-full p-6 text-blue-text font-semibold text-3xl"
        />
      </div>
    </>
  );
};

export default ChangeReviewPage;
