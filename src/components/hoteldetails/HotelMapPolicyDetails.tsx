import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import GoogleLoader from "./GoogleLoader";
import { RiMapPinLine } from "@remixicon/react";
import { Button } from "../ui/button";

interface HotelMapPolicyDetailsProps {
  hotel_policy: string;
  child_policy: string;
  cancellation_policy: string;
  latitude: string;
  longitude: string;
  city_name: string;
  address: string;
}

const containerStyle = {
  width: "auto",
  height: "400px",
};

const HotelMapPolicyDetails: React.FC<HotelMapPolicyDetailsProps> = ({
  hotel_policy,
  child_policy,
  cancellation_policy,
  latitude,
  longitude,
  city_name,
  address,
}) => {
  // State to store the Google map instance
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Center coordinates for the map
  const center = {
    lat: parseInt(latitude),
    lng: parseInt(longitude),
  };

  // Load the Google Maps script
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });

  // Callback when the map is loaded
  const onLoad = useCallback(
    function callback(map: any) {
      map.setZoom(16);
      map.setCenter(center);

      setMap(map);
    },
    [center]
  );

  // Callback when the map is unmounted
  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  // Handle the "Get Directions" button click
  const handleOpenDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: userLat, longitude: userLng } = position.coords;
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${latitude},${longitude}`;
          window.open(directionsUrl, "_blank");
        },
        (error) => {
          console.error("Error fetching current location: ", error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="mt-12">
      <Tabs defaultValue="hotelPolicy" className="w-full">
        <TabsList className="p-0 h-auto rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none bg-muted-[none]">
          <TabsTrigger
            value="hotelPolicy"
            className="text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
          >
            Hotel Policy
          </TabsTrigger>
          <TabsTrigger
            value="childPolicy"
            className="text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
          >
            Child Policy
          </TabsTrigger>
          <TabsTrigger
            value="cancellationPolicy"
            className="text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
          >
            Cancellation Policy
          </TabsTrigger>
          <TabsTrigger
            value="map"
            className="text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
          >
            Map
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="hotelPolicy"
          className="text-base bg-white px-7 py-5 mt-0 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg"
        >
          <div dangerouslySetInnerHTML={{ __html: hotel_policy }}></div>
        </TabsContent>
        <TabsContent
          value="childPolicy"
          className="text-base bg-white px-7 py-5 mt-0 rounded-lg"
        >
          <div dangerouslySetInnerHTML={{ __html: child_policy }}></div>
        </TabsContent>
        <TabsContent
          value="cancellationPolicy"
          className="text-base bg-white px-7 py-5 mt-0 rounded-lg"
        >
          <div dangerouslySetInnerHTML={{ __html: cancellation_policy }}></div>
        </TabsContent>
        <TabsContent
          value="map"
          className="relative text-base bg-white px-7 py-5 mt-0 rounded-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow-2 flex-shrink basis-full">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker position={center}></Marker>
                </GoogleMap>
              ) : (
                <GoogleLoader />
              )}
            </div>
            <div className="flex-grow-1 flex-shrink basis-96">
              <div className="flex flex-col h-[400px] justify-between">
                <div>
                  <div className="flex items-center text-base font-normal text-[#858585]">
                    <RiMapPinLine size={18} className="text-[#FF6535] me-1" />
                    {city_name}
                    {address}
                  </div>
                </div>

                <div>
                  <Button
                    size="lg"
                    className="w-full bg-[#FF6535]"
                    onClick={handleOpenDirections}
                  >
                    <RiMapPinLine size={18} className="text-white me-1" />
                    View on google map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default HotelMapPolicyDetails;
