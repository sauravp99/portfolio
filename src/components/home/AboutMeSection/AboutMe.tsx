import { useEffect } from "react";
import Portrait from "../../../assets/portrait.png";
import { useMediaQuery } from "usehooks-ts";

import { Skills } from "../Skills";

export const PortraitSection = () => {
  let scrollPercentage = 0;

  const isMobileScreen = useMediaQuery("(max-width: 700px)");

  const isNarrowScreen = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    const stickySections = [
      ...document.querySelectorAll(".sticky_wrap_container"),
    ];

    const handleScroll = () => {
      window.addEventListener("scroll", () => {
        for (let i = 0; i < stickySections.length; i++) {
          transform(stickySections[i]);
        }
      });
    };

    const transform = (section: Element) => {
      if (!section.parentElement) return;

      let offset = 0;

      if (isMobileScreen) {
        offset = 400;
      } else if (isNarrowScreen) {
        offset = 400;
      } else {
        offset = 550;
      }

      const offsetTop = section.parentElement.offsetTop - offset;
      const leftDoor = section.querySelector(
        ".left_door_scroll"
      ) as HTMLElement;
      const rightDoor = section.querySelector(
        ".right_door_scroll"
      ) as HTMLElement;

      // Calculates current scroll position and ensures that value is clamped between 0 and 35
      scrollPercentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      scrollPercentage =
        scrollPercentage < 0
          ? 0
          : scrollPercentage > 25
          ? 25
          : scrollPercentage;

      if (leftDoor) {
        leftDoor.style.transform = `translate3d(${scrollPercentage}vw, 0, 0)`;
      }

      if (rightDoor) {
        rightDoor.style.transform = `translate3d(${-scrollPercentage}vw, 0, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPercentage, isMobileScreen, isNarrowScreen]);

  if (scrollPercentage > 40 && scrollPercentage < 42) {
  }

  return (
    <>
      <div className="w-full lg:h-150 md:h-120 h-70 bg-(--sand) relative">
        <div className="sticky top-0 h-full z-10 content-center overflow-hidden sticky_wrap_container">
          <div className="flex flex-col h-fit gap-15 justify-center items-center">
            <div className="flex flex-row w-full gap-10 items-center justify-center border">
              <img
                src={Portrait}
                alt="portrait of saurav pandey"
                className="max-w-[12%] h-auto z-0 rounded-4xl border-4 border-(--flame) bg-[#cfc5b89c]"
              />
              {/* TODO: Fix responsivness for text */}
              <p className="h-fit px-5 py-10 font-quicksand font-semibold leading-10 w-2/6 rounded-4xl text-(--flame) border-double relative">
                I am an experienced UX designer and frontend developer who
                bridges the gap between design and technology. With experience
                as both design lead and frontend lead, I turn complex digital
                products into solutions that are simple, user-friendly, and
                effective.
              </p>
            </div>
            <Skills />
          </div>
          <div className="absolute top-0 h-full right-0 w-1/2 bg-red-900 border transform ease-linear duration-500 left_door_scroll" />
          {/* TODO: change transform duration on button click (gameplay: repair door) */}
          <div className="absolute top-0 h-full left-0 w-1/2 bg-red-900 border  transform ease-linear duration-500 right_door_scroll" />
        </div>
      </div>
    </>
  );
};
