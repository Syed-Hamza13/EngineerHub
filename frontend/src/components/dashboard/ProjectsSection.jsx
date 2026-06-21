import { useState } from "react";
import { FolderOpen } from "lucide-react";

import ProjectTabs from "./ProjectTabs";
import ProjectList from "./ProjectList";

function ProjectsSection({
  projects,
}) {
  const [activeTab, setActiveTab] = useState("active");

  const filteredProjects = projects.filter(
    (project) => project.status === activeTab
  );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">

      <div className="flex items-start justify-between mb-6">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <FolderOpen size={24} />
          </div>

          <div>

            <h2 className="text-2xl font-semibold">
              Projects
            </h2>

            <p className="text-slate-500">
              View all active and completed research projects
            </p>

          </div>

        </div>

        <ProjectTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

      </div>

      <ProjectList
        projects={filteredProjects}
      />

    </div>
  );
}

export default ProjectsSection;