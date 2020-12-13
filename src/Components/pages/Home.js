import React from "react";
import Aboutvpn from "../Aboutvpn/Aboutvpn";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import Reason from "../Reason/Reason";
import Slider from "../Slider/Slider";
import Tweet from "../Tweet/Tweet";

const Home = () => {
  return (
    <div>
      {/* layers of website dont change */}
      <Slider />
      <Aboutvpn />
      <Items />
      <Reason />
      <Tweet />
      <Footer />
    </div>
  );
};

export default Home;
