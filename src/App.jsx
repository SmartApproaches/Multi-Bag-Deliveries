import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import HowItWorks from "./components/button/HowItWorks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <HowItWorks />
      </Router>
    </>
  );
}

export default App;
