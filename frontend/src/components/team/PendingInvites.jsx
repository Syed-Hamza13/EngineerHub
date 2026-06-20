import {
  RotateCcw,
  Trash2,
} from "lucide-react";

function PendingInvites({
  invites,
  onDelete,
  onResend,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

      <div className="p-6 border-b flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Pending Invitations
          </h2>
          <p className="text-sm text-slate-500">
            Invitations sent by your teams
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
          {invites.length} Pending
        </span>
      </div>

      {invites.length === 0 ? (
        <div className="p-8 text-center text-slate-500">
          No Invitations Yet
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50/80 border-b">

              <tr className="text-left">

                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email Address
                </th>

                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Target Team
                </th>

                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sent Date
                </th>

                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {invites.map((invite) => (

                <tr
                  key={invite.id}
                  className="border-b hover:bg-slate-50 transition-all"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center font-semibold text-xs">

                        {invite.email
                          .substring(0, 2)
                          .toUpperCase()}

                      </div>

                      <div>
                        <p className="font-medium text-slate-800">
                          {invite.email}
                        </p>
                        <p className="text-xs text-slate-500">
                          Team Invitation
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                      {invite.teamName}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-slate-500">
                    {invite.sentDate}
                  </td>

                  <td className="px-6 py-5">

                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-medium">

                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>

                      {invite.status}

                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          onResend(invite.id)
                        }
                        className="h-10 w-10 rounded-xl bg-blue-50 hover:bg-blue-100 hover:scale-105 text-blue-600 flex items-center justify-center transition-all"
                      >
                        <RotateCcw size={18} />
                      </button>

                      <button
                        onClick={() =>
                          onDelete(invite.id)
                        }
                        className="h-10 w-10 rounded-xl bg-red-50 hover:bg-red-100 hover:scale-105 text-red-600 flex items-center justify-center transition-all"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}
    </div>
  );
}

export default PendingInvites;