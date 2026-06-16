import { useEffect, useState } from "react";

const setupTasks = [
  "Analyzing profile...",
  "Building recommendations...",
  "Preparing AI assistant...",
  "Personalizing dashboard...",
  "Creating research feed...",
];

function SetupStep({ onComplete }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let current = 0;

    const runSetup = () => {
      const interval = setInterval(() => {
        setCompleted((prev) => [...prev, current]);

        current++;

        if (current < setupTasks.length) {
          setActiveIndex(current);
        } else {
          clearInterval(interval);

          setTimeout(() => {
            setIsFinished(true);
          }, 800);
        }
      }, 1200);

      return () => clearInterval(interval);
    };

    runSetup();
  }, []);

  return (
    <main className="pt-10 pb-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl">

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">

          {!isFinished ? (
            <>
              <div className="text-center mb-10">

                <h1 className="text-3xl font-bold text-slate-900 mb-3">
                  Setting up your workspace
                </h1>

                <p className="text-slate-600">
                  We're tailoring EngineerHub to your technical profile.
                </p>

              </div>

              <div className="space-y-4">

                {setupTasks.map((task, index) => {
                  const done = completed.includes(index);
                  const active = activeIndex === index;

                  return (
                    <div
                      key={task}
                      className={`
                        flex items-center justify-between
                        p-4 rounded-xl border transition-all duration-500

                        ${
                          done
                            ? "bg-blue-50 border-blue-200"
                            : active
                            ? "bg-white border-blue-400 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                            : "bg-slate-50 border-slate-200 opacity-60"
                        }
                      `}
                    >
                      <span className="font-medium text-slate-800">
                        {task}
                      </span>

                      {done ? (
                        <span className="material-symbols-outlined text-blue-600">
                          check_circle
                        </span>
                      ) : active ? (
                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span className="material-symbols-outlined text-slate-400">
                          hourglass_empty
                        </span>
                      )}
                    </div>
                  );
                })}

              </div>
            </>
          ) : (
            <div className="text-center py-6 animate-in fade-in duration-500">

              <div className="flex justify-center mb-6">

                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-5xl">
                    check_circle
                  </span>
                </div>

              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                🎉 All Set!
              </h2>

              <p className="text-slate-600 mb-8">
                Your personalized engineering workspace is ready.
              </p>

              <div className="flex flex-col gap-4">

                <button
                  onClick={onComplete}
                  className="h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Explore Dashboard
                </button>

                <button
                  className="h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                >
                  Edit Preferences
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}

export default SetupStep;