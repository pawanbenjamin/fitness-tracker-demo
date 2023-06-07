import { Navigate, Outlet } from "react-router-dom";
import RoutinesSidebar from "./RoutinesSidebar";
import Nav from "./Nav";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { loggedIn } = useAuth();
  console.log("Logged in? ", loggedIn);
  if (!loggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <Nav />
      <RoutinesSidebar />
      <Outlet />
    </div>
  );
}
