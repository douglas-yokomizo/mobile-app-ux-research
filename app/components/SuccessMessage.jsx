"use client";
import Image from "next/image";
import infoBalloon from "../assets/success/infoBalloon.svg";
import { useRouter } from "next/navigation";

const SuccessMessage = () => {
  const route = useRouter();

  return (
    <>
      <div className="flex pr-10 pt-14 justify-end text-6xl text-blue-text">
        <button onClick={() => route.push("/")}>X</button>
      </div>
      <div className="px-10">
        <div className="flex items-center justify-between border-b-2 border-divider p-10 gap-8">
          <Image src={infoBalloon} alt="info icon" className="w-36" />
          <h1 className="text-6xl font-bold">Voucher resgatado com sucesso!</h1>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
