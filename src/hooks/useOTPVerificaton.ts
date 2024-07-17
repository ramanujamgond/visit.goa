import { VisitGoa } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { clearErrorAfterTimeout } from "@/lib/utils";
import { useState } from "react";

const useOTPVerificaton = () => {
  const [otpVerificationLoader, setOtpVerificationLoader] =
    useState<boolean>(false);
  const [registeredUserId, setRegisteredUserId] = useState<string>("");
  const [otpErrorMessage, setOtpErrorMessage] = useState<string>("");

  const verifyOtp = async (mobileNumber: string, otpNumbers: string) => {
    setOtpVerificationLoader(true);
    try {
      const payload = {
        mobile_no: mobileNumber,
        otp: parseInt(otpNumbers),
      };
      const verifyResponse = await VisitGoa.post(
        apiEndpoints.POST.otpVerificfation,
        payload
      );
      if (verifyResponse.data.status === 2) {
        setRegisteredUserId(verifyResponse.data.user_id);
      } else {
        setOtpErrorMessage(verifyResponse.data.message);
        clearErrorAfterTimeout({ setError: setOtpErrorMessage });
      }
    } catch (error) {
      setOtpVerificationLoader(false);
    } finally {
      setOtpVerificationLoader(false);
    }
  };

  return {
    otpVerificationLoader,
    registeredUserId,
    otpErrorMessage,
    verifyOtp,
  };
};

export default useOTPVerificaton;
