import clsx from "clsx";
import styles from "./FigmaEmbed.module.css";
import { FigmaIcon } from "../../utils/icons";

interface FigmaEmbedProps {
  url: string;
  className?: string;
}
export const FigmaEmbed = ({ url, className }: FigmaEmbedProps) => {
  const parsedUrl = `${url}&hide-ui=1&scaling=min-zoom&content-scaling=fixed&embed-host=share`;

  return (
    <div
      className={clsx(
        "flex gap-2 rounded-xl border-black flex-col w-[89%]",
        className
      )}
    >
      <p className="p-2 flex flex-row gap-2 font-quicksand font-semibold">
        <FigmaIcon width={20} height={20} className=" p-0" /> Made with Figma
      </p>
      <div className={styles.figma_embed}>
        <iframe
          title="iframe"
          src={parsedUrl}
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};
