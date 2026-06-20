import { useState } from "react";
import { useParams } from "react-router-dom";
import WorkspaceHeader from "../../components/workspace/WorkspaceHeader";
import WorkspaceTabs from "../../components/workspace/WorkspaceTabs";
import ChatTab from "../../components/workspace/chat/ChatTab";
import DocumentsTab from "../../components/workspace/documents/DocumentsTab";
import TasksTab from "../../components/workspace/tasks/TasksTab";
import MeetingsTab from "../../components/workspace/meetings/MeetingsTab";
import OverviewTab from "../../components/workspace/overview/OverviewTab";

function ProjectWorkspace() {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("chat");

  // Mock project data - will be replaced with actual API call
  const project = {
    id: projectId,
    name: "LLM Benchmark Study",
    description: "Building AI-powered research workflows",
    domain: "AI / ML",
    progress: 68,
    members: 8,
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <WorkspaceHeader project={project} />

      <WorkspaceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "chat" && <ChatTab />}

        {activeTab === "documents" && <DocumentsTab />}

        {activeTab === "tasks" && <TasksTab />}

        {activeTab === "meetings" && <MeetingsTab />}

        {activeTab === "overview" && <OverviewTab />}
      </div>
    </div>
  );
}

export default ProjectWorkspace;
