import parcelImage from "../assets/images/parcel.png";

const Parcel = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto md:px-20 px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold md:text-4xl text-gray-900">
              Ready to Send a Parcel?
            </h1>
            <p className="mt-4 text-gray-600 max-w-md">
              {" "}
              Experience seamless parcel deliveries with MBD.
            </p>

            <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-green-800 transition">
              {" "}
              Get Started Now
            </button>

            <div className="mt-8 grid grid-cols-3 gap-3 bg-gray-200 p-3 rounded-lg">
              <div>
                <h3 className="text-xl font-bold">250+</h3>
                <p className="text-gray-700 text-sm mt-2">
                  {" "}
                  Completed Delivery
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">200+</h3>
                <p className="text-gray-700 text-sm mt-2"> Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">7+</h3>
                <p className="text-gray-700 text-sm mt-2"> Years Experience</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center mt-10">
            <img src={parcelImage} alt="Parcel Delivery" className="w-full  " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcel;
