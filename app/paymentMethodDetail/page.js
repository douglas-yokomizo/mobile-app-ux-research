"use client";

import { useSearchParams } from 'next/navigation';
import HeaderNavigation from '../components/HeaderNavigation';
import Image from 'next/image';
import data from '../data/methodsPayment';
import coin from '../assets/pagamento/coin.svg';
import edit from '../assets/pagamento/edit.svg';
import polices from '../assets/pagamento/polices.svg';
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

export default function PaymentMethodDetail() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || '';

    const item = data.find((item) => item.id.toString() === id);

    if (!item) {
        return (
            <main className="">
                <HeaderNavigation title='Mais detalhes' />
                <section className='p-12'>
                    <p className='text-4xl'>Item não encontrado</p>
                </section>
            </main>
        );
    }
    const itemName = item.name === 'Mastercard' ? 'Mastercard Crédito' : item.name;

    return (
        <main className="bg-blue-white min-h-screen">
            <HeaderNavigation title='Mais detalhes' />
            <section className='p-12'>
                <motion.header
                    className='flex items-center gap-12'
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={fadeInVariants}
                >
                    <Image src={coin} height={100} width={100} className='object-contain' />
                    <h1 className='font-bold text-5xl'>Forma de Pagamento</h1>
                </motion.header>

                <motion.section
                    className='bg-white rounded-2xl px-6 py-12 my-12'
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={fadeInVariants}
                >
                    <div className='flex items-center gap-12'>
                        <div className='p-2 border-gray-200 border-2 rounded-xl'>
                            <Image src={item.logo} height={100} width={100} className='object-contain' />
                        </div>
                        <p className='font-bold text-5xl'>{itemName}</p>
                    </div>
                    <div className='flex justify-between text-4xl items-center pt-12 px-2'>
                        {item.details.map((detail, index) => (
                            <div key={index}>
                                <p className='text-gray-500 mb-2'>{detail.label}</p>
                                <p>{detail.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex justify-center mt-12'>
                        <button className='border-2 border-blue-500 text-blue-500 rounded-full text-4xl py-6 px-12 flex items-center'>
                            <Image src={edit} height={50} width={50} className='object-contain' />
                            Alterar forma de pagamento</button>
                    </div>
                </motion.section>

                <motion.header
                    className='flex items-center gap-12'
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeInVariants}
                >
                    <Image src={polices} height={100} width={100} className='object-contain' />
                    <h1 className='font-bold text-5xl'>Apólices associadas a esta <br /> forma de pagamento</h1>
                </motion.header>
                <div>
                    {item.policies.map((policy, index) => (
                        <motion.div
                            key={index}
                            className='bg-white rounded-2xl px-6 py-12 my-12'
                            initial="hidden"
                            animate="visible"
                            custom={index + 3}
                            variants={fadeInVariants}
                        >
                            <div className='flex justify-between'>
                                <p className='text-4xl text-captions-heading font-bold'>{policy.name}</p>
                                <div className='border-green-dark border-2 bg-green-white rounded-lg w-min'>
                                    <p className='text-4xl p-2 text-green-dark font-semibold'>Pago</p>
                                </div>
                            </div>
                            <p className='text-3xl text-gray-500'>Nome do segurado</p>
                            <p className='text-3xl '>{policy.insured}</p>

                            <div className='flex gap-12 my-6'>
                                <div>
                                    <p className='text-3xl text-gray-500'>Apólice</p>
                                    <p className='text-3xl '>{policy.code}</p>
                                </div>
                                <div>
                                    <p className='text-3xl text-gray-500'>Valor</p>
                                    <p className='text-3xl '>{policy.valuePolicy}</p>
                                </div>
                            </div>

                            <div className='flex gap-12 my-6'>
                                <div>
                                    <p className='text-3xl text-gray-500'>Frequência</p>
                                    <p className='text-3xl'>{policy.frequency}</p>
                                </div>
                                <div>
                                    <p className='text-3xl text-gray-500'>Dia de vencimento</p>
                                    <p className='text-3xl '>{policy.dueDay}</p>
                                </div>
                            </div>

                            <div className='w-[full] flex justify-center mt-12'>
                                <button className='border-2 border-blue-500 text-blue-500 rounded-full text-4xl py-6 px-32 flex items-center'>
                                    <Image src={edit} height={50} width={50} className='object-contain' />
                                    Alterar frequência
                                </button>
                            </div>

                            <div className='w-full flex justify-center mt-12'>
                                <button className='border-2 border-blue-500 text-blue-500 rounded-full text-4xl py-6 px-12 flex items-center'>
                                    <Image src={edit} height={50} width={50} className='object-contain' />
                                    Alterar forma de pagamento
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
