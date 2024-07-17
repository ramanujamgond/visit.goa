import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RiArrowRightSLine,
  RiCheckDoubleLine,
  RiGlobalLine,
  RiPuzzle2Line,
} from "@remixicon/react";
import Image from "next/image";

const PartnerIntegration = () => {
  return (
    <div className="container my-8">
      <Tabs defaultValue="preferred_integration" className="w-full">
        <TabsList className="bg-muted-[none]">
          <TabsTrigger
            value="preferred_integration"
            className="min-w-[256px] flex-col text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-none data-[state=active]:bg-muted-[none] after:content-[''] after:w-[200px] after:h-[3px] after:bg-muted-[none] after:rounded-[20px] after:mt-2 data-[state=active]:after:content-[''] data-[state=active]:after:w-[100px] data-[state=active]:after:h-[3px] data-[state=active]:after:bg-[#685CF1] data-[state=active]:after:rounded-[20px] data-[state=active]:after:mt-2"
          >
            Preferred Integration
          </TabsTrigger>
          <TabsTrigger
            value="door_lock_intrigation"
            className="min-w-[256px] flex-col text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-none data-[state=active]:bg-muted-[none] after:content-[''] after:w-[200px] after:h-[3px] after:bg-muted-[none] after:rounded-[20px] after:mt-2 data-[state=active]:after:content-[''] data-[state=active]:after:w-[100px] data-[state=active]:after:h-[3px] data-[state=active]:after:bg-[#685CF1] data-[state=active]:after:rounded-[20px] data-[state=active]:after:mt-2"
          >
            Door Lock Intrigation
          </TabsTrigger>
          <TabsTrigger
            value="electronic_sign_pad"
            className="min-w-[256px] flex-col text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-none data-[state=active]:bg-muted-[none] after:content-[''] after:w-[200px] after:h-[3px] after:bg-muted-[none] after:rounded-[20px] after:mt-2 data-[state=active]:after:content-[''] data-[state=active]:after:w-[100px] data-[state=active]:after:h-[3px] data-[state=active]:after:bg-[#685CF1] data-[state=active]:after:rounded-[20px] data-[state=active]:after:mt-2"
          >
            Electronic Sign Pad
          </TabsTrigger>
          <div className="min-w-[256px] flex text-base font-medium px-7 py-1.5 data-[state=active]:shadow-none rounded-none data-[state=active]:bg-muted-[none] after:content-[''] after:w-[200px] after:h-[3px] after:bg-muted-[none] after:rounded-[20px] after:mt-2 cursor-pointer pb-4">
            Many more <RiArrowRightSLine />
          </div>
        </TabsList>
        <TabsContent value="preferred_integration" className="my-6">
          <div className="grid grid-cols-[repeat(4,_1fr)] gap-10">
            <div className="w-100 bg-white rounded-xl [box-shadow:0px_4px_11.9px_0px_rgba(107,_107,_107,_0.15)]">
              <div className="p-3 flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center text-[#1A7A12] bg-[#C7F1C0] p-2 font-normal text-center rounded-lg gap-3 mb-2">
                  <RiCheckDoubleLine /> Preferred
                </div>

                <div className="w-[86px] h-[70px] border-[1px] border-[E7E7E7] rounded-lg my-2 relative">
                  <Image
                    src={"/qnity.png"}
                    alt="qnity integration image"
                    priority
                    fill
                    className="object-contain p-2"
                    sizes="auto"
                  />
                </div>

                <div className="text-base font-semibold my-2">
                  Onity Door Lock
                </div>

                <div className="flex items-center justify-center gap-4 my-2">
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiGlobalLine className="text-[#685CF1]" />
                  </div>
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiPuzzle2Line className="text-[#685CF1]" />
                  </div>
                </div>

                <Button className="text-white bg-[#685CF1] w-full my-2">
                  Contact Us
                </Button>

                <div className="text-sm underline cursor-pointer text-[#1A20BD] my-2">
                  View More
                </div>
              </div>
            </div>

            <div className="w-100 bg-white rounded-xl [box-shadow:0px_4px_11.9px_0px_rgba(107,_107,_107,_0.15)]">
              <div className="p-3 flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center text-[#1A7A12] bg-[#C7F1C0] p-2 font-normal text-center rounded-lg gap-3 mb-2">
                  <RiCheckDoubleLine /> Preferred
                </div>

                <div className="w-[86px] h-[70px] border-[1px] border-[E7E7E7] rounded-lg my-2 relative">
                  <Image
                    src={"/qnity.png"}
                    alt="qnity integration image"
                    priority
                    fill
                    className="object-contain p-2"
                    sizes="auto"
                  />
                </div>

                <div className="text-base font-semibold my-2">
                  Onity Door Lock
                </div>

                <div className="flex items-center justify-center gap-4 my-2">
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiGlobalLine className="text-[#685CF1]" />
                  </div>
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiPuzzle2Line className="text-[#685CF1]" />
                  </div>
                </div>

                <Button className="text-white bg-[#685CF1] w-full my-2">
                  Contact Us
                </Button>

                <div className="text-sm underline cursor-pointer text-[#1A20BD] my-2">
                  View More
                </div>
              </div>
            </div>

            <div className="w-100 bg-white rounded-xl [box-shadow:0px_4px_11.9px_0px_rgba(107,_107,_107,_0.15)]">
              <div className="p-3 flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center text-[#1A7A12] bg-[#C7F1C0] p-2 font-normal text-center rounded-lg gap-3 mb-2">
                  <RiCheckDoubleLine /> Preferred
                </div>

                <div className="w-[86px] h-[70px] border-[1px] border-[E7E7E7] rounded-lg my-2 relative">
                  <Image
                    src={"/qnity.png"}
                    alt="qnity integration image"
                    priority
                    fill
                    className="object-contain p-2"
                    sizes="auto"
                  />
                </div>

                <div className="text-base font-semibold my-2">
                  Onity Door Lock
                </div>

                <div className="flex items-center justify-center gap-4 my-2">
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiGlobalLine className="text-[#685CF1]" />
                  </div>
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiPuzzle2Line className="text-[#685CF1]" />
                  </div>
                </div>

                <Button className="text-white bg-[#685CF1] w-full my-2">
                  Contact Us
                </Button>

                <div className="text-sm underline cursor-pointer text-[#1A20BD] my-2">
                  View More
                </div>
              </div>
            </div>

            <div className="w-100 bg-white rounded-xl [box-shadow:0px_4px_11.9px_0px_rgba(107,_107,_107,_0.15)]">
              <div className="p-3 flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center text-[#1A7A12] bg-[#C7F1C0] p-2 font-normal text-center rounded-lg gap-3 mb-2">
                  <RiCheckDoubleLine /> Preferred
                </div>

                <div className="w-[86px] h-[70px] border-[1px] border-[E7E7E7] rounded-lg my-2 relative">
                  <Image
                    src={"/qnity.png"}
                    alt="qnity integration image"
                    priority
                    fill
                    className="object-contain p-2"
                    sizes="auto"
                  />
                </div>

                <div className="text-base font-semibold my-2">
                  Onity Door Lock
                </div>

                <div className="flex items-center justify-center gap-4 my-2">
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiGlobalLine className="text-[#685CF1]" />
                  </div>
                  <div className="bg-[#FFEAE4] rounded p-1">
                    <RiPuzzle2Line className="text-[#685CF1]" />
                  </div>
                </div>

                <Button className="text-white bg-[#685CF1] w-full my-2">
                  Contact Us
                </Button>

                <div className="text-sm underline cursor-pointer text-[#1A20BD] my-2">
                  View More
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="door_lock_intrigation" className="my-6">
          Door lock integration comming soon.
        </TabsContent>
        <TabsContent value="electronic_sign_pad" className="my-6">
          Electronic sign pad comming soon.
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default PartnerIntegration;
