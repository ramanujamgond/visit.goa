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
import { RiDeleteBinLine } from "@remixicon/react";
import { Separator } from "@/components/ui/separator";
import RoomTypeOccupancy from "./RoomTypeOccupancy";

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
}

export interface OccupancyProps {
  roomNumber: number;
  adult: number;
  child: number;
  extra_adult: number;
  extra_child: number;
  price: number;
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
}) => {
  // states defined
  const [numberOfRoomSelected, setNumberOfRoomSelected] = useState<number>(0);
  const [disableNoOfRooms, setDisableNoOfRooms] = useState<boolean>(false);
  const [selectedRoomArray, setSelectedRoomArray] = useState<number[]>([]);
  const [selectedMealPlanId, setSelectedMealPlanId] = useState<number>(0);
  const [disableAddAdult, setDisableAddAdult] = useState<boolean>(false);
  const [disableAddChild, setDisableAddChild] = useState<boolean>(false);
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

  // extract the occupancy details from roomTypeData for cart operations
  const maxOccupancy = roomTypeData?.max_occupancy;
  const baseAdult = roomTypeData?.base_adult;
  const baseChild = roomTypeData?.base_child;
  const extraAdult = roomTypeData?.extra_adult;
  const extraChild = roomTypeData?.extra_child;

  // handle the selected meal plan
  const handleSelectedMealPlan = (value: string) => {
    setSelectedMealPlanId(parseInt(value));
  };

  // method to handle add rooms
  const addNumberofRooms = () => {
    if (roomTypeData?.min_inv > numberOfRoomSelected) {
      setSelectedRoomArray((prev) => [...prev, numberOfRoomSelected]);
      setNumberOfRoomSelected((prev) => ++prev);

      const newOccupancy = {
        roomNumber: (selectedRoomType?.occupancy?.length || 0) + 1,
        adult: 0,
        child: 0,
        extra_adult: 0,
        extra_child: 0,
        price: 0,
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

  console.log("roomTypeData", roomTypeData);
  console.log("selectedRoomType", selectedRoomType);

  // method to handle the decrement of rooms
  const decNumberofRooms = () => {
    if (numberOfRoomSelected > 0) {
      setNumberOfRoomSelected((prev) => (prev > 0 ? --prev : 0));
      setDisableNoOfRooms(false);
      setSelectedRoomArray((prev) => prev.slice(0, -1));

      //Remove the last element from the occupancy array
      setSelectedRoomType((prev) => {
        const updatedOccupancy = [...prev.occupancy];
        updatedOccupancy.pop();

        return {
          ...prev,
          occupancy: updatedOccupancy,
        };
      });
    }
  };

  // method to add the adult and child
  const addRoomOccupancy = (occupant: string, roomIndex: number) => {
    setSelectedRoomType((prevState) => {
      const updatedOccupancy = prevState.occupancy.map((occupancy, index) => {
        if (index === roomIndex - 1) {
          // Clone the occupancy object to avoid direct mutation
          let newOccupancy = { ...occupancy };

          const totalOccupants =
            newOccupancy.adult +
            newOccupancy.child +
            newOccupancy.extra_adult +
            newOccupancy.extra_child;

          if (occupant === "adult") {
            if (totalOccupants < maxOccupancy) {
              if (newOccupancy.adult < baseAdult) {
                newOccupancy.adult++;
              } else if (newOccupancy.extra_adult < extraAdult) {
                newOccupancy.extra_adult++;
              } else {
                setDisableAddAdult(true);
              }
            } else {
              setDisableAddAdult(true);
            }
          } else if (occupant === "child") {
            if (totalOccupants < maxOccupancy) {
              if (newOccupancy.child < baseChild) {
                newOccupancy.child++;
              } else if (newOccupancy.extra_child < extraChild) {
                newOccupancy.extra_child++;
              } else {
                setDisableAddChild(true);
              }
            } else {
              setDisableAddChild(true);
            }
          }

          return newOccupancy;
        }
        return occupancy;
      });

      return { ...prevState, occupancy: updatedOccupancy };
    });
  };

  // method to remove the adult and child
  const removeRoomOccupancy = (occupant: string, roomNumber: number) => {
    setSelectedRoomType((prevState) => {
      const updatedOccupancy = prevState.occupancy.map((occupancy, index) => {
        if (occupancy.roomNumber === roomNumber) {
          let newOccupancy = { ...occupancy };

          if (occupant === "adult") {
            if (newOccupancy.adult > 1) {
              newOccupancy.adult--;
              setDisableAddAdult(false);
            } else if (newOccupancy.extra_adult > 0) {
              newOccupancy.extra_adult--;
              setDisableAddAdult(false);
            }
          } else if (occupant === "child") {
            if (newOccupancy.child > 0) {
              newOccupancy.child--;
              setDisableAddChild(false);
            } else if (newOccupancy.extra_child > 0) {
              newOccupancy.extra_child--;
              setDisableAddChild(false);
            }
          }
          return newOccupancy;
        }
        return occupancy;
      });

      return { ...prevState, occupancy: updatedOccupancy };
    });
  };

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
              {numberOfRoomSelected}
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
                roomsData={roomsData}
                index={index}
                selectedRoomType={selectedRoomType}
                setSelectedRoomType={setSelectedRoomType}
                roomTypeData={roomTypeData}
              />
            ))}
        </div>

        <Button size={"lg"} className="mt-2 bg-[#FF6535]">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default RoomMealPlanModal;
