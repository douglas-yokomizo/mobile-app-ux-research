import HeaderNavigation from "../components/HeaderNavigation";
import BrokersList from "../components/BrokerCard";

const BrokersPage = () => {
  return (
    <div>
      <HeaderNavigation title="Corretorres franqueados" />
      <section>
        <BrokersList />
      </section>
    </div>
  );
};

export default BrokersPage;
