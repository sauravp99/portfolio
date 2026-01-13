import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../../components/work/ProjectHeader";
import { HouseIcon, DocumentIcon, PencilWriteIcon } from "../../utils/icons";
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
            <HouseIcon />
            <DocumentIcon />
            <PencilWriteIcon />
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
      <ProjectDescription
        description={{
          reflections: [
            "Working with a fast-paced startup and balancing business interests, client needs and user needs. Understanding pacing and reprioritizing product requirements when needed.",
            "Best practices around building up an extensive and large monolithic react and typescript codebase. This involved understanding properly configuring third party libraries and writing robust and accessible shared UI components. ",
            "Experience in taking responsibility for prioritizing, setting roadmaps and guiding the team in frontend development and the UX process. I have gained a lot of understanding in critical decision making and maintaining a good team dynamic.",
            "Working with branding and visual profile. We crafted a unique brand image through facilitating workshops, conceptualizing the clients long term vision and incorporating the concept into the design",
          ],
          roles: [
            {
              title: "Frontend lead",
              description:
                "Initiated and configured React app with Vite (my first project using Vite). Added custom hooks with Tanstack Query for data management and API integration. Tanstack Router was chosen due to better compatibility with TQuery and similiar documentation. I tok on the role as frontend lead over time responsible for onboarding devs and prioritizing tasks in our Jira board. Initiating discussions with the tea",
            },
            {
              title: "UX designer",
              description:
                "Lead UX insight, visual branding and redesign. Met with stakeholders and made feature-based roadmaps. Facilitated discovery and event storming workshops. Take a look at the design process further down!",
            },
          ],
        }}
      />
    </main>
  );
};
