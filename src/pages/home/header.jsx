import { useState } from "react";
import Button from "../../components/button";
import { IMAGES } from "../../constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="relative bg-[#FFFFFF99] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 h-[83px] pl-[40px] pr-[40px] w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="shrink-0 items-center">
                <img
                  src={IMAGES.logo}
                  alt="Logo"
                  className="top-0 left-0 w-32 h-32 pt-[10px]"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block"></div>
            </div>
            <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex space-x-4 gap-[70px] hidden lg:flex">
                <div className="pt-[23px]">
                  <Link
                    to={"/"}
                    href="#"
                    aria-current="page"
                    className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] pr-[20px] pl-[20px]"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/about"}
                    href="#"
                    className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] pr-[20px] pl-[20px]"
                  >
                    About
                  </Link>

                  <Link
                    to={"/services"}
                    href="#"
                    className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] pr-[20px] pl-[20px]"
                  >
                    Services
                  </Link>
                  <Link
                    to={"/contact"}
                    href="#"
                    className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] pr-[20px] pl-[20px]"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="login"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="signup"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <i
                className="lg:hidden block text-5xl cursor-pointer text-[#00401A]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ><RiMenu4Line /></i>

              <div
                className={`absolute xl:hidden lg:hidden top-24 w-[110px] flex flex-col bg-[#FFFFFF99] py-5 transform transition-transform 
            ${isMenuOpen ? "opacity-100" : "hidden"}`}
              >
                <Link
                  to={"/"}
                  href="#"
                  aria-current="page"
                  className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] text-center p-4 transition-all cursor-pointer pr-[20px] pl-[20px]"
                >
                  Home
                </Link>

                <Link
                  to={"/about"}
                  href="#"
                  className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] text-center p-4 transition-all cursor-pointer pr-[20px] pl-[20px]"
                >
                  About
                </Link>

                <Link
                  to={"/services"}
                  href="#"
                  className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] text-center p-4 transition-all cursor-pointer pr-[20px] pl-[20px]"
                >
                  Services
                </Link>

                <Link
                  to={"/contact"}
                  href="#"
                  className="rounded-md text-[18px] font-medium text-[#3B3B3B] hover:text-[#FFA62B] text-center p-4 transition-all cursor-pointer pr-[20px] pl-[20px]"
                >
                  Contact
                </Link>

                <Button
                  variant="login"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="signup"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
