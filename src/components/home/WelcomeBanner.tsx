export const WelcomeBanner = ({ side }: { side: "right" | "left" }) => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  const currentDate = now.toLocaleDateString();
  switch (side) {
    case "left":
      return (
        <div className="flex flex-row gap-42 rotate-270">
          <h3 className="font-days-one md:text-md whitespace-nowrap text-[14px]">
            {currentDate}
          </h3>
          <h3 className="font-days-one md:text-md whitespace-nowrap text-[14px]">
            {currentTime}
          </h3>
          <h3 className="whitespace-nowrap font-days-one md:text-xl w-full text-xs">
            Welcome to my portfolio!
          </h3>
        </div>
      );
    case "right":
      return <></>;
  }
};
