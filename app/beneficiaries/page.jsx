import React from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import TitleWithIcon from "../components/TitleWithIcon";
import resumeCheck from "../assets/resumeCheck.svg";
import { arrow } from "../assets/homePage";
import Image from "next/image";
import Link from "next/link";

const BeneficiariesPage = () => {
  return (
    <>
      <HeaderNavigation title={"Beneficiários"} />
      <section className="bg-blue-white h-full py-20 text-3xl">
        <div className="mx-12 bg-white p-12 flex flex-col gap-12 rounded-3xl">
          <div>
            <div className="flex justify-between">
              <TitleWithIcon
                title={"Familia"}
                iconSrc={resumeCheck}
                iconHeight={56}
                className="flex items-center gap-2 text-5xl font-bold"
              />
              <Image
                src={arrow}
                alt="arrow icon"
                height={48}
                className="-rotate-90"
              />
            </div>
            <p className=" text-gray-text mt-6">
              Apólice: <span className="text-black">001543914</span>
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6">Primário</h3>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>Maria Souza Linhares</p>
                <p>Hariane Souza Linhares</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>50%</p>
                <p>50%</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-6">Secundário</h3>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>Milena Rodrigues Linhares</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>100%</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-6">Terciário</h3>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>João Ferreira Linhares</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>100%</p>
              </div>
            </div>
          </div>
          <Link
            href={"/beneficiaries/details"}
            className="bg-transparent flex items-center gap-3 justify-center border-2 text-3xl border-blue-text rounded-full p-6 text-blue-text font-semibold"
          >
            Detalhes <Image src={arrow} alt="arrow icon" height={30} />
          </Link>
        </div>

        <div className="mx-12 bg-white p-12 flex flex-col mt-16 gap-12 rounded-3xl">
          <div>
            <div className="flex justify-between">
              <TitleWithIcon
                title={"Filhos"}
                iconSrc={resumeCheck}
                iconHeight={56}
                className="flex items-center gap-2 text-5xl font-bold"
              />
              <Image
                src={arrow}
                alt="arrow icon"
                height={48}
                className="-rotate-90"
              />
            </div>
            <p className=" text-gray-text mt-6">
              Apólice: <span className="text-black">001543914</span>
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>Mauricio Souza Linhares</p>
                <p>Hariane Souza Linhares</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>50%</p>
                <p>50%</p>
              </div>
            </div>
          </div>

          <button className="bg-transparent flex items-center gap-3 justify-center border-2 text-3xl border-blue-text rounded-full p-6 text-blue-text font-semibold">
            Detalhes <Image src={arrow} alt="arrow icon" height={30} />
          </button>
        </div>

        <div className="mx-12 bg-white p-12 flex flex-col mt-16 gap-12 rounded-3xl">
          <div>
            <div className="flex justify-between">
              <TitleWithIcon
                title={"Prudential Proteção Vida"}
                iconSrc={resumeCheck}
                iconHeight={56}
                className="flex items-center gap-2 text-5xl font-bold w-2/3"
              />
              <Image
                src={arrow}
                alt="arrow icon"
                height={48}
                className="-rotate-90"
              />
            </div>
            <p className=" text-gray-text mt-6">
              Apólice: <span className="text-black">001543914</span>
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>Agência Atlas LTDA</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>100%</p>
              </div>
            </div>
          </div>

          <button className="bg-transparent flex items-center gap-3 justify-center border-2 text-3xl border-blue-text rounded-full p-6 text-blue-text font-semibold">
            Detalhes <Image src={arrow} alt="arrow icon" height={30} />
          </button>
        </div>

        <div className="mx-12 bg-white p-12 flex flex-col mt-16 gap-12 rounded-3xl">
          <div>
            <div className="flex justify-between">
              <TitleWithIcon
                title={"Vida inteira"}
                iconSrc={resumeCheck}
                iconHeight={56}
                className="flex items-center gap-2 text-5xl font-bold w-2/3"
              />
              <Image
                src={arrow}
                alt="arrow icon"
                height={48}
                className="-rotate-90"
              />
            </div>
            <p className=" text-gray-text mt-6">
              Apólice: <span className="text-black">001543914</span>
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Beneficiário</p>
                <p>Maria Souza Linhares</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-text">Percentual</p>
                <p>100%</p>
              </div>
            </div>
          </div>

          <button className="bg-transparent flex items-center gap-3 justify-center border-2 text-3xl border-blue-text rounded-full p-6 text-blue-text font-semibold">
            Detalhes <Image src={arrow} alt="arrow icon" height={30} />
          </button>
        </div>
      </section>
    </>
  );
};

export default BeneficiariesPage;
