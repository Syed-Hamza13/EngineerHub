function OnboardingFooter({
  onPrevious,
  onNext,
  nextText = "Next Step",
}) {
  return (
    <footer className="w-full bg-white border-t border-slate-200">

      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <button
          onClick={onPrevious}
          className="px-6 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-white transition"
        >
          Previous
        </button>

        <button
          onClick={onNext}
          className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
        >
          {nextText}
        </button>

      </div>

    </footer>
  );
}

export default OnboardingFooter;