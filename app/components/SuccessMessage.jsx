"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SuccessMessage = ({ title, image }) => {
  const route = useRouter();

  return (
    <>
      <div className="flex pr-10 pt-14 justify-end text-6xl text-blue-text">
        <button onClick={() => route.push("/")}>X</button>
      </div>
      <div className="px-10">
        <div className="flex items-center justify-between border-b-2 border-divider p-10 gap-8">
          <Image src={image} alt="info icon" className="w-40" />
          <h1 className="text-6xl font-bold">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
