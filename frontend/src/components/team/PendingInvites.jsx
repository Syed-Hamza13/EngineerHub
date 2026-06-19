import {
  Mail,
  RotateCcw,
  Trash2,
} from "lucide-react";

function PendingInvites({
  invites,
  onDelete,
  onResend,
}) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">

      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">
          Pending Invitations
        </h2>
      </div>

      {invites.length === 0 ? (
        <div className="p-8 text-center text-slate-500">
          No Invitations Yet
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50 border-b">

              <tr className="text-left">

                <th className="px-6 py-4">
                  Email Address
                </th>

                <th className="px-6 py-4">
                  Target Team
                </th>

                <th className="px-6 py-4">
                  Sent Date
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {invites.map((invite) => (

                <tr
                  key={invite.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs">

                        {invite.email
                          .substring(0, 2)
                          .toUpperCase()}

                      </div>

                      <span>
                        {invite.email}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4">
                    {invite.teamName}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {invite.sentDate}
                  </td>

                  <td className="px-6 py-4">

                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>

                      {invite.status}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-3">

                      <button
                        onClick={() =>
                          onResend(invite.id)
                        }
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <RotateCcw size={18} />
                      </button>

                      <button
                        onClick={() =>
                          onDelete(invite.id)
                        }
                        className="text-red-600 hover:text-red-800"
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