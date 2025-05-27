import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function App() {
  let [showContent, setSowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setSowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.7,
      x:"-50%",
      bottom: "-70%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 0.7,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagediv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg", {
        x: xMove,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100 w-full h-screen overflow-hidden bg-[#000] ">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100vh" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/src/assets/bg.png"
            width="100%"
            height="100vh"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.5] ">
          <div className="landing overflow-hidden relative w-full h-screen bg-black ">
            <div className="navbar  absolute top-0 left-0 z-[10] w-full py-10 px-10  ">
              <div className="logo flex gap-8">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-13 h-2 bg-white"> </div>
                  <div className="line w-9 h-2 bg-white"> </div>
                  <div className="line w-7 h-2 bg-white"> </div>
                </div>
                <h3 className="text-4xl -mt-[11px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagediv relative w-full h-screen overflow-hidden ">
              <img
                className="absolute sky scale-[1.5] rotate-[-20 deg] top-0 left-0 w-full h-full object-cover"
                src="/src/assets/sky.png"
              />
              <img
                className="bg scale-[1.8] rotate-[-3deg] absolute  top-0 left-0 w-full h-full object-cover"
                src="/src/assets/bg.png"
              />

              <div className="text flex flex-col  rotate-[-20%] gap-4 text-white absolute top-0 left-1/2 -translate-x-1/2">
                <h1 className="text-[6rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[6rem] leading-none ml-20">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-20">auto</h1>
              </div>

              <img
                className="character absolute girl -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="/src/assets/girlbg.png"
              />
            </div>
            <div className="btmbar text-white absolute left-0 bottom-0 w-full px-20 py-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/src/assets/ps5.png"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr w-full flex text-white h-[80%] gap-30 ">
              <div className="limage relative w-1/2 h-full">
                <img
                  className="girl absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-30"
                  src="/src/assets/imag.png"
                />
              </div>
              <div className="rimage w-[40%] py-25">
                <h1 className="text-5xl">Still Running</h1>
                <h1 className="text-5xl">Not Hu`nting</h1>
                <p className="mt-10  font-[Poppins]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sint voluptate sapiente iusto consectetur, reiciendis
                  nobis voluptatum quibusdam accusamus labore dignissimos
                  cupiditate! Nesciunt, id quibusdam quo voluptas labore omnis
                  culpa!
                </p>
                <p className="mt-3  font-[Poppins]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sint voluptate sapiente iusto consectetur, reiciendis
                  nobis voluptatum quibusdam accusamus labore dignissimos
                  cupiditate! Nesciunt, id quibusdam quo voluptas labore omnis
                  culpa!{" "}
                </p>

                <button className="bg-yellow-400 text-2xl text-black mt-10 px-10 py-10">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
