import { useState } from "react";
import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";

// default types
interface CitySearch {
  city_name: string;
  country_emoji: string;
  state_name: string;
}

interface HotelSearch {
  hotel_name: string;
  hotel_id: number;
}

const useCityHotelList = () => {
  const [citySearchResult, setCitySearchResult] = useState<CitySearch[]>([]);
  const [hotelSearchResult, setHotelSearchResult] = useState<HotelSearch[]>([]);

  // method to fetch the city and hotel name
  const fetchCityHotelList = async (searchValue: string) => {
    try {
      const cityList = await bharatStay.get(
        `${apiEndpoints.get.get_cities}?q=${searchValue}`,
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
      if (cityList.data.results.length > 0) {
        setCitySearchResult(cityList.data.results[0].hits);
        setHotelSearchResult(cityList.data.results[1].hits);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch the city or hotel list!");
    }
  };

  const resetSearchResults = () => {
    setCitySearchResult([]);
    setHotelSearchResult([]);
  };

  return {
    citySearchResult,
    hotelSearchResult,
    resetSearchResults,
    fetchCityHotelList,
  };
};

export default useCityHotelList;
