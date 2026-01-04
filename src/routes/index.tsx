import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/home/Header";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-red-100 w-full h-screen grid grid-cols-12 *:border-2">
      <div className="col-span-1">side label</div>
      <section className="col-span-10 flex flex-col items-center">
        <Header />
        <div className="flex flex-col">
          <div className="">Picture of me</div>
          <div className="">Info of me</div>
        </div>
      </section>
      <div className="col-span-1">side label</div>
      <section>
        <div>my work</div>
      </section>
    </main>
  );
}
