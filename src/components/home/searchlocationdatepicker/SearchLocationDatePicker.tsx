import { Button } from "@/components/ui/button";
import HrLineSearch from "@/components/ui/hrlinesearch";

import SearchLocationInput from "./SearchLocationInput";
import DateRangePicker from "./DateRangePicker";
import AddGuest from "./AddGuest";

const SearchLocationDatePicker = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-[-8%] w-full p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[1000]">
        <div className="flex items-center">
          <div className="flex-grow flex-shrink basis-0">
            <div className="text-sm font-medium text-[#858585]">Where ?</div>
            <SearchLocationInput />
          </div>
          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-96">
            <DateRangePicker />
          </div>

          <HrLineSearch />
          <div className="flex-grow-2 flex-shrink basis-32">
            <div className="w-32 cursor-pointer">
              <AddGuest />
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
