import CodeIcon from "../../icons/code.svg";
import GlassesIcon from "../../icons/glasses.svg";
import HourglassIcon from "../../icons/hourglass.svg";
import PencilRulerIcon from "../../icons/pencil_ruler.svg";

export const Header = () => {
  return (
    <div className="border-2 w-full flex flex-col gap-10 py-20 items-center justify-center">
      <div className="flex flex-row w-full gap-10 justify-center items-center">
        <div className="w-full h-1 bg-black" />
        <h1 className="font-days-one text-6xl whitespace-nowrap">
          SAURAV PANDEY
        </h1>
        <div className="w-full h-1 bg-black" />
      </div>
      <div className="flex flex-row gap-6">
        <img src={CodeIcon} alt="Code Icon" />
        <img src={GlassesIcon} alt="Glasses Icon" />
        <img src={HourglassIcon} alt="Hourglass Icon" />
        <img src={PencilRulerIcon} alt="Pencil Ruler Icon" />
      </div>
    </div>
  );
};
