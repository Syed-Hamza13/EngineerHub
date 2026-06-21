function KanbanBoard({
  tasks,
  moveTask,
}) {
  const columns = [
    {
      key: "todo",
      title: "Todo",
    },
    {
      key: "inprogress",
      title: "In Progress",
    },
    {
      key: "review",
      title: "Review",
    },
    {
      key: "completed",
      title: "Completed",
    },
  ];

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium:
      "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const handleDragStart = (
    e,
    taskId
  ) => {
    e.dataTransfer.setData(
      "taskId",
      taskId
    );
  };

  const handleDrop = (
    e,
    status
  ) => {
    e.preventDefault();

    const taskId =
      e.dataTransfer.getData(
        "taskId"
      );

    moveTask(
      Number(taskId),
      status
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        {columns.map((column) => {

          const columnTasks =
            tasks.filter(
              (task) =>
                task.status ===
                column.key
            );

          return (
            <div
              key={column.key}
              onDrop={(e) =>
                handleDrop(
                  e,
                  column.key
                )
              }
              onDragOver={
                handleDragOver
              }
              className="
                rounded-2xl
                bg-slate-50
                p-3
                min-h-[500px]
                border
                border-slate-200
              "
            >
              <div className="flex items-center gap-2 mb-4">

                <h3 className="font-semibold">
                  {column.title}
                </h3>

                <span
                  className="
                    text-xs
                    px-2
                    py-1
                    rounded-full
                    bg-white
                    border
                  "
                >
                  {columnTasks.length}
                </span>

              </div>

              <div className="space-y-3">

                {columnTasks.map(
                  (task) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(
                        e
                      ) =>
                        handleDragStart(
                          e,
                          task.id
                        )
                      }
                      className="
                        bg-white
                        border
                        border-slate-200
                        rounded-xl
                        p-4
                        shadow-sm
                        cursor-grab
                        active:cursor-grabbing
                        hover:shadow-md
                        transition-all
                      "
                    >
                      <span
                        className={`
                          text-xs
                          px-2
                          py-1
                          rounded-full
                          ${
                            priorityColor[
                              task.priority
                            ]
                          }
                        `}
                      >
                        {
                          task.priority
                        }
                      </span>

                      <h4 className="font-medium mt-3">
                        {task.title}
                      </h4>

                      <p className="text-sm text-slate-500 mt-2">
                        {
                          task.assignee
                        }
                      </p>

                      <p className="text-xs text-slate-400 mt-3">
                        Due:
                        {" "}
                        {
                          task.dueDate
                        }
                      </p>

                    </div>
                  )
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KanbanBoard;
