export function Input({ label, value, ...props }) {
	return (
		<div className="flex relative w-full items-center">
			<input
				type="text"
				className="appearance-none w-full h-28 rounded-2xl px-6 peer border-2 text-3xl"
				value={value}
				{...props}
				required
			/>
			<label className="absolute left-6 text-[#5E5E63] peer-focus:text-black peer-valid:text-black peer-focus:-top-[15px] peer-empty:-top-[15px] peer-valid:-top-[15px] peer-focus:transition-all bg-white text-2xl rounded-full">
				{label}
			</label>
		</div>
	);
}
