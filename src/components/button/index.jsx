import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary: "bg-green-800 text-white hover:bg-[#FFA62B] hover:text-[#00401A]",
    outline:
      "border border-green-800 text-green-800 bg-white hover:bg-green-800 hover:text-white",
      login: "text-[#00401A] hover:bg-white  hover:border border-[#00401A] mt-2.5",
      signup: "bg-green-800 text-white hover:bg-green-900 mt-[12px]"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
