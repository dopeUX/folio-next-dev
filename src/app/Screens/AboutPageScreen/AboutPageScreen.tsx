"use client";
import React, { useEffect, useLayoutEffect } from "react";
import "./AboutPageScreen.css";
import HeaderLayout from "@/app/Layouts/HeaderLayout/HeaderLayout";
import Image from "next/image";
import gsap from "gsap";

const AboutPageScreen: React.FC<any> = () => {
  const heroText1: string = "Programmer-Just";
  const heroText2: string = "For-Fun,-Dattebayo!";

  useLayoutEffect(() => {
    gsap.to(".img-bout", {
      width: "520px",
      height: "690px",
      opacity: 1,
      // scale: 1.0,
      duration: 2.0,
      ease: "expo.inOut",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY, "kkkkkk");
      if (window.scrollY > 5) {
        gsap.to(".hero-span1", {
          y: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.01,
        });
        window.removeEventListener("scroll", () => {});
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <div className="about-page">
      <HeaderLayout />

      <div className="content">
        <div className="hero global-container">
          <div className="image-wrapper">
            <Image
              data-scroll
              data-scroll-speed="0.2"
              width={520}
              height={690}
              className="img-bout"
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
            <h1>
              {heroText1.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="hero-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="hero-span1">
                    {item}
                  </span>
                );
              })}
            </h1>
            <h1>
              {heroText2.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="hero-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="hero-span1">
                    {item}
                  </span>
                );
              })}
            </h1>
          </div>
        </div>

        <section className="about"></section>
      </div>
    </div>
  );
};

export default AboutPageScreen;
