import {
  Users,
  FolderKanban,
  Mail,
} from "lucide-react";

function TeamOverviewCards({
  team,
  pendingCount,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white border rounded-xl p-5">
        <p className="text-slate-500 text-sm">
          Total Members
        </p>

        <div className="flex justify-between mt-3">
          <h3 className="text-3xl font-bold">
            {team.members}
          </h3>

          <Users className="text-blue-600" />
        </div>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-slate-500 text-sm">
          Projects
        </p>

        <div className="flex justify-between mt-3">
          <h3 className="text-3xl font-bold">
            {team.projects}
          </h3>

          <FolderKanban className="text-green-600" />
        </div>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <p className="text-slate-500 text-sm">
          Pending Invites
        </p>

        <div className="flex justify-between mt-3">
          <h3 className="text-3xl font-bold">
            {pendingCount}
          </h3>

          <Mail className="text-orange-500" />
        </div>
      </div>

    </div>
  );
}

export default TeamOverviewCards;