import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import TitleWithIcon from "../components/TitleWithIcon";

const RewardsPage = () => {
  return (
    <>
      <HeaderNavigation title={"Resgatar recompensas"} />
      <Tabs titles={["Recompensas disponíveis", "Histórico de recompensas"]} />
      <TitleWithIcon title="Vourchers disponíveis" />
    </>
  );
};

export default RewardsPage;
