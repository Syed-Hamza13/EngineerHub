function ExistingTeamsList({
  teams,
  selectedTeam,
  setSelectedTeam,
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">

      <h4 className="text-sm font-semibold text-blue-600 mb-4">
        Existing Teams
      </h4>

      <div className="space-y-2">

        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => setSelectedTeam(team)}
            className={`
              w-full
              flex
              items-center
              justify-between
              px-4
              py-3
              rounded-lg
              border
              transition

              ${
                selectedTeam?.id === team.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-300 bg-white hover:border-blue-400"
              }
            `}
          >
            <span>{team.name}</span>

            <span className="text-blue-600 text-sm font-medium">
              Invite
            </span>
          </button>
        ))}

      </div>

    </div>
  );
}

export default ExistingTeamsList;