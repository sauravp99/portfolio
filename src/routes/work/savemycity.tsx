import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import CodeIcon from "../../icons/code.svg";
import GlassesIcon from "../../icons/glasses.svg";
import HourglassIcon from "../../icons/hourglass.svg";
import PencilRulerIcon from "../../icons/pencil_ruler.svg";
import Portrait from "../../assets/masters/portrait.jpg";
import Game from "../../assets/masters/game.jpg";
import { ProjectImages } from "../../components/work/ProjectImages";
import { ProjectDescription } from "../../components/work/ProjectDescription";

export const Route = createFileRoute("/work/savemycity")({
  component: () => RouteComponent(),
});

function RouteComponent() {
  return (
    <main className="bg-(--sea_green) min-h-screen text-(--sand) overflow-hidden items-center flex flex-col gap-40">
      <ProjectHeader
        projectTitle={"Save my city!"}
        clientName={"Universitet i Oslo (UiO)"}
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
          src: Portrait,
          alt: "portrait of saurav pandey",
          className: "max-w-[31%] bg-[#3f627855]",
        }}
        imageR={{
          src: Game,
          alt: "Birdseye view of the game",
          className: "max-w-[54%]",
        }}
      />
      <ProjectDescription
        description={{
          roles: [
            {
              title: "UX designer",
              description:
                "The study in my master thesis was done in the intersection of three areas of research: serious games, tangible interaction and environmental studies. The research question i was investigating was: My methodology of choice was research through design, an iterative hands-on approach for investigating design hypotheses. I worked with interaction design, circuit engineering, programming, game development and academic research ",
            },
          ],
        }}
      />
    </main>
  );
}
