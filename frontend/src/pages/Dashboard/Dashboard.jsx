import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import ResearchHub from "./ResearchHub";

function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 overflow-auto">
          <ResearchHub />
        </main>

      </div>

    </div>
  );
}

export default Dashboard;