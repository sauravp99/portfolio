import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import CodeIcon from "../../icons/code.svg";
import GlassesIcon from "../../icons/glasses.svg";
import HourglassIcon from "../../icons/hourglass.svg";
import PencilRulerIcon from "../../icons/pencil_ruler.svg";

export const Route = createFileRoute("/work/aitaskforce")({
  component: () => RouteComponent(),
});

function RouteComponent() {
  return (
    <main className="bg-(--saffron_red) min-h-screen text-(--sand) overflow-hidden">
      <ProjectHeader
        projectTitle={"Tale til tekst"}
        clientName={"Utlendingsdirektoratet (UDI)"}
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
    </main>
  );
}
