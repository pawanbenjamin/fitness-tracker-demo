import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import useAuth from "./hooks/useAuth";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";

function App() {
  const { user } = useAuth();
  return (
    <div className="bg-slate-300 min-h-screen grid grid-rows-3">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
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
