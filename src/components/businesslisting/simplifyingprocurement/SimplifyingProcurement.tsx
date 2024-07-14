import { Button } from '@/components/ui/button'
import { RiBardFill } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const SimplifyingProcurement = () => {
    return (
        <div className="container py-8">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-1 flex-grow-1 basis-1/2">
                    <div className="w-[507px] h-[495px] relative">
                        <Image
                            src="/simplifying-procurement.png"
                            alt="Simplifying Procurement"
                            priority
                            fill
                            className="object-cover rounded-xl"
                            sizes="auto"
                        />
                    </div>
                </div>
                <div className="flex-shrink-1 flex-grow-1 basis-1/2">
                    <div>
                        <div className="text-2xl font-bold mb-5">Simplifying Procurement for Hoteliers with JINI Marketplace</div>
                        <div className="text-base text-[#7A7A7A] my-3 text-justify">Discover a seamless and efficient way for hoteliers to procure supplies with JINI Marketplace. With a wide range of products and a user-friendly interface, hoteliers can easily find and purchase everything they need to run their business smoothly.</div>

                        <div className="flex item-center text-base my-6"><RiBardFill className='me-2' />Extensive Product Selection</div>

                        <div className="flex item-center text-base my-6"><RiBardFill className='me-2' />Streamlined Ordering Process</div>

                        <div className="flex item-center text-base my-6"><RiBardFill className='me-2' />Competitive Pricing and Reliable Suppliers</div>

                        <div className="flex items-center justify-start my-6 mt-8">
                            <Button size="lg" className="bg-[#FF6535]">Join Bharatstay</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimplifyingProcurement