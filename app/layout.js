import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { GameContextProvider } from "./context/GameChallenge";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${open_sans.className} antialiased`}>
				<GameContextProvider>{children}</GameContextProvider>
			</body>
		</html>
	);
}
