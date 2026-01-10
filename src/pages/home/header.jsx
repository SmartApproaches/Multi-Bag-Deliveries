import { useEffect, useId, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import LoginModal from "../../components/LoginModal";
import Button from "../../components/button";
import { IMAGES } from "../../constants";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/" },
  { label: "Services", to: "/" },
  { label: "Contact", to: "/" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const drawerId = useId();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // ✅ Prevent any weird "open on initial render" state
  useEffect(() => {
    setIsMenuOpen(false);
    setHasMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Close menu on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!hasMounted) return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, hasMounted]);

  const isActive = (to) => location.pathname === to;

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-[#FFFFFF99] backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[83px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={IMAGES.logo}
                alt="Logo"
                className="h-10 w-auto sm:h-12 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={[
                      "text-[18px] font-medium transition-colors",
                      isActive(item.to)
                        ? "text-[#FFA62B]"
                        : "text-[#3B3B3B] hover:text-[#FFA62B]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button variant="login" onClick={() => setIsLoginOpen(true)}>
                  Login
                </Button>

                <Button variant="signup" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#00401A]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls={drawerId}
            >
              {isMenuOpen ? (
                <IoClose className="text-4xl" />
              ) : (
                <RiMenu4Line className="text-4xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile UI (only after mount to avoid FOUC) */}
        {hasMounted && (
          <>
            {/* Overlay */}
            <div
              className={[
                "lg:hidden fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
                isMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none",
              ].join(" ")}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <aside
              id={drawerId}
              className={[
                "lg:hidden fixed top-[83px] right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl",
                "transform transition-transform duration-300 ease-out",
                isMenuOpen ? "translate-x-0" : "translate-x-full",
              ].join(" ")}
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className={[
                        "rounded-md px-4 py-3 text-[18px] font-medium transition-colors",
                        isActive(item.to)
                          ? "text-[#FFA62B] bg-[#FFA62B]/10"
                          : "text-[#3B3B3B] hover:text-[#FFA62B] hover:bg-black/5",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-3 flex flex-col gap-3">
                  <Button
                    variant="login"
                    onClick={() => {
                      closeMenu();
                      setIsLoginOpen(true);
                    }}
                  >
                    Login
                  </Button>

                  <Button
                    variant="signup"
                    onClick={() => {
                      closeMenu();
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </aside>
          </>
        )}
      </nav>
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Header;
