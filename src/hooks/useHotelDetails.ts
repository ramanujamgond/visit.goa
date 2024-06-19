import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface HotelId {
  hotelId: string;
}

interface UseHotelDetailsProps {
  hotel_policy: string;
  child_policy: string;
  cancel_policy: string;
  terms_and_cond: string;
  hotel_id: number;
  hotel_name: string;
  hotel_description: string;
  address: string;
  pin: string;
  latitude: string;
  longitude: string;
  facility: string[];
  be_url: string;
  api_key: string;
  star: number;
  city_name: string;
  starting_price: number;
  rooms_available: number;
  image: string;
  exterior_images: string[];
  checkin_time: string;
  checkout_time: string;
}

const useHotelDetails = ({ hotelId }: HotelId) => {
  // states
  const [loading, setLoading] = useState<boolean>(false);
  const [hotelDetails, setHotelDetils] = useState<UseHotelDetailsProps>();

  // get the parms from url
  const searchParams = useSearchParams();

  // get url parmas
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  //   const adults = searchParams.get("adults");
  //   const childs = searchParams.get("childs");

  // set static values for userId, LIMIT ans showOnlyAvailableHotel
  const userId = "GUEST";

  const fetchHotelDetails = async () => {
    if (!checkin || !checkout) return;
    setLoading(true);

    try {
      const hotelDetailsResponst = await bharatStay.get(
        `${apiEndpoints.get.hotel_details}?hotel_id=${hotelId}&user_id=${userId}&checkin_date=${checkin}&checkout_date=${checkout}`
      );
      if (hotelDetailsResponst?.data?.status === 1) {
        setHotelDetils(hotelDetailsResponst?.data?.hotel_data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch the hotel details!");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    hotelDetails,
    fetchHotelDetails,
  };
};

export default useHotelDetails;
