function TechStackSection({
  techStack,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-2
              rounded-xl
              bg-emerald-50
              text-emerald-600
              text-sm
              font-medium
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;