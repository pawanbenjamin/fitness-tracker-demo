import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { user, setLoggedIn, loggedIn } = useAuth();

  async function handleLogout() {
    await logout();
    setLoggedIn(!loggedIn);
  }

  return <nav></nav>;
}
