import { useState } from "react";

const techStackData = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "C",
    "Go",
    "Rust",
    "Swift",
  ],

  Frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Spring",
    "FastAPI",
  ],

  Databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],

  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
  ],
};

function TechStackStep({ onNext }) {
  const [selectedTech, setSelectedTech] = useState([]);

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };

  const handleNext = () => {
    if (selectedTech.length === 0) {
      alert("Please select at least one technology.");
      return;
    }

    console.log("Selected Tech Stack:", selectedTech);

    if (onNext) {
      onNext(selectedTech);
    }
  };

  return (
    <main className="pt-10 pb-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="text-center mb-10">

          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium uppercase tracking-wider mb-4">
            Step 3 of 5
          </span>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            What's in your tech stack?
          </h1>

          <p className="text-slate-600">
            We'll use this to match you with relevant projects and peers.
          </p>

        </div>

        {/* Categories */}
        <div className="space-y-10">

          {Object.entries(techStackData).map(([category, technologies]) => (

            <section key={category}>

              <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 border-l-4 border-blue-600 pl-3 mb-5">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {technologies.map((tech) => {
                  const selected = selectedTech.includes(tech);

                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => toggleTech(tech)}
                      className={`
                        flex items-center justify-between
                        p-4 rounded-xl border transition-all duration-200 text-left

                        ${
                          selected
                            ? "border-blue-600 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                            : "border-slate-300 bg-white hover:border-blue-400"
                        }
                      `}
                    >
                      <span className="font-medium text-slate-800">
                        {tech}
                      </span>

                      <span
                        className={`
                          material-symbols-outlined text-blue-600 transition-all
                          ${
                            selected
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }
                        `}
                      >
                        check_circle
                      </span>

                    </button>
                  );
                })}

              </div>

            </section>

          ))}

        </div>

        {/* Hint */}
        <div className="flex justify-center items-center gap-2 mt-8 text-sm text-slate-500">

          <span className="material-symbols-outlined text-base">
            info
          </span>

          <span>
            Select all technologies you're comfortable working with
          </span>

        </div>

        {/* Mobile Next */}
        <div className="mt-8 flex justify-end md:hidden">

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

export default TechStackStep;