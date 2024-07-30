import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import toggle from "../assets/pagamento/toggle.svg";
import resumeCheck from "../assets/resumeCheck.svg";
import TitleWithIcon from "../components/TitleWithIcon";
import caution from "../assets/success/caution2.svg";
import { arrow } from "../assets/homePage";

const PoliciesPage = () => {
  return (
    <>
      <HeaderNavigation title={"Apólices"} />
      <Tabs titles={["Minhas apólices", "Demais apólices"]} />
      <div className="bg-blue-white h-full p-16">
        <p className="flex items-center justify-center gap-8 text-4xl pb-12">
          Exibir apólice inativas{" "}
          <Image src={toggle} alt="toggle image" height={36} />
        </p>
        <div className="bg-white text-3xl p-10 rounded-2xl">
          <div className="flex items-center justify-between mb-10">
            <TitleWithIcon
              title={"Familia"}
              iconSrc={resumeCheck}
              iconAlt={"resume with check icon"}
              iconHeight={50}
              className="flex items-center text-4xl font-bold"
            />
            <span className="bg-green-light text-green-dark border-2 border-green-dark rounded-lg font-bold py-2 px-4">
              Ativa
            </span>
          </div>
          <p className="text-gray-text mb-2">Seguro contratado</p>
          <p>Vida inteira</p>
          <div className="flex my-10 items-center justify-between">
            <div className="">
              <p className="text-gray-text mb-2">Apólice</p>
              <p>123456789</p>
            </div>
            <div>
              <p className="text-gray-text mb-2">Data de vigência</p>
              <p>10/10/2023 à 10/10/2033</p>
            </div>
          </div>
          <div className="flex items-center bg-yellow-light p-10 rounded-xl">
            <Image
              src={caution}
              alt="caution icon"
              height={30}
              className="transform -translate-y-5 mr-4"
            />
            <p>Você ainda não indicou quem vai receber os benefícios.</p>
          </div>
          <Link
            href={"/policies/policy-details"}
            className="flex items-center text-blue-text gap-2 font-semibold mt-10 mb-4"
          >
            <p>Detalhes da apólice</p>
            <Image src={arrow} height={30} alt="arrow icon" />
          </Link>
        </div>

        <div className="bg-white text-3xl mt-16 p-10 rounded-2xl">
          <div className="flex items-center justify-between mb-10">
            <TitleWithIcon
              title={"Filhos"}
              iconSrc={resumeCheck}
              iconAlt={"resume with check icon"}
              iconHeight={50}
              className="flex items-center text-4xl font-bold"
            />
            <span className="bg-green-light text-green-dark border-2 border-green-dark rounded-lg font-bold py-2 px-4">
              Ativa
            </span>
          </div>
          <p className="text-gray-text mb-2">Seguro contratado</p>
          <p>Doenças Graves</p>
          <div className="flex my-10 items-center justify-between">
            <div className="">
              <p className="text-gray-text mb-2">Apólice</p>
              <p>123456789</p>
            </div>
            <div>
              <p className="text-gray-text mb-2">Data de vigência</p>
              <p>10/10/2023 à 10/10/2033</p>
            </div>
          </div>
          <Link
            href={"/policies/policy-details"}
            className="flex items-center text-blue-text gap-2 font-semibold mt-10 mb-4"
          >
            <p>Detalhes da apólice</p>
            <Image src={arrow} height={30} alt="arrow icon" />
          </Link>
        </div>

        <div className="bg-white text-3xl mt-16 p-10 rounded-2xl">
          <div className="flex items-center justify-between mb-10">
            <TitleWithIcon
              title={"Prudential Proteção Vida"}
              iconSrc={resumeCheck}
              iconAlt={"resume with check icon"}
              iconHeight={50}
              className="flex items-center text-4xl font-bold"
            />
            <span className="bg-green-light text-green-dark border-2 border-green-dark rounded-lg font-bold py-2 px-4">
              Ativa
            </span>
          </div>
          <p className="text-gray-text mb-2">Seguro contratado</p>
          <p>Doenças Graves</p>
          <div className="flex my-10 items-center justify-between">
            <div className="">
              <p className="text-gray-text mb-2">Apólice</p>
              <p>123456789</p>
            </div>
            <div>
              <p className="text-gray-text mb-2">Data de vigência</p>
              <p>10/10/2023 à 10/10/2033</p>
            </div>
          </div>
          <Link
            href={"/policies/policy-details"}
            className="flex items-center text-blue-text gap-2 font-semibold mt-10 mb-4"
          >
            <p>Detalhes da apólice</p>
            <Image src={arrow} height={30} alt="arrow icon" />
          </Link>
        </div>

        <div className="bg-white text-3xl mt-16 p-10 rounded-2xl">
          <div className="flex items-center justify-between mb-10">
            <TitleWithIcon
              title={"Vida inteira"}
              iconSrc={resumeCheck}
              iconAlt={"resume with check icon"}
              iconHeight={50}
              className="flex items-center text-4xl font-bold"
            />
            <span className="bg-green-light text-green-dark border-2 border-green-dark rounded-lg font-bold py-2 px-4">
              Ativa
            </span>
          </div>
          <div className="flex my-10 items-center justify-between">
            <div className="">
              <p className="text-gray-text mb-2">Apólice</p>
              <p>123456789</p>
            </div>
            <div>
              <p className="text-gray-text mb-2">Data de vigência</p>
              <p>10/10/2023 à 10/10/2033</p>
            </div>
          </div>
          <Link
            href={"/policies/policy-details"}
            className="flex items-center text-blue-text gap-2 font-semibold mt-10 mb-4"
          >
            <p>Detalhes da apólice</p>
            <Image src={arrow} height={30} alt="arrow icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PoliciesPage;
