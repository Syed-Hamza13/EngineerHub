import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function WorkspaceHeader({ project }) {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setCollapsed(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
    sticky top-0 z-30
    bg-white/95 backdrop-blur-md
    border border-slate-200
    rounded-2xl
    mb-6
    transition-all duration-500
    ${collapsed ? "py-3 px-5 shadow-lg" : "p-6"}
  `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Domain Badge */}
          <div
            className={`
    overflow-hidden
    transition-all duration-500
    ${collapsed ? "max-h-0 opacity-0 mb-0" : "max-h-10 opacity-100 mb-3"}
  `}
          >
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {project.domain}
            </span>
          </div>

          {/* Project Name */}
          <h1
            className={`
    font-bold text-slate-900
    transition-all duration-500
    ${collapsed ? "text-xl" : "text-3xl"}
  `}
          >
            {project.name}
          </h1>

          {/* Project Description */}
          <p
            className={`
    text-slate-600
    overflow-hidden
    transition-all duration-500
    ${collapsed ? "max-h-0 opacity-0 mb-0" : "max-h-20 opacity-100 mb-4"}
  `}
          >
            {project.description}
          </p>

          {/* Stats */}
          <div
            className={`
    overflow-hidden
    transition-all duration-500
    ${
      collapsed
        ? "max-h-0 opacity-0 pt-0 border-0 mt-0"
        : "max-h-32 opacity-100 pt-4 border-t border-slate-200 mt-4"
    }
  `}
          >
            {" "}
            <div className="flex gap-8">
              <div>
                <p className="text-xs text-slate-500 mb-1">Progress</p>
                <p className="text-2xl font-bold text-blue-600">
                  {project.progress}%
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Team Members</p>
                <p className="text-2xl font-bold text-slate-900">
                  {project.members}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collapse Button - for future use */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-slate-600 p-2"
        >
          <ChevronDown
            size={20}
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
