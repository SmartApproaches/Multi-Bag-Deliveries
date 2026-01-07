import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import Home from "./pages/home";
import LandingPage from "./pages/landing";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";

// Global UI / modals
import Bookadelivery_step4 from "./components/button/Bookadelivery_step4";
import Payment from "./components/Payment";
import Parcel from "./components/Parcel";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from "./components/LoginModal";
import CreateAccount from "./components/CreateAccount";
import DeliveryOptions from "./components/button/DeliveryOptions";
import MakeWorkEasier from "./components/button/MakeWorkEasier";
import SendOrReceive from "./components/button/SendOrReceive";
import HowItWorks from "./components/button/HowItWorks";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Global components (modals, floating UI, sections) */}
        <Bookadelivery_step4 />
        <Payment />
        <PaymentSuccess />
        <LoginModal />
        <DeliveryOptions />
        <CreateAccount />
        <MakeWorkEasier />
        <SendOrReceive />
        <HowItWorks />

        
      </Router>
    </>
  );
}

export default App;
