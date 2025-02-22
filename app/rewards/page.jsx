"use client";
import { useRouter } from "next/navigation";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import TitleWithIcon from "../components/TitleWithIcon";
import * as rewardsAssets from "../assets/rewards";
import Badge from "../components/Badge";
import { gold } from "../assets/homePage";
import Image from "next/image";
import RewardCard from "../components/RewardCard";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const RewardsPage = () => {
  const route = useRouter();

  return (
    <main>
      <HeaderNavigation title={"Resgatar recompensas"} />
      <Tabs titles={["Meus vouchers", "Histórico de uso"]} />
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeInVariants}
      >
        <TitleWithIcon
          title="Vouchers disponíveis"
          iconSrc={rewardsAssets.medal}
          iconAlt={"Medal icon"}
          iconHeight={60}
          className="flex items-center px-10 py-5 text-6xl font-bold"
        />
      </motion.div>
      <div className="container pl-12">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInVariants}
          className="text-3xl mt-4 mb-10"
        >
          Troque suas moedas para resgatar vouchers de nossos parceiros abaixo
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInVariants}
        >
          <Badge
            src={gold}
            alt={""}
            badgeTitle={"Saldo atual de moedas:"}
            badgeValue={"1000"}
            bgColor={"bg-gray-light"}
            className="w-[90vw] py-8 rounded-3xl"
          />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeInVariants}
        className="flex items-center text-blue-text gap-3 place-content-center my-10"
      >
        <Image
          src={rewardsAssets.questionMark}
          alt="question mark icon"
          width={50}
          height={50}
        />
        <p className="text-3xl">Como funcionam as moedas?</p>
      </motion.div>
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInVariants}
          className="flex flex-wrap justify-evenly gap-y-14"
        >
          <RewardCard
            cover={rewardsAssets.uberCover}
            title={"Uber"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
            onClick={() => route.push("/rewards/voucher")}
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
            cover={rewardsAssets.kopenhagenCover}
            title={"Kopenhagen"}
            value={"R$ 00,00"}
            coins={"Moedas fully"}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeInVariants}
          className="text-3xl text-blue-text flex items-center gap-3 place-content-center my-24"
        >
          <Image src={rewardsAssets.add} alt="add icon" className="w-10" />
          <p>Carregar mais</p>
        </motion.div>
      </section>
      <section className="bg-blue-white py-10 flex flex-col items-center justify-center">
        <div className="place-self-start pl-24">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeInVariants}
          >
            <TitleWithIcon
              title="Resumo de moedas"
              iconSrc={rewardsAssets.resume}
              iconAlt={"Medal icon"}
              iconWidth={70}
              iconHeight={70}
              className="flex text-6xl font-bold"
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={7}
          variants={fadeInVariants}
          className="container"
        >
          <p className="text-3xl my-10">
            Para consultar o extrato de moedas recebidas e resgates efetuados,
            clique no botão:
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="text-center my-6 rounded-full text-3xl w-full p-8 border-2 border-blue-text text-blue-text font-semibold">
              Acessar extrato
            </button>
          </div>
        </motion.div>
      </section>
      <section className="bg-white py-10 flex flex-col items-center justify-center">
        <div className="place-self-start pl-24">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={8}
            variants={fadeInVariants}
          >
            <TitleWithIcon
              title="Carteira Prudential"
              iconSrc={rewardsAssets.prudentialIcon}
              iconAlt={"Medal icon"}
              iconWidth={70}
              iconHeight={70}
              className="flex text-6xl font-bold"
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={9}
          variants={fadeInVariants}
          className="container "
        >
          <p className="text-3xl my-10">
            Acumule suas moedas e troque por crédito em conta com bônus!
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="text-center my-6 rounded-full text-3xl w-full p-8 border-2 border-blue-text text-blue-text font-semibold">
              Saiba mais &gt;
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default RewardsPage;
