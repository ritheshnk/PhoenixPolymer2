import React from 'react'
import bgVideo from '../../backgroundVideo/Video Project.mp4'

export default function Home() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                src={bgVideo}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay/Tint - This must be AFTER the video to sit on top of it */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col h-full items-center justify-center text-white">
                <h1 className="text-5xl font-bold font-['Outfit'] p-2 ">Phoenix Polymers</h1>
                <p className="text-300  font-bold italic pl-26 ">: Trusted for Strength and Durability.</p>
                <a href="" className="border-2 border-white rounded-full px-10 py-2 my-5">Browse Products</a>
            </div>
        </div>
    )
}