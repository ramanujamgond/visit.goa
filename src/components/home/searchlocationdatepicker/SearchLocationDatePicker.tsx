import { Button } from "@/components/ui/button";
import HrLineSearch from "@/components/ui/hrlinesearch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchLocationDatePicker = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-[-8%] w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm font-medium text-[#858585]">Where ?</div>
            <div className="mt-3 z-[1300] w-full">
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none focus:ring-0 shadow-none">
                  <SelectValue placeholder="Search for a City or Hotel" />
                </SelectTrigger>
                <SelectContent className="z-[1300]">
                  <SelectGroup>
                    {/* <SelectLabel>Search City, Hotel</SelectLabel> */}
                    <SelectItem value="1">Bhubaneswar</SelectItem>
                    <SelectItem value="2">Delhi</SelectItem>
                    <SelectItem value="3">Bombay</SelectItem>
                    <SelectItem value="4">Kolkata</SelectItem>
                    <SelectItem value="5">Bangalore</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-96">
            <div className="flex items-center justify-between w-full cursor-pointer">
              <div>
                <div className="text-sm font-medium text-[#858585]">
                  Chcek-in
                </div>
                <div className="text-base font-semibold mt-3">24 May, 24</div>
              </div>
              <div className="text-sm text-center font-semibold p-2 border-2 border-[#E5E5E5] border-solid rounded-3xl w-24">
                1 night
              </div>
              <div>
                <div className="text-sm font-medium text-[#858585]">
                  Check-out
                </div>
                <div className="text-base font-semibold mt-3">25 May, 24</div>
              </div>
            </div>
          </div>
          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-38">
            <div>
              <div className="text-sm font-medium text-[#858585]">Guest</div>
              <div className="text-base font-semibold mt-3">
                2 Adult, 0 Child
              </div>
            </div>
          </div>
          <HrLineSearch />
          <div className="flex-grow flex-shrink basis-0">
            <Button size="lg" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchLocationDatePicker;
