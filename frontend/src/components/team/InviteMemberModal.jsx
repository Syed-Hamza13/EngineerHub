import { useState } from "react";
import {
  X,
  Mail,
  UserPlus,
  CheckCircle,
} from "lucide-react";

function InviteMemberModal({
  isOpen,
  onClose,
  onInvite,
  team,
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Engineer");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInvite = (e) => {
    e.preventDefault();

    onInvite({
      email,
      role,
      teamName: team?.name,
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setEmail("");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">

        <div className="px-6 py-5 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserPlus className="text-blue-600" />
            <h2 className="text-xl font-semibold">
              Invite Member
            </h2>
          </div>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-6">

          <p className="text-slate-500 mb-6">
            Invite a collaborator to
            {" "}
            <strong>
              {team?.name}
            </strong>
          </p>

          {success && (
            <div className="mb-5 flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg p-3">
              <CheckCircle size={18} />
              Invitation sent successfully
            </div>
          )}

          <form
            onSubmit={handleInvite}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                  placeholder="user@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Role
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Engineer</option>
                <option>Researcher</option>
                <option>Product Manager</option>
                <option>Viewer</option>
              </select>
            </div>

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg"
              >
                Send Invite
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default InviteMemberModal;