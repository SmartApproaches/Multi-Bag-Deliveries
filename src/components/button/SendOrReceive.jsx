import Button from ".";
import { IMAGES } from "../../constants";
import { useNavigate } from "react-router-dom";

function SendOrReceive() {
  return (
    <div className="flex gap-[50px] flex-wrap pt-[60px] flex-row-reverse justify-center">
      <div className="gap-[60px] pt-[60px] max-w-[450px]">
        <h2 className="text-4xl text-[#001A0A] font-semibold pb-[30px]">
          Delivering Convenience with Every Parcel
        </h2>
        <p className="text-[#3B3B3B] text-[15px]  pb-[60px]">
          At Multi-Bag Deliveries (MBD), we make sending and receiving packages
          easy and affordable across Ghana. From food to clothes, drugs to
          gadgets, we’ve got you covered. Simply place your order, and MBD will
          deliver swiftly and securely.
        </p>
        <Button variant="primary">Send or Receive a Package</Button>
      </div>
      <div className="flex flex-col">
        <img
          src={IMAGES.SendOrReceive}
          alt="SendOrReceive"
          className="min-w-[300px]"
        />

        <div className="bg-[#FFFFFF] flex flex-wrap gap-[20px] relative bottom-10 p-4 rounded mx-[30px] left-14 shadow-md shadow-[#0013081A] justify-center ">
          <div className="gap-[10px] text-[#00401A] text-[14px] pt-[2px] font-[500]">
            <img src={IMAGES.fast_delivery} alt="fast_delivery"/>
            Fast delivery
          </div>

          <img src={IMAGES.line} alt="line" />

          <div className="gap-[10px] text-[#00401A] text-[14px] font-[500]">
            <img src={IMAGES.real_time} alt="real_time"/>
            Real time tracking
          </div>

          <img src={IMAGES.line} alt="line" />

          <div className="gap-[10px] text-[#00401A] text-[14px] pt-[4px] md:items-center font-[500]">
            <img src={IMAGES.convenient} alt="convenient"/>
            Convenient order
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOrReceive;
