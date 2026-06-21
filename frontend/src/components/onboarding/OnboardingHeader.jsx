function OnboardingHeader() {
  return (
    <header className="w-full h-16 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-blue-600">
          EngineerHub
        </h2>

        <button className="hidden md:block text-slate-500 hover:text-blue-600 transition">
          Skip for now
        </button>

      </div>
    </header>
  );
}

export default OnboardingHeader;