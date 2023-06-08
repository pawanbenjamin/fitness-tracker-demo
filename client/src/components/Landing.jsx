import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function Landing() {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  if (loggedIn) {
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center min-h-screen bg-slate-100 gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">Welcome to Fitness Tracker!</h1>
        <h2 className="text-xl font-bold">
          🏃🏿‍♀️ Signup or Login to your Fitness Journey
        </h2>
      </div>
      <nav className="flex justify-center gap-6">
        <Link to="/register">
          <button className="btn text-lg">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn text-lg">Login</button>
        </Link>
      </nav>
    </div>
  );
}
