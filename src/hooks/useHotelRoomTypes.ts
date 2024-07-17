import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { VisitGoa } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";

interface HotelId {
  hotelId: string;
}

const useHotelRoomTypes = ({ hotelId }: HotelId) => {
  // states for loader and to capture the data from api response
  const [invLoading, setInvLoading] = useState<boolean>(false);
  const [roomTypeInventory, setRoomTypeInventory] = useState<any>([]);
  // get url parmas
  const searchParams = useSearchParams();

  //   get the checkin and checkout date from the url params
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  //   api call to get the room type wise inventory
  const fetchRoomTypesInventory = useCallback(async () => {
    if (!checkin || !checkout) return;

    setInvLoading(true);
    try {
      const inventoryResponse = await VisitGoa.get(
        `${apiEndpoints.GET.availability}?hotel_id=${hotelId}&checkin_date=${checkin}&checkout_date=${checkout}`
      );
      if (inventoryResponse?.data?.status === 1) {
        setRoomTypeInventory(inventoryResponse?.data?.data);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch the room types and inventory!");
    } finally {
      setInvLoading(false);
    }
  }, [checkin, checkout]);

  return { invLoading, roomTypeInventory, fetchRoomTypesInventory };
};

export default useHotelRoomTypes;
