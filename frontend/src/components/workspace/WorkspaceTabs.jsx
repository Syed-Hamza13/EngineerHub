function WorkspaceTabs({ activeTab, setActiveTab }) {
  const tabs = ["chat", "documents", "tasks", "meetings", "overview"];

  return (
    <div className="border-b border-slate-200 bg-white rounded-t-2xl px-6 py-4">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-all border-b-2 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WorkspaceTabs;
