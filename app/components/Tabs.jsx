"use client";
import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ titles, ...props }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul className="list-none flex justify-between text-4xl py-10 px-8">
        {titles.map((title, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              selectedTab === index
                ? "text-blue-text border-b-4 border-blue-text pb-8"
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
