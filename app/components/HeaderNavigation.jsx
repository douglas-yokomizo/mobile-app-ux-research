'use client'
import { useRouter } from 'next/navigation';
import arrowLeft from '../assets/pagamento/arrow-left.svg';
import Image from 'next/image';

function HeaderNavigation({ title }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="bg-blue-dark text-white flex py-8 gap-3 items-center px-5">
      <Image
        src={arrowLeft}
        height={90}
        width={90}
        className="object-contain cursor-pointer"
        onClick={handleBack}
      />
      <h1 className="text-5xl font-semibold">{title}</h1>
    </header>
  );
}

export default HeaderNavigation;
