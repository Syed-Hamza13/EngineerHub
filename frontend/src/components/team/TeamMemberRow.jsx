import { Trash2 } from "lucide-react";

function TeamMemberRow({
  member,
  onRoleChange,
  onRemove,
}) {
  return (
    <tr className="border-b">

      <td className="px-6 py-4">
        {member.name}
      </td>

      <td className="px-6 py-4">
        {member.email}
      </td>

      <td className="px-6 py-4">

        <select
          value={member.role}
          onChange={(e) =>
            onRoleChange(
              member.id,
              e.target.value
            )
          }
          className="border rounded-lg px-3 py-2"
        >
          <option>Owner</option>
          <option>Researcher</option>
          <option>Engineer</option>
          <option>Viewer</option>
        </select>

      </td>

      <td className="px-6 py-4 text-right">

        <button
          onClick={() => onRemove(member.id)}
          className="text-red-600 hover:text-red-800"
        >
          <Trash2 size={18} />
        </button>

      </td>

    </tr>
  );
}

export default TeamMemberRow;