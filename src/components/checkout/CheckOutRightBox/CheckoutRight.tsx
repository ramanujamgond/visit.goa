import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ClearErrorAfterTimeoutProps {
  setError: (value: string) => void;
}
const clearErrorAfterTimeout = ({ setError }: ClearErrorAfterTimeoutProps) => {
  setTimeout(() => {
    setError("");
  }, 3000);
};

const CheckoutRight = () => {
  const [guestName, setGuestName] = useState<string>("");
  const [guestNameErrorText, setGuestNameErrorText] = useState<string>("");

  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [phoneNumberErrorText, setPhoneNumberErrorText] = useState<string>("");

  const [emailId, setEmailId] = useState<string>("");
  const [emailIdErrorText, setEmailIdErrorText] = useState<string>("");

  const [address, setAddress] = useState<string>("");
  const [addressErrorText, setAddressErrorText] = useState<string>("");

  const [arrivalTime, setArrivalTime] = useState<string>("");

  const handlePayNow = () => {
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

    if (!address) {
      setAddressErrorText("Address is required.");
      clearErrorAfterTimeout({ setError: setAddressErrorText });
      return;
    }

    const payload = {};
  };

  return (
    <div className="flex-grow flex-shrink basis-2/4">
      <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-lg mb-4">
        <div className="text-base font-medium">Details</div>

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
        Pay Now ₹5040
      </Button>
    </div>
  );
};
export default CheckoutRight;
