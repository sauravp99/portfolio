import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import { ProjectImages } from "../../components/work/ProjectImages";
import { ProjectDescription } from "../../components/work/ProjectDescription";
import { FigmaEmbed } from "../../components/shared/FigmaEmbed";
import { MicrophoneIcon, SpeechBubbleIcon, TextIcon } from "../../utils/icons";
import udi from "../../assets/udi/udi.png";
import udiWireframes from "../../assets/udi/udiWireframes.png";

export const Route = createFileRoute("/work/udi")({
  component: () => RouteComponent(),
});

const RouteComponent = () => {
  return (
    <main className="bg-(--saffron_red) min-h-screen text-(--sand) overflow-hidden items-center flex flex-col gap-40">
      <ProjectHeader
        projectTitle={"Tale Til Tekst"}
        clientName={"Utlendingsdirektoratet (UDI)"}
        icons={
          <div className="flex flex-row gap-10 pr-20 md:gap-20 *:w-5 *:xl:w-10 *:lg:w-8 *:md:w-7">
            <MicrophoneIcon />
            <TextIcon />
            <SpeechBubbleIcon />
          </div>
        }
        year={"2023 -> 2024"}
      />
      <ProjectImages
        imageL={{
          src: udi,
          alt: "UDI logo",
          className: "max-w-[31%]",
        }}
        imageR={{
          src: udiWireframes,
          alt: "Picture of wireframes for TTT",
          className: "max-w-[61%]",
        }}
      />
      <ProjectDescription
        description={{
          roles: [
            {
              title: "UX designer",
              description:
                "Hired in to Initiate and lead the UX research for the project, as the product was still a PoC. Defined the primary goal and created a plan of action for the design process. I facilitated a day long event storming workshop with department heads and users (“saksbehandlere”). We mapped key events, hot spots and discussed potential solutions which I transformed into user stories. After a thorough analysis of the raw data and analysis of other existing solutions, I conceptualized and made wireframes of the solution. I also made high-fidelity interactive prototypes adopting “the design system”.  The project is currently heading into the testing phase and i have crafted a usability guide. ",
            },
          ],
        }}
      />
      <FigmaEmbed
        url={
          "https://embed.figma.com/proto/5ueS3JrWRIViPlDblJrdd9/Portfolio?page-id=0%3A1&node-id=1070-955"
        }
        className="bg-[#570505]"
      />
    </main>
  );
};
