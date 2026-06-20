import TeamMemberRow from "./TeamMemberRow";

function TeamMembersTable({
  members,
  onRoleChange,
  onRemove,
}) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">

      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">
          Team Members
        </h2>
      </div>

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Name
            </th>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Role
            </th>

            <th className="px-6 py-4 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {members.map((member) => (
            <TeamMemberRow
              key={member.id}
              member={member}
              onRoleChange={onRoleChange}
              onRemove={onRemove}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TeamMembersTable;