import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/home/Header";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { PortraitSection } from "../components/home/AboutMeSection/AboutMe";
import prosperGif from "../assets/prosper/textGif.json";
import aiGif from "../assets/aitaskforce/aiGif.json";
import windmillGif from "../assets/masters/windmillGif.json";
import constructionGif from "../assets/construction.json";
import Lottie from "lottie-react";
import { ProjectCard } from "../components/home/ProjectSection/ProjectCard/ProjectCard";
import { useMediaQuery } from "usehooks-ts";
import { ArrowRightSquare } from "lucide-react";

export const Route = createFileRoute("/")({
  component: () => Index(),
});

const Index = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 1050px)");

  if (isNarrowScreen) {
    return (
      <div className="min-h-screen bg-[#2e0101] flex items-center justify-center flex-col w-full">
        <Lottie animationData={constructionGif} loop={true} />{" "}
        <h3 className="text-2xl w-full text-center text-white font-days-one">
          Responsive design coming soon, stay tuned!
        </h3>
      </div>
    );
  }
  return (
    <main className="bg-(--saffron_red) min-h-screen text-(--sand) overflow-hidden">
      <section className="grid grid-cols-12 min-h-20 w-full">
        <section className="col-span-1 lg:pt-200 pt-60 md:pt-100 border-r-2">
          <WelcomeBanner side="left" />
        </section>
        <section className="col-span-10 flex flex-col items-center ">
          <Header title={"SAURAV PANDEY"} />
          <div className="lg:pt-40 md:pt-30 sm:pt-50 pt-30 w-full">
            <PortraitSection />
          </div>
        </section>
        <section className="col-span-1 lg:pt-100 pt-30 md:pt-50 border-l-2">
          <WelcomeBanner side="right" />
        </section>
      </section>
      <div className="grid grid-cols-12">
        <div className="col-span-1" />
        <div className=" col-span-10 flex flex-col gap-10">
          <h3 className="pt-40 pb-20 font-days-one md:text-2xl text-[14px]">
            Take a look at some of my work!{" "}
          </h3>
          <div className="flex flex-row justify-between pb-40 w-full *:rounded-xl *:w-1/4">
            <ProjectCard
              to="/work/prosperai"
              title="Prosper AI"
              client="prosper"
              year="2024 -> 2025"
              description="Automating property prospect generation with AI"
              animationDelay={20}
              gif={<Lottie animationData={prosperGif} loop={true} />}
            />
            {/* <ProjectCard
            to="/work/aitaskforce"
            title="AI task force"
            year="2023 -> 2024"
            animationDelay={30}
            description="A research and discovery driven team focused on exploring the capabilites of AI"
            gif={<Lottie animationData={aiGif} loop={true} />}
            /> */}
            <ProjectCard
              to="/work/udi"
              title="Tale Til Tekst"
              client="UDI"
              year="2025 -> "
              animationDelay={10}
              description="Evaluating whether UDI can conduct better, more efficient asylum interviews by using a AI powered speech-to-text transcription tool"
              gif={<Lottie animationData={aiGif} loop={true} />}
            />
            <ProjectCard
              to="/work/savemycity"
              title="Save my city!"
              client="UiO"
              year="2022 -> 2023"
              animationDelay={40}
              description="An interactive serious game for engaging adolescents on
            environmental studies"
              gif={<Lottie animationData={windmillGif} loop={true} />}
            />
          </div>
        </div>
        <div className="col-span-1" />
      </div>
      <Link
        to="/art"
        className="w-full items-center whitespace-nowrap gap-4 border justify-center flex hover:bg-red-950 transition-colors duration-150 p-20 h-fit font-quicksand text-2xl"
      >
        {" "}
        View my artwork
        <ArrowRightSquare />
      </Link>
    </main>
  );
};
