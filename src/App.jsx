import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import SendOrReceive from "./components/button/SendOrReceive";

function App() {
  return (
    <>
      <SendOrReceive />
    </>
  );
}

export default App;
