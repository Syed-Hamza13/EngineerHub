import { Plus, ArrowRight } from "lucide-react";

function CreateProjectBanner({
  onCreateProject,
}) {
  return (
    <div className="bg-blue-600 rounded-2xl p-8 flex items-center justify-between text-white">

      <div className="flex items-center gap-6">

        <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center">
          <Plus size={32} />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-2">
            Create New Project
          </h2>

          <p className="text-blue-100">
            Start a research workspace with AI tools and team collaboration
          </p>
        </div>

      </div>

      <button
        onClick={onCreateProject}
        className="
          bg-blue-500
          hover:bg-blue-400
          px-6
          py-3
          rounded-xl
          flex
          items-center
          gap-2
        "
      >
        Get Started
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default CreateProjectBanner;