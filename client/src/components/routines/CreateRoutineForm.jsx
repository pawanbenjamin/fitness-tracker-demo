import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { createRoutine } from "../../api/routines";

export default function CreateRoutineForm() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  const { myRoutines, setMyRoutines } = useOutletContext();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { success, message, data } = await createRoutine(name, goal);
      console.log({ success, message, data });
      setMessage(message);
      setMyRoutines([...myRoutines, data]);
    } catch (error) {
      setMessage(error.message);
    }
    setName("");
    setGoal("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Routine</h2>
      {message && <p>{message}</p>}
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Goal:{" "}
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
