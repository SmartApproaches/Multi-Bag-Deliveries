import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import background from "../../assets/background.svg"; // used for hero background

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <main
        className="min-h-[calc(100vh-83px)] bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-16 sm:pt-20 lg:pt-28 pb-10">
            <div className="max-w-2xl text-white">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Your Delivery <br />
                Partner for <span className="text-[#FFA62B]">Fast and</span> <br />
                <span className="text-[#FFA62B]">Reliable</span> Service
              </h1>

              <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed">
                From small packages to bulk deliveries, we handle your parcels
                with care and ensure they reach their destination on time.
              </p>

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
      </main>
    </div>
  );
}

export default Home;
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
      </main>
      <Footer />
    </div>
  );
}

export default Home;
