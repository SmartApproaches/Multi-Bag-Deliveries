import React, { useState, useEffect } from "react";
import Premium from "../../assets/images/premium.jpg";
import Standard from "../../assets/images/standard.jpg";


const Bookadelivery = () => {
  const [currentStep, setCurrentStep] = useState(2);
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
            

            {currentStep === 2 && (
              <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Select a Delivery Class
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  {/* Premium Class */}
                  <label
                    className={`relative w-full max-w-sm rounded-xl border p-6 cursor-pointer transition
        ${
          formData.deliveryClass === "premium"
            ? "border-orange-500"
            : "border-gray-300 hover:border-orange-400"
        }`}
                  >
                    <input
                      type="radio"
                      name="deliveryClass"
                      value="premium"
                      checked={formData.deliveryClass === "premium"}
                      onChange={handleChange}
                      className="hidden"
                    />

                    {/* ICON (no container) */}
                    <img src={Premium} alt="Premium" className="w-8 h-8 mb-4" />

                    {/* TEXT */}
                    <h3 className="text-base font-semibold text-gray-800">
                      Premium Class
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Same-Day Delivery
                    </p>

                    {/* RADIO */}
                    <span
                      className={`absolute top-6 right-6 w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${
            formData.deliveryClass === "premium"
              ? "border-orange-500"
              : "border-gray-300"
          }`}
                    >
                      {formData.deliveryClass === "premium" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      )}
                    </span>
                  </label>

                  {/* Standard Class */}
                  <label
                    className={`relative w-full max-w-sm rounded-xl border p-6 cursor-pointer transition
        ${
          formData.deliveryClass === "standard"
            ? "border-orange-500"
            : "border-gray-300 hover:border-orange-400"
        }`}
                  >
                    <input
                      type="radio"
                      name="deliveryClass"
                      value="standard"
                      checked={formData.deliveryClass === "standard"}
                      onChange={handleChange}
                      className="hidden"
                    />

                    {/* ICON (no container) */}
                    <img
                      src={Standard}
                      alt="Standard"
                      className="w-8 h-8 mb-4"
                    />

                    {/* TEXT */}
                    <h3 className="text-base font-semibold text-gray-800">
                      Standard Class
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Up to 7 Days Delivery
                    </p>

                    {/* RADIO */}
                    <span
                      className={`absolute top-6 right-6 w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${
            formData.deliveryClass === "standard"
              ? "border-orange-500"
              : "border-gray-300"
          }`}
                    >
                      {formData.deliveryClass === "standard" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      )}
                    </span>
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