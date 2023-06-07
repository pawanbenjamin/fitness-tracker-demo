import { Link } from "react-router-dom";
import { logout } from "../api/auth";

export default function Nav() {
  async function handleLogout() {
    await logout();
  }

  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
