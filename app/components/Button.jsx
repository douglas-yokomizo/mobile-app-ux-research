import Image from "next/image";

export function Button({
  variant = "primary",
  text,
  onClick,
  icon,
  iconSize,
  iconPosition = "left",
  iconAlt = "",
  className = "",
  ...props
}) {
  const baseClasses =
    "w-full font-semibold p-6 rounded-full text-3xl transition-colors duration-5000 flex items-center justify-center";
  const variantClasses =
    variant === "disabled" ? "bg-[#F0EFF2] text-[#B4B4BB]" : "bg-[#226CF2]";
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button
      className={combinedClasses}
      type="button"
      {...(variant === "disabled" ? { disabled: true } : {})}
      {...props}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt={iconAlt}
          className="mr-2"
          height={iconSize}
          width={iconSize}
        />
      )}
      {text}
      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt={iconAlt}
          className="ml-2"
          height={iconSize}
          width={iconSize}
        />
      )}
    </button>
  );
}
