function ProjectTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex bg-slate-100 rounded-lg p-1">

      <button
        onClick={() => setActiveTab("active")}
        className={`
          px-4 py-2 rounded-md

          ${
            activeTab === "active"
              ? "bg-white shadow text-blue-600"
              : ""
          }
        `}
      >
        Active
      </button>

      <button
        onClick={() => setActiveTab("done")}
        className={`
          px-4 py-2 rounded-md

          ${
            activeTab === "done"
              ? "bg-white shadow text-blue-600"
              : ""
          }
        `}
      >
        Done
      </button>

    </div>
  );
}

export default ProjectTabs;