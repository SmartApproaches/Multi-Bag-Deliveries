import React from "react";
import Button from "../../components/button";
import Footer from "../../components/footer/Footer";
import { IMAGES } from "../../constants";
const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-center bg-gray-900">
      <img
        src={IMAGES.logo}
        alt="Logo"
        className="absolute top-0 left-0 w-32 h-32"
      />
      <div className="max-w-6xl mx-auto px-6 py-20 text-white">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight max-w-3xl">
          Your Delivery Partner for{" "}
          <span className="text-[#FFA62B]">Fast and</span>{" "}
          <span className="text-[#FFA62B]">Reliable</span> Service
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          From small packages to bulk deliveries, we handle your parcels with
          care and ensure they reach their destination on time.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary">Book a Delivery</Button>
          <Button variant="outline">Track My Parcel</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
