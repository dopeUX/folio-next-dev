"use client";
import React, { useEffect, useLayoutEffect } from "react";
import "./AboutPageScreen.css";
import HeaderLayout from "@/app/Layouts/HeaderLayout/HeaderLayout";
import Image from "next/image";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

const AboutPageScreen: React.FC<any> = () => {
  const bottomHeroText1: string = "BBBoutique-experiences-that-are";
  const bottomHeroText2: string = "holistic,-intentional,-and-express";
  const bottomHeroText3: string = "the-heart-of-your-brand";
  const heroText1: string = "Programmer-Just";
  const heroText2: string = "For-Fun,-Dattebayo!";
  const aboutText: string =
    " Experienced freelancer with over three years of expertise in mobile and web development. Specialized in Android and Flutter mobile app development and MERN stack web development.";
  const aboutText2: string =
    "Highly adaptable and able to work independently or collaboratively in a team environment. Committed to staying up-to-date with the latest technologies and techniques to continuously improve skills and stay ahead of the curve.";

  useLayoutEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);
    gsap.to(".img-bout", {
      width: "520px",
      height: "690px",
      opacity: 1,
      // scale: 1.0,
      duration: 2.0,
      ease: "expo.inOut",
    });

    gsap.to(".about-span1", {
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top bottom",
        end: "+=300px",
        scrub: true,
        // markers: true,
      },
      y: 0,
      stagger: 0.02,
      ease: "expo.inOut",
    });

    gsap.to(".reach-span1", {
      scrollTrigger: {
        trigger: ".reach-sec",
        start: "top bottom",
        end: "+=400px",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
    });

    gsap.to(".bottom-footer-span1", {
      scrollTrigger: {
        trigger: ".bottom-section",
        start: "top bottom",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
      y: 0,
      stagger: 0,
      ease: "expo.inOut",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 5) {
        gsap.to(".hero-span1", {
          y: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.01,
          opacity: 1,
        });
        window.removeEventListener("scroll", () => {});
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="about-page">
      <HeaderLayout />
      <div className="gradient-blur test">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

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

        <section className="about-sec global-container">
          <p>
            <span className="about-span1">{aboutText}</span>
          </p>
          <p>
            <span className="about-span1">{aboutText2}</span>
          </p>

          <div className="stack-images">
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/react-logo.svg"}
            />
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/redux-logo.svg"}
            />
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/nodejs-logo.svg"}
            />
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/tailwind-logo.svg"}
            />
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/storybook-logo.svg"}
            />
            <Image
              className="img"
              width={50}
              height={50}
              alt=""
              src={"/assets/ts-logo.svg"}
            />
          </div>

          <div className="reach-sec">
            <h1>
              <span className="reach-span1">Reach.</span>
            </h1>

            <div className="reach-links">
              <p>shreyashfz05@gmail.com</p>
              <p>linkedin.com/shreyash-fulzele</p>
              <p>github.com/dopeUX</p>
            </div>
          </div>
        </section>

        <section className="bottom-section">
          <h1>De.</h1>
          <div className="footer-section global-container">
            <h4>
              <span className="bottom-footer-span1">{bottomHeroText1}</span>
            </h4>
            <h4>
              <span className="bottom-footer-span1">{bottomHeroText2}</span>
            </h4>
            <h4>
              <span className="bottom-footer-span1">{bottomHeroText3}</span>
            </h4>
            <div className="bottom-footer">
              <div data-scroll data-scroll-speed="0.1" className="left-col">
                <a href="">
                  <p>github.com/dopeUX</p>
                </a>
                <a href="">
                  <p>desirius.dev</p>
                </a>
              </div>

              <div data-scroll data-scroll-speed="0.1" className="middle-col">
                {/* <div className="row">
                  <p className="left">
                    design and <br />
                    development
                  </p>
                  <p>shreyash fz.</p>
                </div>
                <div className="row">
                  <p className="left">assets</p>
                  <p>
                    sketchfab, pinterest,
                    <br /> pixabay, pexels.
                  </p>
                </div> */}
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="left">
                        design and <br />
                        development
                      </td>
                      <td>shreyash fz.</td>
                    </tr>

                    <tr className="second">
                      <td className="left">assets</td>
                      <td>sketchfab, pinterest, pixabay, pexels.</td>
                    </tr>

                    <tr className="third">
                      <td className="left">reach</td>
                      <td>github.</td>
                    </tr>
                  </tbody>
                </table>

                <p>©2023 all rights reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPageScreen;
