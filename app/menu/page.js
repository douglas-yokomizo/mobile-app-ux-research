import Image from 'next/image';
import avatar from '../assets/edit-avatar.png';
import arrow from '../assets/menu/arrow.svg';
import sair from '../assets/menu/sair.svg';

import acionarSeguro from '../assets/menu/acionar-seguro.svg';
import acompanharSolucoes from '../assets/menu/acompanhar-solucoes.svg';
import apolices from '../assets/menu/apolices.svg';
import atendimento from '../assets/menu/atendimento.svg';
import beneficiarios from '../assets/menu/beneficiarios.svg';
import compartilhar from '../assets/menu/compartilhar-gerenciar.svg';
import dados from '../assets/menu/dados-cadastrais.svg';
import pagamento from '../assets/menu/pagamento.svg';

import FooterNavigation from "../components/FooterNavigation";
import Link from 'next/link';

export default function Menu() {
    return (
      <main className="">
        <header className="top-0  bg-blue-dark w-full p-5">
            <div className='flex justify-between gap-[30rem]'>
                <h1 className="p-12 text-5xl text-white">Menu</h1>
                <h1 className="p-12 text-5xl text-white">x</h1>
            </div>
        <div className='px-5 pb-4 flex items-center gap-4'>
            <Image src={avatar} height={200} width={200} className='object-contain' />
            <div>
                <p className='text-white text-4xl'>João da Costa Rodrigues</p> //TODO: puxar o nome no supabase do usuario
                <p className='text-white text-3xl'>182.475.858-99</p>
                <p className='text-white text-3xl'>28 Anos (28/01/1993)</p>
            </div>
        </div>
        </header>
        <nav>
        <ul className='flex flex-col p-12'>
          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
                <Image src={acionarSeguro} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Acionar Seguro</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>
          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={acompanharSolucoes} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p >Acompanhar solicitação</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={apolices} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Apólices</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={atendimento} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Atendimento</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={beneficiarios} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Beneficiários</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={compartilhar} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Compartilhar e gerenciar acessos</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={dados} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Dados cadastrais</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 my-5'></div>

          <li>
            <Link href="/" >
              <div className='flex items-center text-3xl p-1'>
              <Image src={pagamento} width={80} height={80} alt="Menu Icon" className='mr-12'/>
                <p>Pagamento</p>
                <Image src={arrow} width={40} height={40} className='mr-12 fixed right-0'/>
              </div>
            </Link>
          </li>
          <div  className='border-b-2 border-gray-300 mt-4 mb-0'></div>
          </ul>
        </nav>
        <div className='flex justify-center'>
        <button className='flex px-64 py-4 text-4xl gap-2 items-center text-blue-500 border-blue-500 border-2 rounded-full'> <Image src={sair} width={40} height={40} /> Sair do aplicativo</button>
        </div>
        <div className='flex justify-center'>
        <p className='flex my-8 text-4xl gap-2 items-center text-blue-500'>Políticas de privacidade e Termos de uso</p>
        </div>
          <FooterNavigation/>
      </main>
    );
  }
  