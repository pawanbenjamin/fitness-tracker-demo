import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import "./App.css";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/activities"
            element={<h1>All Activities</h1>}
          />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
