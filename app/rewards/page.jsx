import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import TitleWithIcon from "../components/TitleWithIcon";
import * as rewardsAssets from "../assets/rewards";
import Badge from "../components/Badge";
import { gold } from "../assets/homePage";
import Image from "next/image";
import RewardCard from "../components/RewardCard";

const RewardsPage = () => {
  return (
    <main>
      <HeaderNavigation title={"Resgatar recompensas"} />
      <Tabs titles={["Recompensas disponíveis", "Histórico de recompensas"]} />
      <TitleWithIcon
        title="Vouchers disponíveis"
        iconSrc={rewardsAssets.medal}
        iconAlt={"Medal icon"}
        iconWidth={50}
        iconHeight={50}
        className="flex px-5"
      />
      <div className="container pl-8">
        <p className="text-3xl my-10">
          Troque suas moedas para resgatar vouchers de nossos parceiros abaixo
        </p>
        <Badge
          src={gold}
          alt={""}
          badgeTitle={"Saldo atual de moedas:"}
          badgeValue={"1000"}
          bgColor={"bg-gray-light"}
          className="w-[90vw] py-8 rounded-3xl"
        />
      </div>
      <div className="flex items-center text-blue-text gap-3 place-content-center my-10">
        <Image
          src={rewardsAssets.questionMark}
          alt="question mark icon"
          width={50}
          height={50}
        />
        <p className="text-3xl">Como funcionam as moedas?</p>
      </div>
      <section>
        <div className="flex flex-wrap justify-evenly gap-y-14">
          <RewardCard
            cover={rewardsAssets.uberCover}
            title={"Uber"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
          />
          <RewardCard
            cover={rewardsAssets.xboxCover}
            title={"Xbox"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
          />
          <RewardCard
            cover={rewardsAssets.ziftCover}
            title={"Zift"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
          />
          <RewardCard
            cover={rewardsAssets.ifoodCover}
            title={"Ifood"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
          />
        </div>
        <div className="text-3xl text-blue-text flex items-center gap-3 place-content-center my-24">
          <Image src={rewardsAssets.add} alt="add icon" className="w-10" />
          <p>Carregar mais</p>
        </div>
      </section>
      <section className="bg-blue-white py-10 flex flex-col items-center justify-center">
        <div className="place-self-start">
          <TitleWithIcon
            title="Resumo de moedas"
            iconSrc={rewardsAssets.resume}
            iconAlt={"Medal icon"}
            iconWidth={70}
            iconHeight={70}
            className="flex pl-24"
          />
        </div>
        <div className="container ">
          <p className="text-3xl my-10">
            Para consultar o extrato de moedas recebidas e resgates efetuados,
            clique no botão:
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="text-center my-6 rounded-full text-3xl w-full p-8 border-2 border-blue-text text-blue-text font-semibold">
              Acessar extrato
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 flex flex-col items-center justify-center">
        <div className="place-self-start">
          <TitleWithIcon
            title="Carteira Prudential"
            iconSrc={rewardsAssets.prudentialIcon}
            iconAlt={"Medal icon"}
            iconWidth={70}
            iconHeight={70}
            className="flex pl-24"
          />
        </div>
        <div className="container ">
          <p className="text-3xl my-10">
            Acumule suas moedas e troque por crédito em conta com bônus!
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="text-center my-6 rounded-full text-3xl w-full p-8 border-2 border-blue-text text-blue-text font-semibold">
              Saiba mais &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RewardsPage;
