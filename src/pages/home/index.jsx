import Button from "../../components/button";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen items-center w-full rounded-lg bg-[url('./assets/background.svg')] bg-cover bg-no-repeat">
      <Header />

      <div className="max-w-6xl mx-auto mt-[70px] pl-[20px] text-white">
        <h1 className="font-bold text-4xl md:text-[50px] leading-tight max-w-2xl">
          Your Delivery <br /> Partner for{" "}
          <span className="text-[#FFA62B]">Fast and</span> <br />
          <span className="text-[#FFA62B]">Reliable</span> Service
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          From small packages to bulk deliveries, we handle your <br />
          parcels with care and ensure they reach their destination <br />
          on time.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            variant="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Book a Delivery
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/");
            }}
          >
            Track My Parcel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
