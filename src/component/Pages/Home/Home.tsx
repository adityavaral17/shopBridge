import "./Home.scss";

import { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import Cards from "../../Cards/Cards";
import { Product } from "../../../types/productsType";
import { getProduct } from "../../../apis/getProductApi";
import shop_logo from "../../../assets/shop_logo.png";

interface Menu {
  name: string;
  url: string;
}
const Home = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [productList, setProductList] = useState<Product[]>();
  const menuList = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
    { name: "Top 10", url: "/top10" },
    { name: "About us", url: "/about-us" },
    { name: "Contact us", url: "/contact-us" },
  ];
  const btnClickEvent = (data: Menu, index: number) => {
    setActiveLink(index);
  };
  const getProductList = async () => {
    const lists: any = await getProduct();
    setProductList(lists?.data);
  };
  useEffect(() => {
    getProductList();
  }, []);
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
        {activeLink === 0 && (
          <div className="home-page-wrapper">
            {productList?.map((data: Product) => (
              <Cards cardInfo={data} />
            ))}
          </div>
        )}
        {activeLink === 3 && (
          <>
            <h3 style={{ textAlign: "center" }}>Top 10 from the list</h3>
            <div className="home-page-wrapper">
              {productList
                ?.sort((a: any, b: any) => b?.rating?.rate - a?.rating?.rate)
                ?.map((data: Product, index: number) => {
                  return (index < 10 && <Cards cardInfo={data} />);
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
