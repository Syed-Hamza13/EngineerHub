import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-blue-600 text-3xl">
            terminal
          </span>

          <span className="text-xl font-bold text-slate-900">
            EngineerHub
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#features"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Features
            </a>

            <a
              href="#workflow"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Workflow
            </a>

            <a
              href="#trust"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Enterprise
            </a>
          </nav>

          <div className="h-6 w-px bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm rounded-lg text-slate-600 hover:bg-gray-100 transition"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;