import { useState } from "react";
import { registerUser, loginUser } from "../api/auth";
import { useLocation } from "react-router-dom";

export default function AuthForm() {
  const { pathname } = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log({ username, password });
      let result;
      if (pathname === "/register") {
        result = await registerUser(username, password);
      } else {
        result = await loginUser(username, password);
      }

      console.log("result: ", result);
      if (result.success) {
        console.log("Result: ", result);
      } else {
        setError(result.message);
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
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
