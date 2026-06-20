import { useState } from "react";

function CreateTaskModal({
  isOpen,
  onClose,
  onCreateTask,
  teamMembers,
}){
  const [form, setForm] = useState({
    title: "",
    assignee: "",
    priority: "Medium",
    dueDate: "",
    status: "todo",
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
  if (
    !form.title ||
    !form.assignee ||
    !form.dueDate
  ) {
    return;
  }

  onCreateTask(form);

  setForm({
    title: "",
    assignee: "",
    priority: "Medium",
    dueDate: "",
    status: "todo",
  });

  onClose();
};

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-full
          max-w-md
        "
      >
        <h2 className="text-xl font-semibold mb-5">
          Create Task
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Task Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3"
          />

          <select
  value={form.assignee}
  onChange={(e) =>
    setForm({
      ...form,
      assignee: e.target.value,
    })
  }
  className="
    w-full
    border
    border-slate-200
    rounded-xl
    p-3
    bg-white
  "
>
  <option value="">
    Select Team Member
  </option>

  {teamMembers.map((member) => (
    <option
      key={member.id}
      value={member.name}
    >
      {member.name}
    </option>
  ))}
</select>

          <select
            value={form.priority}
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            type="date"
            value={form.dueDate}
            onChange={(e) =>
              setForm({
                ...form,
                dueDate: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
              px-4
              py-2
              border
              rounded-xl
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              px-4
              py-2
              bg-blue-600
              text-white
              rounded-xl
            "
          >
            Create
          </button>

        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;