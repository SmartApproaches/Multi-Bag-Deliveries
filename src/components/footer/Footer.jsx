import React from "react";
import ClockImg from "../../assets/Images/clock.png";
import DestinationImg from "../../assets/Images/destination.png";
import FacebookImg from "../../assets/Images/facebook.png";
import FooterLogoImg from "../../assets/Images/footer-logo.png";
import InstagramImg from "../../assets/Images/instagram.png";
import XImg from "../../assets/Images/x.png";

export default function Footer() {
  return (
    <footer className="bg-[#001A0A] text-white">
      <div className="container mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
          {/* Brand */}
          <div className="max-w-sm bg-[#00401A]/20 rounded-xl p-6">
            <img
              src={FooterLogoImg}
              alt="MultiBag Deliveries"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-300">
              Jorem ipsum dolor sit amet, consectet ur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-28 flex-1">
            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-base">Company</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                About Us
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                FAQs
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Track my parcel
              </a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-base">Contact Us</h4>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <img src={DestinationImg} alt="Location" className="w-4 h-4" />
                Ghana
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <svg
                  className="w-4 h-4 text-[#FFA62B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16v12H4z"
                    stroke="#FFA62B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="#FFA62B"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                help@multibag.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <img src={ClockImg} alt="Hours" className="w-4 h-4" />
                Mon - Fri 8:00am - 6:00pm
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-2">
                <a href="#" aria-label="Facebook">
                  <img src={FacebookImg} alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src={InstagramImg} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" aria-label="X">
                  <img src={XImg} alt="X" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © MultiBag 2024, All Right Reserved.
      </div>
    </footer>
  );
}
