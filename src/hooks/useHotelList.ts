import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

interface HotelListProps {
  "hotel_address.city_name": string;
  hotel_name: string;
  hotel_id: number;
  hotel_grade: string;
  ari: Ari;
  exterior_images: string[];
  interior_images: string[];
  status: number;
  location: string;
}

interface Ari {
  rooms: number;
  min: number;
}

const useHotelList = () => {
  const [loading, setLoading] = useState(false);
  const [noMoreResult, setNoMoreResult] = useState(false);
  const [hotelList, setHotelList] = useState<HotelListProps[]>([]);
  const [offset, setOffset] = useState(0);

  const searchParams = useSearchParams();
  const place = searchParams.get("place");
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  const adults = searchParams.get("adults");
  const childs = searchParams.get("childs");

  const userId = "GUEST";
  const LIMIT = 10;
  const showOnlyAvailableHotel = 0;

  // Reset offset to 0 whenever place changes
  useEffect(() => {
    setOffset(0);
    setHotelList([]);
  }, [place]);

  const fetchHotelList = useCallback(async () => {
    if (!place || !checkin || !checkout || !adults || !childs) return;

    setLoading(true);
    try {
      const payload = {
        user_id: userId,
        q: place,
        limit: LIMIT,
        offset: offset,
        from_date: checkin,
        to_date: checkout,
        check_avi: showOnlyAvailableHotel,
      };

      const hotelListResponse = await bharatStay.post(
        apiEndpoints.POST.search,
        payload,
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );

      if (hotelListResponse.data.hits.length === 0) {
        setNoMoreResult(true);
      } else {
        setHotelList((prevList) => [
          ...prevList,
          ...hotelListResponse.data.hits,
        ]);
        setOffset((prevOffset) => prevOffset + LIMIT);
      }
    } catch (error) {
      console.error("Failed to fetch the city or hotel list!", error);
    } finally {
      setLoading(false);
    }
  }, [place, checkin, checkout, offset]);

  return {
    loading,
    noMoreResult,
    place,
    checkin,
    checkout,
    adults,
    childs,
    hotelList,
    fetchHotelList,
  };
};

export default useHotelList;
