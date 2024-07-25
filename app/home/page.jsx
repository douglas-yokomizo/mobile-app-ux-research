"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import FooterNavigationHome from "../components/FooterNavigation";
import * as homeAssets from "../assets/homePage";
import Badge from "../components/Badge";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const router = useRouter();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
    },
  });

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const maxHeight = isExpanded ? `${contentRef.current.scrollHeight}px` : "0px";

  return (
    <>
      <main className="flex flex-col w-full">
        <section className="bg-blue-dark relative w-full text-white p-16 pb-60 flex flex-col gap-12">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Image
                src={homeAssets.avatar}
                alt="avatar image"
                height={120}
                width={120}
              />
              <div className="font-bold">
                <h2 className="text-4xl mb-4">Olá, João Pedro</h2>
                <h3 className="text-2xl flex items-center gap-2">
                  Meu perfil{" "}
                  <Image
                    className="w-6 h-6 filter invert brightness-0 saturate-100"
                    src={homeAssets.arrow}
                    alt="right arrow icon"
                  />
                </h3>
              </div>
            </div>
            <div className="relative">
              <Image
                src={homeAssets.alertIcon}
                alt="alert icon"
                height={60}
                width={60}
              />
              <span className="absolute top-0 right-0 bg-yellow-400 w-7 h-7 text-black rounded-full text-lg text-center font-bold">
                <p>2</p>
              </span>
            </div>
          </header>
          <nav>
            <ul className="flex gap-10 font-bold text-2xl">
              <li className="max-w-fit w-full text-center">
                <div className="bg-blue-50 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
                  <Image
                    src={homeAssets.handHeart}
                    alt="hand heart icon"
                    height={56}
                    width={56}
                  />
                </div>
                <p>
                  Vida <br />
                  Individual
                </p>
              </li>
              <li className="max-w-fit w-full text-center">
                <div className="bg-blue-900 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
                  <Image
                    src={homeAssets.globe}
                    alt="globe icon"
                    height={56}
                    width={56}
                  />
                </div>
                <p>
                  Vida <br /> Empresarial
                </p>
              </li>
            </ul>
          </nav>
        </section>
        <section className="pl-12 transform -translate-y-40">
          <ul className="flex gap-4 overflow-hidden">
            <li className="flex-shrink-0 w-[89vw] rounded-2xl bg-blue-50 text-black p-8">
              <div className="flex items-center justify-between font-bold">
                <h2 className="text-5xl">Apólice do Carlos</h2>
                <span className="text-3xl bg-green-100 text-green-950 px-4 py-3 border-2 border-green-950 rounded-md">
                  Pago
                </span>
              </div>
              <div className="flex justify-between text-3xl my-10">
                <div>
                  <h4 className="font-semibold mb-4">Apólice</h4>
                  <p>001543914</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4"> Data de vigência</h4>
                  <p>10/10/2023 à 10/10/2028</p>
                </div>
              </div>
              <Link href={"/"} className="font-bold text-blue-500">
                Detalhes da apólice
              </Link>
            </li>
            <li className="flex-shrink-0 w-[95vw] rounded-2xl bg-blue-50 text-black p-8">
              <div className="flex items-center justify-between font-bold">
                <h2 className="text-5xl">Apólice da Maria</h2>
                <span className="text-3xl bg-red-100 text-red-950 px-4 py-3 border-2 border-red-950 rounded-md">
                  Pendente
                </span>
              </div>
              <div className="flex justify-between text-3xl my-10">
                <div>
                  <h4 className="font-semibold mb-4">Apólice</h4>
                  <p>002543914</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4"> Data de vigência</h4>
                  <p>12/12/2023 à 12/12/2028</p>
                </div>
              </div>
              <Link href={"/"} className="font-bold text-blue-500">
                Detalhes da apólice
              </Link>
            </li>
          </ul>
        </section>
        <section ref={sliderRef} className="pl-12 -mt-16 flex-col">
          <h2 className="mt-0 font-bold text-5xl mb-6">Acesso Rápido</h2>
          <ul className="font-semibold keen-slider">
            <li className="keen-slider__slide">
              <div className="text-center flex flex-col items-center justify-center max-w-fit">
                <div className="bg-blue-200 border-2 border-blue-600 border-dashed rounded-2xl  h-32 w-[16rem] flex justify-center">
                  <Image
                    src={homeAssets.guardian}
                    alt="shield and sword icon"
                    height={48}
                    width={48}
                  />
                </div>
                <p>Guardião</p>
              </div>
            </li>
            <li className="keen-slider__slide">
              <div className="text-center flex flex-col items-center justify-center max-w-fit">
                <div className="bg-blue-200 border-2 border-blue-600 border-dashed rounded-2xl  h-32 w-[16rem] flex justify-center">
                  <Image
                    src={homeAssets.coin}
                    alt="shield and sword icon"
                    height={48}
                    width={48}
                  />
                </div>
                <p>Pagamento</p>
              </div>
            </li>
            <li className=" keen-slider__slide">
              <div className="text-center flex flex-col items-center justify-center max-w-fit">
                <div className="bg-blue-200 border-2 border-blue-600 border-dashed rounded-2xl  h-32 w-[16rem] flex justify-center">
                  <Image
                    src={homeAssets.phoneStatus}
                    alt="shield and sword icon"
                    height={48}
                    width={48}
                  />
                </div>
                <p>Atendimento</p>
              </div>
            </li>
            <li className=" keen-slider__slide">
              <div className="text-center flex flex-col items-center justify-center max-w-fit">
                <div className="bg-blue-200 border-2 border-blue-600 border-dashed rounded-2xl  h-32 w-[16rem] flex justify-center">
                  <Image
                    src={homeAssets.shield}
                    alt="shield and sword icon"
                    height={48}
                    width={48}
                  />
                </div>
                <p>Acionar Seguro</p>
              </div>
            </li>
            <li className=" keen-slider__slide">
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className="text-center flex flex-col items-center justify-center max-w-fit"
                onTouchEnd={() => router.push("/dados-cadastrais")}
                onClick={() => router.push("/dados-cadastrais")}
              >
                <div className="bg-blue-200 border-2 border-blue-600 border-dashed rounded-2xl  h-32 w-[16rem] flex justify-center">
                  <Image
                    src={homeAssets.dataPerson}
                    alt="shield and sword icon"
                    height={48}
                    width={48}
                  />
                </div>
                <p>
                  Dados
                  <br />
                  cadastrais
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="pl-14 mt-20 mb-14">
          <div className="p-10 w-11/12 bg-blue-50 text-black rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <Image
                src={homeAssets.fullyLogo}
                alt="Logo Fully"
                className="w-20"
              />
              <button onClick={toggleDetails} className="flex p-4">
                <Image
                  src={homeAssets.arrow}
                  className={`transition-transform ${
                    isExpanded ? "rotate-[270deg]" : "rotate-90"
                  } w-10 h-10 filter saturate-100 brightness-50`}
                  alt="arrow icon"
                />
              </button>
            </div>
            <p className="mt-4 mb-8 text-3xl text-neutral-400 ">
              Sincronizado em: 09:38:47 8 Abr 2024
            </p>
            <div className="flex gap-4 justify-between items-center">
              <Badge
                src={homeAssets.starterShield}
                alt={""}
                bgColor={"bg-white"}
                badgeTitle={"Nível"}
                badgeValue={"Iniciante"}
                className="w-1/2 rounded-full"
              />
              <Badge
                src={homeAssets.gold}
                badgeTitle={"Moedas"}
                badgeValue={"1000"}
                bgColor={"bg-white"}
                alt={""}
                className="w-1/2 rounded-full"
              />
            </div>
            <div className="flex items-center mt-4 mb-8">
              <strong className="font-bold text-4xl mr-4">2 de 3</strong>
              <Image
                src={homeAssets.progressBar}
                alt="progress bar image"
                className="w-3/5 mr-4"
              />
              <div className="flex 1/3 items-center gap-2 bg-white p-3 py-4 rounded-full">
                <Image src={homeAssets.gold} alt="gold icon" className="w-7" />
                <p className="text-3xl w-24 text-center">
                  <strong>500</strong>
                </p>
              </div>
            </div>
            <Link
              href={"/rewards"}
              className="text-blue-500 font-semibold flex items-center w-full justify-center border-2 border-blue-500 text-3xl p-4 rounded-full gap-4"
            >
              <Image src={homeAssets.medal} alt="medal icon" className="w-8" />
              <span>Resgatar Recompensas</span>
            </Link>
            <div
              ref={contentRef}
              style={{ maxHeight: maxHeight }}
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-96" : "max-h-0"
              }`}
            >
              <div>
                <p className="mt-10 mb-4 text-3xl text-neutral-400 ">
                  Como estou hoje
                </p>
                <ul className="flex gap-6 text-center text-3xl">
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center py-10 w-1/3">
                    <Image
                      src={homeAssets.steps}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">Passos</span>
                    <span className="font-bold text-gray-500">2.505</span>
                    <span className="font-normal">7500</span>
                  </li>
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
                    <Image
                      src={homeAssets.time}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">Tempo</span>
                    <span className="font-bold text-gray-500">08:13</span>
                    <span className="font-normal">30:00</span>
                  </li>
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
                    <Image
                      src={homeAssets.heart}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">BPM</span>
                    <span className="font-bold text-gray-500">102</span>
                    <span>&nbsp;</span>
                  </li>
                </ul>
                <p className="mt-10 mb-4 text-3xl text-neutral-400 ">
                  Meu indicador de Bem-Estar
                </p>
                <ul className="flex gap-6 text-center text-3xl">
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center py-10 w-1/3">
                    <Image
                      src={homeAssets.goodOrange}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">Físico</span>
                    <span className="font-bold text-gray-500">Bom</span>
                  </li>
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
                    <Image
                      src={homeAssets.regular}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">Mental</span>
                    <span className="font-bold text-gray-500">Razoável</span>
                  </li>
                  <li className="bg-white rounded-2xl flex flex-col gap-2 items-center justify-center p-3 w-1/3">
                    <Image
                      src={homeAssets.goodGreen}
                      alt="steps icon"
                      className="w-16 mb-2"
                    />
                    <span className="font-normal">Financeiro</span>
                    <span className="font-bold text-gray-500">Bom</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pl-6 mb-14">
          <ul className="flex overflow-hidden">
            <Image
              src={homeAssets.bannerHome}
              alt="banner image"
              className="flex-shrink-0 w-[90vw] rounded-2xl bg-cover text-black p-8"
            />
            <Image
              src={homeAssets.bannerHome}
              alt="banner image"
              className="flex-shrink-0 w-[90vw] rounded-2xl bg-cover text-black p-8"
            />
          </ul>
        </section>
        <section
          className="pl-14 pb-64 bg-[#F0EFF2]
"
        >
          <h3 className="text-5xl font-bold mt-20 mb-5">
            Fale com seu corretor
          </h3>
          <div className="flex gap-4 overflow-hidden">
            <div className="flex-shrink-0 w-[89vw] rounded-2xl bg-white text-black p-8">
              <div className="flex flex-col gap-6">
                <h4 className="text-4xl mb-4">Túlio dos Santos</h4>
                <p className="text-3xl">Corretora franqueada</p>
                <p className="text-3xl">AC corretores de saúde LTDA</p>
              </div>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center w-5/12 justify-start gap-8">
                  <Image
                    src={homeAssets.phone}
                    alt="phone icon"
                    className="bg-blue-50 w-32 h-32 rounded-full p-8"
                  />
                  <Image
                    src={homeAssets.whatsapp}
                    alt="whatsapp icon"
                    className="bg-blue-50 w-32 h-32 rounded-full p-8"
                  />
                </div>
                <button className="text-3xl font-semibold text-blue-600 flex items-center gap-4">
                  <div onClick={() => router.push("/brokers")}>
                    Mais detalhes
                  </div>
                  <Image
                    src={homeAssets.arrow}
                    alt="arrow icon"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 w-[89vw] rounded-2xl bg-white text-black p-8">
              <h4 className="text-4xl">Túlio dos Santos</h4>
              <p className="text-3xl">Corretora franqueada</p>
              <p className="text-3xl">AC corretores de saúde LTDA</p>
            </div>
          </div>
          <h3 className="text-5xl font-bold mt-10 mb-5">
            Fale com a Prudential
          </h3>
          <div className="w-[89vw] text-3xl rounded-2xl bg-white text-black p-8">
            <p>
              Estamos aqui para oferecer o melhor atendimento e assistência
              possível.
            </p>
            <button className="text-blue-600 border-2 font-semibold w-full p-4 mt-10 rounded-full border-blue-600">
              Acessar atendimento
            </button>
          </div>
        </section>
        <FooterNavigationHome />
      </main>
    </>
  );
}
