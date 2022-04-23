import "./App.scss";

import Home from "./component/Pages/Home/Home";
import LandingPage from "./component/Landing_Page/LandingPage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const encodedParams = new URLSearchParams();
  encodedParams.append("apiKey", "<REQUIRED>");

  const options:any = {
    method: 'GET',
    url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/details',
    params: {asin: 'B07ZPKR714', country: 'US'},
    headers: {
      'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com',
      'X-RapidAPI-Key': '2e6cd7368bmsh1859c131739c314p113f52jsn864541e29c4d'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response: any) {
      console.log(response.data);
    }).catch(function (error: any) {
      console.error(error);
    });
  }, [])
  return (
    <>
      {/* <LandingPage /> */}
      <Home />
    </>
  );
}

export default App;
