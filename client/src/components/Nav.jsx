import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/auth";
import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { user, setLoggedIn, loggedIn } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    setLoggedIn(!loggedIn);
    navigate("/");
  }

  return (
<<<<<<< HEAD
    <nav>
      <h3>hello, {user.username}</h3>
      <Link to="/dashboard/activities">Activities</Link>
      <Link to="/dashboard/profile">My Profile</Link>
      <button onClick={handleLogout}>Log Out</button>
=======
    <nav className="flex flex-row justify-center">
      <h3>Welcome, {user.username}</h3>
      {/* <Link to="/home">Home</Link> */}
      {user.username !== "Guest" && (
        <button onClick={handleLogout}>Logout</button>
      )}
>>>>>>> react-router
    </nav>
  );
}
