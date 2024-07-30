import { Button } from "@/app/components/Button";

const isReactComponent = (value) => {
  return (
    value && value.$$typeof && value.$$typeof === Symbol.for("react.element")
  );
};

const InfoCard = ({
  items,
  title,
  icon,
  status,
  bgColor = "bg-gray-light",
  className,
  showButton = false,
  buttonText = "",
  buttonIcon,
  buttonClassName = "", // Adicione esta linha
  ...props
}) => {
  return (
    <div className={`card ${bgColor} shadow-lg rounded-lg px-8 py-4 ${props}`}>
      {title && (
        <div className="flex justify-between items-center my-4">
          <div className="flex">
            {isReactComponent(icon) && (
              <span className="icon mr-2">{icon}</span>
            )}
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          {isReactComponent(status) && (
            <span className="text-3xl rounded-lg border-2 bg-green-light text-green-dark border-green-dark py-2 px-4 font-bold">
              {status}
            </span>
          )}
        </div>
      )}
      {items.map((item, index) => (
        <div key={index} className="text-3xl my-10">
          <h4 className="text-gray-text mb-3">{item.title}</h4>
          <p className="">
            {isReactComponent(item.value) ? (
              item.value
            ) : (
              <span>{item.value}</span>
            )}
          </p>
        </div>
      ))}
      {showButton && (
        <div className="mt-4">
          <Button
            text={buttonText}
            icon={buttonIcon}
            className={buttonClassName}
            iconSize={30}
          />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
