import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/home/Header";
import { WelcomeBanner } from "../components/home/WelcomeBanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-red-100 w-full h-screen">
      <section className="grid grid-cols-12 min-h-20 w-full">
        <div className="col-span-1" />
        <section className="col-span-10 flex flex-col items-center">
          <Header />
        </section>
        <div className="col-span-1" />
      </section>
      <div className="grid grid-cols-12 w-full">
        <section className="col-span-1">
          <WelcomeBanner side="left" />
        </section>
        <section className="col-span-10 w-full flex justify-center p-20 border-x-2">
          <div className="flex flex-col">
            <div className="h-150 w-150 bg-red-300">Picture of me</div>
            <div className="">Info of me</div>
          </div>
        </section>
        <section className="col-span-1">
          <WelcomeBanner side="left" />
        </section>
      </div>
    </main>
  );
}
