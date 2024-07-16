"use client";
import { useEffect, useState } from "react";
import { CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RiShiningFill } from "@remixicon/react";
import Image from "next/image";

const CustomerFeedbacksReviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="container">
      <div className="py-8">
        <div className="text-2xl font-bold text-center">
          What our customers says about us
        </div>

        <div className="w-11/12 mx-auto py-8">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-[240px]"
          >
            <CarouselContent className="h-[240px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-1 h-full">
                    <div className="h-full">
                      <CardContent className="flex items-center justify-center flex-col h-full p-6">
                        <div className="flex items-center justify-between my-3">
                          <RiShiningFill className="mx-1 text-[#FF6535]" />
                          <RiShiningFill className="mx-1 text-[#FF6535]" />
                          <RiShiningFill className="mx-1 text-[#FF6535]" />
                          <RiShiningFill className="mx-1 text-[#FF6535]" />
                          <RiShiningFill className="mx-1 text-[#FF6535]" />
                        </div>

                        <div className="text-2xl font-medium text-center my-3">
                          Our experience with Bharatstay has been exceptional.
                          Their AI-based Experience Concierge has greatly
                          improved our guest satisfaction.
                        </div>

                        <div className="flex items-center justify-between my-3">
                          <div className="relative w-[45px] h-[45px] rounded-full me-3">
                            <Image
                              src="/popular_destinations_0.png"
                              alt="Guest: Mehdin Khan"
                              fill
                              className="object-cover rounded-full"
                              sizes="auto"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              Mehdin khan
                            </div>
                            <div className="text-sm font-light">
                              Travel Blogger, Wanderlust Travels
                            </div>
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

          <div className="flex justify-center mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <span
                key={index}
                className={`block w-2.5 h-2.5 rounded-full mx-2 ${
                  index + 1 === current ? "bg-[#FF6535]" : "bg-gray-400"
                }`}
                onClick={() => api && api.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerFeedbacksReviews;
