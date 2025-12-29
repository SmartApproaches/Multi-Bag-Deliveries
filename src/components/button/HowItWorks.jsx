import Button from "../../components/button";
import { IMAGES } from "../../constants";

function HowItWorks() {
  return (
    <div className="flex flex-wrap justify-center min-w-[280px]">
      <div className="bg-gradient-to-r from-[#E6ECE8] to-[#E6ECE800] px-6 py-6 mt-7 mb-7">
        <h2 className="font-semibold text-[#001A0A] text-[30px] font-[600] pb-[10px]">
          How It Works
        </h2>
        <p className="text-[#3B3B3B] text-[15px] font-[400] pb-[30px]">
          Sending a parcel with MBD is simple and stress-free.
        </p>

        <div className="max-w-[463px] p-3">
          <div className="flex gap-3">
            <div>
              <span className="rounded-full px-4 py-2 bg-[#00401A] text-white font-semibold">
                1
              </span>
              <img
                src={IMAGES.line}
                alt="line"
                className="pt-[13px] pb-[13px] pl-[18px]"
              />
            </div>
            <div>
              <h4 className="text-[#3B3B3B] font-[20px] font-[600] pb-[5px]">
                Book Your Delivery
              </h4>
              <p className="text-[#3B3B3B] text-[15px] pb-[15px]">
                Fill in the delivery details and choose your preferred service.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <span className="rounded-full  px-[14px] py-2 bg-[#00401A] text-white font-semibold">
                2
              </span>
              <img
                src={IMAGES.line}
                alt="line"
                className="pt-[13px] pb-[13px] pl-[18px]"
              />
            </div>
            <div>
              <h4 className="text-[#3B3B3B] font-[20px] font-[600] pb-[5px]">
                Pay Securely Online
              </h4>
              <p className="text-[#3B3B3B] text-[15px] pb-[15px]">
                Make payments through our safe and easy payment gateway.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <span className="rounded-full px-[14px] py-2 bg-[#00401A] text-white font-semibold">
                3
              </span>
            </div>
            <div>
              <h4 className="text-[#3B3B3B] font-[20px] font-[600] pb-[5px]">
                Track Your Parcel
              </h4>
              <p className="text-[#3B3B3B] text-[15px] pb-[25px]">
                Get real-time updates from pick-up to final delivery.
              </p>
            </div>
          </div>
        </div>
        <Button variant="primary">Get Started</Button>
      </div>

      <div>
        <img
          src={IMAGES.how_it_works_img}
          alt="how_it_works_img"
          className="max-h-[615px]"
        />
      </div>
    </div>
  );
}

export default HowItWorks;
