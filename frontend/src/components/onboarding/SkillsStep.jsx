import { useState } from "react";

const skillsData = [
  "AI/ML",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "Backend",
  "Frontend",
  "Full Stack",
  "Mobile",
  "DevOps",
  "Cloud",
  "Cybersecurity",
  "Blockchain",
  "Database",
  "API",
  "Data Science",
  "Data Engineering",
  "Embedded Systems",
  "IoT",
  "System Design",
];

function SkillsStep({ onNext }) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  const handleNext = () => {
    if (selectedSkills.length === 0) {
      alert("Please select at least one skill.");
      return;
    }

    console.log("Selected Skills:", selectedSkills);

    if (onNext) {
      onNext(selectedSkills);
    }
  };

  return (
    <main className="pt-10 pb-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl">

        {/* Context Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200 mb-8">

          <div className="flex flex-wrap items-center gap-2 mb-4">

            <span className="px-2 py-1 text-xs uppercase tracking-wider rounded bg-blue-100 text-blue-600 font-medium">
              Step 1 of 5
            </span>

            <span className="text-xs text-slate-500">
              • Estimated completion: 2 mins
            </span>

          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            What are your core skills?
          </h1>

          <p className="text-slate-600">
            Select all that apply. We'll use this to customize your experience.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">

          {skillsData.map((skill) => {
            const selected = selectedSkills.includes(skill);

            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`
                  p-4 rounded-xl border transition-all duration-200
                  flex items-center justify-between text-left

                  ${
                    selected
                      ? "border-blue-600 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                      : "border-slate-300 bg-white/80 hover:border-blue-400"
                  }
                `}
              >
                <span className="text-slate-900 font-medium">
                  {skill}
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

        {/* Mobile Next Button */}
        <div className="mt-8 flex justify-end md:hidden">
          <button
            onClick={handleNext}
            className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Next Step
          </button>
        </div>

      </div>
    </main>
  );
}

export default SkillsStep;