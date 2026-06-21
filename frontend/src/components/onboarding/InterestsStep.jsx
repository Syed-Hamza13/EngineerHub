import { useState } from "react";

const interestsData = [
  { name: "AI", icon: "psychology" },
  { name: "ML", icon: "model_training" },
  { name: "Generative AI", icon: "auto_awesome" },
  { name: "Robotics", icon: "smart_toy" },
  { name: "IoT", icon: "settings_input_antenna" },
  { name: "Blockchain", icon: "account_balance_wallet" },
  { name: "Cybersecurity", icon: "shield_lock" },
  { name: "Cloud", icon: "cloud" },
  { name: "Quantum", icon: "blur_on" },
  { name: "AR/VR", icon: "view_in_ar" },
  { name: "Web Dev", icon: "code" },
  { name: "Mobile Dev", icon: "phone_iphone" },
  { name: "Open Source", icon: "terminal" },
  { name: "Data Science", icon: "database" },
  { name: "Research Papers", icon: "description" },
  { name: "System Design", icon: "account_tree" },
  { name: "Startups", icon: "rocket_launch" },
  { name: "Product Engineering", icon: "precision_manufacturing" },
];

function InterestsStep({ onNext }) {
  const [selectedInterests, setSelectedInterests] = useState([
    "AI",
    "Generative AI",
    "Open Source",
  ]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (selectedInterests.length < 3) {
      alert("Please select at least 3 interests.");
      return;
    }

    console.log("Selected Interests:", selectedInterests);

    if (onNext) {
      onNext(selectedInterests);
    }
  };

  return (
    <main className="pt-10 pb-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">

          <span className="text-xs uppercase tracking-widest text-blue-600 font-medium">
            Step 4 of 5
          </span>

          <h1 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
            What are you interested in learning or researching?
          </h1>

          <p className="text-slate-600">
            Select topics to personalize your engineering feed.
          </p>

        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-2">

          {interestsData.map((interest) => {
            const selected = selectedInterests.includes(interest.name);

            return (
              <button
                key={interest.name}
                type="button"
                onClick={() => toggleInterest(interest.name)}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-left

                  ${
                    selected
                      ? "border-blue-600 bg-white shadow-[0_0_12px_4px_rgba(0,102,255,0.15)]"
                      : "border-slate-300 bg-white hover:border-blue-400"
                  }
                `}
              >
                <span
                  className={`
                    material-symbols-outlined transition-colors

                    ${
                      selected
                        ? "text-blue-600"
                        : "text-slate-500"
                    }
                  `}
                >
                  {interest.icon}
                </span>

                <span className="font-medium text-slate-800">
                  {interest.name}
                </span>

              </button>
            );
          })}

        </div>

        {/* Bottom Info */}
        <div className="flex justify-between items-center mt-6">

          <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-xs font-medium text-blue-600">
              {selectedInterests.length} selected
            </span>
          </div>

          <div className="text-sm text-slate-500 italic">
            Pick at least 3 to continue
          </div>

        </div>

        {/* Mobile Next Button */}
        <div className="mt-8 flex justify-end md:hidden">

          <button
            disabled={selectedInterests.length < 3}
            onClick={handleNext}
            className={`
              px-8 py-2 rounded-lg text-white transition

              ${
                selectedInterests.length >= 3
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-slate-300 cursor-not-allowed"
              }
            `}
          >
            Next Step
          </button>

        </div>

      </div>
    </main>
  );
}

export default InterestsStep;