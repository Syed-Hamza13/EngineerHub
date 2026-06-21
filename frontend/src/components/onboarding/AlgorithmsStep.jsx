import { useState } from "react";

const algorithmsData = [
  {
    id: "ml",
    label: "Machine Learning Algorithms",
    icon: "psychology",
  },
  {
    id: "dl",
    label: "Deep Learning Models",
    icon: "neurology",
  },
  {
    id: "opt",
    label: "Optimization Algorithms",
    icon: "speed",
  },
  {
    id: "graph",
    label: "Graph Algorithms",
    icon: "hub",
  },
  {
    id: "search",
    label: "Search Algorithms",
    icon: "manage_search",
  },
  {
    id: "sort",
    label: "Sorting Algorithms",
    icon: "sort",
  },
  {
    id: "recsys",
    label: "Recommendation Systems",
    icon: "auto_awesome",
  },
  {
    id: "neural",
    label: "Neural Networks",
    icon: "stream",
  },
  {
    id: "cv",
    label: "Computer Vision Models",
    icon: "visibility",
  },
  {
    id: "nlp",
    label: "Natural Language Processing",
    icon: "translate",
  },
  {
    id: "dist",
    label: "Distributed Systems",
    icon: "cloud_sync",
  },
  {
    id: "dbopt",
    label: "Database Query Optimization",
    icon: "storage",
  },
  {
    id: "net",
    label: "Networking Algorithms",
    icon: "lan",
  },
  {
    id: "crypto",
    label: "Cryptography",
    icon: "enhanced_encryption",
  },
  {
    id: "os",
    label: "Operating Systems",
    icon: "terminal",
  },
];

function AlgorithmsStep({ onNext }) {
  const [selectedAlgorithms, setSelectedAlgorithms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAlgorithm = (algorithmId) => {
    setSelectedAlgorithms((prev) =>
      prev.includes(algorithmId)
        ? prev.filter((item) => item !== algorithmId)
        : [...prev, algorithmId]
    );
  };

  const filteredAlgorithms = algorithmsData.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (selectedAlgorithms.length === 0) {
      alert("Please select at least one technical area.");
      return;
    }

    console.log("Selected Algorithms:", selectedAlgorithms);

    if (onNext) {
      onNext(selectedAlgorithms);
    }
  };

  return (
    <main className="pt-10 pb-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">

          <p className="text-xs uppercase tracking-widest text-blue-600 font-medium mb-2">
            Step 2 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            What technical areas do you work with?
          </h1>

          <p className="text-slate-600">
            Select the algorithms and systems that define your technical stack.
          </p>

        </div>

        {/* Search */}
        <div className="relative mb-6">

          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>

          <input
            type="text"
            placeholder="Search technical areas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
          />

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-2">

          {filteredAlgorithms.map((algorithm) => {
            const selected = selectedAlgorithms.includes(algorithm.id);

            return (
              <button
                key={algorithm.id}
                type="button"
                onClick={() => toggleAlgorithm(algorithm.id)}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border text-left transition-all

                  ${
                    selected
                      ? "border-blue-600 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                      : "border-slate-300 bg-white hover:border-blue-400"
                  }
                `}
              >

                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined">
                    {algorithm.icon}
                  </span>
                </div>

                <span className="font-medium text-slate-800">
                  {algorithm.label}
                </span>

              </button>
            );
          })}

        </div>

        {/* Hint */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">

          <span className="material-symbols-outlined text-base">
            info
          </span>

          <span>
            Select as many as apply to your experience
          </span>

        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-end">

          <button
            onClick={handleNext}
            className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next Step
          </button>

        </div>

      </div>
    </main>
  );
}

export default AlgorithmsStep;