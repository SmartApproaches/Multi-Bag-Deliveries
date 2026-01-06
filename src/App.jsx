import CreateAccount from "./components/CreateAccount";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import MakeWorkEasier from "./components/button/MakeWorkEasier";
import SendOrReceive from "./components/button/SendOrReceive";


 function App () {
  return (
    <>
    <CreateAccount />
      <MakeWorkEasier/>
      <SendOrReceive />
    </>
  )
}

export default App;
