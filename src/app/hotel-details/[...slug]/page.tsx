"use client";
import HotelAboutUsSection from "@/components/hoteldetails/HotelAboutUsSection";
import HotelDetailSlider from "@/components/hoteldetails/HotelDetailSlider";
import HotelMapPolicyDetails from "@/components/hoteldetails/HotelMapPolicyDetails";
import HotelRoomType from "@/components/hoteldetails/HotelRoomType";
import Loader from "@/components/ui/loader";
import useHotelDetails from "@/hooks/useHotelDetails";
import { formatString } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Params {
  slug: string;
}

interface HotelDetailsProps {
  params: Params;
}

const HotelDetailsPage: React.FC<HotelDetailsProps> = ({ params }) => {
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

  useEffect(() => {
    fetchHotelDetails();
  }, []);

  // standard loader
  if (loading) {
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

            <HotelRoomType />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
