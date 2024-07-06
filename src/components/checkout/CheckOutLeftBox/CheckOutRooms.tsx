import { RiDeleteBinLine } from "@remixicon/react";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { differenceInDays } from "date-fns";
import { updateCartData } from "@/redux/reducers/cartslice";
import { SelectedRoomTypeProps } from "@/components/hoteldetails/hotelroomtype/RoomMealPlanModal";
import { CheckInCheckOutProps } from "@/redux/reducers/cartslice";

interface CheckOutRoomsProps {
  cartData: SelectedRoomTypeProps[];
  checkInCheckOut: CheckInCheckOutProps;
}

const CheckOutRooms: React.FC<CheckOutRoomsProps> = ({
  cartData,
  checkInCheckOut: { checkinDate, checkoutDate },
}) => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // import media base link for image urls
  const imageUrlPath = process.env.NEXT_PUBLIC_MEDIA_URL as string;

  // method to delete the selected room type from the cartData
  const deleteRoomType = (roomTypeId: number) => {
    const removeRoomType = cartData.filter(
      (cartItem) => cartItem.roomTypeId !== roomTypeId
    );

    dispatch(updateCartData(removeRoomType));
  };

  return (
    <div>
      <div className="text-lg font-semibold my-3">
        Price Breakup for{" "}
        {checkinDate &&
          checkoutDate &&
          differenceInDays(checkoutDate, checkinDate)}{" "}
        Nights
      </div>

      {cartData &&
        cartData.map((cartItems, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] p-4 rounded-xl mb-4 shadow-lg"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-24 h-24 relative rounded-sm">
                <Image
                  src={`${imageUrlPath}/${cartItems?.roomTypeImages}`}
                  alt={cartItems?.roomTypeName}
                  priority
                  fill
                  className="object-cover rounded-xl"
                  sizes="auto"
                />
              </div>

              <div>
                <div className="text-base font-semibold mb-2">
                  {cartItems?.roomTypeName} ({cartItems?.ratePlanName}) x
                  {cartItems?.occupancy.length} room{" "}
                </div>
                <div className="text-sm font-semibold">
                  {cartItems?.occupancy.reduce(
                    (acc, item) => (acc += item.adult + item.extra_adult),
                    0
                  )}{" "}
                  Adults,{" "}
                  {cartItems?.occupancy.reduce(
                    (acc, item) => (acc += item.child + item.extra_child),
                    0
                  )}{" "}
                  Child
                </div>
              </div>

              <div className="flex items-end justify-end flex-col ml-auto">
                <div className="text-base font-semibold mb-2">
                  ₹&nbsp;
                  {cartItems?.occupancy.reduce(
                    (acc, occupancyItem) =>
                      occupancyItem.rates.reduce(
                        (acc, rate) => (acc += rate.total_price_excluding_tax),
                        0
                      ) + acc,
                    0
                  )}
                </div>
                <div
                  className="w-[26px] h-[26px] p-1 rounded-md bg-[#934E4E] flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    deleteRoomType(cartItems?.roomTypeId);
                  }}
                >
                  <RiDeleteBinLine size={18} className="text-white" />
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            {cartItems?.occupancy?.map((occupancyItems, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">
                    Room {occupancyItems?.roomNumber}
                  </div>
                  <div className="text-base font-semibold">
                    {occupancyItems?.adult + occupancyItems?.extra_adult} Adult,{" "}
                    {occupancyItems?.child + occupancyItems?.extra_child} Child
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold my-1">Total Price</div>
                  <div className="text-sm font-semibold">
                    ₹&nbsp;
                    {occupancyItems?.rates.reduce(
                      (acc, items) => (acc += items?.total_price_excluding_tax),
                      0
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold my-1">
                    Total Extra Adult
                  </div>
                  <div className="text-sm font-semibold">
                    ₹&nbsp;
                    {occupancyItems?.rates.reduce(
                      (acc, items) => (acc += items?.extra_adult_price),
                      0
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold">Total Extra Child</div>
                  <div className="text-sm font-semibold my-1">
                    ₹&nbsp;
                    {occupancyItems?.rates.reduce(
                      (acc, items) => (acc += items?.extra_child_price),
                      0
                    )}
                  </div>
                </div>
                {index !== cartItems?.occupancy.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
export default CheckOutRooms;
