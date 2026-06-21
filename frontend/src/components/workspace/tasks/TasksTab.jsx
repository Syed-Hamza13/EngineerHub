import { useState } from "react";
import { Plus } from "lucide-react";

import KanbanBoard from "./KanbanBoard";
import CreateTaskModal from "./CreateTaskModal";

function TasksTab() {
  const [showModal, setShowModal] =
    useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Literature Review",
      assignee: "Ahmed Khan",
      priority: "High",
      dueDate: "20 Jun",
      status: "todo",
    },
    {
      id: 2,
      title: "Dataset Collection",
      assignee: "Rahul Sharma",
      priority: "Medium",
      dueDate: "24 Jun",
      status: "inprogress",
    },
    {
      id: 3,
      title: "Research Proposal",
      assignee: "Hamza",
      priority: "Low",
      dueDate: "15 Jun",
      status: "completed",
    },
  ]);

  const teamMembers = [
  {
    id: 1,
    name: "Ahmed Khan",
  },
  {
    id: 2,
    name: "Rahul Sharma",
  },
  {
    id: 3,
    name: "Hamza",
  },
  {
    id: 4,
    name: "Marcus Wei",
  },
];
  const handleCreateTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...task,
      },
    ]);
  };

  const moveTask = (
  taskId,
  newStatus
) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: newStatus,
          }
        : task
    )
  );
};

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-slate-200 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-semibold">
              Task Management
            </h2>

            <p className="text-sm text-slate-500">
              Manage project tasks and progress
            </p>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              bg-blue-600
              text-white
              rounded-xl
              hover:bg-blue-700
            "
          >
            <Plus size={18} />
            Create Task
          </button>

        </div>

        <KanbanBoard
  tasks={tasks}
  moveTask={moveTask}
/>

      </div>

      <CreateTaskModal
  isOpen={showModal}
  onClose={() =>
    setShowModal(false)
  }
  onCreateTask={handleCreateTask}
  teamMembers={teamMembers}
/>
    </>
  );
}

export default TasksTab;