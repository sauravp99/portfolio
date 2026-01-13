import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  projectTitle: string;
  clientName: string;
  icons: ReactNode;
  year: string;
}
export const ProjectHeader = ({
  projectTitle,
  clientName,
  icons,
  year,
}: Props) => {
  return (
    <section className="flex flex-col w-full pt-5">
      <div className="w-full flex pl-20 my-5">
        <Link
          to={"/"}
          className="w-fit flex flex-row border gap-2 px-5 py-2 rounded-xl text-[16px]"
        >
          <ArrowLeftIcon /> <p>Back</p>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="h-1 w-full bg-(--sand)" />
          <h1 className="whitespace-nowrap font-2xl font-days-one">
            {projectTitle}
          </h1>
          <div className="h-1 w-full bg-(--sand)" />
        </div>
        <div className="flex flex-row justify-between px-8 font-quicksand font-semibold">
          <p>{clientName}</p>
          {icons}
          <p>{year}</p>
        </div>
      </div>
    </section>
  );
};
