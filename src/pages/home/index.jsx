import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Footer from "../../components/footer/Footer";
import { IMAGES } from "../../constants";
const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-900">
      <img
        src={IMAGES.logo}
        alt="Logo"
        className="absolute top-0 left-0 w-32 h-32"
      />
      <div className="flex-1 max-w-6xl mx-auto px-6 py-20 text-white flex items-center">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight max-w-3xl">
          Your Delivery Partner for{" "}
          <span className="text-[#FFA62B]">Fast and</span>{" "}
          <span className="text-[#FFA62B]">Reliable</span> Service
        </h1>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  onClick={() => navigate("/book-a-delivery")}
                >
                  Book a Delivery
                </Button>

                <Button variant="outline" onClick={() => navigate("/track")}>
                  Track My Parcel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
