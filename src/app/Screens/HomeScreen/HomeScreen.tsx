"use client";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./HomeScreen.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLayout from "@/app/Layouts/HeaderLayout/HeaderLayout";
import workData from "@/app/Constants/projectData";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Html } from "@react-three/drei";

let dirLight: any;
let modelRef: any;
function Model(props: any) {
  // useThree(({ camera }) => {
  //   camera.position.y = 0;
  //   camera.position.x = 3;
  //   // camera.lookAt(0, 0, 0);
  // });
  const { scene } = useGLTF("/assets/scene2.glb");
  const { camera } = useThree();

  const updateLightPosition = (x: any, y: any) => {
    if (dirLight) {
      gsap.to(dirLight.current.position, {
        x: x,
        y: y,
        z: 2,
        duration: 0.1,
        ease: "power2.inOut",
      });
    }
  };

  const updateModelPosition = (x: any) => {
    const moveDistance = 0.2; // Adjust the distance as needed
    const targetX = x > 0 ? -moveDistance : moveDistance;

    gsap.to(modelRef.current.position, {
      x: targetX,
      duration: 0.2,
      ease: "power2.inOut",
    });
  };
  useFrame(({ mouse }) => {
    // Update camera position based on mouse (for OrbitControls)
    // camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
    // camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.05;
    // camera.position.y = mouse.y;
    // camera.position.x;
    camera.lookAt(0, 0, 0);
    updateLightPosition(mouse.x, mouse.y);
    updateModelPosition(mouse.x);
  });

  return (
    <primitive className="model" ref={modelRef} object={scene} {...props} />
  );
}

const handleMouseDown = (event: any) => {
  if (event.button === 0) {
    event.stopPropagation();
  }
};

