'use client';
import { useSearchParams } from 'next/navigation';
import HeaderNavigation from '../components/HeaderNavigation';
import Image from 'next/image';
import data from '../data/methodsPayment';
import coin from '../assets/pagamento/coin.svg'
import edit from '../assets/pagamento/edit.svg'
import polices from '../assets/pagamento/polices.svg'
import { useGame } from "../hooks/useGame";
import { useEffect } from 'react';

export default function PaymentMethodDetail() {
    const { finishGame } = useGame();
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || '';

    const item = data.find((item) => item.id.toString() === id);

    useEffect(() => {
        if (item.id = 1) {
            finishGame()
        }
    })

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
            <section className='p-12 '>
                <header className='flex  items-center gap-12'>
                    <Image src={coin} height={100} width={100} className='object-contain' /> <h1 className='font-bold text-5xl'>Forma de Pagamento</h1>
                </header>

                <section className='bg-white rounded-2xl px-6 py-12 my-12'>
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
                </section>


                <header className='flex  items-center gap-12'>
                    <Image src={polices} height={100} width={100} className='object-contain' /> <h1 className='font-bold text-5xl'>Apólices associadas a esta <br /> forma de pagamento</h1>
                </header>
                <div>
                    {item.policies.map((policy, index) => (
                        <div key={index} className='bg-white rounded-2xl px-6 py-12 my-12'>
                            <div className='flex justify-between'>
                                <p className='text-4xl text-captions-heading font-bold'>{policy.name}</p>
                                <div className='border-green-dark border-2 bg-green-white rounded-lg w-min'>
                                    <p className='text-4xl p-2 text-green-dark font-semibold'>Pago</p>
                                </div>
                            </div>
                            <p className='text-3xl text-gray-500'>Nome do segurado</p>
                            <p className='text-3xl '>{policy.insured}</p>

                            <div className='flex  gap-12 my-6'>
                                <div>
                                    <p className='text-3xl text-gray-500'>Apólice</p>
                                    <p className='text-3xl '>{policy.code}</p>
                                </div>
                                <div>
                                    <p className='text-3xl text-gray-500'>Valor</p>
                                    <p className='text-3xl '>{policy.valuePolicy}</p>
                                </div>
                            </div>

                            <div className='flex  gap-12 my-6'>
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
                                    Alterar frequência</button>
                            </div>

                            <div className='w-full flex justify-center mt-12'>
                                <button className='border-2 border-blue-500 text-blue-500 rounded-full text-4xl py-6 px-12 flex items-center'>
                                    <Image src={edit} height={50} width={50} className='object-contain' />
                                    Alterar forma de pagamento</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
