import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <div className='container mt-14 mb-24'>
            <div className='bg-[#15171D] container py-14 rounded-2xl flex flex-col-reverse md:flex-row justify-around items-center gap-10 lg:mb-14'>
                <div className='space-y-4 text-center md:text-left'>
                    <p className='text-[#C2F800] font-bold text-sm'>WORKOUT LIBRARY</p>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-white'>TRAIN WITH INTENT. <br /> LOG EVERY SET.</h1>
                    <p className='text-[#9CA3AF] text-wrap'>FitLog is a dark, no-nonsense gym companion: pick a lift, <br /> lock it into {"today's"} plan, and watch the {"week's"} work add up.</p>
                    <a href="#library" className='btn bg-[#C2F800] text-black hover:bg-[#A8D500] focus:bg-[#A8D500] active:bg-[#A8D500] uppercase font-bold'>Browse Workouts</a>
                </div>
                <div>
                    <Image src="/images/banner.png" alt="FITLOG Banner" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Banner