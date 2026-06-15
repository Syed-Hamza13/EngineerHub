const companies = [
  {
    icon: "rocket_launch",
    name: "NOVA TECH",
  },
  {
    icon: "architecture",
    name: "GLOBAL BUILD",
  },
  {
    icon: "precision_manufacturing",
    name: "CORE DYNAMICS",
  },
  {
    icon: "energy_savings_leaf",
    name: "ECO-GRID",
  },
  {
    icon: "layers",
    name: "QUANTUM LABS",
  },
];

function TrustSection() {
  return (
    <section
      id="trust"
      className="py-16 bg-slate-100 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500 mb-10">
          Trusted by engineering teams at forward-thinking companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">

          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lg font-bold text-slate-800 hover:scale-105 transition-transform cursor-default"
            >
              <span className="material-symbols-outlined text-blue-600">
                {company.icon}
              </span>

              <span>{company.name}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TrustSection;