'use client';
import Link from "next/link";
import HeaderNavigation from "../components/HeaderNavigation";
import Tabs from "../components/Tabs";
import Image from "next/image";
import arrow from "../assets/menu/arrow.svg";
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2, // Delay based on the index
    },
  }),
};

export default function DadosCadastrais() {
  return (
    <div>
      <HeaderNavigation title={"Dados Cadastrais"} />
      <div className="p-6 space-y-10">
        <Tabs
          titles={["Vida individual", "Vida empresarial"]}
          spaceBetween={false}
        />
        <div>
          <ul className="*:py-6 *:text-[2.6rem]">
            {[
              { text: "Dados pessoais", href: null },
              { text: "Contatos", href: "/dados-cadastrais/contatos" },
              { text: "Endereços", href: "/enderecos" },
              { text: "Dados de pagamento", href: null },
            ].map((item, index) => (
              <motion.li
                key={item.text}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={fadeInVariants}
              >
                {item.href ? (
                  <Link href={item.href}>
                    <div className="flex items-center font-bold py-6">
                      <p>{item.text}</p>
                      <Image
                        src={arrow}
                        width={40}
                        height={40}
                        className="mr-12 fixed right-0"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center font-bold py-6">
                    <p>{item.text}</p>
                    <Image
                      src={arrow}
                      width={40}
                      height={40}
                      className="mr-12 fixed right-0"
                    />
                  </div>
                )}
                <div className="border-b-2 border-gray-300 my-5" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
