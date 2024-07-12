import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import OtpInput from 'react-otp-input';
import { Loader } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryCode from "@/lib/countrylist.json";
import useRegistration from "@/hooks/useRegistration";
import useOTPVerificaton from "@/hooks/useOTPVerificaton";
import { storeUSERID } from "@/redux/reducers/userIDSlice";
import { bharatStay } from "@/api/baseURL";
import { apiEndpoints } from "@/api/endPoints";
import { clearErrorAfterTimeout } from "@/lib/utils";

interface CountryCode {
  "name": string;
  "dial_code": string;
  "code": string;
}

const CheckoutRight = () => {

  const dispatch = useDispatch();

  // get the data from the store
  const { hotelDetails } = useSelector(
    (state: RootState) => state.cart
  );

  // get the userID from store
  const { userID } = useSelector((state: RootState) => state.userId);

  // get the cart data from the store 
  const { cartData, checkInCheckOut } = useSelector((state: RootState) => state.cart);

  // states defined
  const [bookingType, setBookingType] = useState<string>("personal");
  const [guestName, setGuestName] = useState<string>("");
  const [guestNameErrorText, setGuestNameErrorText] = useState<string>("");

  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [phoneNumberErrorText, setPhoneNumberErrorText] = useState<string>("");

  const [emailId, setEmailId] = useState<string>("");
  const [emailIdErrorText, setEmailIdErrorText] = useState<string>("");

  const [companyName, setCompanyName] = useState<string>("");
  const [companyNameErrorText, setCompanyNameErrorText] = useState<string>("");

  const [gstNumber, setGstNumber] = useState<string>("");
  const [gstNumberErrorText, setGstNumberErrorText] = useState<string>("");

  const [address, setAddress] = useState<string>("");
  const [addressErrorText, setAddressErrorText] = useState<string>("");

  const [arrivalTime, setArrivalTime] = useState<string>("");

  // state to capture the login number
  const [loginNumber, setLoginNumber] = useState<string>("");

  // state to enable modal
  const [enableLogin, setEnableLogin] = useState<boolean>(false);

  // state for otp
  const [otpInputStatus, setOTPInputStatus] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");

  // state to hold the country code 
  // const [countryCode, setCountryCode] = useState<string>("+91");

  // get the total amount incuding tax
  const [totalAmount, setTotalAmount] = useState<number>();

  useEffect(() => {
    // Calculate the total amount including tax
    const total = cartData.reduce((acc, cartItem) => {
      return cartItem.occupancy.reduce((acc, occupancyItem) => {
        return occupancyItem.rates.reduce((acc, rate) => {
          return acc + rate.total_price_including_tax;
        }, acc);
      }, acc);
    }, 0);

    // Update the totalAmount state
    setTotalAmount(total);
  }, [cartData]);

  const handlePayNow = async () => {

    if (!guestName || guestName.length === 0) {
      setGuestNameErrorText("Enter the guest name.");
      clearErrorAfterTimeout({ setError: setGuestNameErrorText });
      return;
    }

    if (guestName.length < 3) {
      setGuestNameErrorText("Guest name must be at least 2 characters long.");
      clearErrorAfterTimeout({ setError: setGuestNameErrorText });
      return;
    }

    if (!phoneNumber) {
      setPhoneNumberErrorText("Mobile number is required.");
      clearErrorAfterTimeout({ setError: setPhoneNumberErrorText });
    }

    // regx to check the valid mobile number
    const validPhoneNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (!validPhoneNumber.test(phoneNumber?.toString() || "")) {
      setPhoneNumberErrorText("Enter a valid mobile number.");
      clearErrorAfterTimeout({ setError: setPhoneNumberErrorText });
      return;
    }

    if (!emailId) {
      setEmailIdErrorText("Email id is required.");
      clearErrorAfterTimeout({ setError: setEmailIdErrorText });
      return;
    }

    // regx to check for the valid email id
    const validEmailId = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmailId.test(emailId)) {
      setEmailIdErrorText("Enter a valid email address.");
      clearErrorAfterTimeout({ setError: setEmailIdErrorText });
      return;
    }

    // check for company name and gst number
    if (bookingType === "business") {
      if (!companyName) {
        setCompanyNameErrorText("Company name is required.");
        clearErrorAfterTimeout({ setError: setCompanyNameErrorText });
        return;
      }

      if (!gstNumber) {
        setGstNumberErrorText("GST Number is required.");
        clearErrorAfterTimeout({ setError: setGstNumberErrorText });
        return;
      }
    }

    if (!address) {
      setAddressErrorText("Address is required.");
      clearErrorAfterTimeout({ setError: setAddressErrorText });
      return;
    }

    if (!userID) {
      setEnableLogin(true);
      return;
    }

    let roomData = [];

    // import media base link for image urls
    const imageUrlPath = process.env.NEXT_PUBLIC_MEDIA_URL as string;

    roomData = cartData.map((cartItems) => ({
      "room_type_id": cartItems.roomTypeId,
      "rate_plan_id": cartItems.selectedRatePlan,
      "no_of_rooms": cartItems.noOfRoomSelected,
      "room_type_name": cartItems.roomTypeName,
      "rate_plan_name": cartItems.ratePlanName,
      "room_type_img_url": `${imageUrlPath}/${cartItems.roomTypeImages}`,
      "rooms": cartItems.occupancy.map((occupants) => ({
        "room_no": occupants.roomNumber,
        "occupancy": {
          "total_adult": occupants.adult,
          "total_child": occupants.child,
          "extra_adult": occupants.extra_adult,
          "extra_child": occupants.extra_child,
          "total_occupancy": occupants.adult + occupants.child + occupants.extra_adult + occupants.extra_child
        }
      }))
    }));


    const payload = {
      "hotel_id": parseInt(hotelDetails?.hotelId),
      "hotel_name": hotelDetails?.hotelName,
      "user_details": {
        "user_id": userID,
        "first_name": guestName,
        "last_name": "",
        "email_id": emailId,
        "mobile": phoneNumber?.toString(),
        "address": address,
        "company_name": companyName,
        "GST_IN": gstNumber,
        "guest_note": "",
        "arrival_time": arrivalTime
      },
      "booking_details": {
        "checkin_date": checkInCheckOut.checkinDate,
        "checkout_date": checkInCheckOut.checkoutDate,
        "booking_reference": "",
        "source": "BharatStay",
        "payment_mode": 0,
        "currency": "",
        "total_amount_inc_tax": totalAmount,
        "loyalty_amount": 0,
        "pg_amount": 1.12
      },
      "room_details": roomData,
    };

    try {
      const bookingResponse = await bharatStay.post(apiEndpoints.POST.bookNow, payload);
      if (bookingResponse.data.status === 1) {
        console.log(bookingResponse.data);
      }
    } catch (error) {
      console.log("error")
    }
  };

  const { userLoader, otpStatus, userRegistration } = useRegistration();

  const handleUserRegistration = () => {
    if (loginNumber) {
      userRegistration(loginNumber);
    }
  };

  useEffect(() => {
    if (otpStatus) {
      setOTPInputStatus(otpStatus);
    }
  }, [otpStatus])

  const { otpVerificationLoader, registeredUserId, otpErrorMessage, verifyOtp } = useOTPVerificaton();

  useEffect(() => {
    if (registeredUserId) {
      dispatch(storeUSERID({
        userID: registeredUserId,
      }));
      setEnableLogin(false);
    }
  }, [registeredUserId])

  const handleOtpVerification = () => {
    verifyOtp(loginNumber, otp);
  }

  return (
    <>
      <div className="flex-grow flex-shrink basis-2/4">
        <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">Details</div>

            <RadioGroup defaultValue="personal" className="flex items-center justify-between gap-4" onValueChange={setBookingType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Personal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              Guest Name
            </div>
            <div>
              <Input
                value={guestName}
                type="text"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setGuestName(e.target.value);
                }}
              />
              <span className="text-xs text-red-600">{guestNameErrorText}</span>
            </div>
          </div>

          <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              Phone Number
            </div>
            <div>
              <Input
                value={phoneNumber}
                type="number"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setPhoneNumber(parseInt(e.target.value));
                }}
              />
              <span className="text-xs text-red-600">{phoneNumberErrorText}</span>
            </div>
          </div>

          <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              Email ID
            </div>
            <div>
              <Input
                value={emailId}
                type="email"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
              <span className="text-xs text-red-600 ">{emailIdErrorText}</span>
            </div>
          </div>
          {bookingType === "business" && <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              Company Name
            </div>
            <div>
              <Input
                value={companyName}
                type="text"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
              <span className="text-xs text-red-600">{companyNameErrorText}</span>
            </div>
          </div>}


          {bookingType === "business" && <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              GST
            </div>
            <div>
              <Input
                value={gstNumber}
                type="text"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setGstNumber(e.target.value);
                }}
              />
              <span className="text-xs text-red-600">{gstNumberErrorText}</span>
            </div>
          </div>
          }

          <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">Address</div>
            <div>
              <Input
                value={address}
                type="text"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <span className="text-xs text-red-600 ">{addressErrorText}</span>
            </div>
          </div>

          <div className="my-3">
            <div className="text-sm font-normal text-[#858585] mb-2">
              Expected Arrival time
            </div>
            <div>
              <Input
                value={arrivalTime}
                type="text"
                className="bg-white focus-visible:ring-0 h-10"
                onChange={(e) => {
                  setArrivalTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <Button
          size={"lg"}
          className="w-full bg-[#FF6535] mt-2"
          onClick={handlePayNow}
        >
          Pay Now ₹{totalAmount}
        </Button>
      </div>
      <Dialog open={enableLogin} onOpenChange={setEnableLogin}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="w-[420px] z-[2000]">
          {!otpInputStatus && <div>
            <div className="font-bold">Login to continue</div>
            <div className="flex item-center my-2 justify-between gap-4">
              {/* disable the country code section */}
              {/* <div>
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[83px]">
                    <SelectValue placeholder="Select Country Code" />
                  </SelectTrigger>
                  <SelectContent className="h-52 z-[4000]">
                    {CountryCode.map((codes: CountryCode) => (
                      <SelectGroup key={codes.code}>
                        <SelectItem value={codes.dial_code}>{codes.code}{codes.dial_code}</SelectItem>
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}
              <Input type="number" value={loginNumber} onChange={(e) => {
                setLoginNumber(e.target.value);
              }} placeholder="Enter your mobile number" />
            </div>
            <Button className="w-full bg-[#FF6535] mt-3 mb-2" disabled={userLoader} onClick={handleUserRegistration}>
              {userLoader && <Loader className="animate-spin mr-2" />}
              Get OTP</Button>
          </div>}

          {otpInputStatus && <div>
            <div className="font-bold">Enter OTP</div>
            <div className="text-[#858585] text-sm my-2">An OTP has been sent to {loginNumber.toString().slice(0, -4).replace(/\d/g, '*') + loginNumber.toString().slice(-4)}<span className="ml-2 text-blue-700 cursor-pointer inline-block" onClick={() => setOTPInputStatus(false)}>Change Number</span></div>
            <div>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>{" "}</span>}
                renderInput={(props) => <input {...props} />}
                containerStyle="item-center justify-center gap-4 my-4"
                inputStyle="!w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6535]"
              />
            </div>
            <span className="text-xs text-red-600">{otpErrorMessage}</span>
            <Button className="w-full bg-[#FF6535] mt-3 mb-2" onClick={handleOtpVerification} disabled={otpVerificationLoader}>
              {otpVerificationLoader && <Loader className="animate-spin mr-2" />}
              Verify
            </Button>
            <div className="text-sm text-[#2435CF] text-center cursor-pointer" onClick={handleUserRegistration}>Resend OTP</div>
          </div>}
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CheckoutRight;
