function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-blue-200 bg-blue-50">
          <span className="material-symbols-outlined text-blue-600 text-sm">
            auto_awesome
          </span>

          <span className="text-xs uppercase tracking-widest text-blue-600 font-medium">
            v2.0 Engineer Assistant now live
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-5xl mx-auto">
          The Intelligent Workspace for{" "}
          <span className="text-blue-600">
            Engineering Teams
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          Centralize research, detect contradictions, and generate
          technical reports with AI-powered clarity.
          Designed for the rigor of modern engineering workflows.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
            Get Started

            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">
              play_circle
            </span>

            Watch Demo
          </button>

        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative max-w-5xl mx-auto">

          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20" />

          {/* Dashboard */}
          <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqKzIkbDAXIVa8gz_7qR-LQBEsb6oYRpZBZz03RJU4OuzQE214s3sC8Nw8CFUgSc2z7k8k_JEGErAGV26nLjsyhoskZk6ALot1tm_k4wM8ZK_1oDrjdsQ57jGcbhKyRkZUH1zwSmQUtAt5w7Bs0Xk9RdeqMJmq673bhiO4FVZTfL5eil2HYGf8OkvpDdPfJLKMgitva73KzUZHdxtzbbjiNjobsUG4-S4Zx-HypHlfgQJ93qoXdlxxUPzVttVm6Jq2kyo_IkKwfgB"
              alt="EngineerHub Dashboard"
              className="w-full aspect-video object-cover"
            />

            {/* Floating AI Card */}
            <div className="hidden md:block absolute top-1/4 right-8 w-64 p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-xl border-l-4 border-violet-500">

              <div className="flex items-center gap-2 mb-2">

                <span className="material-symbols-outlined text-violet-600 text-sm">
                  auto_awesome
                </span>

                <span className="text-xs uppercase tracking-wider font-semibold text-violet-600">
                  AI Insight
                </span>

              </div>

              <p className="text-sm text-slate-700">
                Contradiction found in Structural Specs
                vs. Field Report #402.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;