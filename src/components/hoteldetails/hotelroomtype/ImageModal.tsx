import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageSlider from "./ImageSlider";

interface ImageSliderModalPops {
  roomTypeName: string;
  singleImage: string;
  multipleImage: string[];
}

const ImageModal: React.FC<ImageSliderModalPops> = ({
  roomTypeName,
  singleImage,
  multipleImage,
}) => {
  const imageUrlPath = process.env.NEXT_PUBLIC_MEDIA_URL as string;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full h-64 rounded-xl cursor-pointer">
          <Image
            src={`${imageUrlPath}/${singleImage}`}
            alt={roomTypeName}
            fill
            className="object-cover rounded-xl"
            sizes="auto"
            loading="lazy"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[980px] z-[2000]">
        <ImageSlider multipleImage={multipleImage} />
      </DialogContent>
    </Dialog>
  );
};
export default ImageModal;
