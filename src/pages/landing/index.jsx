import React from "react";
import Header from "../home/header";
import Home from "../home";
import SendOrReceive from "../../components/button/SendOrReceive";
import MakeWorkEasier from "../../components/button/MakeWorkEasier";
import DeliveryOptions from "../../components/button/DeliveryOptions";
import HowItWorks from "../../components/button/HowItWorks";
import Parcel from "../../components/Parcel";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <SendOrReceive />
      <MakeWorkEasier />
      <DeliveryOptions />
      <HowItWorks />
      <Testimonials />
      <Parcel />
    </div>
  );
};

export default LandingPage;
