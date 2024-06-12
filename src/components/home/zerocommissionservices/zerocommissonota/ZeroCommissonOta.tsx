import {
  RiHandCoinFill,
  RiMedal2Line,
  RiPlaneFill,
  RiPriceTag2Fill,
} from "@remixicon/react";

const ZeroCommissonOta = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-32">
      <div className="text-4xl font-bold text-center">
        <span className="text-[#FF6535]">Zero</span> Commission OTA – Better
        Value for Guests!
      </div>

      <div className="text-base font-normal text-center my-14">
        Discover the benefits of booking through our Zero Commission OTA and
        enjoy a superior travel experience
      </div>

      <div className="flex items-center justify-between w-3/4 mb-14">
        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center justify-center w-[62px] h-[62px] rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <RiHandCoinFill size={30} className="text-[#FF6535]" />
          </div>
          <div className="text-lg font-bold mt-4">Lower Prices</div>
        </div>

        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center justify-center w-[62px] h-[62px] rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <RiPriceTag2Fill size={30} className="text-[#FF6535]" />
          </div>
          <div className="text-lg font-bold mt-4">Transparent Pricing</div>
        </div>

        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center justify-center w-[62px] h-[62px] rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <RiPlaneFill size={30} className="text-[#FF6535]" />
          </div>
          <div className="text-lg font-bold mt-4">Unique Packages</div>
        </div>

        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center justify-center w-[62px] h-[62px] rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <RiMedal2Line size={30} className="text-[#FF6535]" />
          </div>
          <div className="text-lg font-bold mt-4">Better Deals</div>
        </div>
      </div>
    </div>
  );
};
export default ZeroCommissonOta;
