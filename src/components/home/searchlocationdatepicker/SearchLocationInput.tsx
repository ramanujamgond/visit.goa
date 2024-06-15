"use client";

import { useState } from "react";
import { RiCloseCircleFill, RiHotelLine } from "@remixicon/react";
import { Input } from "@/components/ui/input";

import useCityHotelList from "@/hooks/useCityHotelList";
import { CountryEmoji } from "@/lib/CountryEmoji";

const SearchLocationInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const {
    citySearchResult,
    hotelSearchResult,
    resetSearchResults,
    fetchCityHotelList,
  } = useCityHotelList();

  const handleCityHotelSearch = (value: string) => {
    if (value) {
      fetchCityHotelList(value);
    } else {
      resetSearchResults();
    }
    setSearchValue(value);
  };

  const handleSelectedValue = (value: string) => {
    setSearchValue(value);
    resetSearchResults();
  };

  return (
    <div className="mt-3 z-[1300] w-full relative">
      <Input
        type="text"
        value={searchValue}
        className="h-6 text-base font-semibold mt-3 border-0 border-b rounded-none shadow-none focus-visible:ring-0 placeholder:text-sm placeholder:font-normal"
        placeholder="Search for a City or Hotel"
        onChange={(e) => handleCityHotelSearch(e.target.value)}
      />

      {searchValue.length > 0 && (
        <span
          className="absolute right-0 top-0 text-[#ff6535] cursor-pointer"
          onClick={() => setSearchValue("")}
        >
          <RiCloseCircleFill size={20} />
        </span>
      )}

      {(citySearchResult.length > 0 || hotelSearchResult.length > 0) &&
      searchValue.length > 0 ? (
        <div className="absolute top-11 left-0 right-0 px-2 bg-white w-full h-auto max-h-64 rounded-xl border overflow-y-scroll [scrollbar-width:none] shadow-md">
          <ul>
            {citySearchResult.map((cityData, index: number) => (
              <li
                key={index}
                className="text-sm font-normal px-2 py-1 my-2 rounded-md cursor-pointer hover:bg-[#f7f7f7]"
                onClick={() => handleSelectedValue(cityData?.city_name)}
              >
                {cityData?.city_name}
                <span className="flex items-center gap-1 text-xs font-normal">
                  {cityData?.country_emoji && (
                    <CountryEmoji code={cityData?.country_emoji} />
                  )}
                  {cityData?.state_name}
                </span>
              </li>
            ))}
          </ul>

          <ul>
            {hotelSearchResult.map((hotelName, index: number) => (
              <li
                key={index}
                className="text-sm font-normal px-2 py-1 my-2 rounded-md cursor-pointer hover:bg-[#f7f7f7]"
                onClick={() => handleSelectedValue(hotelName?.hotel_name)}
              >
                <span className="flex items-center gap-1">
                  <RiHotelLine size={16} className="text-[#ff6535]" />
                  <span className="text-sm font-normal">
                    {hotelName?.hotel_name}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default SearchLocationInput;
