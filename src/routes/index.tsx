import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/home/Header";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { PortraitSection } from "../components/home/PortraitSection /PortraitSection";
import prosperGif from "../assets/Text generation loop.json";
import aiGif from "../assets/AIGif.json";
import windmillGif from "../assets/Wind Mill.json";
import Lottie from "lottie-react";
import { ProjectCard } from "../components/home/ProjectCard/ProjectCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-(--saffron_red) min-h-screen text-(--sand) overflow-hidden">
      <section className="grid grid-cols-12 min-h-20 w-full">
        <section className="col-span-1 lg:pt-130 pt-60 md:pt-100 border-r-2">
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
      <div className="grid grid-cols-12 pt-50">
        <div className="col-span-1" />
        <div className="flex flex-row col-span-10 justify-between w-full *:rounded-xl *:w-1/4">
          <ProjectCard
            title="Prosper AI"
            year="2023 -> 2024"
            description="Automating property prospect generation with AI"
            animationDelay={20}
            gif={<Lottie animationData={prosperGif} loop={true} />}
          />
          <ProjectCard
            title="AI task force"
            year="2023 -> 2024"
            animationDelay={30}
            description="A research and discovery driven team focused on exploring the capabilites of AI"
            gif={<Lottie animationData={aiGif} loop={true} />}
          />
          <ProjectCard
            title="Save my city!"
            year="2022 -> 2023"
            animationDelay={40}
            description="An interactive serious game for engaging adolescents on
              environmental studies"
            gif={<Lottie animationData={windmillGif} loop={true} />}
          />
        </div>
        <div className="col-span-1" />
      </div>
      <section className="h-200">ds</section>
    </main>
  );
}
