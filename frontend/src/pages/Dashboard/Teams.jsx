import { useState } from "react";

import TeamStats from "../../components/team/TeamStats";
import TeamsGrid from "../../components/team/TeamsGrid";
import PendingInvites from "../../components/team/PendingInvites";

import CreateTeamModal from "../../components/team/CreateTeamModal";
import InviteMemberModal from "../../components/team/InviteMemberModal";

function Teams() {

  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "AI Research Team",
      description: "Building AI solutions",
      role: "Owner",
      members: 8,
      projects: 4,
    },
    {
      id: 2,
      name: "Cyber Security",
      description: "Security Audits",
      role: "Collaborator",
      members: 6,
      projects: 2,
    },
  ]);

  const [pendingInvites, setPendingInvites] =
    useState([]);

  const [createModalOpen, setCreateModalOpen] =
    useState(false);

  const [inviteModalOpen, setInviteModalOpen] =
    useState(false);

  const [selectedTeam, setSelectedTeam] =
    useState(null);

  const handleCreateTeam = (teamData) => {
    const newTeam = {
      id: Date.now(),
      ...teamData,
      role: "Owner",
      members: 1,
      projects: 0,
    };

    setTeams((prev) => [...prev, newTeam]);
  };

  const handleInvite = (inviteData) => {
  const newInvite = {
    id: Date.now(),
    email: inviteData.email,
    role: inviteData.role,
    teamName: inviteData.teamName,
    sentDate: new Date().toLocaleDateString(),
    status: "Pending",
  };

  setPendingInvites((prev) => [
    ...prev,
    newInvite,
  ]);
};

const handleDeleteInvite = (id) => {
  setPendingInvites((prev) =>
    prev.filter((invite) => invite.id !== id)
  );
};

const handleResendInvite = (id) => {
  setPendingInvites((prev) =>
    prev.map((invite) =>
      invite.id === id
        ? {
            ...invite,
            sentDate:
              new Date().toLocaleDateString(),
            status: "Pending",
          }
        : invite
    )
  );

  alert("Invitation resent successfully");
};

  const openInviteModal = (team) => {
    setSelectedTeam(team);
    setInviteModalOpen(true);
  };

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Teams
          </h1>

          <p className="text-slate-500">
            Manage research teams
          </p>
        </div>

        <button
          onClick={() =>
            setCreateModalOpen(true)
          }
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Create Team
        </button>

      </div>

      <TeamStats
        teams={teams}
        pendingInvites={pendingInvites}
      />

      <TeamsGrid
        teams={teams}
        onInvite={openInviteModal}
      />

      <PendingInvites
  invites={pendingInvites}
  onDelete={handleDeleteInvite}
  onResend={handleResendInvite}
/>

      <CreateTeamModal
        isOpen={createModalOpen}
        onClose={() =>
          setCreateModalOpen(false)
        }
        onCreateTeam={handleCreateTeam}
      />

      <InviteMemberModal
        isOpen={inviteModalOpen}
        onClose={() =>
          setInviteModalOpen(false)
        }
        onInvite={handleInvite}
        team={selectedTeam}
      />

    </div>
  );
}

export default Teams;