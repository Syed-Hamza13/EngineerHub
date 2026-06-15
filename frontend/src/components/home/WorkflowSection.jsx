const steps = [
  {
    id: 1,
    title: "Collect",
    description:
      "Upload research from any source—CAD files, PDFs, or field notes. Our hub handles the parsing.",
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "AI identifies critical insights, highlights contradictions, and maps technical relationships automatically.",
  },
  {
    id: 3,
    title: "Create",
    description:
      "Build technical reports in a live editor with AI-suggested content and linked citations for full auditability.",
  },
];

function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Workflow for Breakthroughs
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From messy research to boardroom-ready reports in three steps.
          </p>

        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-200 -z-10"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >

              {/* Circle */}
              <div className="w-16 h-16 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center text-blue-600 font-bold text-xl shadow-md mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WorkflowSection;