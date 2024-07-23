const isReactComponent = (value) => {
  return (
    value && value.$$typeof && value.$$typeof === Symbol.for("react.element")
  );
};

const InfoCard = ({ items }) => {
  return (
    <div className="card bg-gray-light shadow-lg rounded-lg px-8 py-1">
      {items.map((item, index) => (
        <div key={index} className="item text-3xl my-10">
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
    </div>
  );
};

export default InfoCard;
