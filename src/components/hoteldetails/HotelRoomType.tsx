import { RiGroupLine } from "@remixicon/react";
import Image from "next/image";
import { Button } from "../ui/button";

const HotelRoomType = () => {
  return (
    <div className="my-3">
      <div className="p-3 bg-white rounded-xl mt-6 mb-5 [box-shadow:0px_2px_23.2px_0px_rgba(0,_0,_0,_0.09)]">
        <div className="flex items-start justify-between">
          <div className="flex-grow-1 flex-shrink basis-96">
            <div className="relative w-full h-64 rounded-xl">
              <Image
                src="/popular_destinations_1.png"
                alt="Deluxe Room"
                fill
                className="object-cover rounded-xl"
                sizes="auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-grow-2 flex-shrink basis-full">
            <div className="flex flex-col justify-between h-64 p-4">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold">Deluxe Room</div>
                <div className="text-sm font-medium text-white px-1.5 py-1 bg-[#65C411] rounded-md">
                  25% OFF
                </div>
              </div>

              <div className="text-xs font-normal text-[#858585] w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat view more
              </div>

              <div>
                <div className="flex items-center justify-end text-2xl font-semibold text-right">
                  <span className="text-sm font-medium line-through text-[#595959] me-2">
                    ₹2400
                  </span>{" "}
                  ₹2000/
                  <span className="text-sm font-medium">night</span>
                </div>

                <div className="flex items-center justify-between my-1">
                  <div className="flex items-center">
                    <div className="text-sm font-medium flex items-center me-4">
                      <RiGroupLine size={15} className="text-[#FF6535] me-1" />{" "}
                      2 Adult
                    </div>

                    <div className="text-sm font-medium flex items-center me-4">
                      <RiGroupLine size={15} className="text-[#FF6535] me-1" />{" "}
                      1 Child
                    </div>

                    <div className="text-sm font-medium flex items-center me-4">
                      <RiGroupLine size={15} className="text-[#FF6535] me-1" />{" "}
                      33 sq mt
                    </div>

                    <div className="text-sm font-medium flex items-center me-4">
                      <RiGroupLine size={15} className="text-[#FF6535] me-1" />{" "}
                      King Size Bed
                    </div>
                  </div>

                  <div className="text-sm font-light text-[#FF6535]">
                    Hurry! only 2 rooms left
                  </div>
                </div>

                <div className="flex items-center justify-between my-2">
                  <div className="flex items-center flex-wrap">
                    <div className="w-fit text-xs font-normal text-[#FF6535] px-2 py-1.5 my-2 me-2 bg-[#F3F3F3] rounded-md">
                      Free Wifi
                    </div>
                  </div>

                  <div>
                    <Button size="lg" className="bg-[#FF6535]">
                      Add Room
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelRoomType;
