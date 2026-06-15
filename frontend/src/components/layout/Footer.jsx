function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="max-w-sm">

            <div className="flex items-center gap-2 mb-6">

              <span className="material-symbols-outlined text-blue-600 text-2xl">
                terminal
              </span>

              <span className="text-xl font-bold text-slate-900">
                EngineerHub
              </span>

            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              The definitive workspace for technical research and
              collaboration, built for the next generation of engineers.
            </p>

            <div className="flex gap-4">

              <button className="text-slate-500 hover:text-blue-600 transition">
                <span className="material-symbols-outlined">
                  share
                </span>
              </button>

              <button className="text-slate-500 hover:text-blue-600 transition">
                <span className="material-symbols-outlined">
                  rss_feed
                </span>
              </button>

            </div>

          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

            {/* Product */}
            <div>

              <h4 className="font-semibold uppercase text-sm tracking-wider mb-4">
                Product
              </h4>

              <ul className="space-y-3 text-slate-600">

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Security
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    API
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Integrations
                  </a>
                </li>

              </ul>

            </div>

            {/* Resources */}
            <div>

              <h4 className="font-semibold uppercase text-sm tracking-wider mb-4">
                Resources
              </h4>

              <ul className="space-y-3 text-slate-600">

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Docs
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Case Studies
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Community
                  </a>
                </li>

              </ul>

            </div>

            {/* Company */}
            <div>

              <h4 className="font-semibold uppercase text-sm tracking-wider mb-4">
                Company
              </h4>

              <ul className="space-y-3 text-slate-600">

                <li>
                  <a href="#" className="hover:text-blue-600">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Legal
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © 2024 EngineerHub Technologies Inc. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-slate-900">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-slate-900">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;