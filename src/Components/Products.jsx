import React from 'react';

// Dynamically import all product images from the assets folder
const imageModules = import.meta.glob('../assets/AllProducts/*.jpeg', { eager: true });

// Convert to array and sort numerically by filename (e.g., img2 before img10)
const productImages = Object.entries(imageModules)
    .map(([path, module]) => {
        const match = path.match(/(\d+)/);
        const number = match ? parseInt(match[0], 10) : 0;
        return { number, src: module.default };
    })
    .sort((a, b) => a.number - b.number)
    .map(item => item.src);

// Generate unique dummy data for all detected images
const products = productImages.map((img, index) => {
    // Determine a product number based on the index + 1
    const productNumber = index + 1;

    return {
        id: productNumber,
        // Unique dummy name that the user can easily replace later
        name: `Phoenix Product ${productNumber}`,
        image: img,
        // Generic description placeholder
        desc: 'Premium quality industrial polymer material designed for high performance, durability, and specific manufacturing requirements.',
    };
});

export default function Products() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-['Outfit'] pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        Our Premium Products
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Explore our range of high-quality polymer solutions designed for strength, durability, and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden hover:border-red-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                                    {product.desc}
                                </p>
                                <button className="w-full py-2 px-4 rounded-lg bg-neutral-800 hover:bg-red-700 text-sm font-medium transition-all duration-300 border border-neutral-700 hover:border-red-600">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}