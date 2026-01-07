import React from "react";
import BookadeliveryStep1 from "./components/button/Bookadelivery_step1";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from './components/LoginModal';
import CreateAccount from "./components/CreateAccount";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import DeliveryOptions from "./components/button/DeliveryOptions";
import MakeWorkEasier from "./components/button/MakeWorkEasier";
import SendOrReceive from "./components/button/SendOrReceive";


 function App () {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        {/* Global components (modals, floating UI, sections) */}
        <BookadeliveryStep1 />
        <Payment />
        <PaymentSuccess />
        <LoginModal />
        <DeliveryOptions />
        <CreateAccount />
        <MakeWorkEasier />
        <SendOrReceive />

       
      </Router>

    </>
  )
}

export default App;
