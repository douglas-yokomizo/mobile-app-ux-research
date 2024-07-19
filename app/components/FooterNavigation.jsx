'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import menuIcon from '../assets/footerNavigation/menu.svg';
import homeIcon from '../assets/footerNavigation/home-icon.svg';
import apoliceIcon from '../assets/footerNavigation/apolices-icon.svg';
import pagamentoIcon from '../assets/footerNavigation/pagamento-icon.svg';
import coberturasIcon from '../assets/footerNavigation/coberturasIcon.svg'

export default function FooterNavigationHome() {
  const currentRoute = usePathname();

  return (
    <footer className="bg-white fixed bottom-0 px-12 py-11 w-full shadow-[0px_-16px_24px_0px_#00000033]">
      <nav className='flex gap-24 justify-center'>
        <ul className='flex gap-24 justify-center'>
          <li className={`text-center items-center list-none text-3xl flex flex-col gap-1 ${currentRoute === '/' ? 'text-blue-500' : ''}`}>
            <Link href="/">
              <div className='flex flex-col items-center cursor-pointer'>
                <Image src={homeIcon} width={80} height={80} alt="Home Icon" />
                <span>Início</span>
              </div>
            </Link>
          </li>
          {currentRoute === '/' && (
            <li className={`text-center items-center list-none text-3xl flex flex-col gap-1`}>
              <Link href="/coberturas">
                <div className='flex flex-col items-center cursor-pointer'>
                  <Image src={coberturasIcon} width={80} height={80} alt="Coberturas Icon" />
                  <span>Coberturas</span>
                </div>
              </Link>
            </li>
          )}
          {currentRoute === '/menu' && (
            <li className={`text-center items-center list-none text-3xl flex flex-col gap-1`}>
              <Link href="/apolices">
                <div className='flex flex-col items-center cursor-pointer'>
                  <Image src={apoliceIcon} width={80} height={80} alt="Apolices Icon" />
                  <span>Apólices</span>
                </div>
              </Link>
            </li>
          )}
          <li className={`text-center items-center list-none text-3xl flex flex-col gap-1 ${currentRoute === '/pagamento' ? 'text-blue-500' : ''}`}>
            <Link href="/pagamento">
              <div className='flex flex-col items-center cursor-pointer'>
                <Image src={pagamentoIcon} width={80} height={80} alt="Pagamento Icon" />
                <span>Pagamento</span>
              </div>
            </Link>
          </li>
          <li className={`text-center items-center list-none text-3xl flex flex-col gap-1 ${currentRoute === '/menu' ? 'text-blue-500' : ''}`}>
            <Link href="/menu">
              <div className='flex flex-col items-center cursor-pointer'>
                <Image src={menuIcon} width={80} height={80} alt="Menu Icon" />
                <span>Menu</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
