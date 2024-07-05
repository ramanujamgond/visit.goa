import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RiDeleteBinLine, RiMoonLine } from "@remixicon/react";
import Image from "next/image";
import { SelectedRoomTypeProps } from "../hotelroomtype/RoomMealPlanModal";
import { useSearchParams } from "next/navigation";
import { format, differenceInDays } from "date-fns";
import { useDispatch } from "react-redux";
import { updateCartData } from "@/redux/reducers/cartslice";
interface RoomTypeCartDetailsProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
  cartData: SelectedRoomTypeProps[];
}

const RoomTypeCartDetails: React.FC<RoomTypeCartDetailsProps> = ({
  isOpen,
  toggleModal,
  cartData,
}) => {
  console.log("cartData", cartData);

  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // get the query parms
  const searchParams = useSearchParams();

  // get the checkin and checkout dates
  const checkInDate = searchParams.get("checkin");
  const checkOutDate = searchParams.get("checkout");

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
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <div className="relative w-full h-64 rounded-xl cursor-pointer">
        <DialogTrigger asChild></DialogTrigger>
      </div>

      <DialogContent className="w-full max-w-[480px] z-[2000]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Check In</div>
            <div className="text-xl font-semibold">
              {checkInDate && format(checkInDate, "dd MMM, yyyy")}
            </div>
          </div>

          <div className="w-28 flex items-center justify-between text-lg font-bold px-3 py-2  text-white bg-[#FF6535] rounded-3xl">
            <RiMoonLine size={18} />
            {checkInDate &&
              checkOutDate &&
              differenceInDays(checkOutDate, checkInDate)}
          </div>

          <div>
            <div className="text-lg font-semibold">Check Out</div>
            <div className="text-xl font-semibold">
              {checkOutDate && format(checkOutDate, "dd MMM, yyyy")}
            </div>
          </div>
        </div>

        <Separator />

        <div className="text-lg font-semibold">
          Price Breakup for{" "}
          {checkInDate &&
            checkOutDate &&
            differenceInDays(checkOutDate, checkInDate)}{" "}
          Nights
        </div>

        <div className="max-h-[450px] overflow-y-scroll  [scrollbar-width:thin]">
          {cartData &&
            cartData.map((cartItems) => (
              <div
                className="bg-[#F4F4F4] p-4 rounded-lg mb-4"
                key={cartItems?.roomTypeId}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-24 h-24 min-w-24 relative rounded-sm">
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
                            (acc, rate) =>
                              (acc += rate.total_price_excluding_tax),
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
                        {occupancyItems?.adult + occupancyItems?.extra_adult}{" "}
                        Adult,{" "}
                        {occupancyItems?.child + occupancyItems?.extra_child}{" "}
                        Child
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[#595959]">
                      <div className="text-sm font-semibold my-1">
                        Total Price
                      </div>
                      <div className="text-sm font-semibold">
                        ₹&nbsp;
                        {occupancyItems?.rates.reduce(
                          (acc, items) =>
                            (acc += items?.total_price_excluding_tax),
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
                      <div className="text-sm font-semibold">
                        Total Extra Child
                      </div>
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
      </DialogContent>
    </Dialog>
  );
};
export default RoomTypeCartDetails;
