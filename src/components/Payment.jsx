import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardIcon from "../assets/Images/card_icon.png";
import bankIcon from "../assets/Images/bank_icon.png";

export default function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const steps = [
    "Delivery details",
    "Delivery class",
    "Review and Confirm",
    "Payment",
  ];

  const isCardValid =
    card.number.replace(/\s/g, "").length === 16 &&
    card.expiry.length === 5 &&
    card.cvv.length === 3;

  return (
    <div className="min-h-screen bg-[#eef5ef] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center text-green-900">
          {" "}
          Book a Delivery
        </h1>

        <p className="text-center text-gray-700 mt-3">
          {" "}
          Fill in the details below to book your parcel delivery.
        </p>

        <div className="flex justify-between mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full"
            >
              {index !== 0 && (
                <div className="absolute top-5 left-0  w-1/2 border-t-2 border-dashed border-orange-400">
                  {" "}
                </div>
              )}

              {index !== steps.length - 1 && (
                <div className="absolute top-5 right-0  w-1/2 border-t-2 border-dashed border-orange-400"></div>
              )}

              <div className="rounded-full w-10 h-10 bg-orange-400 text-white flex items-center justify-center font-semibold">
                {" "}
                {index + 1}
              </div>
              <span className="mt-2 text-sm text-orange-500 text-center whitespace-nowrap">
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-semibold text-lg text-gray-800"> Payment</h2>
          <div className="border border-gray-200 p-6 mt-4 max-w-md">
            <p className="font-medium text-green-700 text-sm mb-4">
              {" "}
              Cost Breakdown
            </p>
            <div className="flex justify-between">
              <span className="mt-2 text-gray-400"> Delivery fee:</span>
              <span> GH₵ 400</span>
            </div>
            <div className="flex justify-between">
              <span className="mt-2 text-gray-400"> Service charge:</span>
              <span> GH₵ 50</span>
            </div>
            <hr className="mt-2"/>
            <div className="flex justify-between">
              <span className="mt-3 text-gray-400"> Total:</span>
              <span className="mt-3 font-bold"> GH₵ 450</span>
            </div>
          </div>

          <h3 className="mt-6 font-medium"> Select Payment Method</h3>

          <div className="mt-4 border rounded-md">
            <label className="flex items-center p-4 justify-between  cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                  className="accent-green-900 cursor-pointer"
                />
                <span className="text-gray-600">Pay with card</span>
              </div>

              <img src={cardIcon} alt="card" className="w-5 h-5" />
            </label>

            {method === "card" && (
              <div className=" px-4 py-4 space-y-4">
                <p className="text-sm font-medium text-gray-800">
                  {" "}
                  Add Card Details
                </p>
                <div>
                  <label className="text-xs text-gray-800"> Card number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border rounded px-3 py-2"
                    value={card.number}
                    onChange={(e) =>
                      setCard({ ...card, number: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="text-xs text-gray-900">
                      {" "}
                      Expiry date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded px-3 py-2"
                      value={card.expiry}
                      onChange={(e) =>
                        setCard({ ...card, expiry: e.target.value })
                      }
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-xs text-gray-900">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border rounded px-3 py-2 mt-1"
                      value={card.cvv}
                      onChange={(e) =>
                        setCard({ ...card, cvv: e.target.value })
                      }
                    />
                  </div>
                </div>

                {!isCardValid && (
                  <p className="text-xs text-red-500">
                    {" "}
                    Please enter valid card details
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="mt-4 border rounded-md">
            <label className="flex items-center justify-between px-4 py-4 cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "bank"}
                  onChange={() => setMethod("bank")}
                  className="accent-green-900 cursor-pointer"
                />
                <span className="text-gray-600"> Pay with bank transfer</span>
              </div>
              <img
                src={bankIcon}
                alt="Bank transfer"
                className="w-5 h-5 object-contain"
              />
            </label>
          </div>

          <button
            disabled={method === "card" && !isCardValid}
            onClick={() => navigate("/payment-success")}
            className={`mt-6 w-full py-3 rounded-full text-white font-medium ${ 
              method === "card" && !isCardValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-900 hover:bg-green-800"
            }`}
          >
            {" "}
            Proceed with Payment
          </button>
        </div>
      </div>
    </div>
  );
}