const HomeScreen: React.FC<any> = () => {
  const heroText1: string = "Embark-On-A";
  const heroText2: string = "Digital-Odyssey";
  const bottomHeroText1: string = "BBBoutique-experiences-that-are";
  const bottomHeroText2: string = "holistic,-intentional,-and-express";
  const bottomHeroText3: string = "the-heart-of-your-brand";
  const bonsoir = "Bonsoir!";
  const heroGifRef: any = useRef();
  const [light, setLight] = useState(false);
  const worksSecRef: any = useRef();
  const projectListRef: any = useRef();
  const indicatorRef: any = useRef();
  const listRef: any = useRef();
  const [isInsideProjectList, setIsInsideProjectList] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 10, y: 0 });
  const boundary: number = 200;
  dirLight = useRef(null);
  modelRef = useRef(null);
  const techDesc1: string =
    "As a skilled MERN stack developer, I embark on a journey to bring ideas to life and transform digital landscapes.";
  const techDesc2: string =
    "With a passion for crafting seamless experiences, I specialize in leveraging the power of MongoDB, Express.js, React, and Node.js to build dynamic, scalable, and intuitive web solutions.";

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (e.clientX > boundary && e.clientX < screen.width - boundary) {
        moveGIF(e.clientX);
      }
    });

    window.addEventListener("scroll", (e: any) => {
      console.log(window.scrollY, worksSecRef.current.offsetTop, "kkkkkkkkkk");
      if (
        window.scrollY < 5 ||
        window.scrollY >= worksSecRef.current.offsetTop + 350
      ) {
        console.log("iiiiiiiiiiiiiiiiii");
        updateBg("black");
      } else {
        updateBg("white");
      }
    });

    return () => {
      // window.removeEventListener("mousemove", () => {});
      // window.removeEventListener("scroll", () => {});
    };
  }, []);

  useLayoutEffect(() => {
    gsapAction();
  }, []);

  useLayoutEffect(() => {
    const height = listRef.current.offsetHeight;
    indicatorRef.current.style.height = height + 8 + "px";
    console.log("yyyyy", height);
  }, []);

  function updateBg(col: string) {
    if (col === "white") {
      gsap.to("body", {
        backgroundColor: "#ffffff",
        duration: 0.5,
      });
      gsap.to(".hero-head", {
        color: "#ffffff",
        duration: 0.5,
      });

      gsap.to(".header-nav-item", {
        color: "#000000",
        duration: 0.5,
        stagger: 0.02,
      });
    } else {
      gsap.to("body", {
        backgroundColor: "#000000",
        duration: 0.5,
      });
      gsap.to(".hero-head", {
        color: "#ffffff",
        duration: 0.5,
      });

      gsap.to(".header-nav-item", {
        color: "#ffffff",
        duration: 0.5,
        stagger: 0.02,
      });
    }
  }

  function gsapAction() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-span1", {
      y: "-20px",
      duration: 2,
      ease: "expo.inOut",
      stagger: 0.01,
    });

    gsap.to(heroGifRef.current, {
      scale: 1.0,
      opacity: 1,
      duration: 1.0,
      delay: 2.0,
    });

    const bottomHeroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "10px",
        end: "200px",
        scrub: true,
        // markers: true,
      },
    });
    bottomHeroTimeline.add("start").to(".bottom-hero-span1", {
      y: 0,
      duration: 3.0,
      stagger: 0.01,
      ease: "expo.inOut",
    });

    gsap.to(".bonsoir-head-span1", {
      scrollTrigger: {
        trigger: ".bonsoir-head-span1",
        start: "top bottom",
        end: "+=400px",
        scrub: true,
        // markers: true,
      },
      y: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.01,
    });

    gsap.to(".tech-desc-span1", {
      scrollTrigger: {
        trigger: ".all-tech",
        start: "top bottom ",
        end: "+=200px",
        // markers: true,
        scrub: true,
      },
      y: 0,
      ease: "expo.inOut",
      stagger: 0.02,
    });

    gsap.to(".video-wrapper", {
      scrollTrigger: {
        trigger: ".video-section",
        start: "top bottom",
        end: "+=900px",
        scrub: true,
        // markers: true,
      },
      width: "100%",
      ease: "expo.inOut",
    });
    gsap.to(".video-section", {
      scrollTrigger: {
        trigger: ".video-section",
        start: "top top",
        end: "+=900px",
        scrub: true,
        markers: true,
      },
      width: "90%",
      ease: "expo.inOut",
    });

    gsap.to(".bottom-footer-span1", {
      scrollTrigger: {
        trigger: ".three-model",
        start: "top top",
        end: "500px",
        scrub: true,
        // markers: true,
      },
      y: 0,
      // stagger: 0,
      ease: "expo.inOut",
    });

    // gsap.to(".three-model", {
    //   scrollTrigger: {
    //     trigger: ".three-model",
    //     start: "top bottom",
    //     end: "+=500px",
    //     scrub: true,
    //     markers: true,
    //   },
    //   backgroundColor: "black",
    //   ease: "expo.inOut",
    // });
  }

  function moveGIF(x: any) {
    gsap.to(heroGifRef.current, {
      left: x + "px",
      duration: 1.8,
      delay: 0.2,
      ease: "expo.out",
    });
  }

  const calculateMarginTop = (index: number) => {
    const marginTop = listRef.current.offsetHeight * (index - 1);
    console.log(marginTop, listRef.current.style.offsetHeight, "wwwwwwww");
    return marginTop + "px";
  };
  const handleMouseMove = (e: any) => {
    // setMousePosition = (e.clientX / window.innerWidth) * 2 - 1;
    // mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleLoadedVideo = () => {};

  return (
    <div className="home-screen">
      {/* <div className="overlay-top"></div>
       */}
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
        <section className="hero">
          <div className="hero-content" data-scroll-section>
            <video
              data-scroll
              data-scroll-speed="0.25"
              ref={heroGifRef}
              className={`player`}
              autoPlay
              loop
              onLoadedData={handleLoadedVideo}
              muted
            >
              <source src="/assets/hero-gif.mp4" type="video/mp4"></source>
            </video>
            <h1 className="dahlia-span hero-head">
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
            <h1 className="dahlia-span hero-head">
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

          <div className="bottom-hero">
            <h2>
              {bottomHeroText1.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="bottom-hero-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="bottom-hero-span1">
                    {item}
                  </span>
                );
              })}
            </h2>
            <h2>
              {bottomHeroText2.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="bottom-hero-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="bottom-hero-span1">
                    {item}
                  </span>
                );
              })}
            </h2>
            <h2>
              {bottomHeroText3.split("").map((item, index) => {
                if (item === "-") {
                  return (
                    <span className="bottom-hero-span1" key={index}>
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={index} className="bottom-hero-span1">
                    {item}
                  </span>
                );
              })}
            </h2>
          </div>
        </section>

        <section className="welcome-section global-container">
          <h1 className="bonsoir-head">
            {bonsoir.split("").map((item, index) => {
              return (
                <span className="bonsoir-head-span1" key={index}>
                  {item}
                </span>
              );
            })}
          </h1>

          <section className="tech">
            <h4 className="all-tech">AAAAAll About Tech.</h4>

            <div className="tech-desc-div">
              <p className="tech-desc-text1">
                <span className="tech-desc-span1">{techDesc1}</span>
              </p>
              <p className="tech-desc-text1">
                <span className="tech-desc-span1">{techDesc2}</span>
              </p>
            </div>
          </section>
        </section>

        <section className="video-section">
          <div className="video-wrapper">
            <video className={`player-video`} autoPlay loop muted>
              <source src="/assets/video1.mp4" type="video/mp4"></source>
            </video>

            <h3>
              BBBoutique experiences that are holistic, intentional, and express
              the heart of your brand.
            </h3>
          </div>
        </section>

        <section ref={worksSecRef} className="works-section">
          <div className="works global-container">
            <div className="left-col">
              <h2>AAAAAll Works.</h2>
              <p data-scroll data-scroll-speed="0.07">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="projects-section">
              <ul
                ref={projectListRef}
                className="projects-list"
                onMouseEnter={() => {
                  indicatorRef.current.style.opacity = 1;
                }}
                onMouseLeave={() => {
                  indicatorRef.current.style.opacity = 0;
                }}
              >
                <div className="indicator" ref={indicatorRef}></div>
                {workData.map((item, index) => {
                  return (
                    <li
                      ref={listRef}
                      key={item.id}
                      onMouseEnter={() => {
                        indicatorRef.current.style.top = calculateMarginTop(
                          index + 1,
                        );
                      }}
                      // onMouseLeave={() => {
                      //   if (!isInsideProjectList) {
                      //     indicatorRef.current.style.opacity = 0;
                      //   }
                      // }}
                    >
                      <h4>{item.projectName}</h4>
                      {index !== workData.length - 1 && (
                        <div className="divider"></div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="three-model" onMouseMove={handleMouseMove}>
          <div className="overlay-back">
            <h1 data-scroll data-scroll-speed="0.1">
              siiiiuuuuuuuuuu
            </h1>
          </div>
          <Canvas
            // camera={{ position: [-5, 2, 10], fov: 60 }}
            className="canvas"
            dpr={[1, 2]}
            // flat
            // linear
            // shadows
            camera={{ fov: 70 }}
            style={{ position: "absolute" }}
            onPointerDown={handleMouseDown}
          >
            <color args={["#00000000"]} />
            {/* <directionalLight
              position={[-10, 0, -20]}
              color={0x6b69fa}
              intensity={3}
            /> */}
            {/* <directionalLight
              position={[-10, 5, -20]}
              color={0x6b69fa}
              intensity={3}
            /> */}
            {
              <pointLight
                ref={dirLight}
                position={[0, 0, 0]}
                color={0xe64c4c}
                intensity={5}
              />
            }
            <OrbitControls
              enabled={true}
              enableZoom={false}
              autoRotate={false}
              rotateSpeed={1.5}
              enablePan={false}
              enableRotate={false}
            />

            <Suspense>
              <Stage intensity={0.6} castShadow={false} environment={null}>
                <Model scale={1.8} />
              </Stage>
            </Suspense>
          </Canvas>

          <div
            className="light-wrapper"
            onMouseEnter={() => {
              // setLight(true);
            }}
            onMouseLeave={() => {
              // setLight(false);
            }}
          ></div>
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

export default HomeScreen;
