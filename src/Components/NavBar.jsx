import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
    ];

    // Toggle menu handler
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when a link is clicked
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-oklch(21% 0.006 285.885) text-white transition-all duration-300">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-8">
                    {/* Logo Section */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-2xl tracking-wide font-['Outfit'] uppercase cursor-pointer hover:scale-105 transition-transform duration-300 z-50 relative"
                    >
                        Phoenix Polymer Products
                    </Link>

                    {/* Desktop Navigation Items */}
                    <ul className="hidden md:flex gap-8 items-center font-['Outfit'] font-medium text-lg">
                        {navItems.map((item) => (
                            <li key={item.name} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`py-2 px-1 block relative ${location.pathname === item.path ? 'text-red-400' : ''}`}
                                >
                                    {item.name}
                                    {/* Animated Underline */}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-red-800 transition-all duration-300 ease-out ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute left-0 top-0 w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                            ></span>
                            <span
                                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                            ></span>
                            <span
                                className={`absolute left-0 bottom-0 w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                            ></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '100vh' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden fixed inset-0 top-0 left-0 w-full bg-neutral-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
                        >
                            <ul className="flex flex-col gap-8 items-center font-['Outfit'] font-medium text-2xl">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={closeMenu}
                                            className={`block py-2 px-4 transition-colors duration-300 hover:text-red-500 ${location.pathname === item.path ? 'text-red-500 font-bold' : 'text-white'}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}