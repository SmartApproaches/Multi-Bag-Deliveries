import { IMAGES } from "../../constants";
import Button from "../../components/button";

function DeliveryOptions() {
  return (
    <div className="place-self-center">
      <h1 className="text-[#001A0A] font-[600] text-[40px] text-center pb-[20px] pt-[30px] p-2">Delivery Options Tailored to Your Needs</h1>
      <p className="text-[#3B3B3B] font-[400] text-[18px] text-center pb-[25px] p-2">We offer two delivery options you can choose from</p>

      <div className="flex flex-wrap gap-[50px] pb-[40px] justify-center p-6 min-w-[250px]">

        <div className="shadow-md shadow-[#0013081A] rounded-[4px] p-4">
          <img src={IMAGES.premium_class} alt="premium_class" className="pb-[30px]" />
          <h2 className="font-[600] text-[#1E1E1E] text-[24px] pb-[20px]">Premium Class Delivery</h2>
          <p className="text-[#3B3B3B] text-[18px] font-[400] pb-[30px] max-w-[450px]">
            Need your parcel delivered fast? Our Premium Class Delivery ensures
            same-day delivery for urgent parcels. Ideal for time-sensitive
            items, this service guarantees that your package reaches its
            destination quickly and reliably.
          </p>
          <Button variant="primary">Book now</Button>
        </div>

        <div className="shadow-md shadow-[#0013081A] rounded-[4px] p-6">
          <img src={IMAGES.standard_class} alt="standard_class" className="pb-[30px]" />
          <h2 className="font-[600] text-[#1E1E1E] text-[24px] pb-[20px]">Standard Class Delivery</h2>
          <p className="text-[#3B3B3B] text-[18px] font-[400] pb-[30px] max-w-[450px]">
            For less time-sensitive deliveries, our Standard Class Delivery
            offers an affordable option with parcels delivered within 7 days.
            This service is perfect for regular deliveries that don’t require
            immediate attention.
          </p>
          <Button variant="primary">Book now</Button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions;
