import {
  LayoutDashboard,
  FlaskConical,
  FileText,
  Bot,
  ShieldCheck,
  ListTodo,
  Settings,
  CircleHelp,
  Users,
  UsersRound,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";


function Sidebar() {
  const location = useLocation();

  const menuItems = [
    // {
    //   icon: LayoutDashboard,
    //   label: "Dashboard",
    //   path: "/dashboard",
    // },
    {
      icon: FlaskConical,
      label: "Research Hub",
      path: "/dashboard/research-hub",
    },
    {
      icon: UsersRound,
      label: "Teams",
      path: "/dashboard/teams",
    },
    // {
    //   icon: FileText,
    //   label: "Docs",
    //   path: "/dashboard/docs",
    // },
    // {
    //   icon: Bot,
    //   label: "AI Assistant",
    //   path: "/dashboard/ai-assistant",
    // },
    // {
    //   icon: ShieldCheck,
    //   label: "Quality Checks",
    //   path: "/dashboard/quality-checks",
    // },
    // {
    //   icon: ListTodo,
    //   label: "Tasks",
    //   path: "/dashboard/tasks",
    // },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b border-slate-200">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
          <Users size={20} />
        </div>

        <h1 className="ml-3 text-2xl font-bold">EngineerHub</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`
    w-full flex items-center gap-3 px-6 py-3 text-left transition

    ${
      location.pathname === item.path
        ? "bg-blue-50 text-blue-600"
        : "hover:bg-slate-50 text-slate-700"
    }
  `}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 p-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-6 hover:bg-blue-700 transition">
          New Project
        </button>

        <div className="space-y-4 text-slate-600">
          <Link
  to="/dashboard/settings"
  className={`
    flex items-center gap-3 transition

    ${
      location.pathname === "/dashboard/settings"
        ? "text-blue-600"
        : "text-slate-600"
    }
  `}
>
  <Settings size={18} />
  Settings
</Link>

          <button className="flex items-center gap-3">
            <CircleHelp size={18} />
            Support
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
