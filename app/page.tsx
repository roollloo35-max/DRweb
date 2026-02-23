import Image from "next/image";
import Header from "./componets/header/header";
import Bunner from "./componets/bunner/bunner";
import AboutSec from "@/app/componets/about/aboutSect"
import Service from "./componets/service/service";
import Product from "./componets/product/product";
import Material from "./componets/material/material";
import Footer from "./componets/footer/footer";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Bunner />
      <AboutSec />
      <Service />
      <Product />
      <Material />
      {/* <Footer /> */}

    </div>
  );
}
