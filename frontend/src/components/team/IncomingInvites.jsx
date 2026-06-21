import {
  CheckCircle,
  XCircle,
  Users,
} from "lucide-react";

function IncomingInvites({
  invites,
  onAccept,
  onReject,
}) {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-semibold">
            Incoming Invitations
          </h2>

          <p className="text-sm text-slate-500">
            Review and respond to team invitations
          </p>
        </div>

        <span
          className="
            px-3
            py-1
            rounded-full
            bg-orange-100
            text-orange-700
            text-sm
            font-medium
          "
        >
          {invites.length} Pending
        </span>

      </div>

      {invites.length === 0 ? (
        <div className="text-center py-10">
          <Users
            size={40}
            className="mx-auto text-slate-300 mb-3"
          />

          <p className="text-slate-500">
            No incoming invitations
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {invites.map((invite) => (
            <div
              key={invite.id}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                hover:shadow-md
                hover:border-blue-200
                transition-all
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                {/* Left Side */}
                <div className="flex gap-4">

                  <div
                    className="
                      h-12
                      w-12
                      min-w-[48px]
                      rounded-xl
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Users
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg text-slate-900">
                      {invite.teamName}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Invited by{" "}
                      <span className="font-medium text-slate-700">
                        {invite.invitedBy}
                      </span>
                    </p>

                    <p className="text-sm text-slate-600 mt-2">
                      {invite.description}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <p className="text-xs text-slate-400">
                        {invite.sentDate}
                      </p>

                      <span
                        className="
                          px-2.5
                          py-1
                          rounded-full
                          bg-yellow-100
                          text-yellow-700
                          text-xs
                          font-medium
                        "
                      >
                        Pending Review
                      </span>

                    </div>

                  </div>

                </div>

                {/* Right Side */}
                <div className="flex gap-2 self-start">

                  <button
                    onClick={() =>
                      onAccept(invite.id)
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      bg-emerald-500
                      hover:bg-emerald-600
                      text-white
                      rounded-xl
                      text-sm
                      font-medium
                      transition
                    "
                  >
                    <CheckCircle size={16} />
                    Accept
                  </button>

                  <button
                    onClick={() =>
                      onReject(invite.id)
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      rounded-xl
                      text-sm
                      font-medium
                      transition
                    "
                  >
                    <XCircle size={16} />
                    Reject
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default IncomingInvites;