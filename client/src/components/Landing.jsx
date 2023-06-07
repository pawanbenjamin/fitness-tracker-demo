import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function Landing() {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <>
      <h2>Signup or Login to your Fitness Journey</h2>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
