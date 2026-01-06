import clsx from "clsx";

export const WelcomeBanner = ({ side }: { side: "right" | "left" }) => {
  return (
    <h3
      className={clsx(
        `whitespace-nowrap font-days-one md:text-xl w-full text-xs ${
          side === "right" ? "rotate-90" : "rotate-270"
        }`
      )}
    >
      Welcome to my portfolio!
    </h3>
  );
};
