import AIsvg from "../../assets/undraw_ai-research-assistant_cxx0.svg";
import DesignSvg from "../../assets/undraw_process_7lkc.svg";
import CodingSvg from "../../assets/undraw_programming_j1zw.svg";
export const Skills = () => {
  return (
    <>
      <div className="flex flex-col *:text-(--flame) h-full gap-5  w-1/2">
        <p className="text-(--stone) lg:text-lg md:text-[14px] font-quicksand font-bold">
          I enjoy working with
        </p>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-4 items-center">
            <img
              src={CodingSvg}
              alt="Illustration of programmer"
              className="max-w-[40%] h-auto bg-[#eae6e69c] rounded-lg"
            />
            <p className="font-days-one text-lg font-bold">Typescript</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img
              src={DesignSvg}
              alt="Illustration of designer"
              className="max-w-[40%] h-auto bg-[#eae6e69c] rounded-lg"
            />
            <p className="font-days-one text-lg font-bold">UX design</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img
              src={AIsvg}
              alt="Illustration of AI researcher"
              className="max-w-[35%] h-auto bg-[#eae6e69c] rounded-lg"
            />
            <p className="font-days-one text-lg font-bold">AI</p>
          </div>
        </div>
      </div>
    </>
  );
};
