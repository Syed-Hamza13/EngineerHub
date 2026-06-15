import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="text-xl font-semibold text-blue-600">
            EngineerHub
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-slate-600">
              New here?
            </span>

            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 md:py-20">

        <div className="grid md:grid-cols-2 max-w-7xl w-full gap-12 items-center">

          {/* Left Side */}
          <div className="hidden md:flex flex-col gap-6 pr-10 border-r border-slate-200">

            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              Build faster with{" "}
              <span className="text-blue-600">
                AI-driven
              </span>{" "}
              engineering insights.
            </h1>

            <p className="text-lg text-slate-600 max-w-lg">
              Join thousands of engineering teams centralizing
              research, documentation, and project intelligence
              in one unified workspace.
            </p>

            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
                alt="EngineerHub Workspace"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Login Card */}
          <div className="flex justify-center">

            <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">

              <div className="mb-6">

                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Welcome back
                </h2>

                <p className="text-slate-600">
                  Sign in to your EngineerHub account
                </p>

              </div>

              {/* Form */}
              <form className="space-y-5">

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>

                  <div className="flex justify-between items-center mb-2">

                    <label className="text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </a>

                  </div>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Sign In
                </button>

              </form>

              {/* Terms */}
              <div className="mt-6 text-center text-sm text-slate-500">

                By signing in, you agree to our{" "}

                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Terms of Service
                </a>

                {" "}and{" "}

                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>

                .

              </div>

              {/* Signup Link */}
              <div className="mt-6 text-center">

                <p className="text-slate-600">
                  Don't have an account?{" "}

                  <Link
                    to="/signup"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Create Account
                  </Link>

                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <div>EngineerHub</div>

          <div className="flex flex-wrap gap-4">

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Security</a>

            <a href="#">Cookie Settings</a>

          </div>

          <div>© 2024 EngineerHub</div>

        </div>

      </footer>

    </div>
  );
}

export default Login;