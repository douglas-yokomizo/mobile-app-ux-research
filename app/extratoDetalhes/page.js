'use client'
import { useSearchParams } from 'next/navigation';
import HeaderNavigation from "../components/HeaderNavigation";
import arrowRight from '../assets/pagamento/arrow-right.svg';
import Image from 'next/image';
import dados from '../data/extratoDetails';
import arrowUp from '../assets/extrato/arrow-up.svg';

export default function ExtratoDetalhes() {
    const searchParams = useSearchParams();
    const mes = searchParams.get('mes') || '';

    return (
        <main className="">
            <HeaderNavigation title='Mais detalhes' />
            <section className='p-12'>
            <header className='flex justify-center items-center gap-12'>
                <h1 className='text-captions-heading text-5xl font-semibold'>{mes}/2023</h1>
                <p className='text-captions-heading'><span className='text-4xl mx-5'>Total</span><span className='text-5xl font-semibold'>R$1200,45</span></p>
            </header>
      
            {dados.map((item, index) => (
                <section key={index} className='my-12'>
                    <div className='border-green-dark border-2 bg-green-white rounded-lg w-min'>
                        <p className='text-3xl p-2 text-green-dark font-semibold'>{item.status}</p>
                    </div>

                    <div className='text-4xl flex justify-between my-5'>
                        <p>{item.nome}</p>
                        <p className='text-gray-500'>{item.data}</p>
                    </div>

                    <div className='text-5xl flex justify-between my-8'>
                        <p className='font-bold'>{item.apolice}</p>
                        <p>{item.valor}</p>
                    </div>

                    <div className='flex justify-between items-center mt-2'>
                        <div>
                            <p className='text-gray-500 text-4xl mb-2'>{item.method}</p>
                            <p className='text-gray-500 text-4xl'>{item.methodDetails}</p>
                        </div>
                        <p className='text-blue-600 mb-2 flex items-center gap-2 text-4xl mt-6'>
                            Detalhes <Image src={arrowRight} height={50} width={50} className='object-contain' />
                        </p>
                    </div>
                    <div className='border-b-2 border-gray-300 my-3'></div>
                </section>
            ))}
            </section>
            <Image src={arrowUp}  height={150} width={150} className='object-contain fixed right-0 bottom-0' />
        </main>
    );
}
