import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import DeliveryOptions from "./components/button/DeliveryOptions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <DeliveryOptions />
      </Router>
    </>
  );
}

export default App;
