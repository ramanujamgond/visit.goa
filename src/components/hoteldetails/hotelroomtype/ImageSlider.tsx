import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageSliderProps {
  multipleImage: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ multipleImage }) => {
  // states used for carousel
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

  // import media base link for image urls
  const imageUrlPath = process.env.NEXT_PUBLIC_MEDIA_URL as string;

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
          {multipleImage?.map((image, index) => (
            <CarouselItem key={index} className="h-full rounded-xl pl-2">
              <div className="p-1 h-full rounded-xl">
                <div className="h-full rounded-xl">
                  <div className="flex items-center justify-between rounded-xl my-3">
                    <div className="relative w-full max-w-[980px] rounded-xl h-[450px]">
                      <Image
                        priority={false}
                        src={`${imageUrlPath}/${image}`}
                        alt={image}
                        fill
                        className="object-cover rounded-xl"
                        sizes="auto"
                      />
                    </div>
                  </div>
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
  );
};
export default ImageSlider;
