import { projects } from "Utils/projects";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <section id='portfolio' className="flex flex-col items-center lg:p-8 overflow-x-scroll">
      <p className="text-3xl font-bold my-8">Portfolio</p>

      <div className="flex lg:flex-wrap justify-center items-center gap-8">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
