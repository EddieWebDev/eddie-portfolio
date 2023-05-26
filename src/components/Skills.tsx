import { Skill } from "./Skill";
import { skills } from "Utils/skills";

export const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center lg:p-8">
      <p className="text-3xl font-bold my-8">My skills</p>
      <div className="flex gap-4 justify-center flex-wrap max-w-4xl">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};
