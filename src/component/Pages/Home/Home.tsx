import "./Home.scss";

import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import shop_logo from "../../../assets/shop_logo.png";
import { useState } from "react";

interface Menu {
  name: string;
  url: string;
}
const Home = () => {
  const [activeLink, setActiveLink] = useState(0);
  const menuList = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "News", url: "/news" },
    { name: "Reviews", url: "/reviews" },
    { name: "How To", url: "/how" },
    { name: "Top 10", url: "/top10" },
    { name: "About us", url: "/about-us" },
    { name: "Contact us", url: "/contact-us" },
  ];
  const btnClickEvent = (data: Menu, index: number) => {
    setActiveLink(index);
  };
  return (
    <div className="home-wrapper">
      <div className="nav-bar">
        <div className="logo-section">
          <img className="logo" src={shop_logo} alt={"iphone"} />
          <div className="logo-name">
            <span>Shop</span>
            <span className="text-second">Bridge</span>
          </div>
        </div>
        <div className="menu-section">
          {menuList?.map((data: Menu, index: number) => (
            <Button
              onClick={() => btnClickEvent(data, index)}
              className={
                activeLink === index ? "menu-icons-active" : "menu-icons"
              }
            >
              {data?.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="home-main-content">
        <div className="home-page-wrapper">
          <div className="home-page-image-grid">
            <img src={shop_logo} alt={"iphone"} className="home-page-image" />
          </div>
        </div>
      </div>
      <div className="news-content"></div>
    </div>
  );
};
export default Home;
