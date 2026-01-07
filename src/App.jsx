import React from "react";
import Bookadeliverystep3 from "./components/button/Bookadelivery_step3";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from './components/LoginModal';
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


 function App () {
  return (

    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
         <Bookadelivery_step3 />

         <Payment />

          <PaymentSuccess />
    <LoginModal />
        <DeliveryOptions />
        <CreateAccount />
      <MakeWorkEasier/>
      <SendOrReceive />
        </Routes>
        <HowItWorks />
      </Router>

    </>
  )
}

export default App;
