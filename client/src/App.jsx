import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
