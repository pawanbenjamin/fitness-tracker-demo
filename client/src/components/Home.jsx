<<<<<<< HEAD
import DashboardLayout from "./Dashboard";

export default function Home() {
  return (
    <DashboardLayout>
      <h1>The Home Page</h1>
    </DashboardLayout>
  );
=======
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  if (user.username !== "Guest") {
    <Navigate to="/" replace />;
  }
  return <h1>Homepage</h1>;
>>>>>>> react-router
}
