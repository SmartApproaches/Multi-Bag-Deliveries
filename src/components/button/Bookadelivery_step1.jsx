import React from "react";
import ProgressBar from "../bookadelivery_step1/ProgressBar";
import FormHeader from "../bookadelivery_step1/FormHeader";
import FormButtons from "../bookadelivery_step1/FormButtons";

const Bookadelivery_step1 = ({ formData, handleChange, handleNext, currentStep }) => {

  return (

    <div className="min-h-screen bg-[#EFF5F1] font-inter">
      

       {/* FORM */}
      <div className="bg-gray-100 flex items-start justify-center px-4 py-12 min-h-[60vh]">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <FormHeader />
          <ProgressBar currentStep={currentStep} />

          <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
            {/* STEP 1 */}

            {currentStep === 1 && (
              <div className="mt-8 space-y-6">
                {/* Sender Info */}
                <h2 className="text-lg font-semibold text-[#00401A]">
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
                <h2 className="pt-6 text-lg font-semibold text-[#00401A]">
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
                <h2 className="pt-6 text-lg font-semibold text-[#00401A]">
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

            <FormButtons currentStep={currentStep} />
          </form>
        </div>
      </div>

    </div>
  );
};

export default Bookadelivery_step1;