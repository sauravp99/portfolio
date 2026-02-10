import clsx from "clsx";

interface ProjectImage {
  src: string;
  alt: string;
  className?: string;
}
export const ProjectImages = ({
  imageL,
  imageR,
}: {
  imageL: ProjectImage;
  imageR?: ProjectImage;
}) => {
  return (
    <section className="w-full px-10 flex gap-20 flex-row justify-center items-center">
      <img
        src={imageL.src}
        alt={imageL.alt}
        className={clsx("max-w-[20%] h-auto p-4 rounded-2xl", imageL.className)}
      />
      {imageR && (
        <img
          src={imageR.src}
          alt={imageR.alt}
          className={clsx(
            "max-w-[20%] h-auto p-4 rounded-2xl",
            imageR.className
          )}
        />
      )}
    </section>
  );
};
