import React, { useState } from "react";
import Premium from "../../assets/Images/premium.png";
import Standard from "../../assets/Images/standard.png";

const Bookadelivery_step2 = ({
  formData = {},
  handleNext,
  handleBack,
  currentStep = 2,
  handleChange, // optional parent handler
}) => {
  const [deliveryClass, setDeliveryClass] = useState(formData.deliveryClass || "");

  React.useEffect(() => {
    if (formData.deliveryClass) setDeliveryClass(formData.deliveryClass);
  }, [formData.deliveryClass]);

  const onSelect = (value) => {
    setDeliveryClass(value);
    if (typeof handleChange === "function") {
      // emulate event shape expected by parent handler
      handleChange({ target: { name: "deliveryClass", value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryClass) return;
    // ensure parent has the latest value
    if (typeof handleChange === "function") {
      handleChange({ target: { name: "deliveryClass", value: deliveryClass } });
    }
    // force next to avoid race with parent state update
    handleNext(null, true); // move to step 3
  };

  return (
    <div className="min-h-screen bg-[#EFF5F1] px-4 sm:px-6 font-inter">
      {/* MAIN */}
      <div className="flex justify-center py-8 sm:py-12">
        <div
          className="
            w-full
            max-w-[680px]
            lg:max-w-3xl
            bg-white
            rounded-2xl
            shadow-lg
            p-5
            sm:p-8
          "
        >
          {/* TITLE */}
          <div className="text-left sm:text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Book a Delivery
            </h1>

            <p className="mt-2 text-sm sm:text-base text-gray-500">
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


            
           {/* ================= SELECT DELIVERY CLASS ================= */}
<form onSubmit={handleSubmit} className="mt-10">
  <h2 className="text-xl sm:text-1xl font-semibold text-green-900 mb-6">
    Select a Delivery Class
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px] mx-auto">
    {/* PREMIUM */}
    <label
      className={`relative border rounded-2xl p-6 cursor-pointer transition
        ${
          deliveryClass === "premium"
            ? "border-[#FFA62B]"
            : "border-gray-300 hover:border-[#FFA62B]"
        }
      `}
      onClick={() => onSelect("premium")}
    >
      <input
        type="radio"
        name="deliveryClass"
        value="premium"
        checked={deliveryClass === "premium"}
        onChange={(e) => onSelect(e.target.value)}
        className="hidden"
      />

      {/* ICON */}
      <img src={Premium} alt="Premium" className="w-8 h-8 mb-4" />

      {/* TEXT */}
      <h3 className="text-base font-semibold text-gray-900">
        Premium Class
      </h3>
      <p className="text-sm sm:text-base text-gray-500 mt-1">
        Same-Day Delivery
      </p>

      {/* RADIO INDICATOR */}
      <span
        className={`absolute top-5 right-5 w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${
            deliveryClass === "premium"
              ? "border-[#FFA62B]"
              : "border-gray-300"
          }
        `}
      >
        {deliveryClass === "premium" && (
          <span className="w-3 h-3 rounded-full bg-[#FFA62B]" />
        )}
      </span>
    </label>

    {/* STANDARD */}
    <label
      className={`relative border rounded-2xl p-6 cursor-pointer transition
        ${
          deliveryClass === "standard"
            ? "border-[#FFA62B]"
            : "border-gray-300 hover:border-[#FFA62B]"
        }
      `}
      onClick={() => onSelect("standard")}
    >
      <input
        type="radio"
        name="deliveryClass"
        value="standard"
        checked={deliveryClass === "standard"}
        onChange={(e) => onSelect(e.target.value)}
        className="hidden"
      />

      {/* ICON */}
      <img src={Standard} alt="Standard" className="w-8 h-8 mb-4" />

      {/* TEXT */}
      <h3 className="text-base font-semibold text-gray-900">
        Standard Class
      </h3>
      <p className="text-sm sm:text-base text-gray-500 mt-1">
        Up to 7 Days Delivery
      </p>

      {/* RADIO INDICATOR */}
      <span
        className={`absolute top-5 right-5 w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${
            deliveryClass === "standard"
              ? "border-[#FFA62B]"
              : "border-gray-300"
          }
        `}
      >
        {deliveryClass === "standard" && (
          <span className="w-3 h-3 rounded-full bg-[#FFA62B]" />
        )}
      </span>
    </label>
  </div>

  {/* ================= BUTTON ================= */}
  <button
    type="submit"
    disabled={!deliveryClass}
    className="
      w-full
      mt-20
      py-4
      bg-[#00401A]
      text-white
      rounded-full
      font-semibold
      transition
      hover:bg-[#003015]
      disabled:opacity-50
    "
  >
    Proceed
  </button>
</form>
        </div>
      </div>
    </div>
  );
};

export default Bookadelivery_step2;
