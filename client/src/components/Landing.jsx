import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <h2>Signup or Login to your Fitness Journey</h2>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
