import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/home/Header";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { PortraitSection } from "../components/home/PortraitSection /PortraitSection";

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
          <div className="lg:pt-80 md:pt-30 sm:pt-50 pt-30 w-full">
            <PortraitSection />
          </div>
        </section>
        <section className="col-span-1 lg:pt-100 pt-30 md:pt-50 border-l-2">
          <WelcomeBanner side="right" />
        </section>
      </section>
      {/* Cards flying in here, add hover effect on cards */}
      <section className="h-200">ds</section>
    </main>
  );
}
