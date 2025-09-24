/*
* Purpose: First impression with bakery branding, tagline, and primary call-to-action.
* */
export default function HeroSection() {
    return (
        <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-center text-white">
            {/* Background Image & Overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                    alt="A delicious assortment of freshly baked pastries on a wooden table."
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
                    Freshly Baked Happiness Every Day
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
                    Discover the taste of tradition, crafted with love and the finest ingredients right in your neighborhood.
                </p>
                <button
                    className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg
transition-transform duration-300 ease-in-out
hover:bg-amber-400 hover:scale-105
focus:outline-none focus:ring-4 focus:ring-amber-300"
                >
                    View Menu
                </button>
            </div>
        </section>
    );
}