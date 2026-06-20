import { Users, FolderKanban, UserPlus } from "lucide-react";

import { useNavigate } from "react-router-dom";

function TeamCard({ team, onInvite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">{team.name}</h3>

        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {team.role}
        </span>
      </div>

      <p className="text-sm text-slate-500 mb-5">{team.description}</p>

      <div className="flex gap-6 mb-5">
        <div className="flex items-center gap-2">
          <Users size={16} />
          {team.members}
        </div>

        <div className="flex items-center gap-2">
          <FolderKanban size={16} />
          {team.projects}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onInvite(team)}
          className="flex-1 border rounded-lg py-2 hover:bg-slate-50"
        >
          <UserPlus size={16} className="inline mr-2" />
          Invite
        </button>

        <button
          onClick={() => navigate(`/dashboard/teams/${team.id}`)}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2"
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
