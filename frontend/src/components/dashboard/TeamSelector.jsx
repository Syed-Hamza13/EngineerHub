import { Plus, Users } from "lucide-react";

function TeamSelector({
  teamMode,
  setTeamMode,
}) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <button
        type="button"
        onClick={() => setTeamMode("new")}
        className={`
          py-3
          rounded-lg
          flex
          items-center
          justify-center
          gap-2
          border
          transition

          ${
            teamMode === "new"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-slate-100 border-slate-200"
          }
        `}
      >
        <Plus size={18} />
        Create New Team
      </button>

      <button
        type="button"
        onClick={() => setTeamMode("existing")}
        className={`
          py-3
          rounded-lg
          flex
          items-center
          justify-center
          gap-2
          border
          transition

          ${
            teamMode === "existing"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-slate-100 border-slate-200"
          }
        `}
      >
        <Users size={18} />
        Use Existing Team
      </button>

    </div>
  );
}

export default TeamSelector;