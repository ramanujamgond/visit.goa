"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RiDeleteBinLine, RiMoonLine } from "@remixicon/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { showCart, deleteCartData } from "@/redux/reducers/cartslice";
import { useDispatch, useSelector } from "react-redux";
import CheckoutLeft from "@/components/checkout/CheckOutLeftBox/CheckOutLeft";
import CheckoutRight from "@/components/checkout/CheckOutRightBox/CheckoutRight";
import { RootState } from "@/redux/store";

const Checkout = () => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // next 14 router
  const router = useRouter();

  // get the saved cart data and checkin checkout data from store.
  const { cartData, checkInCheckOut } = useSelector(
    (state: RootState) => state.cart
  );

  // go back[go back in the browser stack]
  const navigateBack = () => {
    router.back();
  };

  //navigate to the home
  const navigateHome = () => {
    router.push("/");

    // show the cart
    dispatch(showCart(false));

    // clear the cart data
    dispatch(deleteCartData());
  };

  return (
    <div className="my-12 h-full min-h-[90vh]">
      <div className="pt-2">
        <div className="container">
          <div className="flex items-center justify-between mt-14">
            <div className="text-base font-normal text-[#656565]">
              <span
                className="hover:text-[#FF6535] cursor-pointer"
                onClick={navigateHome}
              >
                Book Now
              </span>{" "}
              {"> "}
              <span
                className="font-bold text-[#141414] hover:text-[#FF6535] cursor-pointer"
                onClick={navigateBack}
              >
                Hotel Beauty Palace
              </span>{" "}
              {"> "}
              <span className="text-base font-normal text-[#656565]">
                Checkout
              </span>
            </div>
          </div>

          <div className="flex items-start gap-8 mt-12">
            <CheckoutLeft
              cartData={cartData}
              checkInCheckOut={checkInCheckOut}
            />

            <CheckoutRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
