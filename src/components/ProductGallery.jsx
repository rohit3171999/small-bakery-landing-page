import { useState } from 'react';

/*
* Purpose: Showcase baked goods with images, names, descriptions, and prices.
* */

const products = [
    {
        category: 'Cakes',
        name: 'Velvet Chocolate Cake',
        description: 'Rich, decadent chocolate layers with a smooth velvet frosting.',
        price: '$35.00',
        imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop',
    },
    {
        category: 'Pastries',
        name: 'Classic Croissant',
        description: 'Buttery, flaky, and baked to golden perfection.',
        price: '$4.50',
        imageUrl: 'https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-threeByTwoMediumAt2X.jpg',
    },
    {
        category: 'Bread',
        name: 'Artisan Sourdough',
        description: 'A rustic loaf with a chewy crust and a soft, airy interior.',
        price: '$8.00',
        imageUrl: 'https://images.unsplash.com/photo-1534620808146-d336b362675c?q=80&w=1974&auto=format&fit=crop',
    },
    {
        category: 'Cookies',
        name: 'Chocolate Chip Cookies',
        description: 'A timeless classic, loaded with gooey chocolate chips.',
        price: '$3.00',
        imageUrl: 'data:image/jpeg;base64,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',
    },
    {
        category: 'Pastries',
        name: 'Cinnamon Roll',
        description: 'A warm, sweet roll drizzled with creamy icing.',
        price: '$5.50',
        imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
    },
    {
        category: 'Cakes',
        name: 'Strawberry Shortcake',
        description: 'Light sponge cake with fresh strawberries and whipped cream.',
        price: '$40.00',
        imageUrl: 'https://www.allrecipes.com/thmb/Dhb0atrypaWX3v2io2DyAACE6sQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8201-strawberry-shortcake-ddmfs-5777-hero-1x2-1-0bde2ca6dd554b77b3ef5362b2b43a05.jpg',
    },
];

const categories = ['All', 'Cakes', 'Pastries', 'Bread', 'Cookies'];

export default function ProductGallery() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Daily Fresh Bakes</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Explore our selection of handcrafted goods, made fresh every morning.
                    </p>
                </div>

                {/* Category Filters */}
                <nav className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`py-2 px-5 rounded-full font-semibold text-sm sm:text-base transition-colors duration-300
                                ${activeCategory === category
                                ? 'bg-gray-800 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.name} className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-w-3 aspect-h-2">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="p-6 bg-white">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                    <span className="text-lg font-bold text-amber-600">{product.price}</span>
                                </div>
                                <p className="mt-2 text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}