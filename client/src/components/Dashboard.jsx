import { useNavigate, Outlet } from "react-router-dom";
import RoutinesSidebar from "./RoutinesSidebar";
import Nav from "./Nav";
import useAuth from "../hooks/useAuth";
import Footer from "./Footer";

export default function Dashboard() {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  console.log("Logged in? ", loggedIn);
  if (!loggedIn) {
    navigate("/");
  }
  return (
    <div className="grid grid-cols-layout grid-rows-layout">
      <Nav />
      <RoutinesSidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
