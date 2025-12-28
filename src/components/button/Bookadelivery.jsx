import React, { useState, useEffect } from "react";
import cardIcon from "../../assets/images/cardicon.jpg";
import bankIcon from "../../assets/images/bankicon.jpg";

const Bookadelivery = () => {
  const [currentStep, setCurrentStep] = useState(4);
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

          {/* Progress Bar */}
          <div className="flex items-center w-full flex-wrap md:flex-nowrap gap-y-6">
            <div className="flex items-center w-full">
              {/* STEP 1 */}
              <div className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
          ${
            currentStep >= 1
              ? "bg-[#FFA62B] text-white"
              : "bg-gray-200 text-gray-500"
          }`}
                  >
                    1
                  </div>
                  <span
                    className={`mt-2 text-xs text-center
          ${currentStep >= 1 ? "text-[#FFA62B]" : "text-gray-400"}`}
                  >
                    Delivery details
                  </span>
                </div>

                <div
                  className={`flex-1 h-[2px] border-t border-dashed mx-2
        ${currentStep >= 2 ? "border-[#FFA62B]" : "border-gray-300"}`}
                ></div>
              </div>

              {/* STEP 2 */}
              <div className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
          ${
            currentStep >= 2
              ? "bg-[#FFA62B] text-white"
              : "bg-gray-200 text-gray-500"
          }`}
                  >
                    2
                  </div>
                  <span
                    className={`mt-2 text-xs text-center
          ${currentStep >= 2 ? "text-[#FFA62B]" : "text-gray-400"}`}
                  >
                    Delivery class
                  </span>
                </div>

                <div
                  className={`flex-1 h-[2px] border-t border-dashed mx-2
        ${currentStep >= 3 ? "border-[#FFA62B]" : "border-gray-300"}`}
                ></div>
              </div>

              {/* STEP 3 */}
              <div className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
          ${
            currentStep >= 3
              ? "bg-[#FFA62B] text-white"
              : "bg-gray-200 text-gray-500"
          }`}
                  >
                    3
                  </div>
                  <span
                    className={`mt-2 text-xs text-center
          ${currentStep >= 3 ? "text-[#FFA62B]" : "text-gray-400"}`}
                  >
                    Review & Confirm
                  </span>
                </div>

                <div
                  className={`flex-1 h-[2px] border-t border-dashed mx-2
        ${currentStep >= 4 ? "border-[#FFA62B]" : "border-gray-300"}`}
                ></div>
              </div>

              {/* STEP 4 */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${
          currentStep >= 4
            ? "bg-[#FFA62B] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
                >
                  4
                </div>
                <span
                  className={`mt-2 text-xs text-center
        ${currentStep >= 4 ? "text-[#FFA62B]" : "text-gray-400"}`}
                >
                  Payment
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
          

            {currentStep === 4 && (
              <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold text-gray-800">Payment</h2>

                {/* Cost Breakdown */}
                <div className="max-w-md border rounded-lg p-6">
                  <h3 className="font-medium text-green-900 mb-3">
                    Cost Breakdown
                  </h3>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Delivery fee</span>
                    <span>GHC 400</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Service charge</span>
                    <span>GHC 50</span>
                  </div>

                  <div className="border-t mt-3 pt-3 flex justify-between font-semibold text-green-900">
                    <span>Total</span>
                    <span>GHC 450</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">
                    Select Payment Method
                  </h3>
                  <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="paymentMethod" />
                      <span>Pay with card</span>
                    </div>

                    {/* ICON HERE */}
                    <img src={cardIcon} alt="Card" className="w-5 h-5" />
                  </label>

                  <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="paymentMethod" />
                      <span>Pay with bank transfer</span>
                    </div>

                    {/* ICON HERE */}
                    <img src={bankIcon} alt="Bank" className="w-5 h-5" />
                  </label>
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

    </div>
  );
};

export default Bookadelivery;
