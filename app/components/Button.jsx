export function Button({ variant = "primary", text, ...props }) {
	return variant === "primary" ? (
		<button
			className="w-full bg-[#226CF2] p-6 rounded-full text-white text-3xl"
			type="button"
			{...props}
		>
			{text}
		</button>
	) : (
		<button
			className="w-full p-6 rounded-full text-[#226CF2] text-3xl"
			type="button"
			{...props}
		>
			{text}
		</button>
	);
}
