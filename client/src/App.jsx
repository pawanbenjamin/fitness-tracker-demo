import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import "./App.css";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AllRoutines from "./components/routines/AllRoutines";
import SelectedRoutine from "./components/routines/SelectedRoutine";
import AllActivities from "./components/activities/AllActivities";

function App() {
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/activities" element={<AllActivities />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/routines" element={<AllRoutines />} />
          <Route
            path="/dashboard/routines/:routineId"
            element={<SelectedRoutine />}
          />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
