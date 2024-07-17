"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RiMoonLine } from "@remixicon/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useBookingDetails from "@/hooks/useBookingDetails";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();
  const [bookingID, setBookingID] = useState<string | null>("");

  useEffect(() => {
    const bookingID = sessionStorage.getItem("bookingId");
    setBookingID(bookingID);
  }, []);

  // get the hotel id
  const { hotelDetails } = useSelector((state: RootState) => state.cart);

  //   console.log("hotelDetails", hotelDetails?.hotelId);

  const { bookingLoader, bookingDetails, fetchBookingDetails } =
    useBookingDetails();

  useEffect(() => {
    if (bookingID && hotelDetails?.hotelId) {
      fetchBookingDetails(bookingID, hotelDetails?.hotelId);
    }
  }, [bookingID, hotelDetails]);

  return (
    <>
      {bookingLoader && <Loader />}

      {!bookingLoader && (
        <div className="container my-10">
          <div className="flex items-center justify-between gap-4 my-20">
            <div className="flex-shrink-1 flex-grow-1 basis-1/2">
              <div className="flex items-center justify-center flex-col bg-[#F3F3F3] rounded-lg py-10 min-h-[600px]">
                <div className="relative w-[130px] h-[26px] mx-auto mb-6">
                  <Image
                    priority={true}
                    src="/bharat_stay_logo.png"
                    alt="Bharat Stay Logo"
                    fill
                    className="object-cover"
                    sizes="auto"
                  />
                </div>

                <div className="text-5xl text-[#595959] text-center my-3">
                  THANK YOU
                </div>

                <div className="text-base text-center text-[#212121]">
                  FOR BOOKING WITH US
                </div>

                <div className="text-2xl text-[#65C411] text-center my-4">
                  Booking Confirmed
                </div>

                <div className="text-lg text-center">
                  Amount paid:{" "}
                  <span className="font-bold">
                    ₹{bookingDetails?.bookings?.total_amount}
                  </span>
                </div>

                <Button
                  size={"lg"}
                  className="bg-[#685CF1] my-4"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Home
                </Button>
              </div>
            </div>

            <div className="flex-shrink-1 flex-grow-1 basis-1/2 p-10">
              <div className="flex items-center justify-between">
                <div className="text-base">Booking Details</div>

                <div className="text-base">
                  Booking ID:{" "}
                  <span className="font-bold">
                    {bookingDetails?.bookings?.booking_id}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between my-8">
                <div>
                  <div className="text-base font-normal text-[#595959]">
                    Check In
                  </div>
                  <div className="text-xl font-semibold">
                    {bookingDetails?.bookings.check_in}
                  </div>
                </div>

                <div className="w-20 h-20 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  <RiMoonLine className="me-1" />
                  <span className="font-bold">
                    {bookingDetails?.bookings.nights}
                  </span>
                </div>

                <div>
                  <div className="text-base font-normal text-[#595959]">
                    Check Out
                  </div>
                  <div className="text-xl font-semibold">
                    {" "}
                    {bookingDetails?.bookings.check_out}
                  </div>
                </div>
              </div>

              <div className="border border-[#C8C8C8] rounded-lg p-1 mt-6">
                {bookingDetails?.room_details.map((bookingItems) => (
                  <div
                    className="flex items-center justify-start gap-4"
                    key={bookingItems?.room_type_id}
                  >
                    <div className="w-[112px] h-[95px] relative rounded-lg">
                      <Image
                        src={bookingItems?.room_type_img_url}
                        alt={bookingItems?.room_type_name}
                        priority
                        fill
                        className="object-contain rounded-lg"
                        sizes="auto"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">
                        {bookingItems?.room_type_name} (
                        {bookingItems?.rate_plan_name}) X{" "}
                        {bookingItems?.no_of_rooms}
                      </div>
                      <div className="text-sm">
                        {bookingItems?.rooms.reduce(
                          (total, room) => total + room.occupancy.total_adult,
                          0
                        )}{" "}
                        Adults,{" "}
                        {bookingItems?.rooms.reduce(
                          (total, room) => total + room.occupancy.total_child,
                          0
                        )}{" "}
                        Childs
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-[#565656] mt-2">
                An Email has been sent to you containing your booking details
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThankYou;
