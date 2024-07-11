import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useState } from "react";

export interface LocalDetailsProps {
  hotel_id:        number;
  country_name:    string;
  country_id:      number;
  state_name:      string;
  state_id:        number;
  currency_code:   string;
  currency_symbol: string;
  time_zone:       string;
  is_taxable:      boolean;
  tax_name:        string;
  tax_type:        string;
  tax_value:       TaxValue[];
}

export interface TaxValue {
  start_range: number;
  end_range:   number;
  percentage:  number;
}

interface HotelId {
  hotelId: string;
}

const useLocalDetails = ({ hotelId }: HotelId) => {
  // loading state
  const [lclDetLoading, setLclDetLoading] = useState<boolean>(false);
  const [localDetails, setLocalDetails] = useState<LocalDetailsProps>();

  //   method to fetch the country details
  const fetchLocalDetails = async () => {
    setLclDetLoading(true);
    try {
      const localDetailResponse = await bharatStay.get(
        `${apiEndpoints.GET.locale_details}${hotelId}`
      );
      if (localDetailResponse?.data?.status === 1) {
        setLclDetLoading(false);
        setLocalDetails(localDetailResponse?.data);
      }
    } catch (error) {
      setLclDetLoading(false);
      console.log(error);
      throw new Error("Failed to fetch the local details!");
    } finally {
      setLclDetLoading(false);
    }
  };

  return {
    lclDetLoading,
    localDetails,
    fetchLocalDetails,
  };
};
export default useLocalDetails;
