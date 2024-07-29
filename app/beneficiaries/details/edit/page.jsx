"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/Button";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import { Input } from "@/app/components/Input";
import Modal from "@/app/components/Modal";

export default function Enderecos() {
  const router = useRouter();
  const [buttonVariant, setButtonVariant] = useState("disabled");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(!isModalOpen);
  const goToAnotherPage = () => {
    router.push("/beneficiaries/details/edit/review");
    closeModal();
  };
  const modalButtons = [
    {
      text: "Sair",
      onClick: closeModal,
      className: "w-1/2 px-4 py-6 text-3xl text-blue-text font-semibold",
    },
    {
      text: "Continuar",
      onClick: goToAnotherPage,
      className:
        "bg-blue-text px-4 py-6 w-1/2 text-3xl rounded-full text-white font-semibold",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVariant("primary");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen ">
      <HeaderNavigation title={"Editar beneficiário"} />

      <div className="flex flex-col gap-16 p-6 mt-32">
        <Input
          label={"Classificação"}
          value={"Primário"}
          disabled
          drop={true}
        />
        <Input label={"Nome"} value={"Jorge Souza Linhares"} />
        <Input label={"CPF"} value={"031.088.620-14"} />
        <Input label={"Sexo"} value={"Masculino"} drop={true} />
        <Input label={"Nacionalidade"} value={"Brasileiro (a)"} drop={true} />
        <Input label={"Data de nascimento"} value={"07/07/1990"} />
        <span className="text-gray-text text-3xl -mt-10 -mb-8 ml-8">
          Ex: DD/MM/AAAA
        </span>
        <Input label={"Idade"} value={"30 anos"} disabled />
        <Input label={"Parentesco"} value={"Filho (a)"} drop={true} />
        <Input label={"E-mail"} value={"jorgelinhares@email.com"} />
        <Input label={"Celular"} value={"(21) 98213-2466"} />
        <Button
          text={"Continuar"}
          variant={buttonVariant}
          onClick={openModal}
        />
        <Button
          text={"Cancelar"}
          className="bg-transparent text-blue-text font-semibold text-3xl pt-8 pb-16"
        />
      </div>
      <Modal
        buttons={modalButtons}
        isOpen={isModalOpen}
        onClose={closeModal}
        title={"Atenção!"}
      >
        <p className="text-3xl my-12">
          Você ainda não concluiu todo procedimento, suas alterações só serão
          concluídas caso continue até o fim do processo.
        </p>
      </Modal>
    </div>
  );
}
