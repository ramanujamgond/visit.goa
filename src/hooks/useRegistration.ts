import { VisitGoa } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { useState } from "react";

const useRegistration = () => {
  const [userLoader, setUserLoader] = useState<boolean>(false);
  const [otpStatus, setOtpStatus] = useState<boolean>(false);

  const userRegistration = async (loginNumber: string) => {
    setUserLoader(true);
    try {
      const payload = {
        mobile_no: loginNumber,
      };
      const registrationResponse = await VisitGoa.post(
        apiEndpoints.POST.userRegistration,
        payload
      );
      if (registrationResponse.data.status === 1) {
        setOtpStatus(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoader(false);
    }
  };

  return {
    userLoader,
    otpStatus,
    userRegistration,
  };
};

export default useRegistration;
