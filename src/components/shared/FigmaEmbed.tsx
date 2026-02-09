// import { FigmaIcon } from "lucide-react"; // not a real package

/**
 * Extract the file id from a Figma prototype url
 */

import styles from "./FigmaEmbed.module.css";

interface FigmaEmbedProps {
  url: string;
}
export const FigmaEmbed = ({ url }: FigmaEmbedProps) => {
  const parsedUrl = `${url}&hide-ui=1&scaling=min-zoom&content-scaling=fixed&embed-host=share`;

  return (
    <div className={styles.figma_embed}>
      <iframe
        title="iframe"
        src={parsedUrl}
        className="w-[90%] h-full rounded-xl p-0 m-0"
        loading="lazy"
      />
    </div>
  );
};
