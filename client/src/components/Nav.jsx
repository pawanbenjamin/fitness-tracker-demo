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
    <nav className="flex flex-row justify-center">
      <h3>Welcome, {user.username}</h3>
      {/* <Link to="/home">Home</Link> */}
      {user.username !== "Guest" && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}
