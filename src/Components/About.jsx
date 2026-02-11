import AboutImg from "../assets/Images/ISO_Certification.jpeg"

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 md:p-12 font-['Outfit'] relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/10 p-8 md:p-12 rounded-3xl bg-neutral-900/50 backdrop-blur-xl shadow-2xl relative z-10 my-8">

                {/* Text Content */}
                <div className="space-y-8 text-left">
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            About Us
                        </h1>
                        <h2 className="text-xl md:text-2xl text-red-500 font-medium tracking-wide">
                            Precision Engineering. Premium Polymers.
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Founded in <span className="text-white font-semibold">2019</span> and headquartered in the industrial hub of Bangalore,
                        <span className="text-white font-semibold"> Phoenix Polymer Products</span> is a leading manufacturer specializing in high-performance moulded rubber and plastic components.
                        We bridge the gap between complex engineering requirements and cost-effective manufacturing, delivering tailored solutions to a global clientele.
                    </p>

                    <div className="space-y-6 pt-4">
                        <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2 inline-block">Why Industry Leaders Choose Us</h3>
                        <div className="grid gap-6">
                            <div className="group">
                                <h4 className="text-red-400 font-bold text-lg group-hover:text-red-300 transition-colors">Material Mastery</h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    We work with a vast spectrum of elastomers and thermoplastics—from Viton and Silicone to High-Density Polyethylene (HDPE)—ensuring every part is optimized for its environment.
                                </p>
                            </div>
                            <div className="group">
                                <h4 className="text-red-400 font-bold text-lg group-hover:text-red-300 transition-colors">Precision Manufacturing</h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    Our expertise spans intricate Rubber-to-Metal bonding to high-durability Oil Seals and Gaskets, all engineered for zero-fail performance.
                                </p>
                            </div>
                            <div className="group">
                                <h4 className="text-red-400 font-bold text-lg group-hover:text-red-300 transition-colors">Dynamic Scalability</h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    What began as a specialized small-scale unit has evolved into a powerhouse of quality, defined by our "Quality First" philosophy and rapid delivery timelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative group w-full flex justify-center [perspective:1000px]">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-gray-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                        <img
                            src={AboutImg}
                            alt="Phoenix Polymers ISO Certification"
                            className="w-full h-auto object-contain transform transition-transform duration-700 hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm font-medium tracking-wider text-center uppercase">Certified Quality & Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}