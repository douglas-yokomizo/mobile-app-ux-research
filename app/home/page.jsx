import Image from "next/image";
import FooterNavigationHome from "../components/FooterNavigation";
import avatar from "../assets/avatar.png";
import alertIcon from "../assets/homePage/alert.svg";
import handHeart from "../assets/homePage/Hand-heart.svg";
import globe from "../assets/homePage/globe.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center w-full">
        <div className="bg-blue-dark w-full text-white p-16 flex flex-col gap-12">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Image src={avatar} alt="avatar image" height={120} width={120} />
              <div className="font-bold">
                <h2 className="text-4xl mb-4">Olá, João Pedro</h2>
                <h3 className="text-2xl">Meu perfil</h3>
              </div>
            </div>
            <div className="relative">
              <Image src={alertIcon} alt="alert icon" height={60} width={60} />
              <span className="absolute top-0 right-0 bg-yellow-400 w-7 h-7 text-black rounded-full text-lg text-center font-bold">
                <p>2</p>
              </span>
            </div>
          </header>
          <nav>
            <ul className="flex gap-10 font-bold text-2xl">
              <li className="max-w-fit w-full text-center">
                <div className="bg-blue-50 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
                  <Image
                    src={handHeart}
                    alt="hand heart icon"
                    height={56}
                    width={56}
                  />
                </div>
                <p>
                  Vida <br />
                  Individual
                </p>
              </li>
              <li className="max-w-fit w-full text-center">
                <div className="bg-blue-900 rounded-full mb-4 w-36 h-36 flex items-center justify-center">
                  <Image src={globe} alt="globe icon" height={56} width={56} />
                </div>
                <p>
                  Vida <br /> Empresarial
                </p>
              </li>
            </ul>
          </nav>

          <div className="relative max-h-[90vh] overflow-hidden">
            <nav className="overflow-hidden h-full">
              <ul className="flex gap-6">
                <li className="snap-center rounded-2xl shrink-0 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] bg-blue-100 text-black p-8">
                  <div className="flex items-center justify-between font-bold">
                    <h2 className="text-5xl">Apólice do Carlos</h2>
                    <span className="text-3xl bg-green-100 text-green-950 px-4 py-3 border-2 border-green-950 rounded-md">
                      Pago
                    </span>
                  </div>
                  <div className="flex justify-between text-3xl my-10">
                    <div>
                      <h4 className="font-semibold mb-4">Apólice</h4>
                      <p>001543914</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4"> Data de vigência</h4>
                      <p>10/10/2023 à 10/10/2028</p>
                    </div>
                  </div>
                  <Link href={"/"} className="font-bold text-blue-500">
                    Detalhes da apólice
                  </Link>
                </li>
                <li className="snap-center rounded-2xl shrink-0 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] bg-blue-100 text-black p-8">
                  <div className="flex items-center justify-between font-bold">
                    <h2 className="text-5xl">Apólice do Carlos</h2>
                    <span className="text-3xl bg-green-100 text-green-950 px-4 py-3 border-2 border-green-950 rounded-md">
                      Pago
                    </span>
                  </div>
                  <div className="flex justify-between text-3xl my-10">
                    <div>
                      <h4 className="font-semibold mb-4">Apólice</h4>
                      <p>001543914</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4"> Data de vigência</h4>
                      <p>10/10/2023 à 10/10/2028</p>
                    </div>
                  </div>
                  <Link href={"/"} className="font-bold text-blue-500">
                    Detalhes da apólice
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <h2 className="my-20 text-5xl text-black bg-white">Acesso Rápido</h2>
      </main>
      <FooterNavigationHome />
    </>
  );
}
