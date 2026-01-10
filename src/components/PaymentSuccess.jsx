import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import successIcon from "../assets/Images/success.png";

export default function PaymentSuccess({ open, onClose, onBookAgain }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-xl p-6 sm:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={successIcon}
            alt="Payment Successful"
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Payment Successful!
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-7">
          Your delivery has been successfully booked. You will receive an email
          with more information.
        </p>

        <button
          onClick={onBookAgain}
          className="bg-green-900 text-white rounded-full px-6 py-3 hover:bg-green-700"
        >
          Book Again
        </button>
      </div>
    </div>
  );
}
