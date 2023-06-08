import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import RoutinesSidebar from "./routines/RoutinesSidebar";
import Nav from "./Nav";
import useAuth from "../hooks/useAuth";
import Footer from "./Footer";
import { fetchMyRoutines } from "../api/routines";
import RoutinesProvider from "./routines/RoutinesProvider";

export default function Dashboard() {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="grid grid-cols-layout grid-rows-layout">
      <Nav />
      <RoutinesProvider>
        <RoutinesSidebar />
        <Outlet />
      </RoutinesProvider>
      <Footer />
    </div>
  );
}
