import { StarIcon } from "lucide-react";

export const ProjectDescription = () => {
  return (
    <section className="w-5/6 border rounded-2xl h-fit p-5 ">
      <div>
        <div className="flex items-center flex-row gap-5 w-full text-(--sand)">
          <h2 className="whitespace-nowrap font-days-one">Roles</h2>
          <div className="w-full h-1 bg-(--sand)" />
        </div>
        <div className="flex flex-row pt-5">
          <div className="w-4/7">
            <div className="flex flex-row gap-5">
              <StarIcon /> <p>Frontend lead</p>
              <p>s</p>
            </div>
          </div>
          <div className="w-3/7">
            <h2>Some of the things I have learned</h2>
            <ul>
              <li>
                Working with a fast-paced startup and balancing business
                interests, client needs and user needs. Understanding pacing and
                reprioritizing product requirements when needed.
              </li>
              <li>
                Best practices around building up an extensive and large
                monolithic react and typescript codebase. This involved
                understanding properly configuring third party libraries and
                writing robust and accessible shared UI components.
              </li>
              <li>
                Experience in taking responsibility for prioritizing, setting
                roadmaps and guiding the team in frontend development and the UX
                process. I have gained a lot of understanding in critical
                decision making and maintaining a good team dynamic.
              </li>
              <li>
                Working with branding and visual profile. We crafted a unique
                brand image through facilitating workshops, conceptualizing the
                clients long term vision and incorporating the concept into the
                design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
