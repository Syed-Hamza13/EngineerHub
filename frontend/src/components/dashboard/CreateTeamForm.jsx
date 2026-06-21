function CreateTeamForm({
  teamName,
  setTeamName,
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">

      <h4 className="text-sm font-semibold text-blue-600 mb-3">
        Create New Team
      </h4>

      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Enter team name..."
        className="
          w-full
          px-4
          py-3
          border
          border-slate-300
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
        "
      />

    </div>
  );
}

export default CreateTeamForm;