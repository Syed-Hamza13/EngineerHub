function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-[60]">
      <div
        className="h-full bg-blue-600 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;