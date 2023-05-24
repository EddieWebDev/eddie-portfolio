import { projects } from "Utils/projects";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <p className="text-3xl tett-bold py-4">Portfolio</p>
      <div className="flex flex-wrap justify-center items-center gap-8 py-4 max-w-5xl">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
