type Props = {
  project: {
    title: string;
    imgUrl: string;
    description: string;
  };
};

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-72 flex flex-col gap-3 items-center p-2">
      <img src={project.imgUrl} />
      <p className="text-xl">{project.title}</p> 
    </div>
  );
};
