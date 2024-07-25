"use client";
import { useState } from "react";
import Image from "next/image";
import brokers from "@/app/data/brokers";
import { arrow } from "../assets/homePage";
import { policy, whatsapp2 } from "../assets/brokers";

const BrokerCard = ({ broker }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleCard}
      className="broker-card bg-blue-white shadow-lg rounded-2xl p-12 mb-4"
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleCard}
      >
        <div className="flex items-center">
          <Image
            src={broker.avatar}
            alt={broker.name}
            width={120}
            height={120}
            className="rounded-full"
          />
          <h3 className="ml-4 text-5xl">{broker.name}</h3>
        </div>
        <Image
          src={arrow}
          alt="Expand"
          width={48}
          height={48}
          className={`transform ${isOpen ? "-rotate-90" : "rotate-[90deg]"}`}
        />
      </div>
      {isOpen && (
        <div className=" mt-8">
          <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl mb-8 text-3xl">
            <p>{broker.company}</p>
            <div className="flex items-center gap-4">
              <h4 className="font-bold">CNPJ: </h4>
              <p>{broker.cnpj}</p>
            </div>
          </div>
          <div className="flex flex-col bg-white p-8 rounded-2xl mb-8 gap-8 text-3xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <h4 className="font-bold">Email:</h4>
                  <p>{broker.email}</p>
                </div>
                <div className="flex items-center mt-12 gap-4">
                  <h4 className="font-bold">Telefone:</h4>
                  <p>{broker.phone}</p>
                </div>
              </div>
              <Image src={whatsapp2} alt="WhatsApp" width={100} height={100} />
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl">
            <div className="flex items-center gap-5">
              <Image src={policy} alt="Policies" width={56} height={56} />
              <h4 className="text-4xl font-bold ml-2">Apólices gerenciadas</h4>
            </div>
            <ul className="mt-10 text-3xl">
              {broker.policies.map((policy, index) => (
                <li key={index} className="mt-10">
                  {policy.name}:{" "}
                  <span className="font-bold">{policy.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const BrokersList = () => {
  return (
    <div>
      {brokers.map((broker, index) => (
        <BrokerCard key={index} broker={broker} />
      ))}
    </div>
  );
};

export default BrokersList;
