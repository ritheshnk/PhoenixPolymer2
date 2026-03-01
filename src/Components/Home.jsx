import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bgVideo from '../../backgroundVideo/Video Project.mp4'
import posterImg from '../assets/home-poster.png'

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={posterImg}
                preload="auto"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay/Tint - This must be AFTER the video to sit on top of it */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col h-full items-center justify-center text-white">
                <h1 className="text-5xl font-bold font-['Outfit'] p-2 ">Phoenix Polymer Products</h1>
                <p className="text-300  font-bold italic pl-26 ">: Trusted for Strength and Durability.</p>
                <Link to="/products" className="btn-water border-2 border-white rounded-full px-10 py-2 my-5 font-semibold hover:text-white transition-colors duration-300">
                    <span className="relative z-10">Browse Products</span>
                </Link>
            </div>
        </div>
    )
}