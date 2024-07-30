import Image from "next/image";

const Badge = ({ src, alt, badgeTitle, badgeValue, bgColor, ...props }) => {
  const { className } = props;

  return (
    <div className={`${className} ${bgColor} flex items-center gap-3 p-3 py-4`}>
      {src && <Image src={src} alt={alt} width={28} height={28} />}
      <p className="text-3xl">
        {badgeTitle} <strong className="font-bold">{badgeValue}</strong>
      </p>
    </div>
  );
};

export default Badge;
