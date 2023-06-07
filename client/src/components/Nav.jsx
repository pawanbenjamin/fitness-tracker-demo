import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { user, setLoggedIn, loggedIn } = useAuth();

  async function handleLogout() {
    await logout();
    setLoggedIn(!loggedIn);
  }

  return (
    <nav>
      <h3>Welcome, {user.username}</h3>
      {/* <Link to="/">Home</Link> */}
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
