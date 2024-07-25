"use client";
import Image from "next/image";
import dados from "../../data/extratoDetails.js";
import HeaderNavigation from "@/app/components/HeaderNavigation.jsx";
import blueWarning from "@/app/assets/pagamento/blueWarning.svg";
import editIcon from "@/app/assets/pagamento/edit.svg";
import downloadIcon from "@/app/assets/pagamento/download.svg";
import { useRouter } from "next/navigation.js";

export default function ApoliceAtrasoDetalhes() {
  const apoliceData = dados.find((item) => item.status === "Em Atraso");
  const router = useRouter();

  if (!apoliceData) {
    return <p>Apólice não encontrada.</p>;
  }

  return (
    <>
      <HeaderNavigation title={"Detalhes"} />
      <div className="p-12">
        <section className="pb-10 border-b-2 border-divider">
          <div className="flex justify-between items-center text-3xl mb-20">
            <div>
              <h3 className="text-4xl mb-4 font-bold">{apoliceData.apolice}</h3>
              <p className="text-gray-text">Apólice: 001542122</p>
            </div>
            <div className="bg-red-error text-red-base font-bold p-3 rounded-md border-2 border-red-base">
              {apoliceData.status}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-14 py-10 bg-gray-light">
            <Image
              src={blueWarning}
              alt="warning icon"
              height={96}
              width={96}
            />
            <h1 className="text-5xl font-bold mb-16 mt-12">
              Pagamento não concluído
            </h1>
            <p className="text-3xl pb-8 border-b-2 border-divider">
              Para evitar a suspensão da sua apólice, refaça a cobrança na sua
              forma de pagamento ou efetue o pagamento do boleto com o valor em
              atraso.
            </p>
            <p className="place-self-start text-3xl text-gray-text pt-8 pb-10">
              Forma de pagamento
              <span className="block text-black">
                {apoliceData.method} - {apoliceData.methodDetails}
              </span>
            </p>
            <button
              onClick={() =>
                router.push("/pagamento/pagamento-detalhes/success")
              }
              className="w-full text-3xl mb-10 bg-blue-text p-4 text-white font-semibold rounded-full"
            >
              Refazer cobrança
            </button>
            <button className="w-full flex items-start justify-center gap-2 text-3xl p-4 text-blue-text font-semibold rounded-full border-2 border-blue-text">
              <Image
                src={downloadIcon}
                alt="download icon"
                width={40}
                height={40}
              />
              <span>Baixar boleto em atraso</span>
            </button>
          </div>
          <button className="w-full mt-10 flex items-center gap-2 justify-center text-3xl p-4 text-blue-text font-semibold rounded-full border-2 border-blue-text">
            <Image src={editIcon} alt="edit icon" width={40} height={40} />
            <span>Alterar forma de pagamento</span>
          </button>
        </section>

        <section className="py-10 border-b-2 border-divider">
          <h2 className="text-4xl font-bold mb-10">Detalhes do valor</h2>
          <p className="text-gray-text text-3xl my-8">
            Valor total
            <span className="block text-3xl mt-3 text-black">
              {apoliceData.valor}
            </span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Valor líquido
            <span className="block text-3xl mt-3 text-black">
              {(() => {
                const valorString = apoliceData.valor;
                const valorNumerico = parseFloat(
                  valorString
                    .replace("R$", "")
                    .replace(".", "")
                    .replace(",", ".")
                );
                const valorLiquido = valorNumerico - 1;
                return valorLiquido.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                });
              })()}
            </span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Multa
            <span className="block text-3xl mt-3 text-black">R$ 0,00</span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Juros
            <span className="block text-3xl mt-3 text-black">R$ 0,00</span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Correção monetária
            <span className="block text-3xl mt-3 text-black">R$ 0,00</span>
          </p>
          <p className="text-gray-text text-3xl mt-8">
            IOF
            <span className="block text-3xl mt-3 text-black">R$ 1,00</span>
          </p>
        </section>

        <section>
          <p className="text-gray-text text-3xl my-8">
            Nome do segurado
            <span className="block text-3xl mt-3 text-black">
              {apoliceData.nome}
            </span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Forma de pagamento
            <span className="block text-3xl mt-3 text-black">
              {apoliceData.method} - {apoliceData.methodDetails}
            </span>
          </p>
          <p className="text-gray-text text-3xl my-8">
            Data de vencimento
            <span className="block text-3xl mt-3 text-black">
              {apoliceData.data}
            </span>
          </p>
          <p className="text-gray-text text-3xl mt-8">
            Mês de referência
            <span className="block text-3xl mt-3 text-black">
              {" "}
              {(() => {
                const dataString = apoliceData.data;
                const [dia, mes, ano] = dataString.split("/");
                return `${mes}/${ano}`;
              })()}
            </span>
          </p>
        </section>
      </div>
    </>
  );
}
