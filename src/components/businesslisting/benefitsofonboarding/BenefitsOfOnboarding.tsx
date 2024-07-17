import { Button } from "@/components/ui/button";
import { RiArrowUpFill } from "@remixicon/react";
import React from "react";

const BenefitsOfOnboarding = () => {
  return (
    <div className="container py-8">
      <div className="text-xl font-bold text-[#685CF1] text-center mb-8">
        Benefits of onboarding with us
      </div>

      <div className="grid grid-cols-[repeat(4,_1fr)] gap-4">
        <div className="bg-arrowUpbgPattern bg-no-repeat bg-center bg-contain p-4">
          <div className="text-3xl font-bold flex items-center">
            5% <RiArrowUpFill className="text-green-600" size={40} />
          </div>
          <div className="text-sm font-bold my-1">Occupancy Rate Increase:</div>
          <div className="text-sm font-normal text-[#858585] mt-4">
            By offering a OTA, small hotels can attract more guests, leading to
            a 5% increase in occupancy rate.
          </div>
        </div>

        <div className="bg-arrowUpbgPattern bg-no-repeat bg-center bg-contain p-4">
          <div className="text-3xl font-bold flex items-center">
            10% <RiArrowUpFill className="text-green-600" size={40} />
          </div>
          <div className="text-sm font-bold my-1">
            Average Daily Rate (ADR) Increase:
          </div>
          <div className="text-sm font-normal text-[#858585] mt-4">
            With a OTA, small hotels can increase their ADR by 10%, resulting in
            higher revenue per room.
          </div>
        </div>

        <div className="bg-arrowUpbgPattern bg-no-repeat bg-center bg-contain p-4">
          <div className="text-3xl font-bold flex items-center">
            12% <RiArrowUpFill className="text-green-600" size={40} />
          </div>
          <div className="text-sm font-bold my-1">
            Revenue per Available Room (RevPAR) Increase
          </div>
          <div className="text-sm font-normal text-[#858585] mt-4">
            The combination of increased occupancy and ADR leads to a 12.5%
            increase in RevPAR.
          </div>
        </div>

        <div className="bg-arrowUpbgPattern bg-no-repeat bg-center bg-contain p-4">
          <div className="text-3xl font-bold flex items-center">
            20% <RiArrowUpFill className="text-green-600" size={40} />
          </div>
          <div className="text-sm font-bold my-1">
            Bookings per Month Increase:
          </div>
          <div className="text-sm font-normal text-[#858585] mt-4">
            By offering a OTA, small hotels can expect a 20% increase in
            bookings per month.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <Button size="lg" className="bg-[#685CF1]">
          Join VisitGoa
        </Button>
      </div>
    </div>
  );
};

export default BenefitsOfOnboarding;
