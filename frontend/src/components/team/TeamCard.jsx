import { Users, FolderKanban, UserPlus } from "lucide-react";

import { useNavigate } from "react-router-dom";

function TeamCard({ team, onInvite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between mb-5">
        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            {team.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{team.name}</h3>
            <p className="text-xs text-slate-500">Research Team</p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
          {team.role}
        </span>
      </div>

      <p className="text-sm text-slate-500 mb-5">{team.description}</p>

      <div className="flex gap-6 py-4 border-y border-slate-100 mb-5">
        <div className="flex items-center gap-2 text-slate-600">
          <Users size={16} />
          {team.members}
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FolderKanban size={16} />
          {team.projects}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onInvite(team)}
          className="flex-1 border border-slate-200 rounded-xl py-2.5 hover:bg-slate-50 transition"
        >
          <UserPlus size={16} className="inline mr-2" />
          Invite
        </button>

        <button
          onClick={() => navigate(`/dashboard/teams/${team.id}`)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 transition"
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
