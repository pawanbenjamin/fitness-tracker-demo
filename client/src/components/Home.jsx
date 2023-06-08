import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    <Navigate to="/" replace={true} />;
  }
  return <h1>Homepage</h1>;
}
