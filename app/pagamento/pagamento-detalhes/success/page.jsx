import Image from "next/image";
import SuccessMessage from "@/app/components/SuccessMessage";
import trophy from "@/app/assets/success/trophy.svg";
import caution from "@/app/assets/success/caution2.svg";
import TitleWithIcon from "@/app/components/TitleWithIcon";

const SuccessPage = () => {
  return (
    <div>
      <SuccessMessage
        title={"Pedido de cobrança realizado com sucesso!"}
        image={trophy}
      />
      <section className="p-10">
        <div className="bg-yellow-light">
          <TitleWithIcon
            iconSrc={caution}
            title={"Solicitação feita após as 21h."}
            className="flex items-center"
          />
          <p>
            As solicitações realizadas entre 21h e 06h serão processadas após
            este horário, podendo afetar o prazo de confirmação do pagamento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SuccessPage;
