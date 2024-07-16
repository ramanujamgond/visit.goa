import Image from "next/image";

const OtherServices = () => {
  return (
    <div className="container py-8">
      <div className="text-4xl font-bold text-center mt-8">
        We also provide a wide range of{" "}
        <span className="text-[#FF6535]">Services</span>
      </div>

      <div className="grid grid-cols-[repeat(3,_1fr)] gap-4 my-10">
        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/lotalty_rewards.png"}
              alt="Loyalty and rewards programs"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">
            Loyalty & Rewards Program
          </div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/finance_support.png"}
              alt="Finance Support"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">Finance Support</div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/analytical_reports.png"}
              alt="Analytical Report"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">Analytical Report</div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(3,_1fr)] gap-4 my-10">
        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/express_checkin_2.png"}
              alt="Express Checkin"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">Express Checkin</div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/pest_control.png"}
              alt="Pest Control"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">Pest Control</div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="w-[120px] h-[121px] relative">
            <Image
              src={"/energy_management.png"}
              alt="Energy Management"
              priority
              fill
              className="object-contain p-2"
              sizes="auto"
            />
          </div>
          <div className="text-2xl font-bold my-2">Energy Management</div>
          <div className="text-xs font-normal text-[#858585]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
