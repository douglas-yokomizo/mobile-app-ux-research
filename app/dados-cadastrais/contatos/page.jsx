"use client";
import HeaderNavigation from "@/app/components/HeaderNavigation";
import infoIcon from "@/app/assets/info-icon.svg";
import contactsIcon from "./contacts-icon.svg";
import Image from "next/image";
import editIcon from "./edit-icon.svg";
import emailIcon from "./email-icon.svg";
import ellipsisIcon from "./ellipsis-icon.svg";
import addIcon from "../../assets/add-icon.svg";
import { DrawerComponent } from "@/app/components/Drawer";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
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

export default function Contatos() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-screen bg-[#EEF5FF]">
      <HeaderNavigation title={"Contatos"} />

      <div className="px-6 pt-6 pb-10 flex flex-col justify-center items-center">
        <div className="w-[90%] space-y-32">
          <motion.div
            className="bg-[#FCFCFC] p-6 h-[10rem] items-center justify-center rounded-xl flex"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInVariants}
          >
            <div className="flex gap-6">
              <Image
                src={infoIcon}
                width={28}
                height={28}
                className="self-start mt-2"
              />
              <p className="text-3xl font-normal">
                Mantenha estes dados sempre atualizados.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="flex items-start gap-3"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInVariants}
            >
              <Image src={contactsIcon} height={58} width={58} />
              <p className="font-bold text-5xl">Telefones</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl px-12 py-12"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInVariants}
            >
              <div className="flex py-12">
                <div className="flex flex-1 space-x-[20rem]">
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Tipo</p>
                    <p className="text-2xl">Celular</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Número</p>
                    <p className="text-2xl">(11) 97887-6575</p>
                  </div>
                </div>
                <div className="w-[5rem] flex items-center justify-center">
                  <Image
                    src={editIcon}
                    height={60}
                    width={60}
                    className="self-center"
                  />
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#5E5E63]" />
              <div className="flex py-12">
                <div className="flex flex-1 space-x-[20rem]">
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Tipo</p>
                    <p className="text-2xl">Celular</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Número</p>
                    <p className="text-2xl">(11) 97887-6575</p>
                  </div>
                </div>
                <div className="w-[5rem] flex items-center justify-center">
                  <Image
                    src={ellipsisIcon}
                    height={10}
                    width={10}
                    className="self-center"
                  />
                </div>
              </div>
              <div className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer">
                <Image src={addIcon} height={30} width={30} />
                <p>Adicionar telefone</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInVariants}
            >
              <Image src={emailIcon} height={54} width={54} />
              <p className="font-bold text-5xl">E-mails</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl px-12 py-12"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInVariants}
            >
              <div className="flex py-12">
                <div className="flex flex-1 space-x-[20rem]">
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Tipo</p>
                    <p className="text-2xl">Celular</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#5E5E63] text-2xl">Número</p>
                    <p className="text-2xl">(11) 97887-6575</p>
                  </div>
                </div>
                <div className="w-[5rem] flex items-center justify-center">
                  <Image
                    src={editIcon}
                    height={60}
                    width={60}
                    className="self-center"
                  />
                </div>
              </div>
              <DrawerComponent text="Adicionar e-mail">
                <div className="flex justify-center">
                  <form className="flex flex-col w-full gap-14">
                    <Input
                      label={"E-mail"}
                      value={"joao@gmail.com"}
                      disabled
                    />
                    <div className="space-x-6 flex items-center">
                      <input
                        name="confirm"
                        id="confirm"
                        type="checkbox"
                        className="w-7 h-7 rounded-full border border-black"
                      />
                      <label htmlFor="confirm" className="text-3xl">
                        Definir como e-mail principal
                      </label>
                    </div>
                    <Button
                      text={"Salvar"}
                      onClick={() => router.push(`${pathname}/token`)}
                    />
                    <Button text={"Cancelar"} variant="secondary" />
                  </form>
                </div>
              </DrawerComponent>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
