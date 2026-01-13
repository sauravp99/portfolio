import clsx from "clsx";
import {
  CodeIcon,
  GlassesIcon,
  HourglassIcon,
  PencilRulerIcon,
} from "../../utils/icons";

export const Header = ({ title }: { title: string }) => {
  return (
    <div className=" w-full flex flex-col md:gap-20 gap-10 col-span-1 md:pt-60 pt-50 items-center justify-center">
      <div className="flex flex-row gap-10 md:gap-20 *:w-5 *:xl:w-10 *:lg:w-8 *:md:w-7">
        <CodeIcon />
        <GlassesIcon />
        <HourglassIcon />
        <PencilRulerIcon />
      </div>
      <div className="flex flex-row w-full gap-10 justify-center items-center">
        <div className="w-full h-0.5 bg-(--sand)" />
        <div>
          <h1
            className={clsx(
              "font-days-one whitespace-nowrap lg:text-5xl xl:text-6xl text-[20px] md:text-4xl"
            )}
          >
            {title}
          </h1>
        </div>
        <div className="w-full h-0.5 bg-(--sand)" />
      </div>
    </div>
  );
};
