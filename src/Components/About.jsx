import AboutImg from "../assets/Images/ISO_Certification.jpeg"

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 font-['Outfit']">
            <div className=" my-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/20 p-8 rounded-2xl  backdrop-blur-sm shadow-2xl">

                {/* Text Content */}
                <div className="space-y-6 text-left">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        About Us

                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-red-600 pl-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-full rounded-l overflow-hidden border-2 border-white/10 group">
                        <img
                            src={AboutImg}
                            alt="About Phoenix Polymers"
                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}