"use client";
import Image from "next/image";
import SuccessMessage from "@/app/components/SuccessMessage";
import trophy from "@/app/assets/success/trophy.svg";
import caution from "@/app/assets/success/caution2.svg";
import money from "@/app/assets/success/money.svg";
import dados from "@/app/data/extratoDetails.js";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const apoliceData = dados.find((item) => item.status === "Em Atraso");
  const router = useRouter();

  if (!apoliceData) {
    return <p>Pedido não realizado</p>;
  }

  return (
    <div className="mx-auto p-6">
      <SuccessMessage
        title={"Pedido de cobrança realizado com sucesso!"}
        image={trophy}
      />
      <section className="mt-10 p-10">
        <div className="bg-yellow-light p-10 relative text-3xl rounded-2xl">
          <Image
            src={caution}
            alt="caution icon"
            className="absolute top-9 left-10"
            width={48}
            height={48}
          />
          <div className="pl-20">
            <h2 className="text-[#1F1F24] font-bold mb-4">
              Solicitação feita após às 21h
            </h2>
            <p>
              As solicitações realizadas entre 21h e 06h serão processadas após
              este horário, podendo afetar o prazo de confirmação do pagamento.
            </p>
          </div>
        </div>
        <div className="bg-gray-light flex flex-col items-center mt-12 h-[25vh] gap-10 p-10 relative text-3xl rounded-2xl">
          <Image
            src={money}
            alt="caution icon"
            className=""
            width={80}
            height={80}
          />
          <h2 className="font-bold text-5xl mb-4">Cobrança em andamento</h2>
          <p>
            As solicitações realizadas entre 21h e 06h serão processadas após
            este horário, podendo afetar o prazo de confirmação do pagamento.
          </p>
        </div>
      </section>

      <section className="p-10">
        <div className="bg-gray-light p-10 rounded-2xl">
          <section className="p-10 border-b-2 border-divider">
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

          <section className="pl-10">
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
      </section>
      <button
        onClick={() => router.push("/")}
        className="w-full rounded-full transition-all ease-in text-blue-text text-3xl font-semibold hover:text-white hover:bg-blue-text place-content-center p-8 border-2 border-blue-text"
      >
        Fechar
      </button>
    </div>
  );
};

export default SuccessPage;
