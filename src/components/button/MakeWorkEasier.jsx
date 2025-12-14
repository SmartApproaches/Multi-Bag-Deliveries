import { IMAGES } from "../../constants";

function MakeWorkEasier() {
  return (
    <div className="p-[30px] items-center min-w-[300px] justify-center">
      <div className="bg-[#E6ECE8] justify-center">
        <h1 className="font-semibold text-[#001A0A] text-4xl font-40px items-center place-self-center pt-[60px] text-center">
          Make your work easier with us
        </h1>

        <div className="flex flex-wrap pl-[25px] pr-[25px] pb-[50px] pt-[50px] items-center gap-[20px] justify-center">
          <div className="border border-[#ACACAC] pt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img1} alt="img1" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-2xl font-semibold text-[#1E1E1E]">
                Your delivery, your way
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>

          <div className="border border-[#ACACAC] mt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img2} alt="img2" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-2xl font-semibold text-[#1E1E1E]">
                Real time tracking
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>

          <div className="border border-[#ACACAC] pt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img3} alt="img3" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-2xl font-semibold text-[#1E1E1E]">
                Bulk deliveries
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>

          <div className="border border-[#ACACAC] pt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img4} alt="img4" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-2xl font-semibold text-[#1E1E1E]">
                Secure packaging
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>

          <div className="border border-[#ACACAC] mt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img5} alt="img5" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-xl text-[22.5px] font-semibold text-[#1E1E1E]">
                Efficient communication
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>

          <div className="border border-[#ACACAC] pt-[20px] p-[20px] pr-[20px] pl-[20px] rounded-[10px] max-w-[325px]">
            <img src={IMAGES.img6} alt="img6" className="size-[40px]" />
            <div className="gap-[16px] pt-[20px]">
              <h2 className="text-2xl font-semibold text-[#1E1E1E]">
                Affordable pricing
              </h2>
              <p className="text-[#3B3B3B] pt-[20px]">
                Gorem ipsum dolor sit amet, cons etet ur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeWorkEasier;
