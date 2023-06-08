import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import RoutinesSidebar from "./routines/RoutinesSidebar";
import Nav from "./Nav";
import useAuth from "../hooks/useAuth";
import Footer from "./Footer";
import { fetchMyRoutines } from "../api/routines";

export default function Dashboard() {
  const { loggedIn } = useAuth();
  const [myRoutines, setMyRoutines] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    } else {
      async function getMyRoutines() {
        const { data } = await fetchMyRoutines();
        setMyRoutines(data);
      }
      getMyRoutines();
    }
  }, [loggedIn]);

  return (
    <div className="grid grid-cols-layout grid-rows-layout">
      <Nav />
      <RoutinesSidebar myRoutines={myRoutines} />
      <Outlet context={{ myRoutines, setMyRoutines }} />
      <Footer />
    </div>
  );
}
