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
    <nav className="col-span-2 flex flex-row justify-evenly items-center bg-slate-300">
      <p>hello, {user.username}</p>
      <Link to="/dashboard/activities">Activities</Link>
      <Link to="/dashboard/profile">My Profile</Link>
      <button onClick={handleLogout}>Log Out</button>
    </nav>
  );
}
