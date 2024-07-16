import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useState } from "react";

export interface BookingDetailsProps {
  bookings: Bookings;
  room_details: RoomDetail[];
  user_details: UserDetails;
}

export interface Bookings {
  booking_id: string;
  hotel_id: number;
  hotel_name: string;
  check_in: string;
  check_out: string;
  nights: number;
  hotel_address: string;
  mobile: string;
  booking_status: string;
  can_cancel: boolean;
  can_modify: boolean;
  can_review: boolean;
  review_submitted: boolean;
  total_rooms: number;
  image_url: string;
  total_amount: number;
  latitude: string;
  longitude: string;
  rating: number;
  review: string;
  total_adults: number;
  total_children: number;
  hotel_info_url: string;
  loyalty_amount_earned: number;
}

export interface RoomDetail {
  no_of_rooms: number;
  rate_plan_id: number;
  rate_plan_name: string;
  room_type_id: number;
  room_type_img_url: string;
  room_type_name: string;
  rooms: Room[];
}

export interface Room {
  occupancy: Occupancy;
  rates: Rate[];
  room_no: number;
}

export interface Occupancy {
  extra_adult: number;
  extra_child: number;
  total_adult: number;
  total_child: number;
  total_occupancy: number;
}

export interface Rate {
  discount_amount: number;
  discount_percentage: number;
  extra_adult_price: number;
  extra_child_price: number;
  price_after_discount: number;
  price_before_discount: number;
  stay_date: Date;
  tax_amount: number;
  tax_percentage: number;
  total_price_excluding_tax: number;
  total_price_including_tax: number;
}

export interface UserDetails {
  address: string;
  arrival_time: string;
  company_name: string;
  email_id: string;
  first_name: string;
  gst_in: string;
  guest_note: string;
  last_name: string;
  mobile: string;
  user_id: string;
}

const useBookingDetails = () => {
  const [bookingLoader, setBookingLoader] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetailsProps>();

  const fetchBookingDetails = async (bookingId: string, hotelId: string) => {
    setBookingLoader(true);
    try {
      const bookingDetailsResponse = await bharatStay.get(
        `${apiEndpoints.GET.booking_details}?booking_id=${bookingId}&hotel_id=${hotelId}`
      );

      if (bookingDetailsResponse.data.status === 1) {
        setBookingDetails(bookingDetailsResponse.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setBookingLoader(false);
    }
  };

  return {
    bookingLoader,
    bookingDetails,
    fetchBookingDetails,
  };
};

export default useBookingDetails;
