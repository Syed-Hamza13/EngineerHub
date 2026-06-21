function SkillsSection({
  skills,
  editMode,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">
        Skills
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3
              py-2
              rounded-xl
              bg-blue-50
              text-blue-600
              text-sm
              font-medium
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;