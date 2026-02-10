import { useEffect, type ReactNode } from "react";
import styles from "./ProjectCard.module.css";
import clsx from "clsx";
import { Link, type LinkProps } from "@tanstack/react-router";

interface Props {
  title: string;
  year: string;
  client: string;
  description: string;
  gif: ReactNode;
  animationDelay: number;
  to: LinkProps["to"];
}

export const ProjectCard = ({
  title,
  year,
  client,
  description,
  gif,
  animationDelay,
  to,
}: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show);
        }
      }
    });

    const hiddenElements = document.querySelectorAll(".hiddenSection");
    for (const el of hiddenElements) {
      observer.observe(el);
    }
  }, []);

  animationDelay = animationDelay + 1;
  return (
    <Link
      to={to}
      className={clsx(
        "flex flex-col justify-between border-2 border-(--saffron_red) hover:border-(--sand) relative shadow-2xl backdrop-brightness-90 hiddenSection",
        styles.hidden
      )}
    >
      <div className="flex flex-col gap-2 h-fit p-5 pb-0">
        <div className="flex flex-row justify-between items-center">
          <p className="font-days-one text-2xl"> {title}</p>
          <p className=" font-days-one text-[14px]"> {year}</p>
        </div>
        <p className="font-days-one text-[12px]"> {client}</p>
      </div>
      {gif}
      <p className="font-quicksand text-[16px] p-5 pt-0 leading-8 font-semibold">
        {description}
      </p>
    </Link>
  );
};
