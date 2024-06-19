import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "../ui/card";
import { RiShiningFill } from "@remixicon/react";
import Image from "next/image";

interface SliderImageProps {
  exterior_images: string[];
}

const HotelDetailSlider: React.FC<SliderImageProps> = ({ exterior_images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const imageUrlPath = "https://d3ki85qs1zca4t.cloudfront.net/bookingEngine";

  return (
    <div className="w-full mx-auto rounded-xl">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-[480px] rounded-xl"
      >
        <CarouselContent className="h-[480px] rounded-xl  -ml-[0.5rem]">
          {exterior_images?.map((image, index) => (
            <CarouselItem key={index} className="h-full rounded-xl pl-2">
              <div className="p-1 h-full rounded-xl">
                <div className="h-full rounded-xl">
                  <div className="flex items-center justify-between rounded-xl my-3">
                    <div className="relative w-[100vw] rounded-xl h-[450px]">
                      <Image
                        src={`${imageUrlPath}/${image}`}
                        alt={image}
                        fill
                        className="object-cover rounded-xl"
                        sizes="auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HotelDetailSlider;
