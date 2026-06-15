function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-slate-900 rounded-[32px] p-12 md:p-24 text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to streamline your engineering workflow?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
            Join over 1,500 engineering teams who have moved their
            research and documentation to EngineerHub.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Start for Free
            </button>

            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Contact Sales
            </button>

          </div>

          {/* Small Text */}
          <p className="mt-8 text-sm text-slate-500">
            No credit card required. Unlimited viewers on free plan.
          </p>

        </div>

      </div>
    </section>
  );
}

export default CTASection;