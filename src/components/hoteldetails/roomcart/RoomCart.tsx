import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  RiDeleteBinLine,
  RiInformation2Fill,
  RiShoppingCart2Fill,
} from "@remixicon/react";
import RoomTypeCartDetails from "./RoomTypeCartDetails";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteCartData, showCart } from "@/redux/reducers/cartslice";
export interface RoomCartProps {
  hotelId: string;
  hotelName: string;
  adults: string;
  childs: string;
}

const RoomCart: React.FC<RoomCartProps> = ({
  hotelId,
  hotelName,
  adults,
  childs,
}) => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // get the saved cart data and checkin checkout data from store.
  const {
    cartData,
    checkInCheckOut: { checkinDate, checkoutDate },
  } = useSelector((state: RootState) => state.cart);

  // get the total of rooms excluding tax
  let totalRoomPrice = 0;

  cartData.forEach((cartItem) => {
    cartItem.occupancy.forEach((occupancyItem) => {
      occupancyItem.rates.forEach((rate) => {
        totalRoomPrice += rate.total_price_including_tax;
      });
    });
  });

  // nextjs 14 routes
  const router = useRouter();
  // method and state to toggle the room type cart detils modal
  const [isRoomTypeCartModalOpen, setIsRoomTypeCartModalOpen] =
    useState<boolean>(false);

  const toggleRoomTypeCartDetails = () => {
    setIsRoomTypeCartModalOpen((prev) => !prev);
  };

  // method to navigate to checkout page
  const handleCheckoutNav = () => {
    router.push(
      `/checkout/${hotelId}/${hotelName}?checkin=${checkinDate}&checkout=${checkoutDate}&adults=${adults}&childs=${childs}`
    );
  };

  // clear the cart data and hide the cart
  const clearCartData = () => {
    dispatch(deleteCartData());
    dispatch(showCart(false));
  };

  return (
    <>
      <div className="fixed left-0 right-0 bottom-8 w-full max-w-[480px] mx-auto z-[6010]">
        <div className="flex items-center gap-4 z-[6010]">
          <div className="flex items-center w-full justify-between rounded-xl bg-[#685CF1] p-6">
            <div className="flex items-center gap-4">
              <div>
                <RiShoppingCart2Fill size={40} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Total:</div>
                <div className="text-xl font-bold text-white">
                  ₹{totalRoomPrice}
                </div>
              </div>
            </div>

            <Button
              size={"lg"}
              className="text-base font-bold text-[#1f1f1f] bg-white hover:text-white"
              onClick={handleCheckoutNav}
            >
              Checkout
            </Button>
          </div>

          <div className="flex items-center justify-between flex-col h-[104px] rounded-xl bg-[#685CF1] px-4 py-3">
            <div
              className="w-[34px] h-[34px] hover:bg-[#C7522E] flex items-center justify-center rounded-lg cursor-pointer"
              onClick={toggleRoomTypeCartDetails}
            >
              <RiInformation2Fill className="text-white" />
            </div>
            <div
              className="w-[34px] h-[34px] hover:bg-[#C7522E] flex items-center justify-center rounded-lg cursor-pointer"
              onClick={clearCartData}
            >
              <RiDeleteBinLine className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {isRoomTypeCartModalOpen && (
        <RoomTypeCartDetails
          isOpen={isRoomTypeCartModalOpen}
          toggleModal={toggleRoomTypeCartDetails}
          cartData={cartData}
          checkinDate={checkinDate}
          checkoutDate={checkoutDate}
        />
      )}
    </>
  );
};
export default RoomCart;
