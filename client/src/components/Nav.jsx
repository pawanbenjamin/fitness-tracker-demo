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
    <nav>
      <button onClick={handleLogout}>Log Out</button>
    </nav>
  );
}
