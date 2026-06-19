import TeamCard from "./TeamCard";

function TeamsGrid({
  teams,
  onInvite,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          onInvite={onInvite}
        />
      ))}

    </div>
  );
}

export default TeamsGrid;