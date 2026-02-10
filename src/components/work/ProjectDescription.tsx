import clsx from "clsx";
import { StarIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface Role {
  title: string;
  description: string;
}

interface Outcome {
  text: string;
  results: string[];
}

interface Description {
  roles: Role[];
  reflections?: string[];
  result?: Outcome;
}

interface Props {
  description: Description;
}
export const ProjectDescription = ({ description }: Props) => {
  return (
    <section className="w-5/6 border rounded-2xl h-fit p-5 mb-10">
      <div>
        <div className="flex items-center flex-row gap-5 w-full text-(--sand)">
          <h2 className="whitespace-nowrap font-days-one">Roles</h2>
          <div className="w-full h-1 bg-(--sand)" />
        </div>
        <div
          className={clsx(
            "flex gap-10 -full",
            description.reflections && "grid grid-cols-2"
          )}
        >
          <div className="flex flex-col col-span-1 gap-8 pt-5">
            {description?.roles.map((role) => {
              return (
                <div
                  className="flex flex-col gap-5 font-quicksand leading-8"
                  key={uuidv4()}
                >
                  <div className="flex flex-row gap-2">
                    <StarIcon className="fill-(--ice) stroke-(--ice)" />
                    <p>{role.title}</p>
                  </div>
                  <p className="whitespace-pre-wrap">{role.description}</p>
                </div>
              );
            })}
          </div>
          {description.reflections && (
            <div className="flex flex-col gap-5 pt-5">
              <h2 className="whitespace-nowrap">Some things I learned</h2>
              <div className="flex flex-col gap-8 font-quicksand">
                {description?.reflections?.map((r) => {
                  return <p key={uuidv4()}>{r}</p>;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
