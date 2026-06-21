import ProjectCard from "./ProjectCard";

function ProjectList({
  projects,
}) {
  return (
    <div className="space-y-4">

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </div>
  );
}

export default ProjectList;