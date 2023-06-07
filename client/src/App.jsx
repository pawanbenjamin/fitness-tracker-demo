import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
<<<<<<< HEAD

=======
import useAuth from "./hooks/useAuth";
import Nav from "./components/Nav";
>>>>>>> react-router
import "./App.css";
import Home from "./components/Home";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  const { user } = useAuth();
  return (
<<<<<<< HEAD
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
=======
    <div className="bg-slate-300 min-h-screen grid grid-rows-3">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> react-router
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/activities"
            element={<h1>All Activities</h1>}
          />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
      <footer className="flex flex-row justify-center">
        <p>links</p>
        <p>more links</p>
        <p>even more links</p>
      </footer>
    </div>
  );
}

export default App;
