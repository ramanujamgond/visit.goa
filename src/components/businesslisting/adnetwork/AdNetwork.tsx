import { Button } from "@/components/ui/button";
import Image from "next/image";

const AdNetwork = () => {
  return (
    <div className="bg-white">
      <div className="container my-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-1 flex-grow-1 basis-1/3 me-20">
            <div className="w-auto h-[483px] relative">
              <Image
                src={"/ad_network.png"}
                alt="qnity integration image"
                priority
                fill
                className="object-contain rounded-lg"
                sizes="auto"
              />
            </div>
          </div>
          <div className="flex-shrink-1 flex-grow-1 basis-2/3">
            <div className="text-2xl font-bold mb-6">
              Transform Your{" "}
              <span className="text-[#685CF1]">Hotel Marketing</span> with Our
              Revolutionary <span className="text-[#685CF1]">AD Network</span>
            </div>

            <div className="text-sm font-normal text-[#7A7A7A] mb-6 text-justify">
              Our AD Network is a game-changer for hotel marketing. With
              targeted advertising campaigns, you can reach your ideal audience
              and increase bookings.
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-base font-semibold">Increase Bookings</div>

                <div className="text-sm font-normal text-[#7A7A7A] mb-6">
                  Reach your target audience with precision and drive more
                  bookings to your hotel.
                </div>
              </div>

              <div>
                <div className="text-base font-semibold">Maximize Revenue</div>

                <div className="text-sm font-normal text-[#7A7A7A] mb-6">
                  Optimize your marketing budget and generate higher revenue for
                  your hotel business.
                </div>
              </div>
            </div>

            <Button size={"lg"} className="bg-[#685CF1]">
              Join VisitGoa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdNetwork;
