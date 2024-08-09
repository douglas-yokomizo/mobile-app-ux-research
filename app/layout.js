import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { GameContextProvider } from "./context/GameChallenge";
import { Suspense } from "react";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Prudential - Franchise Day",
	description:
		"O aplicativo Prudential vem aí, por isso preparamos esse jogo para a rede de franquia conhecer algumas funcionalidades do app.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${open_sans.className} antialiased`}>
				<Suspense fallback={<div>Loading...</div>}>
					<GameContextProvider>{children}</GameContextProvider>
				</Suspense>
			</body>
		</html>
	);
}
