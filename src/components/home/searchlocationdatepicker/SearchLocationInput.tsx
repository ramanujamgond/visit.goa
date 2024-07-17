import { RiCloseCircleFill, RiHotelLine } from "@remixicon/react";
import { Input } from "@/components/ui/input";

import useCityHotelList from "@/hooks/useCityHotelList";
import { CountryEmoji } from "@/lib/CountryEmoji";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface SearchValueProps {
  value: string;
  hotelId?: number;
}
interface SearchLocationInputProps {
  searchValue: SearchValueProps;
  setSearchValue: (value: SearchValueProps) => void;
}

const SearchLocationInput: React.FC<SearchLocationInputProps> = ({
  searchValue,
  setSearchValue,
}) => {
  // custom hook to fetch the city and hotel list
  const {
    citySearchResult,
    hotelSearchResult,
    resetSearchResults,
    fetchCityHotelList,
  } = useCityHotelList();

  // extract query from the url parameters
  const query = useSearchParams();

  // fetch city and hotel list api call on handle change of the search input
  const handleCityHotelSearch = (value: string) => {
    if (value) {
      fetchCityHotelList(value);
    } else {
      resetSearchResults();
    }
    setSearchValue({ ...searchValue, value: value });
  };

  // set the selcted value in the input and clear the city and hotel list state to hide the dropdown
  const handleSelectedValue = (value: string, hotelId?: number) => {
    setSearchValue({ value: value, hotelId: hotelId });
    resetSearchResults();
  };

  useEffect(() => {
    if (query) {
      const params = Object.fromEntries(query.entries());
      if (params?.place) {
        setSearchValue({ value: params.place });
      }
    }
  }, [query]);

  return (
    <div className="mt-3 z-[1300] w-full relative">
      <Input
        type="text"
        value={searchValue.value}
        className="h-6 text-base font-semibold mt-3 border-0 border-b rounded-none shadow-none text-black focus-visible:ring-0 placeholder:text-sm placeholder:font-normal"
        placeholder="Search for a City or Hotel"
        onChange={(e) => handleCityHotelSearch(e.target.value)}
      />

      {searchValue?.value?.length > 0 && (
        <span
          className="absolute right-0 top-0 text-[#685CF1] cursor-pointer"
          onClick={() => setSearchValue({ value: "" })}
        >
          <RiCloseCircleFill size={20} />
        </span>
      )}

      {(citySearchResult.length > 0 || hotelSearchResult.length > 0) &&
      searchValue.value.length > 0 ? (
        <div className="absolute top-11 left-0 right-0 px-2 bg-white w-full h-auto max-h-64 rounded-xl border overflow-y-scroll [scrollbar-width:none] shadow-md">
          <ul>
            {citySearchResult.map((cityData, index: number) => (
              <li
                key={index}
                className="text-sm font-normal px-2 py-1 my-2 rounded-md cursor-pointer text-black text-left hover:bg-[#f7f7f7]"
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
                onClick={() =>
                  handleSelectedValue(
                    hotelName?.hotel_name,
                    hotelName?.hotel_id
                  )
                }
              >
                <span className="flex items-center gap-1">
                  <RiHotelLine size={16} className="text-[#685CF1]" />
                  <span className="text-sm font-normal text-black">
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
