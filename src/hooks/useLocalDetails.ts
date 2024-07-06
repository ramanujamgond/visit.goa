import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useState } from "react";

export interface LocalDetailsProps {
  state_id: number;
  country_id: number;
  state_name: string;
  region: number;
  time_zone: string;
  currency_code: string;
  currency_symbol: string;
  tax_name: string;
  tax_type: string;
  tax_value: TaxValue[];
  tax_inc_value: TaxValue[];
  financial_year: string;
  created_at: Date;
  updated_at: Date;
  country_name: string;
  tax_range_type: string;
  is_taxable: number;
  gst_slab_id: number;
  gst_slab_name: string;
}

export interface TaxValue {
  start_range: string;
  end_range: string;
  value: string;
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
