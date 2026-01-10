import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function LoginModal() {
  const [open, setOpen] = useState(true);

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
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center px-4 bg-black/40">
      <div className="relative w-full max-w-lg  rounded-lg bg-white p-6 shadow-lg sm:p-8">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
        >
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className="mb-6 text-lg font-semibold sm:text-2xl">
          {" "}
          Do you have an account
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="text-sm font-medium mb-1"> Email Address</label>
            <input
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-md px-3 py-2 text-sm focus:outline-none ${
                errors.email
                  ? "border border-red-500"
                  : "border border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500"> {errors.email} </p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium mb-1"> Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-md px-3 py-2 text-sm focus:outline-none ${
                errors.password
                  ? "border border-red-500"
                  : "border border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500"> {errors.password} </p>
            )}
          </div>

          <button
            type="submit"
            className="mb-6 rounded-full bg-green-900 px-6 py-2 font-medium text-white hover:bg-green-800"
          >
            {" "}
            Login
          </button>
        </form>

        <h3 className="mb-3 font-medium">New Customer?</h3>
        <div className="flex items-center gap-3 mt-4">
          <span className="font-medium text-green-900">
            {" "}
            <a href="#"> Continue as Guest</a>
          </span>
          <button className="rounded-full font-medium border border-green-900 px-5 py-2 text-m text-green-900 hover:bg-green-700">
            {" "}
            Sign Up
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-700">
          {" "}
          Sign up to save your delivery details for next time, or proceed
          without an account. You can easily create an account after completing
          your booking
        </p>
      </div>
    </div>
  );
}
