import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiMapPinLine } from "@remixicon/react";
import Image from "next/image";
import { RiShiningFill } from "@remixicon/react";
import { Button } from "../ui/button";

const HotelListingDetails = () => {
  return (
    <div className="my-12">
      <div className="flex items-center justify-between mt-14">
        <div className="text-sm font-semibold text-[#656565]">
          24 for hotel found
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Sort by:</SelectLabel> */}
                <SelectItem value="1">Best Match</SelectItem>
                <SelectItem value="2">Price: Low to High</SelectItem>
                <SelectItem value="3">Price: High to Low</SelectItem>
                <SelectItem value="4">Rating: Low to High</SelectItem>
                <SelectItem value="5">Rating: High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-3 bg-white rounded-xl mt-6 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex-grow-1 flex-shrink basis-96">
            <div className="relative w-full h-64 rounded-xl">
              <Image
                src="/hotel_listing_image.png"
                alt="Hotel Beauty Place"
                fill
                className="object-cover rounded-xl"
                sizes="auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-grow-2 flex-shrink basis-full p-4">
            <div className="flex flex-col h-56 justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">
                    Hotel Beauty Palace
                  </div>
                  <div className="flex items-center text-base font-normal text-[#858585]">
                    <RiMapPinLine size={18} className="text-[#FF6535] me-1" />
                    Salt lake, sector 5, newtown, kolkata
                  </div>
                </div>

                <div className="flex items-end flex-col justify-end">
                  <div className="flex items-center justify-center text-base font-semibold">
                    4 <RiShiningFill size={16} className="ms-1" />
                  </div>
                  <div className="text-sm font-medium text-[#858585]">
                    (85 reviews)
                  </div>
                </div>
              </div>

              <div className="text-xs font-normal text-[#858585]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ultricies risus ac tortor mollis cursus. In hac
                habitasse platea dictumst. Nulla ornare, enim in accumsan
                euismod, arcu ipsum pulvinar magna, nec elementum purus massa id
                diam. Maecenas non nulla gravida tellus pretium gravida ut sed
                enim. Aenean more
              </div>

              <div className="flex items-end flex-col">
                <div className="text-sm font-semibold text-[#FF5353]">
                  Hurry !
                </div>
                <div className="text-xs font-normal text-[#FF5353]">
                  5 rooms left
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#858585]">
                    Price starting from
                  </div>
                  <div className="flex items-center text-2xl font-semibold text-[#18941D]">
                    ₹2400
                    <span className="text-sm font-medium text-[#858585]">
                      / per night
                    </span>
                  </div>
                </div>
                <div>
                  <Button size="lg" className="bg-[#FF6535]">
                    Select Room
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelListingDetails;
