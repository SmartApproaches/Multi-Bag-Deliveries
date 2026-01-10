import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 7) {
      newErrors.password = "Password must be at least 7 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login successful!");
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Do you have an account?
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-900 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-900 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-4 inline-flex rounded-full bg-green-900 px-8 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            Login
          </button>
        </form>

        {/* New customer */}
        <h3 className="mb-3 font-medium text-gray-900 mt-6">New customer?</h3>

        <div className="mb-4 flex items-center gap-4">
          <button className="text-sm font-semibold text-green-900 hover:underline">
            Continue as Guest
          </button>

          <button className="rounded-full border border-green-900 px-6 py-2 text-sm font-semibold text-green-900 hover:bg-green-900 hover:text-white">
            Sign Up
          </button>
        </div>

        <p className="text-sm leading-relaxed text-gray-600">
          Sign up to save your delivery details for next time, or proceed
          without an account. You can easily create an account after completing
          your booking.
        </p>
      </div>
    </div>
  );
}
