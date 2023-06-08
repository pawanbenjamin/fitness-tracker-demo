import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function Landing() {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  if (loggedIn) {
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h2>Signup or Login to your Fitness Journey</h2>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
