import React from "react";
import "./AboutPageScreen.css";
import HeaderLayout from "@/app/Layouts/HeaderLayout/HeaderLayout";
import Image from "next/image";

const AboutPageScreen: React.FC<any> = () => {
  return (
    <div className="about-page">
      <HeaderLayout />

      <div className="content">
        <div className="hero global-container">
          <div className="image-wrapper">
            <Image
              width={470}
              height={660}
              className="img"
              alt=" "
              unoptimized
              src={"/assets/me.jpg"}
            />
          </div>
          <div className="quote">
            <p>
              “Is that really the limit of your strength? Could the you of
              tomorrow beat you today? Instead of giving in, move forward.”
            </p>
            <p className="auth">- Saitama</p>
          </div>

          <div className="hero-text">
            <h1>Programmer Just For Fun, Dattebayo!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageScreen;
