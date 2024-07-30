"use client";
import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ titles, spaceBetween = true }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul
        className={`list-none flex w-full ${
          spaceBetween ? "justify-between" : ""
        } text-4xl pt-10 px-2`}
      >
        {titles.map((title, index) => (
          <li
            key={index}
            className={`cursor-pointer p-4 w-full text-center ${
              selectedTab === index
                ? "text-blue-text font-bold border-b-4 border-blue-text pb-8"
                : "text-gray-400"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
