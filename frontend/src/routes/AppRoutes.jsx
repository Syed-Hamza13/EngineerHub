import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Onboarding from "../pages/Onboarding/Onboarding";

import Dashboard from "../pages/Dashboard/Dashboard";
import ResearchHub from "../pages/Dashboard/ResearchHub";
import Teams from "../pages/Dashboard/Teams";

import TeamDetails from "../pages/Dashboard/TeamDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Default Page */}
        <Route index element={<Navigate to="research-hub" replace />} />

        <Route path="research-hub" element={<ResearchHub />} />

        <Route path="teams" element={<Teams />} />

        <Route path="teams/:id" element={<TeamDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
