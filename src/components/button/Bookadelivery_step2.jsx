import React from "react";

const Bookadelivery_step2 = ({ formData, handleChange, handleNext, handleBack, currentStep }) => {

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


          <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
          

            {currentStep === 2 && (
              <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold text-gray-800">Delivery Class</h2>

                {/* Premium vs Standard */}
                <div className="space-y-4">
                  <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryClass"
                        value="premium"
                        checked={formData.deliveryClass === "premium"}
                        onChange={handleChange}
                      />
                      <div>
                        <span className="font-medium">Premium Class</span>
                        <p className="text-sm text-gray-600">Faster delivery (Same day)</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[#FFA62B]">GHC 600</span>
                  </label>

                  <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryClass"
                        value="standard"
                        checked={formData.deliveryClass === "standard"}
                        onChange={handleChange}
                      />
                      <div>
                        <span className="font-medium">Standard Class</span>
                        <p className="text-sm text-gray-600">Regular delivery (1-2 days)</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[#FFA62B]">GHC 400</span>
                  </label>
                </div>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-full md:flex-1 py-4 border border-gray-300 text-gray-700 rounded-full font-semibold transition duration-200 hover:bg-gray-50"
              >
                Back
              </button>

              <button
                type="submit"
                className="w-full md:flex-1 py-4 bg-[#00401A] text-white rounded-full font-semibold transition duration-200 hover:bg-[#003015] active:scale-[0.98]"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Bookadelivery_step2;
