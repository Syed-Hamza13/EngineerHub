import { useState } from "react";
import { FolderOpen, X, Sparkles } from "lucide-react";

import TeamSelector from "./TeamSelector";
import CreateTeamForm from "./CreateTeamForm";
import ExistingTeamsList from "./ExistingTeamsList";

function CreateProjectModal({ isOpen, onClose, onCreateProject }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const [domain, setDomain] = useState("AI/ML");

  const [teamMode, setTeamMode] = useState("new");

  const [teamName, setTeamName] = useState("");

  const [selectedTeam, setSelectedTeam] = useState(null);

  const domains = [
    "AI/ML",
    "Blockchain",
    "Cyber Security",
    "IoT",
    "Cloud",
    "Data Science",
    "Robotics",
    "DevOps",
  ];

  const teams = [
    {
      id: 1,
      name: "Quantum Pioneers",
    },
    {
      id: 2,
      name: "Neural Arch Group",
    },
    {
      id: 3,
      name: "Core Dynamics",
    },
  ];

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!projectName.trim()) {
      alert("Project Name required");
      return;
    }

    if (!description.trim()) {
      alert("Description required");
      return;
    }

    if (teamMode === "new" && !teamName.trim()) {
      alert("Team Name required");
      return;
    }

    if (teamMode === "existing" && !selectedTeam) {
      alert("Select a Team");
      return;
    }

    onCreateProject({
      name: projectName,
      description,
      domain,
      teamType: teamMode,
      teamName: teamMode === "new" ? teamName : selectedTeam.name,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}

      <div
        className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="
    w-full
    max-w-2xl
    bg-white
    rounded-2xl
    shadow-2xl
    overflow-hidden

    max-h-[90vh]
    flex
    flex-col
  "
        >
          {/* Header */}

          <div className="flex items-start justify-between p-6 border-b">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <FolderOpen size={22} />
              </div>

              <div>
                <h2 className="text-3xl font-semibold">Create New Project</h2>

                <p className="text-slate-500">Set up your research workspace</p>
              </div>
            </div>

            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {/* Body */}

          <div
            className="
    p-6
    space-y-5
    overflow-y-auto
    flex-1
  "
          >
            <div>
              <label className="block mb-2 font-medium">Project Name</label>

              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="LLM Benchmark Study 2025"
                className="w-full px-4 py-2.5 border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Description</label>

              <textarea
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe research goals..."
                className="w-full px-4 py-2.5 border rounded-lg resize-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Domain</label>

              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg"
              >
                {domains.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-4 font-medium">Team</label>

              <TeamSelector teamMode={teamMode} setTeamMode={setTeamMode} />
            </div>

            {teamMode === "new" ? (
              <CreateTeamForm teamName={teamName} setTeamName={setTeamName} />
            ) : (
              <ExistingTeamsList
                teams={teams}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
              />
            )}
          </div>

          {/* Footer */}

          <div className="border-t p-6 flex justify-between">
            <button onClick={onClose} className="text-slate-600">
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="
                px-6
                py-2.5
                bg-blue-600
                text-white
                rounded-lg
                flex
                items-center
                gap-2
                hover:bg-blue-700
              "
            >
              <Sparkles size={16} />
              Create Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectModal;
