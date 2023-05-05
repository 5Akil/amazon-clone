import React from "react";
import Header from "./Header";
import Product from "./Product";
import Slide_Product from "./Slide_Product";
import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { slideData, responsive } from "./slideData";

function HomePage() {
  const slide = slideData.map((item) => (
    <Slide_Product
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
    />
  ));
  return (
    <div>
      <Header />
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home_row">
        <Product
          id="1"
          title="Can't Hurt Me: Master Your Mind and Defy the Odds "
          price={799}
          rating={5}
          image="https://m.media-amazon.com/images/P/B07H453KGH.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <Product
          id="2"
          title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
          price={999}
          rating={4}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KEKEDFUcL._SY879_.jpg"
        />

        <Product
          id="3"
          title="Wonderchef Nutri-blend Mixer, Grinder & Blender | Powerful 400W 22000 RPM motor"
          price={2699}
          rating={3}
          image="https://m.media-amazon.com/images/I/61BGNSBBwYL._SX522_.jpg"
        />
       
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="Nike Mens Renew Run 3 Sneaker"
          price={7699}
          rating={4}
          image="https://m.media-amazon.com/images/I/41AlzQjqnbL._UX695_.jpg"
        />
        <Product
          id="4"
          title="Call Of Duty : Modern Warfare II | Standard Edition | PlayStation 5 (PS5)"
          price={4999}
          rating={4}
          image="https://m.media-amazon.com/images/I/515VhBPEZPL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="5"
          title="Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones"
          price={29990}
          rating={4}
          image="https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Apple iPhone 14 Pro Max 128GB Deep Purple "
          price={132990}
          rating={5}
          image="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="7"
          title="Samsung 55 (139.7 CM) LED 3840 x 2160 Pixels Odyssey Ark, 4K UHD, 165 Hz, 1 Ms, 1000R Curved Gaming Monitor, Cockpit Mode, Mini-LED, Matte Display, Sound Dome"
          price={255000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41i5swBl--L._SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
      <Carousel responsive={responsive}>
        {slide}
      </Carousel>
    </div>
  );
}

export default HomePage;
