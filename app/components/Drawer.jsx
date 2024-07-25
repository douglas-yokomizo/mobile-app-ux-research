import { Drawer } from "vaul";
import addIcon from "../assets/add-icon.svg";
import close from "../assets/close.svg";
import Image from "next/image";

export function DrawerComponent({ children, ...props }) {
	const { Root, Trigger, Portal, Content, Overlay, Title, Close } = Drawer;
	return (
		<Root>
			<Trigger asChild>
				<button
					className="flex justify-center p-6 gap-2 items-center border border-blue-400 rounded-full text-2xl text-[#226CF2] font-bold cursor-pointer w-full"
					type="button"
				>
					<Image src={addIcon} height={30} width={30} />
					<p>{props.text}</p>
				</button>
			</Trigger>
			<Portal>
				<Overlay className="fixed inset-0 bg-black/40" />
				<Content className="bg-zinc-100 flex flex-col  rounded-t-2xl mt-24 fixed bottom-0 left-0 right-0 h-[40%]">
					<div className="py-6 px-16 bg-white rounded-t-2xl flex-1">
						<div className="mx-auto w-28 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
						<Title className="text-5xl font-bold flex items-center justify-between mt-16">
							{props.text}{" "}
							<Close asChild>
								<button type="button" className="font-thin">
									<Image src={close} height={40} width={40} />
								</button>
							</Close>
						</Title>
						<div className="w-full h-0.5 bg-[#CECED4] my-10" />
						{children}
					</div>
				</Content>
			</Portal>
		</Root>
	);
}
