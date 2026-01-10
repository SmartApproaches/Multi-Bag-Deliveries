import React from "react";

const Bookadelivery_step3 = ({ formData, handleNext, handleBack, currentStep }) => {

  return (

    <div className="min-h-screen bg-[#EFF5F1] font-inter">
      

       {/* FORM */}
      <div className="bg-gray-100 flex items-start justify-center px-4 py-12 min-h-[60vh]">
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
            {/* Grid-based layout: step, connector, step, connector, ... so connectors always align with dots */}
            <div
              className="grid items-center gap-2"
              style={{ gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto" }}
            >
              {/* Step 1 */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    currentStep >= 1
                      ? "bg-[#FFA62B] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  aria-hidden
                >
                  1
                </div>
              </div>

              {/* Connector 1 */}
              <div
                className={`h-[2px] border-t-2 border-dashed ${
                  currentStep >= 2 ? "border-[#FFA62B]" : "border-gray-300"
                }`}
              />

              {/* Step 2 */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    currentStep >= 2
                      ? "bg-[#FFA62B] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  aria-hidden
                >
                  2
                </div>
              </div>

              {/* Connector 2 */}
              <div
                className={`h-[2px] border-t-2 border-dashed ${
                  currentStep >= 3 ? "border-[#FFA62B]" : "border-gray-300"
                }`}
              />

              {/* Step 3 */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    currentStep >= 3
                      ? "bg-[#FFA62B] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  aria-hidden
                >
                  3
                </div>
              </div>

              {/* Connector 3 */}
              <div
                className={`h-[2px] border-t-2 border-dashed ${
                  currentStep >= 4 ? "border-[#FFA62B]" : "border-gray-300"
                }`}
              />

              {/* Step 4 */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    currentStep >= 4
                      ? "bg-[#FFA62B] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  aria-hidden
                >
                  4
                </div>
              </div>
            </div>

            {/* Labels row - same grid so labels align under the dots */}
            <div
              className="grid mt-2 text-xs gap-2 text-center"
              style={{ gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto" }}
            >
              <div
                className={`text-center ${
                  currentStep >= 1 ? "text-[#FFA62B]" : "text-gray-400"
                }`}
              >
                Delivery details
              </div>
              <div />
              <div
                className={`text-center ${
                  currentStep >= 2 ? "text-[#FFA62B]" : "text-gray-400"
                }`}
              >
                Delivery class
              </div>
              <div />
              <div
                className={`text-center ${
                  currentStep >= 3 ? "text-[#FFA62B]" : "text-gray-400"
                }`}
              >
                Review & Confirm
              </div>
              <div />
              <div
                className={`text-center ${
                  currentStep >= 4 ? "text-[#FFA62B]" : "text-gray-400"
                }`}
              >
                Payment
              </div>
            </div>
          </div>
          <br />

          <form onSubmit={handleNext}>
           
            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-lg font-semibold text-gray-800">
                  Review Your Booking
                </h2>

                {/* Sender Information */}
                <h3 className="text-sm font-semibold text-green-900">
                  Sender Information
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Full name</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.senderName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Email</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.senderEmail}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Phone number</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.senderPhone}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Pickup address</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.pickupAddress}
                    </span>
                  </div>
                </div>
                

                {/* Recipient */}
                <h3 className="pt-6 text-sm font-semibold text-green-900">
                  Recipient’s Information
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Full name</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.recipientName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Phone number</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.recipientPhone}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Delivery location</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.deliveryAddress}
                    </span>
                  </div>
                </div>

                {/* Package Details */}
                <h3 className="pt-6 text-sm font-semibold text-green-900">
                  Package Details
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Package type</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.packageType}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Package size</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.packageSize}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[140px_10px_1fr] items-start md:items-center text-sm gap-y-1">
                    <span className="text-gray-600">Special instructions</span>
                    <span className="hidden md:inline text-gray-500">:</span>
                    <span className="font-medium text-gray-800 md:col-start-3">
                      {formData.instructions || "Nil"}
                    </span>
                  </div>
                </div>

                {/* Delivery Class */}
                <h3 className="pt-6 text-sm font-semibold text-green-900">
                  Delivery Class
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-800">
                  {formData.deliveryClass === "premium"
                    ? "Premium Class"
                    : formData.deliveryClass === "standard"
                    ? "Standard Class"
                    : "—"}
                </p>
              </div>
            )}

            <div className="mt-8 flex gap-3 flex-col md:flex-row">
              

              <button
                type="submit"
                className="w-full md:flex-1 py-4 bg-[#00401A] text-white rounded-full font-semibold transition duration-200 hover:bg-[#003015] active:scale-[0.98]"
              >
                Confirm & Pay
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Bookadelivery_step3;