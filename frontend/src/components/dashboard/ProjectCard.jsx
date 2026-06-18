function ProjectCard({
  project,
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-5">

      <div className="flex justify-between mb-3">

        <div>
          <h3 className="font-semibold text-lg">
            {project.name}
          </h3>

          {project.domain && (
            <p className="text-sm text-slate-500">
              {project.domain}
            </p>
          )}
        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">
            {project.updated}
          </p>

          <p className="font-semibold">
            {project.progress}%
          </p>

        </div>

      </div>

      <p className="text-sm text-slate-500 mb-2">
        Progress
      </p>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-blue-600 to-teal-500"
          style={{
            width: `${project.progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProjectCard;