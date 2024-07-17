import { Button } from "@/components/ui/button";
import Image from "next/image";

const OffersList = () => {
  return (
    <div className="bg-[#E3E2E2]">
      <div className="container">
        <div className="py-8">
          <div className="text-xl font-bold mb-6">Offers For you</div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-1 flex-grow-1 basis-5/12">
              <div className="p-2 bg-white rounded-xl">
                <div className="flex gap-4">
                  <div className="w-80 h-52 relative rounded-xl">
                    <Image
                      src="/offer_1.png"
                      alt="Offers 1"
                      fill
                      className="rounded-xl object-cover"
                      sizes="auto"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-2">
                    <div className="text-[44px] text-[#685CF1] font-extrabold text-center">
                      20% OFF
                    </div>

                    <div className="text-sm text-[#858585] font-normal text-center my-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eleifend molestie metus
                    </div>

                    <Button className="bg-[#685CF1] w-full">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-1 flex-grow-2 basis-7/12">
              <div className="bg-white rounded-xl">
                <div className="flex">
                  <div className="w-full h-52 relative rounded-xl">
                    <Image
                      src="/offer_2.png"
                      alt="Offers 2"
                      fill
                      className="rounded-xl object-fill"
                      sizes="auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-1 flex-grow-1 basis-5/12 order-2">
              <div className="p-2 bg-white rounded-xl">
                <div className="flex gap-4">
                  <div className="w-80 h-52 relative rounded-xl">
                    <Image
                      src="/offer_4.png"
                      alt="Offers 4"
                      fill
                      className="rounded-xl object-cover"
                      sizes="auto"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-2">
                    <div className="text-[44px] text-[#5D5FEF] font-extrabold text-center">
                      20% OFF
                    </div>

                    <div className="text-sm text-[#858585] font-normal text-center my-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eleifend molestie metus
                    </div>

                    <Button className="bg-[#5D5FEF] w-full">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-1 flex-grow-2 basis-7/12">
              <div className="bg-white rounded-xl">
                <div className="flex">
                  <div className="w-full h-52 relative rounded-xl">
                    <Image
                      src="/offer_3.png"
                      alt="Offers 3"
                      fill
                      className="rounded-xl object-fill"
                      sizes="auto"
                      loading="lazy"
                    />
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
export default OffersList;
