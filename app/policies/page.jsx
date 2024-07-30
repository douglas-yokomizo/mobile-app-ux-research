import Image from "next/image";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import toggle from "../assets/pagamento/toggle.svg";
import resumeCheck from "../assets/resumeCheck.svg";

const PoliciesPage = () => {
  return (
    <>
      <HeaderNavigation title={"Apólices"} />
      <Tabs titles={["Minhas apólices", "Demais apólices"]} />
      <div className="bg-blue-white h-screen py-16">
        <p className="flex items-center justify-center gap-8 text-4xl pb-12">
          Exibir apólice inativas{" "}
          <Image src={toggle} alt="toggle image" height={36} />
        </p>
      </div>
    </>
  );
};

export default PoliciesPage;
