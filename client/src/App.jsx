import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";

import "./App.css";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
