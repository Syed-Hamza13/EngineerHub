function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">

          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for technical precision
            </h2>

            <p className="text-lg text-slate-600">
              Stop hunting for documents. Start finding answers.
              Our platform is engineered to handle the complexity
              of technical research.
            </p>
          </div>

          <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
            View all capabilities
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </button>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Research Hub */}
          <div className="md:col-span-8 bg-slate-100 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition">

            <div className="relative z-10">
              <span className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-6">
                <span className="material-symbols-outlined text-blue-600">
                  science
                </span>
              </span>

              <h3 className="text-2xl font-semibold mb-3">
                Research Hub
              </h3>

              <p className="text-slate-600 max-w-md">
                Organize PDFs, links, and notes with automated
                AI tagging and vector search.
              </p>
            </div>

            {/* Mini Preview */}
            <div className="hidden md:block absolute bottom-0 right-6 w-72 translate-y-8">

              <div className="bg-white rounded-t-xl shadow-xl border p-4">

                <div className="flex items-center gap-4 border-b pb-3 mb-3">

                  <div className="w-8 h-10 rounded bg-red-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-500 text-sm">
                      picture_as_pdf
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="h-2 bg-slate-200 rounded mb-2 w-24"></div>
                    <div className="h-2 bg-slate-100 rounded w-16"></div>
                  </div>

                  <span className="text-xs text-blue-600">
                    Tagging...
                  </span>

                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                </div>

              </div>

            </div>

          </div>

          {/* Quality Checks */}
          <div className="md:col-span-4 bg-blue-600 text-white rounded-2xl p-8 relative overflow-hidden hover:shadow-lg transition">

            <div className="absolute top-0 right-0 p-6 opacity-20">
              <span className="material-symbols-outlined text-[120px]">
                verified
              </span>
            </div>

            <div className="relative z-10">

              <span className="inline-flex p-3 bg-white/10 rounded-xl mb-6">
                <span className="material-symbols-outlined">
                  verified
                </span>
              </span>

              <h3 className="text-2xl font-semibold mb-3">
                Quality Checks
              </h3>

              <p className="text-white/80">
                Instantly detect conflicting claims across
                hundreds of technical sources.
              </p>

              <div className="mt-10 bg-red-500/20 border border-red-400/30 rounded-lg p-2 flex items-center gap-2">

                <span className="material-symbols-outlined text-sm">
                  warning
                </span>

                <span className="text-xs">
                  2 Contradictions detected
                </span>

              </div>

            </div>

          </div>

          {/* Live Docs */}
          <div className="md:col-span-4 bg-white border rounded-2xl p-8 hover:shadow-lg transition">

            <span className="inline-flex p-3 bg-violet-100 rounded-xl mb-6">
              <span className="material-symbols-outlined text-violet-600">
                description
              </span>
            </span>

            <h3 className="text-2xl font-semibold mb-3">
              Live Docs
            </h3>

            <p className="text-slate-600">
              Collaborative editor with integrated AI assist
              and automated research citations.
            </p>

            <div className="mt-8 flex -space-x-2">

              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"></div>

              <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500"></div>

              <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-white text-xs">
                +3
              </div>

            </div>

          </div>

          {/* AI Assistant */}
          <div className="md:col-span-8 border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-lg transition">

            <div className="flex-1">

              <span className="inline-flex p-3 bg-violet-100 rounded-xl mb-6">
                <span className="material-symbols-outlined text-violet-600">
                  smart_toy
                </span>
              </span>

              <h3 className="text-2xl font-semibold mb-3">
                Contextual AI Assistant
              </h3>

              <p className="text-slate-600">
                Ask questions grounded in your project's
                specific dataset. No hallucinations,
                only citations.
              </p>

            </div>

            {/* Chat Preview */}
            <div className="w-full md:w-1/2 bg-slate-100 rounded-xl border p-4">

              <div className="flex gap-3 mb-4">

                <div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center text-[10px]">
                  ME
                </div>

                <p className="bg-white rounded-md shadow-sm p-2 text-sm">
                  What's the max payload for the V2 housing?
                </p>

              </div>

              <div className="flex gap-3">

                <div className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs">
                    auto_awesome
                  </span>
                </div>

                <div className="flex-1">

                  <p className="text-sm mb-2">
                    Based on{" "}
                    <span className="font-semibold text-blue-600">
                      Specs_v2.pdf (p.12)
                    </span>
                    , the max payload is 450kg.
                  </p>

                  <div className="h-1 bg-blue-100 rounded overflow-hidden">
                    <div className="h-full w-1/2 bg-blue-600 rounded"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;