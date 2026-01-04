 import React, { useState, useEffect } from "react";
import logo from "../../assets/images/delivery-logo.png";
import footerlogo from "../../assets/images/footer-logo.png";
import destinationIcon from "../../assets/images/destination.png";
import emailIcon from "../../assets/images/email.png";
import clockIcon from "../../assets/images/clock.png";
import facebookIcon from "../../assets/images/facebook.png";
import instagramIcon from "../../assets/images/instagram.png";
import xIcon from "../../assets/images/x.png";
import vector from "../../assets/images/vector.png";

const Bookadelivery = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    pickupAddress: "",
    recipientName: "",
    recipientPhone: "",
    deliveryAddress: "",
    packageType: "",
    packageSize: "",
    instructions: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      return (
        formData.senderName.trim() &&
        formData.senderEmail.trim() &&
        formData.senderPhone.trim() &&
        formData.pickupAddress.trim()
      );
    }
    if (step === 2) {
      return (
        formData.recipientName.trim() &&
        formData.recipientPhone.trim() &&
        formData.deliveryAddress.trim()
      );
    }
    if (step === 3) {
      return formData.packageType.trim() && formData.packageSize.trim();
    }
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(4, s + 1));
    } else {
      alert("Please fill in all required fields for this step.");
    }
  };

  const handleBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log("Booking submitted:", formData);
      alert("Booking submitted (check console). Thanks!");
    } else {
      alert("Please complete the package details before submitting.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EFF5F1] font-inter">
      {/* HEADER */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="h-10" />

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 border rounded-md text-green-700 hover:bg-gray-100">
            Login
          </button>
          <button
            className="
    px-5
    py-2
    bg-[#00401A]
    text-white
    rounded-full
    font-medium
    transition
    duration-200
    hover:bg-[#003015]
  "
          >
            Sign Up
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={vector} alt="" />
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500">
              About
            </a>
            <a href="#" className="hover:text-yellow-500">
              Services
            </a>
            <a href="#" className="hover:text-yellow-500">
              Contact
            </a>

            <div className="pt-4 flex flex-col gap-3 border-t">
              <button className="px-4 py-2 border rounded-md text-green-700 hover:bg-gray-100">
                Login
              </button>
              <button className="px-4 py-2 bg-[#00401A] text-white rounded-full hover:bg-[#003015] transition">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* FORM */}
      <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Book a Delivery
            </h1>

            <p className="mt-2 text-sm md:text-base text-gray-500">
              Fill in the details below to book your parcel delivery.
            </p>
          </div>

          {/* ===== PROGRESS BAR ===== */}
<div className="w-full mt-10">
  {/* Match the mobile screenshot: dots smaller, connectors visible and dashed, labels under dots */}
  <div className="flex items-center gap-2 w-full">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${currentStep >= 1 ? "bg-[#FFA62B] text-white" : "bg-gray-200 text-gray-500"}`}>
        1
      </div>
      <span className={`mt-2 text-xs text-center ${currentStep >= 1 ? "text-[#FFA62B]" : "text-gray-400"}`}>Delivery details</span>
    </div>

    {/* Connector */}
    <div className={`flex-1 h-[2px] border-t-2 border-dashed ${currentStep >= 2 ? "border-[#FFA62B]" : "border-gray-300"}`} />

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${currentStep >= 2 ? "bg-[#FFA62B] text-white" : "bg-gray-200 text-gray-500"}`}>
        2
      </div>
      <span className={`mt-2 text-xs text-center ${currentStep >= 2 ? "text-[#FFA62B]" : "text-gray-400"}`}>Delivery class</span>
    </div>

    {/* Connector */}
    <div className={`flex-1 h-[2px] border-t-2 border-dashed ${currentStep >= 3 ? "border-[#FFA62B]" : "border-gray-300"}`} />

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${currentStep >= 3 ? "bg-[#FFA62B] text-white" : "bg-gray-200 text-gray-500"}`}>
        3
      </div>
      <span className={`mt-2 text-xs text-center ${currentStep >= 3 ? "text-[#FFA62B]" : "text-gray-400"}`}>Review & Confirm</span>
    </div>

    {/* Connector */}
    <div className={`flex-1 h-[2px] border-t-2 border-dashed ${currentStep >= 4 ? "border-[#FFA62B]" : "border-gray-300"}`} />

    {/* Step 4 */}
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${currentStep >= 4 ? "bg-[#FFA62B] text-white" : "bg-gray-200 text-gray-500"}`}>
        4
      </div>
      <span className={`mt-2 text-xs text-center ${currentStep >= 4 ? "text-[#FFA62B]" : "text-gray-400"}`}>Payment</span>
    </div>
  </div>
</div>

          <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
            {/* STEP 1 */}

            {currentStep === 1 && (
              <div className="mt-8 space-y-6">
                {/* Sender Info */}
                <h2 className="text-lg font-semibold text-gray-800">
                  Sender Information
                </h2>

                <div>
                  <label
                    htmlFor="senderName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <input
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="senderEmail"
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="senderPhone"
                    name="senderPhone"
                    value={formData.senderPhone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pickupAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pickup address
                  </label>
                  <input
                    id="pickupAddress"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your pickup address"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Recipient Info */}
                <h2 className="pt-6 text-lg font-semibold text-gray-800">
                  Recipient's Information
                </h2>

                <div>
                  <label
                    htmlFor="recipientName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <input
                    id="recipientName"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="recipientPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="recipientPhone"
                    name="recipientPhone"
                    value={formData.recipientPhone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Delivery address
                  </label>
                  <input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter the drop-off address"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Package Details */}
                <h2 className="pt-6 text-lg font-semibold text-gray-800">
                  Package Details
                </h2>

                <div>
                  <label
                    htmlFor="packageType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Package type
                  </label>
                  <input
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    type="text"
                    placeholder="Food, Clothes, Gadgets, etc."
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="packageSize"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Package size
                  </label>
                  <select
                    id="packageSize"
                    name="packageSize"
                    value={formData.packageSize}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select package size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="instructions"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Special instructions
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    placeholder="Add any additional instructions"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="
      w-full
      py-4
      bg-[#00401A]
      text-white
      rounded-full
      font-semibold
      transition
      duration-200
      hover:bg-[#003015]
      active:scale-[0.98]
    "
              >
                {currentStep < 3 && "Proceed"}
                {currentStep === 3 && "Confirm & Pay"}
                {currentStep === 4 && "Proceed with payment"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      {/* ===== FOOTER ===== */}
      <footer className="bg-[#001A0A] text-white">
        <div className="container mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
            {/* Brand */}
            <div className="max-w-sm bg-[#00401A]/20 rounded-xl p-6">
              <img
                src={footerlogo}
                alt="MultiBag Deliveries"
                className="h-10 mb-4"
              />

              <p className="text-sm leading-relaxed text-gray-300">
                Jorem ipsum dolor sit amet, consectet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-36 flex-1">
              {/* Company */}
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-base">Company</h4>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Services
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  FAQs
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Track my parcel
                </a>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-base">Contact Us</h4>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <img
                    src={destinationIcon}
                    alt="Location"
                    className="w-4 h-4"
                  />
                  Ghana
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <img src={emailIcon} alt="Email" className="w-4 h-4" />
                  help@multibag.com
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <img src={clockIcon} alt="Hours" className="w-4 h-4" />
                  Mon - Fri 8:00am - 6:00pm
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4 mt-2">
                  <a href="#" aria-label="Facebook">
                    <img
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-5 h-5"
                    />
                  </a>
                  <a href="#" aria-label="X">
                    <img src={xIcon} alt="X" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
          © MultiBag 2024, All Right Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Bookadelivery;
