import { RiGroupLine } from "@remixicon/react";
import { Button } from "../../ui/button";

import ImageModal from "./ImageModal";
import { useState } from "react";
import RoomMealPlanModal from "./RoomMealPlanModal";
import { LocalDetailsProps } from "@/hooks/useLocalDetails";

interface RoomAmenities {
  amenity_id: number;
  amenity_name: string;
}
export interface HotelRoomTypeProps {
  room_type: string;
  room_type_id: number;
  base_adult: number;
  base_child: number;
  extra_adult: number;
  extra_child: number;
  max_occupancy: number;
  description: string;
  room_size_value: string;
  room_size_unit: string;
  image: string;
  allImages: string[];
  min_inv: number;
  room_amenities: RoomAmenities[];
  rate_plans: RatePlan[];
  inv: Inv[];
}

export interface Inv {
  no_of_rooms: number;
  block_status: number;
  los: number;
  room_type_id: number;
  date: Date;
  day: string;
}

export interface RatePlan {
  rate_plan_id: number;
  plan_type: string;
  plan_name: string;
  bar_price: number;
  price_after_discount: number;
  discount_percentage: number;
  rates: Rate[];
}

export interface Rate {
  block_status: number;
  bar_price: number;
  extra_adult_price: number;
  extra_child_price: number;
  stay_date: Date;
  multiple_occupancy: number[];
  price_after_discount: number;
  discount_percentage: number;
}

interface HotelRoomTypeDetailsPageProp {
  roomTypeInventory: HotelRoomTypeProps[];
  localDetails: LocalDetailsProps;
}

const HotelRoomType = ({
  roomTypeInventory,
  localDetails,
}: HotelRoomTypeDetailsPageProp) => {
  // method and state to toggle the meal plan modal
  const [isMealPlanModalOpen, setIsMealPlanModalOpen] =
    useState<boolean>(false);

  // state to hold room type data
  const [selectedRoomType, setSelectedRoomType] = useState<any>();

  const toggleMealPlanDialog = (roomTypeData: any) => {
    setSelectedRoomType(roomTypeData);
    setIsMealPlanModalOpen((prev) => !prev);
  };

  return (
    <div className="my-3">
      {roomTypeInventory?.map((roomTypeData) => (
        <div
          key={roomTypeData?.room_type_id}
          className="p-3 bg-white rounded-xl mt-6 mb-5 [box-shadow:0px_2px_23.2px_0px_rgba(0,_0,_0,_0.09)]"
        >
          <div className="flex items-start justify-between">
            <div className="flex-grow-1 flex-shrink basis-96">
              <ImageModal
                roomTypeName={roomTypeData?.room_type}
                singleImage={roomTypeData?.image}
                multipleImage={roomTypeData?.allImages}
              />
            </div>
            <div className="flex-grow-2 flex-shrink basis-full">
              <div className="flex flex-col justify-between h-64 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">
                    {roomTypeData?.room_type}
                  </div>
                  {roomTypeData?.rate_plans[0]?.discount_percentage > 0 && (
                    <div className="text-xs font-medium text-white px-1.5 py-1 bg-[#65C411] rounded-md">
                      {roomTypeData?.rate_plans[0]?.discount_percentage}OFF
                    </div>
                  )}
                </div>

                <div
                  className="text-sm font-normal text-[#858585] w-3/4 mt-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      roomTypeData?.description.length > 280
                        ? roomTypeData?.description.slice(0, 280)
                        : roomTypeData?.description,
                  }}
                ></div>

                <div>
                  <div className="flex items-center justify-end text-2xl font-semibold text-right">
                    <span className="text-sm font-medium line-through text-[#595959] me-2">
                      {roomTypeData?.rate_plans[0]?.rates[0]?.bar_price !==
                      roomTypeData?.rate_plans[0]?.rates[0]
                        ?.price_after_discount
                        ? "₹" +
                          roomTypeData?.rate_plans[0]?.rates[0]
                            ?.price_after_discount
                        : ""}
                    </span>{" "}
                    ₹
                    {roomTypeData?.rate_plans[0]?.rates[0]?.bar_price !==
                    roomTypeData?.rate_plans[0]?.rates[0]?.price_after_discount
                      ? roomTypeData?.rate_plans[0]?.rates[0]
                          ?.price_after_discount
                      : roomTypeData?.rate_plans[0]?.rates[0]?.bar_price}
                    /<span className="text-sm font-medium">night</span>
                  </div>

                  <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                      <div className="text-sm font-medium flex items-center me-4">
                        <RiGroupLine
                          size={15}
                          className="text-[#FF6535] me-1"
                        />{" "}
                        {roomTypeData?.base_adult} Adult
                      </div>

                      <div className="text-sm font-medium flex items-center me-4">
                        <RiGroupLine
                          size={15}
                          className="text-[#FF6535] me-1"
                        />{" "}
                        {roomTypeData?.base_child} Child
                      </div>

                      <div className="text-sm font-medium flex items-center me-4">
                        <RiGroupLine
                          size={15}
                          className="text-[#FF6535] me-1"
                        />{" "}
                        {roomTypeData?.room_size_value}{" "}
                        {roomTypeData?.room_size_unit}
                      </div>

                      <div className="text-sm font-medium flex items-center me-4">
                        <RiGroupLine
                          size={15}
                          className="text-[#FF6535] me-1"
                        />{" "}
                        King Size Bed
                      </div>
                    </div>

                    <div className="text-sm font-light text-[#FF6535]">
                      Hurry! only {roomTypeData?.min_inv} rooms left
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2">
                    <div className="flex items-center flex-wrap">
                      {roomTypeData?.room_amenities.length > 0 &&
                        roomTypeData?.room_amenities.map(
                          (amenities, index) =>
                            amenities && (
                              <div
                                key={index}
                                className="w-fit text-xs font-normal text-[#FF6535] px-2 py-1.5 my-2 me-2 bg-[#F3F3F3] rounded-md"
                              >
                                {amenities?.amenity_name}
                              </div>
                            )
                        )}
                    </div>

                    <div>
                      <Button
                        size="lg"
                        className="bg-[#FF6535]"
                        onClick={() => toggleMealPlanDialog(roomTypeData)}
                      >
                        Add Room
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isMealPlanModalOpen && (
        <RoomMealPlanModal
          isOpen={isMealPlanModalOpen}
          toggleDialog={toggleMealPlanDialog}
          roomTypeData={selectedRoomType}
          localDetails={localDetails}
        />
      )}
    </div>
  );
};
export default HotelRoomType;
