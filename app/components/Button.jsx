export function Button({ variant = "primary", text, onClick, ...props }) {
  return (
    <button
      className={`w-full font-semibold p-6 rounded-full text-3xl transition-colors duration-5000 ${
        variant === "disabled"
          ? "bg-[#F0EFF2] text-[#B4B4BB]"
          : "bg-[#226CF2] text-white"
      }`}
      type="button"
      {...(variant === "disabled" ? { disabled: true } : {})}
      {...props}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
