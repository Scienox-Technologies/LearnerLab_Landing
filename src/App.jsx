import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./assets/img/Hero_img.png";

import "./App.css";
import { ArrowOne } from "./assets/AppIcons";
import HeroSection from "./component/hero/HeroSection";
import NavBar from "./component/navBar/NavBar";
import OurBenefitSection from "./component/ourBenefit/OurBenefitSection";
import OurBestBits from "./component/ourBestBits/OurBestBits";
import OurEndorser from "./component/ourEndorser/OurEndorser";
import OurTrustedCircle from "./component/ourTrustedCircle/OurTrustedCircle";
import DropUSLine from "./component/dropUsLine/DropUSLine";
import Footer from "./component/footer/Footer";
import Layout from "./component/layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <NavBar />
      {/* <div className="App w-full flex flex-col justify-center  gap-64"> */}
      <HeroSection />
      <OurBenefitSection />
      {/* <OurBestBits /> */}
      <OurEndorser />
      <OurTrustedCircle />
      <DropUSLine />
      {/* </div> */}
      <Footer />
    </Layout>
  );
}

export default App;
