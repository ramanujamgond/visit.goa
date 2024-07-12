import { SelectedRoomTypeProps } from "@/components/hoteldetails/hotelroomtype/RoomMealPlanModal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartItem = {
  roomTypeId: number;
  selectedRatePlan: number;
  noOfRoomSelected: number;
  roomTypeName: string;
  ratePlanName: string;
  roomTypeImages: string;
  occupancy: Occupancy[];
};

type Occupancy = {
  roomNumber: number;
  adult: number;
  child: number;
  extra_adult: number;
  extra_child: number;
  rates: Rate[];
};

type Rate = {
  date: Date;
  price_before_discount: number;
  discount_amount: number;
  discount_percentage: number;
  price_after_discount: number;
  extra_adult_price: number;
  extra_child_price: number;
  total_price_excluding_tax: number;
  tax_amount: number;
  tax_percentage: number;
  total_price_including_tax: number;
};

export interface CheckInCheckOutProps {
  checkinDate: string;
  checkoutDate: string;
}

interface HotelDetailsProps {
  hotelId: string;
  hotelName: string;
}

type CartState = {
  cartVisibleState: boolean;
  cartData: SelectedRoomTypeProps[];
  checkInCheckOut: CheckInCheckOutProps;
  hotelDetails: HotelDetailsProps;
};

const initialState: CartState = {
  cartVisibleState: false,
  cartData: [],
  checkInCheckOut: {
    checkinDate: "",
    checkoutDate: "",
  },
  hotelDetails: {
    hotelId: "",
    hotelName: "",
  },
};

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action: PayloadAction<boolean>) => {
      state.cartVisibleState = action.payload;
    },
    updateCartData: (state, action: PayloadAction<CartItem[]>) => {
      state.cartData = action.payload;
    },
    deleteCartData: (state) => {
      state.cartData = [];
    },
    storeCheckInCheckOutDate: (
      state,
      action: PayloadAction<CheckInCheckOutProps>
    ) => {
      state.checkInCheckOut = action.payload;
    },
    storeHotelDetails: (state, action: PayloadAction<HotelDetailsProps>) => {
      state.hotelDetails = action.payload;
    }
  },
});

export const {
  showCart,
  updateCartData,
  deleteCartData,
  storeCheckInCheckOutDate,
  storeHotelDetails,
} = cartslice.actions;
export default cartslice.reducer;
