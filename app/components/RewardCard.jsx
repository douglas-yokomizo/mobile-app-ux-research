import Image from "next/image";
import Badge from "./Badge";
import { gold } from "../assets/homePage";

const RewardCard = ({ cover, title, value, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl overflow-hidden w-2/5 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-96">
        <Image src={cover} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-9 bg-gray-light">
        <h3 className="text-4xl font-bold mb-2">{title}</h3>
        <p className="text-3xl my-8">
          Valor do voucher:{" "}
          <span className="text-4xl block font-bold mt-4 text-blue-bold">
            {value}
          </span>
        </p>
        <div className="mt-4 text-3xl">
          <p>Moedas Fully</p>
          <Badge
            src={gold}
            className="bg-blue-dark w-2/5 text-white rounded-2xl mt-4 py-2 place-content-center"
            badgeValue={"000"}
          />
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
