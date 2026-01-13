import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import { ControllerIcon, GraduateIcon, TreeIcon } from "../../utils/icons";
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
          <div className="flex flex-row gap-10 pr-20 md:gap-20 *:w-5 *:xl:w-10 *:lg:w-8 *:md:w-7">
            <ControllerIcon />
            <TreeIcon />
            <GraduateIcon />
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
