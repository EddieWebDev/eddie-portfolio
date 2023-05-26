import { projects } from "Utils/projects";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <section id='portfolio' className="flex flex-col items-center lg:p-8">
      <p className="text-3xl font-bold my-8">Portfolio</p>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
