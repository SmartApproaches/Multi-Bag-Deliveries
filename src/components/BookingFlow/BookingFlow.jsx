import React, { useState, useEffect } from "react";
import Bookadelivery_step1 from "../button/Bookadelivery_step1";
import Bookadelivery_step2 from "../button/Bookadelivery_step2";
import Bookadelivery_step3 from "../button/Bookadelivery_step3";
import Bookadelivery_step4 from "../button/Bookadelivery_step4";

const BookingFlow = () => {
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
    deliveryClass: "",
  });

  const validateStep = (step) => {
    if (step === 1) {
      return (
        formData.senderName.trim() &&
        formData.senderEmail.trim() &&
        formData.senderPhone.trim() &&
        formData.pickupAddress.trim() &&
        formData.recipientName.trim() &&
        formData.recipientPhone.trim() &&
        formData.deliveryAddress.trim() &&
        formData.packageType.trim() &&
        formData.packageSize.trim()
      );
    }
    if (step === 2) {
      return formData.deliveryClass.trim();
    }
    if (step === 3) {
      return true; // Review step - just confirm
    }
    return true;
  };

  const handleNext = (e, force = false) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (force || validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(4, s + 1));
    } else {
      alert("Please fill in all required fields for this step.");
    }
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking submitted! Check console for details. Thanks!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div>
      {currentStep === 1 && (
        <Bookadelivery_step1
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          currentStep={currentStep}
        />
      )}
      {currentStep === 2 && (
        <Bookadelivery_step2
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
          currentStep={currentStep}
        />
      )}
      {currentStep === 3 && (
        <Bookadelivery_step3
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
          currentStep={currentStep}
        />
      )}
      {currentStep === 4 && (
        <Bookadelivery_step4
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          currentStep={currentStep}
        />
      )}
    </div>
  );
};

export default BookingFlow;
