import { useState } from "react";

import TeamHeader from "../../components/team/TeamHeader";
import TeamOverviewCards from "../../components/team/TeamOverviewCards";
import TeamMembersTable from "../../components/team/TeamMembersTable";
import InviteMemberModal from "../../components/team/InviteMemberModal";

function TeamDetails() {

  const [inviteModalOpen, setInviteModalOpen] =
    useState(false);

  const team = {
    id: 1,
    name: "AI Research Team",
    description:
      "Building next generation AI systems",
    members: 8,
    projects: 4,
  };

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Syed Hamza",
      email: "hamza@gmail.com",
      role: "Owner",
    },
    {
      id: 2,
      name: "Ali Khan",
      email: "ali@gmail.com",
      role: "Researcher",
    },
    {
      id: 3,
      name: "Ahmed",
      email: "ahmed@gmail.com",
      role: "Engineer",
    },
  ]);

  const updateRole = (id, role) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id
          ? {
              ...member,
              role,
            }
          : member
      )
    );
  };

  const removeMember = (id) => {
    setMembers((prev) =>
      prev.filter(
        (member) =>
          member.id !== id
      )
    );
  };

  return (
    <div className="p-8 space-y-8">

      <TeamHeader team={team} />

      <TeamOverviewCards
        team={team}
        pendingCount={3}
      />

      <div className="flex justify-end">

        <button
          onClick={() =>
            setInviteModalOpen(true)
          }
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Invite Member
        </button>

      </div>

      <TeamMembersTable
        members={members}
        onRoleChange={updateRole}
        onRemove={removeMember}
      />

      <InviteMemberModal
        isOpen={inviteModalOpen}
        onClose={() =>
          setInviteModalOpen(false)
        }
        onInvite={(data) =>
          console.log(data)
        }
        team={team}
      />

    </div>
  );
}

export default TeamDetails;