import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const TitleWithIcon = ({
  title,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  ...props
}) => {
  const { className } = props;
  return (
    <div className={className}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className="mr-6"
        />
      )}
      <h1 className="text-6xl font-bold">{title}</h1>
    </div>
  );
};

export default TitleWithIcon;
