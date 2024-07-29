import Image from "next/image";
import { arrow } from "../assets/homePage";

export function Input({ label, value, drop, ...props }) {
  return (
    <div className="flex relative w-full items-center">
      <input
        type="text"
        className={`appearance-none w-full h-28 rounded-2xl px-6 peer border-2 text-3xl ${
          props.disabled && "text-gray-text"
        }`}
        value={value}
        {...props}
        required
      />
      {drop && (
        <Image
          src={arrow}
          alt="arrow icon"
          className="absolute right-4 pointer-events-none rotate-90
            filter invert-[33%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[90%] contrast-[90%]"
          height={40}
        />
      )}
      <label className="absolute left-6 text-[#5E5E63] pr-4 pl-2 peer-focus:text-black peer-valid:text-black peer-focus:-top-[15px] peer-empty:-top-[15px] peer-valid:-top-[15px] peer-focus:transition-all bg-white text-2xl rounded-full">
        {label}
      </label>
    </div>
  );
}
