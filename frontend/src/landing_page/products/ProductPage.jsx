import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDescription="Kite is a powerful trading platform designed for both beginners and experienced traders. and intuitive interface, advanced charting tools, and seamless execution, Kite empowers you to trade with confidence and precision."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
       <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDescription="Console is a powerful trading platform designed for both beginners and experienced traders. and intuitive interface, advanced charting tools, and seamless execution, Console empowers you to trade with confidence and precision."
        learnMore="#"
       
       />
      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDescription="Coin is a cutting-edge cryptocurrency trading platform that offers a seamless and secure way to buy, sell, and manage your digital assets. With a user-friendly interface, advanced trading tools, and robust security features, Coin empowers you to navigate the world of cryptocurrencies with confidence and ease."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
       <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect"
        productDescription="Kite Connect is a powerful API that allows developers to integrate Kite's trading capabilities into their applications. With a simple and intuitive interface, advanced charting tools, and seamless execution, Kite Connect empowers you to build innovative trading solutions."
        learnMore="#"
       />
      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Varsity is a comprehensive financial education platform that empowers you with the knowledge and skills to make informed investment decisions. With a wide range of courses, interactive content, and expert insights, Varsity is your go-to resource for mastering the world of finance and investing."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? check out the Zerodha.tech blog.
      </p>
      <Universe />
    </div>
  );
}

export default ProductPage;
