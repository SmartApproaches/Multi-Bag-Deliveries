import React from "react";
import Bookadelivery from "./components/button/Bookadelivery";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import LoginModal from './components/LoginModal';
import CreateAccount from "./components/CreateAccount";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import DeliveryOptions from "./components/button/DeliveryOptions";
import MakeWorkEasier from "./components/button/MakeWorkEasier";
import SendOrReceive from "./components/button/SendOrReceive";


 function App () {
  return (

    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
         <Bookadelivery />

         <Payment />

          <PaymentSuccess />
    <LoginModal />
        <DeliveryOptions />
        <CreateAccount />
      <MakeWorkEasier/>
      <SendOrReceive />
        </Routes>
      </Router>

    </>
  )
}

export default App;
