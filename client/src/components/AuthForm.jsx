import { useState } from "react";
import { registerUser } from "../api/auth";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log({ username, password });
      const result = await registerUser(username, password);
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
