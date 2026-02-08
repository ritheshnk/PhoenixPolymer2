export default function NavBar() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-oklch(21% 0.006 285.885) text-white transition-all duration-300">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    {/* Logo Section */}
                    <h2 className="text-2xl  tracking-wide font-['Outfit'] uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
                        Phoenix Polymers
                    </h2>

                    {/* Navigation Items */}
                    <ul className="hidden md:flex gap-8 items-center font-['Outfit'] font-medium text-lg">
                        {['Home', 'About', 'Products', 'Contact'].map((item) => (
                            <li key={item} className="relative group">
                                <a href="#" className="py-2 px-1 block relative">
                                    {item}
                                    {/* Animated Underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 ease-out group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}