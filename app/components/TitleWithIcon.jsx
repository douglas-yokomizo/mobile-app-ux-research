import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const TitleWithIcon = ({ title, iconSrc, iconAlt, iconWidth, iconHeight }) => {
  return (
    <div className="flex items-center">
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

TitleWithIcon.propTypes = {
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

export default TitleWithIcon;
