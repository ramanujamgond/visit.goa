import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-shrink-1 flex-grow-1 basis-1/2">
          <div className="text-2xl font-bold">Frequently Asked Questions</div>
          <div className="text-sm font-normal text-[#7A7A7A] mb-6">
            Find answers to common questions hoteliers have about joining
            Bharatstay.
          </div>

          <Button size={"lg"} className="bg-[#FF6535]">
            Contact Us
          </Button>
        </div>
        <div className="flex-shrink-1 flex-grow-1 basis-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                How to join Bharatstay?
              </AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-[#727272]">
                To join Bharatstay, simply visit our website and click on the
                'Sign Up' button. Fill in the required information and our team
                will get in touch with you.
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-[#c7c7c7] my-3" />

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base">
                What are the benefits?
              </AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-[#727272]">
                By joining Bharatstay, you can enjoy the benefits of our
                AI-based Experience Concierge, JINI Marketplace, HR and Payroll
                Outsourcing, JINI Smart Hotel, AD Network, and more.
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-[#c7c7c7] my-3" />

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base">
                How does it work?
              </AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-[#727272]">
                Bharatstay works by connecting hoteliers with travelers through
                our platform. We provide a seamless booking experience and help
                you reach a wider audience.
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-[#c7c7c7] my-3" />

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base">
                What is the cost?
              </AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-[#727272]">
                Joining Bharatstay is completely free. We operate on a zero
                commission model, allowing you to maximize your earnings.
              </AccordionContent>
            </AccordionItem>

            <Separator className="bg-[#c7c7c7] my-3" />

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base">
                How can I contact?
              </AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-[#727272]">
                For any further questions or assistance, please feel free to
                contact our support team through the provided contact details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Separator className="bg-[#c7c7c7] my-3" />
        </div>
      </div>
    </div>
  );
};
export default FrequentlyAskedQuestions;
