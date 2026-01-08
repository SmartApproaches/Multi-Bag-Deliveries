import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PaymentSuccess() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePayment = () => {
    const isValid = true;

    if (isValid) {
      setIsOpen(true);
    }
  };

  const closeButton = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className=" flex items-center bg-[#D9E8E0] justify-center bg-gray-100 p-4">
        <button
         type="button"
          onClick={handlePayment}
          className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
        >
          {" "}
          Pay Now
        </button>
      </div>
      { isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50" onClick={closeButton}>
        <div className="relative bg-white w-full max-w-lg rounded-xl p-6 sm:p-8 text-center"  onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeButton}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            
          >
            {" "}
            <FontAwesomeIcon icon={faXmark} />{" "}
          </button>

          <div className="flex justify-center mb-6">
            <img
              src={successIcon}
              alt="Payment Successful"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 mt-3"> Payment Successful!</h2>

          <p className="text-gray-600 text-sm sm:text-base mb-7">
            Your delivery has been successfully booked. You will receive an
            email with more information.
          </p>

          <button className=" bg-green-900 mt-6 text-white rounded-full px-6 py-3 hover:bg-green-700"> 
            Book Again</button>
        </div>
      </div>
      )}
    </>
  );
}
