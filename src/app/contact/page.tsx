"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [nameErrorText, setNameErrorText] = useState<string>("");

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberErrorText, setPhoneNumberErrorText] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailErrorText, setEmailErrorText] = useState<string>("");

  const [propertyName, setPropertyName] = useState<string>("");
  const [propertyErrorText, setPropertyErrorText] = useState<string>("");

  const [propertyLocation, setPropertyLocation] = useState<string>("");
  const [propertyLocationErrorText, setPropertyLocationErrorText] =
    useState<string>("");

  const [messageText, setMessageText] = useState<string>("");

  const [travelerType, setTravelerType] = useState<string>("traveler");
  return (
    <div className="pt-10">
      <div className="relative w-full bg-[url('/hero_banner.png')] bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:bottom-[0] after:left-[0] after:w-full after:h-full after:bg-[linear-gradient(138deg,_rgba(255,_255,_255,_0.00)_1.66%,_#FFF_64.65%)] h-full">
        <div className="container relative h-[100%] z-[2000]">
          <div className="container py-10 h-full">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-shrink-1 flex-grow-1 basis-1/2"></div>
              <div className="flex-shrink-1 flex-grow-1 basis-1/2">
                <div className="text-xl font-bold">Contact Us</div>

                <div className="my-5">
                  <div className="text-sm font-normal text-[#666565] mb-2">
                    Name *
                  </div>
                  <div>
                    <Input
                      value={name}
                      type="text"
                      className="bg-white focus-visible:ring-0 h-10"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <span className="text-xs text-red-600">
                      {nameErrorText}
                    </span>
                  </div>
                </div>

                <div className="my-5">
                  <div className="text-sm font-normal text-[#666565] mb-2">
                    Phone Number *
                  </div>
                  <div>
                    <Input
                      value={phoneNumber}
                      type="number"
                      className="bg-white focus-visible:ring-0 h-10"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                    <span className="text-xs text-red-600">
                      {nameErrorText}
                    </span>
                  </div>
                </div>

                <div className="my-5">
                  <div className="text-sm font-normal text-[#666565] mb-2">
                    Email ID
                  </div>
                  <div>
                    <Input
                      value={email}
                      type="email"
                      className="bg-white focus-visible:ring-0 h-10"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <span className="text-xs text-red-600">
                      {nameErrorText}
                    </span>
                  </div>
                </div>

                <div className="my-6">
                  <RadioGroup
                    defaultValue="traveler"
                    className="flex items-center justify-start gap-8"
                    onValueChange={setTravelerType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="traveler" id="traveler" />
                      <Label htmlFor="traveler">Traveler</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hotelier" id="hotelier" />
                      <Label htmlFor="hotelier">Hotelier</Label>
                    </div>
                  </RadioGroup>
                </div>

                {travelerType === "hotelier" && (
                  <>
                    <div className="my-5">
                      <div className="text-sm font-normal text-[#666565] mb-2">
                        Property Name
                      </div>
                      <div>
                        <Input
                          value={propertyName}
                          type="email"
                          className="bg-white focus-visible:ring-0 h-10"
                          onChange={(e) => {
                            setPropertyName(e.target.value);
                          }}
                        />
                        <span className="text-xs text-red-600">
                          {nameErrorText}
                        </span>
                      </div>
                    </div>

                    <div className="my-5">
                      <div className="text-sm font-normal text-[#666565] mb-2">
                        Property Location
                      </div>
                      <div>
                        <Input
                          value={propertyLocation}
                          type="email"
                          className="bg-white focus-visible:ring-0 h-10"
                          onChange={(e) => {
                            setPropertyLocation(e.target.value);
                          }}
                        />
                        <span className="text-xs text-red-600">
                          {nameErrorText}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div className="my-6">
                  <div className="text-sm font-normal text-[#666565] mb-2">
                    Message
                  </div>
                  <Textarea
                    rows={4}
                    placeholder="Type your message here."
                    className="bg-white focus-visible:ring-0"
                    value={messageText}
                    // onVolumeChange={setMessageText}
                  />
                </div>

                <div className="my-8">
                  <Button size={"lg"} className="bg-[#685CF1] w-full">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
