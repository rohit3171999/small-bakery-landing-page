/*
* Purpose: Share bakery’s origin, values, and focus on freshness & handmade products.
* */
export default function AboutBakery() {
    return (
        <section className="bg-stone-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Image Column */}
                    <div className="order-last md:order-first">
                        <img
                            src="https://thumbs.dreamstime.com/b/generated-image-403515609.jpg"
                            alt="Warm and inviting interior of the bakery with wooden counters."
                            className="rounded-lg shadow-xl w-full h-auto aspect-[4/3] object-cover"
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                            From Our Oven to Your Heart
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            It all started in a small kitchen with a big dream: to bring joy to our community through the simple pleasure of freshly baked goods. We believe in quality over quantity, using only the finest local ingredients and time-honored recipes passed down through generations.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Every loaf, pastry, and cake is handmade with passion, ensuring a delicious, authentic taste in every bite.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}