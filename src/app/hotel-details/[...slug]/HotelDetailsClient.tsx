"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HotelAboutUsSection from "@/components/hoteldetails/hotelaboutsection/HotelAboutUsSection";
import HotelDetailSlider from "@/components/hoteldetails/hoteldetailslider/HotelDetailSlider";
import HotelMapPolicyDetails from "@/components/hoteldetails/hotelmappolicydetails/HotelMapPolicyDetails";
import HotelRoomType from "@/components/hoteldetails/hotelroomtype/HotelRoomType";
import RoomCart from "@/components/hoteldetails/roomcart/RoomCart";
import Loader from "@/components/ui/loader";
import useHotelDetails from "@/hooks/useHotelDetails";
import useHotelRoomTypes from "@/hooks/useHotelRoomTypes";
import { formatString } from "@/lib/utils";

interface HotelDetailsClientProps {
  hotelId: string;
  hotelName: string;
}

const HotelDetailsClient: React.FC<HotelDetailsClientProps> = ({
  hotelId,
  hotelName,
}) => {
  // nextjs 14 routes
  const router = useRouter();

  // go back[go back in the browser stack]
  const navigateBack = () => {
    router.back();
  };

  // fetch hotel details
  const { loading, hotelDetails, fetchHotelDetails } = useHotelDetails({
    hotelId,
  });

  //   fetch roomtype details
  const { invLoading, roomTypeInventory, fetchRoomTypesInventory } =
    useHotelRoomTypes({ hotelId });

  // useEffect to call hotelDetails
  useEffect(() => {
    fetchHotelDetails();
  }, []);

  // useEffect to call roomtype details
  useEffect(() => {
    fetchRoomTypesInventory();
  }, []);

  //   page loader
  if (loading && invLoading) {
    return <Loader />;
  }

  return (
    <div className="my-12 h-full min-h-[90vh]">
      <div className="pt-2">
        <div className="container">
          <div className="flex items-center justify-between mt-14">
            <div className="text-base font-normal text-[#656565]">
              <span
                className="hover:text-[#FF6535] cursor-pointer"
                onClick={navigateBack}
              >
                Book Now
              </span>{" "}
              {"> "}
              <span className="font-bold text-[#141414]">{hotelName}</span>
            </div>
            <div></div>
          </div>
          <div className="mt-5 mb-5">
            {hotelDetails && (
              <HotelDetailSlider
                exterior_images={hotelDetails?.exterior_images}
              />
            )}
            {hotelDetails && (
              <HotelAboutUsSection
                hotel_name={hotelDetails.hotel_name}
                city_name={hotelDetails.city_name}
                address={hotelDetails.address}
                hotel_description={hotelDetails.hotel_description}
                facility={hotelDetails.facility}
                star={hotelDetails.star}
              />
            )}
            {roomTypeInventory.length > 0 && (
              <HotelRoomType roomTypeInventory={roomTypeInventory} />
            )}
            {hotelDetails && (
              <HotelMapPolicyDetails
                hotel_policy={hotelDetails?.hotel_policy}
                child_policy={hotelDetails?.child_policy}
                cancellation_policy={hotelDetails?.cancel_policy}
                latitude={hotelDetails?.latitude}
                longitude={hotelDetails?.longitude}
                city_name={hotelDetails.city_name}
                address={hotelDetails.address}
              />
            )}
            <RoomCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsClient;
