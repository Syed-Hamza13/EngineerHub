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

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mt-4">
          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              {teams.length}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Active research teams
            </p>
          </div>
          <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Users className="text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mt-4">
          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              {totalMembers}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Active collaborators
            </p>
          </div>
          <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
            <UserCheck className="text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mt-4">
          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              {pendingInvites.length}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Pending invitations
            </p>
          </div>
          <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center">
            <Mail className="text-orange-500" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default TeamStats;