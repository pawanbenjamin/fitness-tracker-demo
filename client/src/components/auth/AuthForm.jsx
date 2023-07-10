import { useState } from "react";
import { registerUser, loginUser } from "../../api/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AuthForm() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setLoggedIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username.length || !password.length) {
      setError("You must add a valid username and password");
      return;
    }
    try {
      let result;
      if (pathname === "/register") {
        result = await registerUser(username, password);
      } else {
        result = await loginUser(username, password);
      }
      if (result.success) {
        setLoggedIn(true);
        navigate("/dashboard/profile");
      }
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="w-120">
        <form onSubmit={handleSubmit} className="">
          {pathname === "/register" ? (
            <h2 className="text-2xl font-bold">Register</h2>
          ) : (
            <h2 className="text-2xl font-bold">Login</h2>
          )}
          {error && <p>{error}</p>}
          <label>
            Username:{" "}
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:{" "}
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn w-24">Submit!</button>
        </form>
        {pathname === "/register" ? (
          <p>
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        ) : (
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        )}
      </div>
    </div>
  );
}
