"use client";
import Image from "next/image";
import arrowLeft from "../assets/pagamento/arrow-left.svg";
import plus from "../assets/pagamento/plus.svg";
import edit from "../assets/pagamento/edit.svg";
import toggle from "../assets/pagamento/toggle.svg";
import mastercard from "../assets/pagamento/mastercard.svg";
import itau from "../assets/pagamento/itau.svg";
import boleto from "../assets/pagamento/boleto.svg";
import arrowRight from "../assets/pagamento/arrow-right.svg";
import extrato from "../assets/pagamento/extrato.svg";
import HeaderNavigation from "../components/HeaderNavigation";
import Link from "next/link";
import data from "../data/methodsPayment";
import { useRouter } from "next/navigation";

export default function Pagamento() {
  const router = useRouter();

  return (
    <main className="">
      <HeaderNavigation title="Dados de pagamento" />

      <nav className="flex justify-center text-5xl gap-32 mt-12">
        <p className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-5">
          Formas de Pagamento
        </p>
        <p>Extrato</p>
      </nav>

      <section className="bg-blue-white px-6 py-8">
        <p className="text-4xl text-start flex ml-12 mt-6">
          Suas apólices estão associadas a suas formas de
          <br /> pagamento cadastradas.
        </p>

        <div className="flex flex-col mt-12 px-12 gap-12">
          <button className="bg-blue-600 text-white text-4xl rounded-full px-12 py-8 items-center flex gap-5 justify-center">
            <Image
              src={plus}
              height={40}
              width={40}
              className="object-contain"
            />
            Adicionar forma de pagamento
          </button>
          <button className=" border-2 border-blue-600 text-blue-600 text-4xl rounded-full px-12 py-8 items-center flex gap-5 justify-center">
            <Image
              src={edit}
              height={40}
              width={40}
              className="object-contain"
            />{" "}
            Editar múltiplas apólices
          </button>
        </div>

        <div className="flex justify-end">
          <p className="text-4xl m-12 mx-12 flex gap-5">
            Exibir todas{" "}
            <Image
              src={toggle}
              height={90}
              width={90}
              className="object-contain"
            />
          </p>
        </div>

        <section className="px-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl px-6 py-12 my-12"
            >
              <div className="flex items-center gap-12">
                <div className="p-2 border-gray-200 border-2 rounded-xl">
                  <Image
                    src={item.logo}
                    height={100}
                    width={100}
                    className="object-contain"
                  />
                </div>
                <p className="font-bold text-5xl">{item.name}</p>
              </div>
              {item.details.length > 0 && (
                <div className="flex justify-between text-4xl items-center pt-12 px-2">
                  {item.details.map((detail, index) => (
                    <div key={index}>
                      <p className="text-gray-500 mb-2">{detail.label}</p>
                      <p>{detail.value}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-b-2 border-gray-500 my-12"></div>
              <div className="flex justify-between text-4xl items-center px-2">
                <div>
                  <p className="text-gray-500 mb-2">Apólices</p>
                  {item.policies.map((policy, index) => (
                    <p key={index}>{policy.name}</p>
                  ))}
                </div>
                <div>
                  <Link href={`/paymentMethodDetail?id=${item.id}`}>
                    <p className="text-blue-600 mb-2 flex items-center gap-2">
                      Mais detalhes{" "}
                      <Image
                        src={arrowRight}
                        height={50}
                        width={50}
                        className="object-contain"
                      />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="px-12 py-12">
        <div className="flex gap-5 items-center">
          <Image
            src={extrato}
            height={100}
            width={100}
            className="object-contain"
          />
          <h2 className="text-7xl font-bold">Extrato</h2>
        </div>

        <div className="border-blue-white border-4 my-12"></div>
        <section>
          <div className="flex justify-between mb-12">
            <h6 className="text-captions-heading text-6xl font-bold">
              Dezembro/2023
            </h6>
            <p>
              <span className="text-4xl">Total</span>{" "}
              <span className="text-5xl mr-5 font-bold">R$1200,45</span>
            </p>
          </div>
        </section>

        <section>
          <div className="border-green-dark border-2 bg-green-white rounded-lg w-min">
            <p className="text-3xl p-2 text-green-dark font-semibold">Pago</p>
          </div>

          <div className="text-4xl flex justify-between my-5">
            <p>Carlos Henrique Ferreira de Souza</p>
            <p className="text-gray-500"> 08/01/24</p>
          </div>

          <div className="text-5xl flex justify-between my-8">
            <p className="font-bold">Vida Inteira</p>
            <p> R$ 400,45</p>
          </div>

          <p className="text-gray-500 text-4xl mb-2">Mastercard crédito</p>
          <p className="text-gray-500 text-4xl">**** ***** **** 8842</p>
          <p
            onClick={() => router.push("/pagamento/pagamento-detalhes")}
            className="text-blue-600 mb-2 flex items-center gap-2 text-4xl mt-6 hover:cursor-pointer"
          >
            {" "}
            Detalhes do Pagamento{" "}
            <Image
              src={arrowRight}
              height={50}
              width={50}
              className="object-contain"
            />{" "}
          </p>
        </section>

        <section className="my-12">
          <div className="border-gray-500 border-2 bg-gray-300 rounded-lg w-min">
            <p className="text-3xl p-2 text-gray-950 font-semibold">
              Estornado
            </p>
          </div>

          <div className="text-4xl flex justify-between my-5">
            <p>Pedro Ferreira de Souza</p>
            <p className="text-gray-500"> 01/01/24</p>
          </div>

          <div className="text-5xl flex justify-between my-8">
            <p className="font-bold">Filhos</p>
            <p>R$ 600,00</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-gray-500 text-4xl mb-2">Mastercard crédito</p>
              <p className="text-gray-500 text-4xl">**** ***** **** 8842</p>
            </div>
            <p className="text-blue-600 mb-2 flex items-center gap-2 text-4xl mt-6">
              {" "}
              Detalhes{" "}
              <Image
                src={arrowRight}
                height={50}
                width={50}
                className="object-contain"
              />{" "}
            </p>
          </div>
        </section>

        <section className="my-12">
          <div className="border-green-dark border-2 bg-green-white rounded-lg w-min">
            <p className="text-3xl p-2 text-green-dark font-semibold">Pago</p>
          </div>

          <div className="text-4xl flex justify-between my-5">
            <p>Ana Lucia Ferreira de Souza</p>
            <p className="text-gray-500"> 01/01/24</p>
          </div>

          <div className="text-5xl flex justify-between my-8">
            <p className="font-bold">Esposa</p>
            <p>R$ 200,00</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-gray-500 text-4xl mb-2">Banco Itaú</p>
              <p className="text-gray-500 text-4xl">
                Ag: 0000 / Conta: 00000-0
              </p>
            </div>
            <p className="text-blue-600 mb-2 flex items-center gap-2 text-4xl mt-6">
              {" "}
              Detalhes{" "}
              <Image
                src={arrowRight}
                height={50}
                width={50}
                className="object-contain"
              />{" "}
            </p>
          </div>
        </section>
      </section>
      <div className="flex justify-center px-12 pb-8">
        <Link href={"/extratoCompleto"}>
          <button className=" border-2 border-blue-600 text-blue-600 text-4xl rounded-full px-12 py-8 items-center flex gap-5 justify-center w-full">
            Extrato Completo{" "}
            <Image
              src={arrowRight}
              height={50}
              width={50}
              className="object-contain"
            />
          </button>
        </Link>
      </div>
    </main>
  );
}
