import Parcel from "./components/Parcel";
import React from "react";
import Testimonials from "./components/Testimonials";

import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from "./components/LoginModal";
import CreateAccount from "./components/CreateAccount";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import HowItWorks from "./components/button/HowItWorks";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import DeliveryOptions from "./components/button/DeliveryOptions";
import MakeWorkEasier from "./components/button/MakeWorkEasier";
import SendOrReceive from "./components/button/SendOrReceive";
import LandingPage from "./pages/landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Bookadelivery />

          <Payment />
          <Parcel />
          
          <PaymentSuccess />
          <LoginModal />
          <DeliveryOptions />
          <CreateAccount />
          <MakeWorkEasier />
          <SendOrReceive />
          
        <HowItWorks /> 
        <Testimonials />*/}
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
