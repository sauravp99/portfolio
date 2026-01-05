import clsx from "clsx";

export const WelcomeBanner = ({ side }: { side: "right" | "left" }) => {
  return (
    <span
      className={clsx(
        `flex justify-center h-full items-center ${
          side === "right" ? "rotate-90" : "rotate-270"
        }`
      )}
    >
      <h3 className="whitespace-nowrap"> Welcome to my portfolio!</h3>
    </span>
  );
};
