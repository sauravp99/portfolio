import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import CodeIcon from "../../icons/code.svg";
import GlassesIcon from "../../icons/glasses.svg";
import HourglassIcon from "../../icons/hourglass.svg";
import PencilRulerIcon from "../../icons/pencil_ruler.svg";
import { ProjectImages } from "../../components/work/ProjectImages";
import DesktopView from "../../assets/prosper/desktop.png";
import MobileView from "../../assets/prosper/mobile.png";
import { ProjectDescription } from "../../components/work/ProjectDescription";

export const Route = createFileRoute("/work/prosperai")({
  component: () => RouteComponent(),
});

const RouteComponent = () => {
  return (
    <main className="bg-(--stone) min-h-screen text-(--sand) flex flex-col items-center justify-center gap-40 overflow-hidden">
      <ProjectHeader
        projectTitle={"Prosper"}
        clientName={"prosper ai"}
        icons={
          <div className="flex flex-row gap-10 md:gap-20 *:w-5 *:xl:w-10 *:lg:w-8 *:md:w-7">
            <img src={CodeIcon} alt="Code Icon" />
            <img src={GlassesIcon} alt="Glasses Icon" />
            <img src={HourglassIcon} alt="Hourglass Icon" />
            <img src={PencilRulerIcon} alt="Pencil Ruler Icon" />
          </div>
        }
        year={"2024 -> 2025"}
      />
      <ProjectImages
        imageL={{
          src: MobileView,
          alt: "Mobile view of the solution",
          className: "bg-[#3f627855] rounded-2xl",
        }}
        imageR={{
          src: DesktopView,
          alt: "Desktop view of the solution",
          className: "max-w-[58%] bg-[#3f627855] rounded-2xl z-10",
        }}
      />
      <ProjectDescription />
    </main>
  );
};
