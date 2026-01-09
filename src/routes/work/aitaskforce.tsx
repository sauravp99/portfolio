import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import CodeIcon from "../../icons/code.svg";
import GlassesIcon from "../../icons/glasses.svg";
import HourglassIcon from "../../icons/hourglass.svg";
import PencilRulerIcon from "../../icons/pencil_ruler.svg";
import { ProjectImages } from "../../components/work/ProjectImages";
import AiCover from "../../assets/aitaskforce/cover.png";

export const Route = createFileRoute("/work/aitaskforce")({
  component: () => RouteComponent(),
});

function RouteComponent() {
  return (
    <main className="bg-[#280042] min-h-screen  flex flex-col gap-40 text-(--sand) overflow-hidden">
      <ProjectHeader
        projectTitle={"AI task force"}
        clientName={"Computas AS (R&D team)"}
        icons={
          <div className="flex flex-row gap-10 md:gap-20 *:w-5 *:xl:w-10 *:lg:w-8 *:md:w-7">
            <img src={CodeIcon} alt="Code Icon" />
            <img src={GlassesIcon} alt="Glasses Icon" />
            <img src={HourglassIcon} alt="Hourglass Icon" />
            <img src={PencilRulerIcon} alt="Pencil Ruler Icon" />
          </div>
        }
        year={"2023 -> 2024"}
      />
      <ProjectImages
        imageL={{
          src: AiCover,
          alt: "Illustration of projects in ai task force",
          className: " max-w-[70%]",
        }}
      />
    </main>
  );
}
