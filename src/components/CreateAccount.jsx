import { useState } from "react";


export default function CreateAccount() {

  const [form, setForm] = useState({
    fullname: "",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen  bg-[#D9E8E0] flex items-center justify-center bg-gray-50 px-7">
      <div className="w-full max-w-md lg:max-w-xl bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 ">
        <h1 className="lg:text-4xl font-bold text-gray-900"> Create an Account</h1>

        <p className="text-sm text-gray-500 mt-3"> Create a free account to get started with your delivery booking</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div >
          <label className=" text-sm font-medium lg:text-base text-gray-700 mb-1"> Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            value={form.fullname}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-m border"
          />

          </div>

          <div>
          <label className="text-sm font-medium lg:text-base text-gray-700 mb-1"> Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
             className="w-full rounded-md px-4 py-3 text-m border"
          />

          </div>



          <div>
          <label className="text-sm font-medium lg:text-base text-gray-700 mb-1"> Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
             className="w-full rounded-md px-4 py-3 text-m border"
          />

          </div>

           
           <div>
          <label className="text-sm font-medium lg:text-base text-gray-700 mb-1"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
             className="w-full rounded-md px-4 py-3 text-m border"
          />

          </div>

        <div>
          <label className=" text-sm font-medium lg:text-base text-gray-700 mb-1"> Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
             className="w-full rounded-md px-4 py-3 text-m border"
          />

          </div>

         <button type="submit" className="bg-primary bg-green-900 font-medium py-2 px-5 rounded-full mb-3 text-white "> Create Account</button>
        </form>

        <p className="text-sm text-gray-800 text-center mt-4">
            By signing up, you agree to our {" "} 
            <span> <a href="#" className="text-green-900"> Terms of services</a></span>{" "} and{" "}
            <span> <a href="#" className="text-green-900"> Privacy policy</a></span>
        </p>
      </div>
    </div>
  );
};

