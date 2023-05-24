import { Skill } from "./Skill";
import { skills } from "Utils/skills";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <p className="text-3xl font-bold py-4">My skills</p>
      <div className="flex gap-4 justify-center flex-wrap py-4 max-w-4xl">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};
