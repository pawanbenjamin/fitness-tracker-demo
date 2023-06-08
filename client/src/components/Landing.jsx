import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function Landing() {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  if (loggedIn) {
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center min-h-screen bg-slate-100 gap-3">
      <h1 className="xl">Welcome to Fitness Tracker!</h1>
      <h2>🏃🏿‍♀️ Signup or Login to your Fitness Journey</h2>
      <nav className="flex justify-center gap-6">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
