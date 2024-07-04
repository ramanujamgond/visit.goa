import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RoomTypeOccupancy from "./RoomTypeOccupancy";
import { LocalDetailsProps } from "@/hooks/useLocalDetails";
import { calculateGst } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { showCart, updateCartData } from "@/redux/reducers/cartslice";
import { useRouter } from "next/navigation";

export interface HotelRoomTypeProps {
  room_type: string;
  room_type_id: number;
  base_adult: number;
  base_child: number;
  extra_adult: number;
  extra_child: number;
  max_occupancy: number;
  room_size_value: string;
  room_size_unit: string;
  image: string;
  allImages: string[];
  min_inv: number;
  room_amenities: string[];
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

interface RoomMealPlanModalProps {
  isOpen: boolean;
  toggleDialog: (value: boolean) => void;
  roomTypeData: HotelRoomTypeProps;
  localDetails: LocalDetailsProps;
}

export interface OccupancyProps {
  roomNumber: number;
  adult: number;
  child: number;
  extra_adult: number;
  extra_child: number;
  rates: RatesProps[];
}

export interface RatesProps {
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
}

export interface SelectedRoomTypeProps {
  roomTypeId: number;
  selectedRatePlan: number;
  noOfRoomSelected: number;
  roomTypeName: string;
  ratePlanName: string;
  roomTypeImages: string;
  occupancy: OccupancyProps[];
}

const RoomMealPlanModal: React.FC<RoomMealPlanModalProps> = ({
  isOpen,
  toggleDialog,
  roomTypeData,
  localDetails: tax,
}) => {
  // allows functional components to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // states defined
  const [disableNoOfRooms, setDisableNoOfRooms] = useState<boolean>(false);
  const [saveButtonStatus, setSaveButtonStatus] = useState<boolean>(false);
  const [selectedMealPlanId, setSelectedMealPlanId] = useState<number>(0);
  const [selectedRoomType, setSelectedRoomType] =
    useState<SelectedRoomTypeProps>({
      roomTypeId: 0,
      selectedRatePlan: 0,
      noOfRoomSelected: 0,
      roomTypeName: "",
      ratePlanName: "",
      roomTypeImages: "",
      occupancy: [],
    });

  // handle the selected meal plan
  const handleSelectedMealPlan = (value: string) => {
    setSelectedMealPlanId(parseInt(value));
  };

  // method to handle add rooms
  const addNumberofRooms = () => {
    if (roomTypeData?.min_inv > selectedRoomType.noOfRoomSelected) {
      setSelectedRoomType((prev) => ({
        ...prev,
        noOfRoomSelected: prev.noOfRoomSelected + 1,
      }));

      const newOccupancy = {
        roomNumber: (selectedRoomType?.occupancy?.length || 0) + 1,
        adult: 0,
        child: 0,
        extra_adult: 0,
        extra_child: 0,
        rates: [],
      };

      let updatedRoomType;
      if (!selectedRoomType) {
        updatedRoomType = [newOccupancy];
      } else {
        updatedRoomType = [...selectedRoomType.occupancy, newOccupancy];
      }
      setSelectedRoomType((prev) => ({ ...prev, occupancy: updatedRoomType }));
    } else {
      setDisableNoOfRooms(true);
    }
  };

  // method to handle the decrement of rooms
  const decNumberofRooms = () => {
    if (selectedRoomType?.noOfRoomSelected > 0) {
      setDisableNoOfRooms(false);

      // Remove the last room/element from the occupancy array
      setSelectedRoomType((prev) => {
        const updatedOccupancy = prev.occupancy.slice(0, -1);
        return {
          ...prev,
          noOfRoomSelected: prev.noOfRoomSelected - 1,
          occupancy: updatedOccupancy,
        };
      });
    }
  };

  // method to handle the cart data and store the cart data in redux store
  const handleAddRoom = () => {
    // extract the occupancy details from roomTypeData for cart operations
    const baseAdult = roomTypeData?.base_adult;
    // const baseChild = roomTypeData?.base_child;
    // const extraAdult = roomTypeData?.extra_adult;
    // const extraChild = roomTypeData?.extra_child;

    const selectedMealPlan = roomTypeData?.rate_plans.find((ratePlan) => {
      return ratePlan.rate_plan_id === selectedMealPlanId;
    });

    const selectedMealPlanName = roomTypeData.rate_plans.find((ratePlan) => {
      return ratePlan.rate_plan_id === selectedMealPlanId;
    })?.plan_name;

    // setSelectedRoomType((prev: SelectedRoomTypeProps) => {
    //   let updatedOccupancy = prev.occupancy.map((occupants) => {
    //     let price = 0;

    //     if (occupants.adult === baseAdult) {
    //       selectedMealPlan?.rates.forEach((rates) => {
    //         price += rates.price_after_discount;
    //       });
    //     } else if (occupants.extra_adult > 0) {
    //       selectedMealPlan?.rates.forEach((rates) => {
    //         price += rates.price_after_discount + rates.extra_adult_price;
    //       });
    //     } else if (occupants.adult < baseAdult) {
    //       selectedMealPlan?.rates.forEach((rates) => {
    //         price += rates.multiple_occupancy[occupants.adult - 1];
    //       });
    //     }

    //     if (occupants.extra_child > 0) {
    //       selectedMealPlan?.rates.forEach((rates) => {
    //         price += rates.extra_child_price;
    //       });
    //     }

    //     return { ...occupants, price };
    //   });

    //   return { ...prev, occupancy: updatedOccupancy };
    // });

    //room rate calculation date wise
    setSelectedRoomType((prev: SelectedRoomTypeProps) => {
      let updatedOccupancy = prev.occupancy.map((occupants) => {
        let rates: any = [];
        selectedMealPlan?.rates?.forEach((rate) => {
          const per_night_rate = {
            date: rate?.stay_date,
            price_before_discount: rate?.bar_price,
            discount_amount: rate?.bar_price - rate?.price_after_discount,
            discount_percentage: rate?.discount_percentage,
            price_after_discount: rate?.price_after_discount,
            extra_adult_price: 0,
            extra_child_price: 0,
            total_price_excluding_tax: 0,
            tax_amount: 0,
            tax_percentage: 0,
            total_price_including_tax: 0,
          };

          let room_price = 0;
          let multiple_occupancy_price = 0;

          if (occupants?.extra_adult > 0) {
            room_price +=
              rate.price_after_discount +
              occupants?.extra_adult * rate.extra_adult_price;
            per_night_rate.extra_adult_price =
              occupants?.extra_adult * rate.extra_adult_price;
          } else if (baseAdult === occupants?.adult) {
            room_price += rate.price_after_discount;
            per_night_rate.price_before_discount = rate.bar_price;
            per_night_rate.price_after_discount = rate.price_after_discount;
          } else if (baseAdult > occupants?.adult) {
            room_price += rate?.multiple_occupancy[occupants?.adult - 1];
            multiple_occupancy_price =
              rate.multiple_occupancy[occupants?.adult - 1];
            const price_before_discount =
              multiple_occupancy_price / (1 - rate.discount_percentage / 100);
            per_night_rate.price_before_discount = price_before_discount;
            per_night_rate.discount_amount =
              price_before_discount - multiple_occupancy_price;
            per_night_rate.price_after_discount = multiple_occupancy_price;
          }

          per_night_rate.extra_child_price =
            occupants?.extra_child + rate.extra_child_price;
          room_price += occupants.extra_child * rate.extra_child_price;

          let gst = 0;
          let tax_percentage = 0;

          if (tax?.is_taxable === 0) {
            gst = 0;
            tax_percentage = 0;
          } else {
            if (tax.tax_type === "slab") {
              if (tax.gst_slab_name === "Bundled") {
                tax.tax_value.forEach((tax) => {
                  if (
                    room_price >= parseInt(tax.start_range) &&
                    room_price <= parseInt(tax.end_range)
                  ) {
                    tax_percentage = parseInt(tax.value);
                    gst = calculateGst(room_price, parseInt(tax.value));
                    return;
                  }
                });
              } else if (tax.gst_slab_name === "Individual") {
                tax.tax_value.forEach((tax) => {
                  const price =
                    multiple_occupancy_price > 0
                      ? multiple_occupancy_price
                      : rate.price_after_discount;

                  if (
                    price >= parseInt(tax.start_range) &&
                    price <= parseInt(tax.end_range)
                  ) {
                    tax_percentage = parseInt(tax.value);
                    gst = calculateGst(room_price, parseInt(tax.value));
                    return;
                  }
                });
              }
            } else if (tax.tax_type === "flat") {
              if (tax.gst_slab_name === "Bundled") {
                if (room_price >= parseInt(tax.tax_value[0].start_range)) {
                  tax_percentage = parseInt(tax.tax_value[0].value);
                }
                gst = calculateGst(
                  room_price,
                  parseInt(tax.tax_value[0].value)
                );
              } else if (tax.gst_slab_name === "Individual") {
                const price =
                  multiple_occupancy_price > 0
                    ? multiple_occupancy_price
                    : rate.price_after_discount;

                if (price >= parseInt(tax.tax_inc_value[0].start_range)) {
                  tax_percentage = parseInt(tax.tax_value[0].value);
                }
                gst = calculateGst(
                  room_price,
                  parseInt(tax.tax_value[0].value)
                );
              }
            }
          }

          per_night_rate.tax_amount = gst;
          per_night_rate.tax_percentage = tax_percentage;
          per_night_rate.total_price_excluding_tax = room_price;
          per_night_rate.total_price_including_tax = room_price + gst;

          rates.push(per_night_rate);
        });

        return { ...occupants, rates };
      });

      return { ...prev, occupancy: updatedOccupancy };
    });

    // update other data such as rateplanname, roomTypeId, roomTypeImages, roomTypeName and selctedRatePlanID
    setSelectedRoomType((prev) => {
      return {
        ...prev,
        ratePlanName: selectedMealPlanName || "",
        roomTypeId: roomTypeData?.room_type_id,
        roomTypeImages: roomTypeData?.image,
        roomTypeName: roomTypeData?.room_type,
        selectedRatePlan: selectedMealPlanId,
      };
    });

    // store the selcted room type data in redux
    dispatch(updateCartData(selectedRoomType));

    // show the cart
    dispatch(showCart(true));

    //hide the meal plan modal
    toggleDialog(false);
  };

  // enabling the save button only after selecting a room meal plan and number of adult
  useEffect(() => {
    if (
      selectedRoomType?.occupancy.length > 0 &&
      selectedMealPlanId > 0 &&
      selectedRoomType?.occupancy?.some((occupants) => occupants.adult > 0)
    ) {
      setSaveButtonStatus(false);
    } else {
      setSaveButtonStatus(true);
    }
  }, [selectedRoomType, selectedMealPlanId]);

  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <div className="relative w-full h-64 rounded-xl cursor-pointer">
        <DialogTrigger asChild></DialogTrigger>
      </div>
      <DialogContent
        className="w-full max-w-[480px] z-[2000]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <div className="text-xl font-semibold">{roomTypeData?.room_type}</div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-[#595959]">
            No. of Rooms
          </div>
          <div className="flex items-center gap-x-2">
            <Button className="w-7 h-8 bg-[#FF6535]" onClick={decNumberofRooms}>
              -
            </Button>
            <span className="inline-block w-5 text-base font-medium text-center">
              {selectedRoomType?.noOfRoomSelected}
            </span>
            <Button
              className="w-7 h-8 bg-[#FF6535]"
              disabled={disableNoOfRooms}
              onClick={addNumberofRooms}
            >
              +
            </Button>
          </div>
        </div>

        <div className="text-sm font-medium">Chosse Meal Plan</div>
        <div>
          <Select onValueChange={handleSelectedMealPlan}>
            <SelectTrigger className="w-full">
              <SelectValue
                // placeholder={`${roomTypeData?.rate_plans[0]?.plan_name} (${roomTypeData?.rate_plans[0]?.price_after_discount})`}
                placeholder="Meal plan not selected"
              />
            </SelectTrigger>
            <SelectContent className="z-[2001]">
              {roomTypeData?.rate_plans.map((ratePlans) => (
                <SelectGroup key={ratePlans?.rate_plan_id}>
                  <SelectItem value={`${ratePlans?.rate_plan_id}`}>
                    {ratePlans?.plan_name} {ratePlans?.price_after_discount}
                  </SelectItem>
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="h-auto max-h-56 overflow-y-scroll [scrollbar-width:thin]">
          {selectedRoomType?.occupancy.length > 0 &&
            selectedRoomType?.occupancy.map((roomsData, index) => (
              <RoomTypeOccupancy
                key={index}
                roomsData={roomsData}
                index={index}
                selectedRoomType={selectedRoomType}
                setSelectedRoomType={setSelectedRoomType}
                roomTypeData={roomTypeData}
              />
            ))}
        </div>

        <Button
          size={"lg"}
          className="mt-2 bg-[#FF6535]"
          disabled={saveButtonStatus}
          onClick={handleAddRoom}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default RoomMealPlanModal;
