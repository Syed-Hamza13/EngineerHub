import CreateProjectBanner from "../../components/dashboard/CreateProjectBanner";
import ProjectsSection from "../../components/dashboard/ProjectsSection";

function ResearchHub() {
  return (
    <div className="p-8 space-y-6">

      <CreateProjectBanner />

      <ProjectsSection />

    </div>
  );
}

export default ResearchHub;