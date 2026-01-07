import Parcel from './components/Parcel';
import React from "react";
import Bookadelivery from "./components/button/Bookadelivery";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from './components/LoginModal';
import CreateAccount from "./components/CreateAccount";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Global components / modals / sections that are not part of routing */}
        <Bookadelivery />
        <Payment />
        <PaymentSuccess />
        <LoginModal />
        <DeliveryOptions />
        <CreateAccount />
        <MakeWorkEasier />
        <SendOrReceive />
        <HowItWorks />

        <Footer />
      </Router>
    </>
  );
}

export default App;

