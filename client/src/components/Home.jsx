import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  if (user.username !== "Guest") {
    <Navigate to="/" replace />;
  }
  return <h1>Homepage</h1>;
}
