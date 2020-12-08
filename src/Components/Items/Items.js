//import
import React from "react";
import "./Items.css";
import { FaCheck } from "react-icons/fa";

const Items = () => {
  return (
    <div className="item-container">
      <div className="list">
        <ul>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
          <li>
            <FaCheck className="icon-items" />
            به صرفه بودن قیمت محصول
          </li>
        </ul>
      </div>
      <div className="images">
        <img src="/images/item-img.png" alt="item" />
      </div>
    </div>
  );
};

export default Items;
