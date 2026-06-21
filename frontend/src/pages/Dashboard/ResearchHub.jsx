import { useState } from "react";

import CreateProjectBanner from "../../components/dashboard/CreateProjectBanner";
import ProjectsSection from "../../components/dashboard/ProjectsSection";
import CreateProjectModal from "../../components/dashboard/CreateProjectModal";

function ResearchHub() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "LLM Benchmark Study",
      progress: 68,
      updated: "2h ago",
      status: "active",
    },
    {
      id: 2,
      name: "DeFi Protocol Analysis",
      progress: 42,
      updated: "1d ago",
      status: "active",
    },
    {
      id: 3,
      name: "Neural Arch Exploration",
      progress: 15,
      updated: "3d ago",
      status: "active",
    },

  ]);

  const handleCreateProject = (projectData) => {

    const newProject = {
      id: Date.now(),
      name: projectData.name,
      description: projectData.description,
      domain: projectData.domain,
      teamName: projectData.teamName,
      progress: 0,
      updated: "Just now",
      status: "active",
    };

    setProjects((prev) => [newProject, ...prev]);
  };

  return (
    <div className="p-2 space-y-3">

      <CreateProjectBanner
        onCreateProject={() => setIsModalOpen(true)}
      />

      <ProjectsSection
        projects={projects}
      />

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateProject={handleCreateProject}
      />

    </div>
  );
}

export default ResearchHub;
