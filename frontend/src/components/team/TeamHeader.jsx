import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TeamHeader({ team }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-xl p-6">

      <button
        onClick={() => navigate("/dashboard/teams")}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-4"
      >
        <ArrowLeft size={18} />
        Back To Teams
      </button>

      <div className="flex justify-between items-start">

        <div>
          <h1 className="text-3xl font-bold">
            {team.name}
          </h1>

          <p className="text-slate-500 mt-2">
            {team.description}
          </p>
        </div>

        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg flex items-center gap-2">
          <Users size={18} />
          {team.members} Members
        </div>

      </div>

    </div>
  );
}

export default TeamHeader;