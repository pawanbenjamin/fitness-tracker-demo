import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
