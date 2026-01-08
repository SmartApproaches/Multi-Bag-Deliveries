import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout";

// Pages
import LandingPage from "./pages/landing";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import CreateAccount from "./components/CreateAccount";
import Login from "./pages/auth/login";
import Bookadelivery from "./components/button/Bookadelivery_step4";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes WITH header & footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-a-delivery" element={<Bookadelivery />} />
        </Route>

        {/* Routes WITHOUT header & footer */}
      </Routes>
    </Router>
  );
}

export default App;
