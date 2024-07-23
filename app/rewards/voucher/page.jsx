"use client";
import Image from "next/image";
import { useState } from "react";
import HeaderNavigation from "../../components/HeaderNavigation";
import {
  email,
  listIcon,
  questionMark,
  uberBigCover,
} from "../../assets/rewards";
import Badge from "../../components/Badge";
import { arrow, gold } from "../../assets/homePage";
import TitleWithIcon from "../../components/TitleWithIcon";
import Modal from "../../components/Modal";
import { useRouter } from "next/navigation";

const VoucherDetails = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const route = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const goToAnotherPage = () => {
    route.push("/rewards/voucher/success");
    closeModal();
  };

  const modalButtons = [
    {
      text: "Cancelar",
      onClick: closeModal,
      className: "w-1/2 px-4 py-6 text-3xl text-blue-text font-semibold",
    },
    {
      text: "Resgatar agora",
      onClick: goToAnotherPage,
      className:
        "bg-blue-text px-4 py-6 w-1/2 text-3xl rounded-full text-white font-semibold",
    },
  ];

  return (
    <main>
      <HeaderNavigation title={"Resgatar Voucher"} />
      <Image src={uberBigCover} alt="uber cover image" className="w-full" />
      <div className="container p-10">
        <section>
          <h1 className="text-6xl font-bold mt-2">Uber</h1>
          <p className="text-3xl text-gray-text my-7">Saldo disponível</p>
          <Badge
            src={gold}
            badgeValue={"1060"}
            bgColor={"bg-blue-strong"}
            className="text-white w-fit px-6 rounded-2xl mb-20"
          />
          <div className="bg-gray-light w-[90vw] rounded-2xl p-10">
            <div className="flex justify-between items-center border-b-2 border-divider text-gray-text">
              <div>
                <p className="text-3xl">Valor do voucher</p>
                <p className="text-4xl my-5 text-blue-700 font-bold">
                  R$ 20,00
                </p>
              </div>
              <div className="mr-36">
                <p className="text-3xl">Custo:</p>
                <Badge
                  src={gold}
                  badgeValue={"567"}
                  bgColor={"bg-green-light"}
                  className="w-fit px-5 my-1 text-green-dark rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 text-3xl mt-8">
              <p className="text-gray-text">Validade:</p>
              <p className="text-black">
                Validade para 3 meses a partir da data do resgate
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-blue-white w-[100vw] p-10 ">
        <div className="flex items-center justify-between border-b-2 pb-14 pt-4 border-divider">
          <div className="flex items-center gap-4">
            <Image src={listIcon} alt="list icon" className="w-10" />
            <h3 className="font-bold text-4xl">Descrição</h3>
          </div>
          <Image
            src={arrow}
            alt=""
            className="w-8 filter invert brightness-100 saturate-0 rotate-90"
          />
        </div>
        <div className="flex items-center justify-between border-b-2 py-14 border-divider">
          <div className="flex items-center gap-4">
            <Image
              src={questionMark}
              alt="question mark icon"
              className="w-10"
            />
            <h3 className="font-bold text-4xl">Como usar</h3>
          </div>
          <Image
            src={arrow}
            alt=""
            className="w-8 filter invert brightness-100 saturate-0 rotate-90"
          />
        </div>
        <div className="bg-white px-10 py-8 mt-10 rounded-2xl">
          <div className="place-self-start">
            <TitleWithIcon
              title="Atendimento"
              iconSrc={email}
              iconAlt={"Medal icon"}
              iconWidth={50}
              iconHeight={50}
              className="flex text-4xl font-bold"
            />
          </div>
          <div className="container ">
            <p className="text-3xl mt-10 mb-2">Entre em contato pelo e-mail:</p>
            <button className="text-blue-text text-3xl font-semibold">
              suporte@livefully.com
            </button>
          </div>
        </div>
        <div className="bg-white px-10 py-8 mt-10 rounded-2xl">
          <div className="place-self-start">
            <TitleWithIcon
              title="Leia os termos"
              iconSrc={email}
              iconAlt={"Medal icon"}
              iconWidth={50}
              iconHeight={50}
              className="flex text-4xl font-bold"
            />
          </div>
          <div className="container flex flex-col justify-start items-start">
            <p className="text-3xl mt-10 mb-2">
              Para prosseguir, é necessário aceitar os termos e condições do
              nosso parceiro:
            </p>
            <button className="text-blue-text text-3xl font-semibold my-5">
              Leia os termos &gt;
            </button>
            <label className="text-3xl">
              <input
                type="checkbox"
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                className="mr-4 w-5 h-5"
              />
              Li e concordo com os termos.
            </label>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 flex items-center justify-center">
        <button
          className={` w-11/12 rounded-full transition ease-in-out bg-[#F0EFF2] p-4 text-3xl text-gray-text ${
            !isTermsAccepted
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-text text-white"
          }`}
          disabled={!isTermsAccepted}
          onClick={openModal}
        >
          Resgatar
        </button>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Resgatar Oferta"
        buttons={modalButtons}
      >
        <p className="mb-8 mt-6 text-3xl">
          Resgatar voucher Uber pelo valor de{" "}
          <span className="font-bold">567 moedas Fully?</span>
          <br />
          <br />
          Seu saldo atual é de: <span className="font-bold">1060 moedas. </span>
          Deseja continuar?
        </p>
      </Modal>
    </main>
  );
};

export default VoucherDetails;
