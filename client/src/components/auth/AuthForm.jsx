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
  }

  return (
    <div className="flex flex-col justify-center min-h-screen bg-slate-100">
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {pathname === "/register" ? <h2>Register</h2> : <h2>Login</h2>}
        <label>Username: </label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit!</button>
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
  );
}
