"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HotelAboutUsSection from "@/components/hoteldetails/hotelaboutsection/HotelAboutUsSection";
import HotelDetailSlider from "@/components/hoteldetails/hoteldetailslider/HotelDetailSlider";
import HotelMapPolicyDetails from "@/components/hoteldetails/hotelmappolicydetails/HotelMapPolicyDetails";
import HotelRoomType from "@/components/hoteldetails/hotelroomtype/HotelRoomType";
import RoomCart from "@/components/hoteldetails/roomcart/RoomCart";
import Loader from "@/components/ui/loader";
import useHotelDetails from "@/hooks/useHotelDetails";
import useHotelRoomTypes from "@/hooks/useHotelRoomTypes";
import { formatString } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { showCart } from "@/redux/reducers/cartslice";
import { RootState } from "@/redux/store";

interface Params {
  slug: string;
}

interface HotelDetailsProps {
  params: Params;
}

const HotelDetailsPage: React.FC<HotelDetailsProps> = ({ params }) => {
  // access cart status from store
  const { cartVisibleState } = useSelector((state: RootState) => state.cart);

  // next 14 router
  const router = useRouter();

  // get the url params
  const urlParms = params;

  // extract data from the slug object of url params
  const hotelId = urlParms.slug[0];
  const hotelName = urlParms.slug[1];

  // call a utility method to fromat the string in proper readable format
  const formatedHotelName = formatString(hotelName);

  // go back[go back in the browser stack]
  const navigateBack = () => {
    router.back();
  };

  const { loading, hotelDetails, fetchHotelDetails } = useHotelDetails({
    hotelId,
  });

  const { invLoading, roomTypeInventory, fetchRoomTypesInventory } =
    useHotelRoomTypes({
      hotelId,
    });

  useEffect(() => {
    fetchHotelDetails();
  }, []);

  useEffect(() => {
    fetchRoomTypesInventory();
  }, []);

  // standard loader
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
              <span className="font-bold text-[#141414]">
                {formatedHotelName}
              </span>
            </div>
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
                hotel_policy={hotelDetails?.policies?.hotel_policy}
                child_policy={hotelDetails?.policies?.child_policy}
                cancellation_policy={hotelDetails?.policies?.cancel_policy}
                latitude={hotelDetails?.latitude}
                longitude={hotelDetails?.longitude}
                city_name={hotelDetails.city_name}
                address={hotelDetails.address}
              />
            )}
            {cartVisibleState && <RoomCart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
