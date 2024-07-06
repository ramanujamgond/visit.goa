"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RiDeleteBinLine, RiMoonLine } from "@remixicon/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { showCart, deleteCartData } from "@/redux/reducers/cartslice";
import { useDispatch } from "react-redux";

const Checkout = () => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // next 14 router
  const router = useRouter();

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
            <div className="flex-grow flex-shrink basis-2/4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Check In</div>
                  <div className="text-xl font-semibold">24 Oct, 2024</div>
                </div>

                <div className="w-28 flex items-center justify-between text-lg font-bold px-3 py-2  text-white bg-[#FF6535] rounded-3xl">
                  <RiMoonLine size={18} />2
                </div>

                <div>
                  <div className="text-lg font-semibold">Check Out</div>
                  <div className="text-xl font-semibold">26 Oct, 2024</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="text-lg font-semibold my-3">
                Price Breakup for 2 nights
              </div>

              <div className="bg-[#F4F4F4] p-4 rounded-xl mb-4 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-24 h-24 relative rounded-sm">
                    <Image
                      src={"/lastminutesale_3.png"}
                      alt="Room Type Images"
                      priority
                      fill
                      className="object-cover rounded-xl"
                      sizes="auto"
                    />
                  </div>

                  <div>
                    <div className="text-base font-semibold mb-2">
                      Deluxe Room (EP) X 2 room{" "}
                    </div>
                    <div className="text-sm font-semibold">
                      5 Adults, 2 Child
                    </div>
                  </div>

                  <div className="flex items-end justify-end flex-col ml-auto">
                    <div className="text-base font-semibold mb-2">₹2200</div>
                    <div className="w-[26px] h-[26px] p-1 rounded-md bg-[#934E4E] flex items-center justify-center cursor-pointer">
                      <RiDeleteBinLine size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">Room 1</div>
                  <div className="text-base font-semibold">
                    3 Adult, 1 Child
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold my-1">Base Price</div>
                  <div className="text-sm font-semibold">₹1000</div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold">Extra Adult (1)</div>
                  <div className="text-sm font-semibold">₹200</div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">Room 1</div>
                  <div className="text-base font-semibold">
                    3 Adult, 1 Child
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold my-1">Base Price</div>
                  <div className="text-sm font-semibold">₹1000</div>
                </div>
              </div>

              <div className="bg-[#F4F4F4] p-4 rounded-xl shadow-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 relative rounded-sm">
                    <Image
                      src={"/lastminutesale_3.png"}
                      alt="Room Type Images"
                      priority
                      fill
                      className="object-cover rounded-xl"
                      sizes="auto"
                    />
                  </div>

                  <div>
                    <div className="text-base font-semibold mb-2">
                      Deluxe Room (EP) X 2 room{" "}
                    </div>
                    <div className="text-sm font-semibold">
                      5 Adults, 2 Child
                    </div>
                  </div>

                  <div className="flex items-end justify-end flex-col ml-auto">
                    <div className="text-base font-semibold mb-2">₹2200</div>
                    <div className="w-[26px] h-[26px] p-1 rounded-md bg-[#934E4E] flex items-center justify-center cursor-pointer">
                      <RiDeleteBinLine size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="text-base font-bold">Room 1</div>
                  <div className="text-base font-semibold">
                    3 Adult, 1 Child
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#595959]">
                  <div className="text-sm font-semibold my-1">Base Price</div>
                  <div className="text-sm font-semibold">₹1000</div>
                </div>
              </div>

              <div className="bg-[#F4F4F4] p-4 rounded-xl shadow-lg mb-4">
                <div className="text-base font-normal mb-1">Pay using Gems</div>
                <div className="flex items-center text-sm mb-3">
                  Usable Balance:{" "}
                  <span className="flex text-sm font-normal text-[#FFA800] ms-2">
                    <div className="w-4 h-5 relative me-1">
                      <Image
                        src="/pripCoins.png"
                        alt="Gems Icon"
                        priority
                        fill
                        className="object-cover rounded-xl"
                        sizes="auto"
                      />
                    </div>
                    245
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Input
                    type="text"
                    className="h-10 bg-white focus-visible:ring-0"
                  />
                  <Button className="w-28 h-10 bg-[#FF6535]">Apply</Button>
                </div>
              </div>

              <div className="bg-[#F4F4F4] p-4 rounded-xl shadow-lg mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-normal">Room Total</div>
                  <div className="text-base font-semibold">₹3200</div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-normal">Gems</div>
                  <div className="text-base font-medium text-[#65C411]">
                    -₹20
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-normal">Coupon Discount</div>
                  <div className="text-base font-medium text-[#65C411]">
                    -₹120
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-base font-normal">GST</div>
                  <div className="text-base font-medium">₹240</div>
                </div>

                <Separator className="my-3" />

                <div className="flex items-center justify-between">
                  <div className="text-base font-normal">Payable Amount</div>
                  <div className="text-base font-medium">₹5040</div>
                </div>
              </div>
            </div>
            <div className="flex-grow flex-shrink basis-2/4">
              <div className="bg-[#F4F4F4] p-4 rounded-xl shadow-lg mb-4">
                <div className="text-base font-medium">Details</div>

                <div className="my-3">
                  <div className="text-sm font-normal text-[#858585] mb-2">
                    Guest Name
                  </div>
                  <div>
                    <Input
                      type="text"
                      className="bg-white focus-visible:ring-0 h-10"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-sm font-normal text-[#858585] mb-2">
                    Phone Number
                  </div>
                  <div>
                    <Input
                      type="number"
                      className="bg-white focus-visible:ring-0 h-10"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-sm font-normal text-[#858585] mb-2">
                    Email ID
                  </div>
                  <div>
                    <Input
                      type="email"
                      className="bg-white focus-visible:ring-0 h-10"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-sm font-normal text-[#858585] mb-2">
                    Address
                  </div>
                  <div>
                    <Input
                      type="text"
                      className="bg-white focus-visible:ring-0 h-10"
                    />
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-sm font-normal text-[#858585] mb-2">
                    Expected Arrival time
                  </div>
                  <div>
                    <Input
                      type="text"
                      className="bg-white focus-visible:ring-0 h-10"
                    />
                  </div>
                </div>
              </div>

              <Button size={"lg"} className="w-full bg-[#FF6535] mt-2">
                Pay Now ₹5040
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
