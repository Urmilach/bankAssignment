import "./../App.css";
import Header from "./header";
import React from "react";
import "./online.png";

const Image = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://www.thebalancemoney.com/thmb/RdVnuj_EkMxtzyXlrDWsRexq324=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-an-online-bank-315204_final-98ce36e857d245d2867e28fa4c189111.png"
          className="header_navigate2"
          alt="Flowers in Chania"
          width="100%"
        />
      </div>
    </div>
  );
};
export default Image;
