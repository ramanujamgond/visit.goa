import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiBardFill } from "@remixicon/react";
import React from "react";

const ListingHeroSection = () => {
  return (
    <div className="flex items-center gap-4 my-32">
      <div className="flex-shrink-1 flex-grow-1 basis-1/2">
        <div className="container">
          <div className="w-[460px] mx-auto">
            <div className="text-[54px] font-bold text-[#323232]">
              Welcome to <span className="text-[#685CF1]">VisitGoa</span> - The{" "}
              <span className="text-[#685CF1]">Zer0</span> Commission OTA
            </div>

            <div className="text-2xl font-bold my-2">
              List your <span className="text-[#685CF1]">Apartment</span> with{" "}
              <span className="text-[#685CF1]">VisitGoa</span>
            </div>

            <div className="text-base font-normal text-[#7A7A7A] my-2">
              Discover a new way to maximize your hotel's revenue and reach.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-1 flex-grow-1 basis-1/2">
        <div className="w-full rounded-tl-3xl rounded-bl-3xl bg-[linear-gradient(90deg,_#FC7D54_0%,_#F1341A_100%)] p-16">
          <div className="text-2xl font-semibold text-white">
            Earn more with consistent bookings
          </div>
          <div className="flex item-center text-base text-white my-6">
            <RiBardFill className="me-2" /> 45% of partners get their first
            booking within a week
          </div>
          <div className="flex item-center text-base text-white my-6">
            <RiBardFill className="me-2" /> More than 1.1 billion vacation
            rental guests since 2010
          </div>
          <div className="flex item-center text-base text-white my-6">
            <RiBardFill className="me-2" /> Full control over your property and
            finances
          </div>
          <div className="flex item-center text-base text-white my-6">
            <RiBardFill className="me-2" /> Registration is free and takes 15
            minutes
          </div>

          <Button className="bg-white text-[#685CF1] my-6">
            Get Stared Now
          </Button>

          <Separator />

          <div className="text-base text-white mt-6">
            <span className="underline">Continue registration</span> if already
            started
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHeroSection;
