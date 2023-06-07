import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";

import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [healthMessage, setHealthMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkAPIHealth() {
      try {
        const response = await fetch("/api/health");
        const result = await response.json();
        setHealthMessage(result.message);
      } catch (error) {
        setError(error);
      }
    }
    checkAPIHealth();
  }, []);

  return (
    <>
      {error && <p>{JSON.stringify(error, null, 2)}</p>}
      <Nav />
      {healthMessage && <p>{healthMessage}</p>}
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
