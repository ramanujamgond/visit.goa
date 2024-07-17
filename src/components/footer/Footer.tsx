import {
  RiAppStoreLine,
  RiFacebookCircleFill,
  RiGooglePlayLine,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiMailLine,
  RiPhoneLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";
import { Button } from "../ui/button";

const Footer = () => {
  const year = new Date();
  return (
    <div className="relative">
      <div className="w-[100%] left-0 right-0 bottom-0 pb-4 bg-[#1f1f1f]">
        <div className="container flex justify-between">
          <div className="mt-20 mb-5">
            <div className="text-2xl font-bold text-white my-6">
              Download App
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="bg-transparent text-white px-7 py-6"
              >
                <RiGooglePlayLine size={20} className="me-1" />
                Playstore
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white px-7 py-6"
              >
                <RiAppStoreLine size={20} className="me-1" />
                App Store
              </Button>
            </div>
          </div>
          <div className="mt-20 mb-5">
            <div className="text-2xl font-bold text-white my-6">Contact us</div>
            <div className="flex items-center text-sm text-white font-normal my-1">
              <RiPhoneLine size={20} className="me-2" />
              +91 98616093847
            </div>
            <div className="flex items-center text-sm text-white font-normal">
              <RiMailLine size={20} className="me-3" />
              emailVisitGoa.gmail.com
            </div>
          </div>
          <div className="mt-20 mb-5">
            <div className="text-2xl font-bold text-white my-6">
              Connect with us on
            </div>

            <div className="flex items-center justify-between">
              <div className="text-white">
                <RiFacebookCircleFill />
              </div>
              <div className="text-white">
                <RiTwitterFill />
              </div>
              <div className="text-white">
                <RiLinkedinBoxFill />
              </div>
              <div className="text-white">
                <RiYoutubeFill />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] text-xs text-white text-center mt-6">
          © {year.getFullYear()} VisitGoa, All Right Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
