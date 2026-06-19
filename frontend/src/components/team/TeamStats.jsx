import {
  Users,
  UserCheck,
  Mail,
} from "lucide-react";

function TeamStats({ teams, pendingInvites }) {
  const totalMembers = teams.reduce(
    (sum, team) => sum + team.members,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="bg-white border rounded-xl p-5">
        <p className="text-sm text-slate-500">
          Total Teams
        </p>

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-3xl font-bold">
            {teams.length}
          </h3>

          <Users className="text-blue-600" />
        </div>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-sm text-slate-500">
          Active Collaborators
        </p>

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-3xl font-bold">
            {totalMembers}
          </h3>

          <UserCheck className="text-green-600" />
        </div>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-sm text-slate-500">
          Pending Invitations
        </p>

        <div className="flex items-center justify-between mt-2">
          <h3 className="text-3xl font-bold">
            {pendingInvites.length}
          </h3>

          <Mail className="text-orange-500" />
        </div>
      </div>

    </div>
  );
}

export default TeamStats;