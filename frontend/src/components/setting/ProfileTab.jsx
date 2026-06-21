import { User } from "lucide-react";

function ProfileTab({
  profile,
  editMode,
  setProfile,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">

      <div className="flex items-center gap-5">

        <div
          className="
            h-20
            w-20
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
          "
        >
          <User
            size={34}
            className="text-blue-600"
          />
        </div>

        <div className="flex-1 space-y-3">

          <input
            disabled={!editMode}
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              p-3
            "
          />

          <input
            disabled={!editMode}
            value={profile.email}
            onChange={(e) =>
              setProfile({
                ...profile,
                email: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              p-3
            "
          />

          <input
            disabled={!editMode}
            value={profile.role}
            onChange={(e) =>
              setProfile({
                ...profile,
                role: e.target.value,
              })
            }
            className="
              w-full
              border
              rounded-xl
              p-3
            "
          />

        </div>

      </div>

    </div>
  );
}

export default ProfileTab;