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
    <div className="w-11/12 mx-auto py-8">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full h-[450px]"
      >
        <CarouselContent className="h-[450px]">
          {exterior_images?.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <div className="h-full">
                  <CardContent className="flex items-center justify-center flex-col h-full p-6">
                    <div className="flex items-center justify-between my-3">
                      <div className="relative w-[100%] min-w-[1080px] h-[450px] me-3">
                        <Image
                          src={`${imageUrlPath}/${image}`}
                          alt={image}
                          fill
                          className="object-cover"
                          sizes="auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HotelDetailSlider;
