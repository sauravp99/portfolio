import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import gridMusic from "../../assets/grid.mp3";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import appleJuice from "../../assets/art/Apple juice.png";
// import blueBreeze from "../../assets/art/Blue breeze.png";
import feelings from "../../assets/art/Feelings.png";
import infernal from "../../assets/art/Infernal.png";
import signals from "../../assets/art/Signals.png";
import wisdom from "../../assets/art/Wisdom.png";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const Route = createFileRoute("/art/")({
  component: () => RouteComponent(),
});

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const RouteComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // const startMusic = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };

  // const handleScroll = () => {
  //   // startMusic()
  //   // Scroll to the target element
  //   setTimeout(() => {
  //     gsap.to(window, {
  //       duration: 200,
  //       scrollTo: { y: "#scrollcard" },
  //     });
  //   }, 3000);
  // };

  return (
    // bg-[#01352f]
    <main className="bg-black transition-all delay-1000 min-h-screen text-(--sand) overflow-hidden items-center flex flex-col gap-40">
      <div className="flex flex-col gap-20 justify-end h-full mt-96 items-center">
        <h2 className="font-days-one text-4xl">Welcome</h2>
        <p className="font-quicksand text-2xl">
          All of my illustrations are hand drawn, then redrawn on a digital
          tablet
        </p>
        {/* <button
          type="button"
          onClick={handleScroll}
          className="text-white px-4 py-2 mt-10 rounded"
        >
          Scroll down!
        </button> */}
        <p>Scroll down to see!</p>
        {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <audio ref={audioRef} controls src={gridMusic} className="opacity-0" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="w-20 h-30 border opacity-0" />
        <div className="w-20 h-30 border opacity-0" />
        <div className="flex flex-col w-full items-center">
          {/* <div className="flex flex-flex-row gap-20 *:w-[50%]">
            <img src={appleJuice} alt="apple juice" />
            <img src={blueBreeze} alt="Blue breeze" />
          </div> */}
          <div className="w-full relative">
            <img src={feelings} alt="Feelings" />
            <div className="absolute top-0 left-0  w-1/3 p-10 pl-20 flex flex-col gap-10">
              <p className="text-3xl lg:text-6xl font-days-one">Feelings</p>
              <p className="lg:text-2xl text-[14px] font-quicksand leading-15">
                Visualising feelings we cannot see but can only feel. Feelings
                are complex, subjective, vibrant and amazing
              </p>
            </div>
          </div>
          <div className="flex flex-flex-row gap-0 items-center justify-center h-full bg-[#290202] w-full">
            <div className="flex items-center w-full flex-col justify-center h-full py-30 bg-[#290202]">
              <img
                src={infernal}
                alt="Infernal"
                className="w-4/5 border-2 rounded-xl"
              />
            </div>
            <div className="flex items-center w-full justify-center flex-col bg-[#290202]">
              <div className="p-10 pb-0 pr-0  w-full flex flex-col justify-center gap-10 items-center">
                <p className="lg:text-6xl text-3xl font-days-one">Infernal</p>
                <p className="lg:text-2xl text-[14px] font-quicksand leading-15">
                  What drives you? What lights the fire inside of you?
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row py-30 px-10 bg-[#370d57]">
            <div className="flex sticky top-5 flex-col justify-start gap-10 px-10 items-start">
              <p className="lg:text-6xl text-3xl font-days-one">Signals</p>
              <p className="lg:text-2xl text-[14px] font-quicksand leading-15">
                The world is full of invisible signals. Everything is
                interconnected and we are part of a colossal network.{" "}
              </p>
            </div>
            <img
              src={signals}
              alt="Signals"
              className="w-2/3 border-2 rounded-xl"
            />
          </div>
          <div className="bg-[#265878] w-full flex relative justify-center flex-col border-4 border-x-0 border(--sand) pb-40 pt-10 items-center">
            <div className="p-10 pb-0 pr-0  w-full flex flex-col justify-center gap-10 items-center">
              <p className="lg:text-6xl text-3xl font-days-one">Kingdom</p>
              <p className="lg:text-2xl text-[14px] font-quicksand leading-15">
                We survive as a society however chaotic and unpredictable
              </p>
            </div>
            <img src={wisdom} alt="wisdom" className="w-[70%]" />
            <div className="w-20 h-30 border opacity-0" id="scrollcard" />
          </div>
        </div>
      </div>
    </main>
  );
};
