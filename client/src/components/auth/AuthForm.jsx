import { useState } from "react";
import { registerUser, loginUser } from "../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthForm() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        console.log("Auth Result: ", result);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
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
    </div>
  );
}
