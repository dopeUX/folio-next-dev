"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./SplashScreen.css";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const SplashScreen: React.FC<any> = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const splashImgRef: any = useRef();
  const splashText1 = "Bichess-Lie,";
  const splashText2 = "Compilers-Downt";
  const [imageLoadCount, setImageLoadCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // updateImages();
    }, 1500);
    // updateImages();
  }, []);

  useEffect(() => {
    if (imageLoadCount === 5) {
      setImagesLoaded(true);
      gsapAction();
      setTimeout(() => {
        updateImages();
      }, 1500);

      setTimeout(() => {
        router.push("/home");
      }, 8200);
    }
    console.log(imageLoadCount, "iiiiii");
  }, [imageLoadCount]);

  function updateImages() {
    let int = 1;
    let count = 1;
    const interval = setInterval(() => {
      int++;
      count++;
      if (count == 6) {
        count = 1;
      }
      if (int <= 10) {
        console.log(currentImage, "ooooo");
        setCurrentImage(count);
      } else {
        console.log(count, "ppppp");
        clearInterval(interval);
      }
    }, 100);
  }

  useLayoutEffect(() => {
    // gsapAction();
    setTimeout(() => {
      // router.push("/home");
    }, 8200);
  }, []);

  function gsapAction() {
    gsap.to(splashImgRef.current, {
      width: "300px",
      height: "400px",
      ease: "expo.inOut",
      duration: 1.5,
      delay: 1.4,
    });
    gsap.to(splashImgRef.current, {
      marginTop: 0,
      ease: "expo.inOut",
      duration: 2.3,
    });
    gsap.to(".overlay", {
      y: "100%",
      ease: "expo.inOut",
      duration: 2.3,
    });
    gsap.to(".splash-text-span1", {
      y: 0,
      duration: 2,
      ease: "expo.inOut",
      delay: 2.0,
      stagger: 0.01,
    });

    //diffusing text ----
    gsap.to(".splash-text-span1", {
      y: "200px",
      duration: 2,
      ease: "expo.inOut",
      delay: 6.0,
      stagger: 0.01,
    });

    gsap.to(".image-wrapper", {
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut",
      delay: 6.5,
    });
    // gsap.to(".overlay", {
    //   y: 0,
    //   delay: 3,
    //   duration: 1.5,
    //   ease: "expo.inOut",
    // });
    // gsap.to(".splash-text-span1", {
    //   y: 0,
    //   duration: 0.8,
    //   delay:1.5
    // });
  }
  return (
    <div className="splash-screen dark-theme">
      <div className="content">
        <div className="content-ref">
          <div className="image-wrapper">
            <div className="overlay2"></div>
            <div className="overlay"></div>

            <Image
              ref={splashImgRef}
              className="img"
              width={500}
              height={600}
              // unoptimized
              src={`/assets/splashImages/image${currentImage}.jpg`}
              alt=""
            />

            {/* test images */}
            <Image
              // ref={splashImgRef}
              // className="img"
              width={0}
              height={0}
              unoptimized
              // style={{ display: "none" }}
              onLoad={() => {
                console.log("iiiiiiii333333333");
                setImageLoadCount((pre) => pre + 1);
              }}
              src={`/assets/splashImages/image${1}.jpg`}
              alt=""
            />
            <Image
              // ref={splashImgRef}
              // className="img"
              width={0}
              height={0}
              unoptimized
              // style={{ display: "none" }}
              onLoad={() => {
                setImageLoadCount((pre) => pre + 1);
              }}
              src={`/assets/splashImages/image${2}.jpg`}
              alt=""
            />
            <Image
              // ref={splashImgRef}
              // className="img"
              width={0}
              height={0}
              unoptimized
              // style={{ display: "none" }}
              onLoad={() => {
                setImageLoadCount((pre) => pre + 1);
              }}
              src={`/assets/splashImages/image${3}.jpg`}
              alt=""
            />
            <Image
              // ref={splashImgRef}
              // className="img"
              width={0}
              height={0}
              unoptimized
              // style={{ display: "none" }}
              onLoad={() => {
                console.log("iiiiiiii2222");
                setImageLoadCount((pre) => pre + 1);
              }}
              src={`/assets/splashImages/image${4}.jpg`}
              alt=""
            />
            <Image
              // ref={splashImgRef}
              // className="img"
              width={0}
              height={0}
              unoptimized
              // style={{ display: "none" }}
              onLoad={() => {
                setImageLoadCount((pre) => pre + 1);
              }}
              src={`/assets/splashImages/image${5}.jpg`}
              alt=""
            />
          </div>

          <div className="splash-text">
            <h3>
              {splashText1.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="splash-text-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="splash-text-span1">
                    {item}
                  </span>
                );
              })}
            </h3>
            <h3>
              {splashText2.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="splash-text-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="splash-text-span1">
                    {item}
                  </span>
                );
              })}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
