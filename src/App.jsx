import React from 'react';

// --- Data for the Bakery ---
const bakeryInfo = {
    name: "The Golden Crust",
    tagline: "Freshly Baked Happiness Every Day",
    story: "Founded in 2020, The Golden Crust started as a small family dream. We believe in the magic of traditional baking, using only the freshest local ingredients. Every loaf, pastry, and cake is handcrafted with love, bringing a slice of warmth from our oven to your home.",
};

const products = [
    {
        category: 'Cakes',
        name: 'Chocolate Truffle Cake',
        description: 'A rich and moist chocolate cake layered with silky truffle ganache.',
        price: '₹850',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop',
    },
    {
        category: 'Pastries',
        name: 'Classic Butter Croissant',
        description: 'Flaky, buttery, and perfectly golden. A timeless French delight.',
        price: '₹120',
        image: 'https://images.unsplash.com/photo-1598114357253-11a31604a434?q=80&w=1974&auto=format&fit=crop',
    },
    {
        category: 'Cookies',
        name: 'Choco Chip Cookies',
        description: 'Soft, chewy, and loaded with premium chocolate chips.',
        price: '₹80 (per piece)',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop',
    },
    {
        category: 'Bread',
        name: 'Sourdough Bread',
        description: 'Artisanal sourdough with a tangy flavor and a perfectly crisp crust.',
        price: '₹350',
        image: 'https://images.unsplash.com/photo-1589992896387-a50388659719?q=80&w=1974&auto=format&fit=crop',
    },
    {
        category: 'Cakes',
        name: 'Red Velvet Cake',
        description: 'A stunning red velvet cake with a smooth cream cheese frosting.',
        price: '₹950',
        image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd3be?q=80&w=1974&auto=format&fit=crop'
    },
    {
        category: 'Pastries',
        name: 'Almond Croissant',
        description: 'Filled with a sweet almond paste and topped with toasted almonds.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1621941221025-a7c3c036c11a?q=80&w=1964&auto=format&fit=crop'
    }
];

const specialOffers = [
    {
        title: "Deal of the Day",
        item: "Chocolate Truffle Cake",
        description: "Get 20% off on our bestselling Chocolate Truffle Cake. Perfect for any celebration!",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop"
    },
    {
        title: "Festive Special",
        item: "Christmas Cookies",
        description: "A delightful assortment of handcrafted cookies, available for a limited time.",
        image: "https://images.unsplash.com/photo-1575797826435-8a221a4a492f?q=80&w=1974&auto=format&fit=crop"
    }
];

const testimonials = [
    {
        quote: "The best croissants I've ever had! So flaky and buttery. This bakery is a hidden gem.",
        name: "Priya Singh",
        rating: 5,
    },
    {
        quote: "I ordered a birthday cake from here, and it was absolutely divine. Highly recommended!",
        name: "Amit Kumar",
        rating: 5,
    },
    {
        quote: "A cozy place with the aroma of fresh bread. Their sourdough is a must-try.",
        name: "Anjali Mehta",
        rating: 4,
    },
];

const App = () => {
    return (
        <div className="bg-amber-50 text-gray-800 font-sans">
            {/* --- Inline CSS for Tailwind + Custom Styles --- */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap');

                body { font-family: 'Roboto', sans-serif; }
                .section-title { @apply text-4xl font-bold font-serif text-gray-800; }
                .hero-section {
                    height: 80vh;
                    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                }
                .font-serif { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Roboto', sans-serif; }
            `}</style>

            {/* --- Header & Hero Section --- */}
            <header className="hero-section text-white text-center flex flex-col justify-center items-center p-8">
                <h1 className="text-5xl md:text-7xl font-bold font-serif">{bakeryInfo.name}</h1>
                <p className="text-xl md:text-2xl mt-4 max-w-2xl">{bakeryInfo.tagline}</p>
                <a href="#menu" className="mt-8 bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition duration-300">
                    View Our Menu
                </a>
            </header>

            <main>
                {/* About Section */}
                <section id="about" className="py-20 px-6 bg-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-title">Our Story</h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">{bakeryInfo.story}</p>
                    </div>
                </section>

                {/* Product Showcase */}
                <section id="menu" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="section-title">Our Baked Goods</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                                    <div className="overflow-hidden h-64">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold font-serif">{product.name}</h3>
                                        <p className="text-gray-600 mt-2">{product.description}</p>
                                        <p className="mt-4 text-xl font-bold text-amber-600">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offers */}
                <section id="offers" className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="section-title">Signature Items & Offers</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                            {specialOffers.map((offer, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center bg-amber-50 rounded-lg shadow-md overflow-hidden">
                                    <img src={offer.image} alt={offer.item} className="w-full md:w-1/2 h-64 object-cover"/>
                                    <div className="p-6 text-left">
                                        <h3 className="text-sm font-bold uppercase text-amber-500">{offer.title}</h3>
                                        <h4 className="text-2xl font-semibold font-serif mt-2">{offer.item}</h4>
                                        <p className="text-gray-600 mt-2">{offer.description}</p>
                                        <a href="#contact" className="mt-4 inline-block bg-amber-500 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition duration-300">
                                            Inquire Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-20 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="section-title">What Our Customers Say</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.362-2.44a1 1 0 00-1.176 0l-3.362 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                    <p className="mt-4 font-bold text-lg">{testimonial.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact & Location */}
                <section id="contact" className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
                            <h2 className="section-title text-left mb-6">Get In Touch</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message / Order Inquiry</label>
                                    <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold font-serif">Visit Our Bakery</h3>
                            <p className="mt-4 text-lg">123 Bakery Lane, Bharthia, Uttar Pradesh</p>
                            <p className="mt-2 text-lg">Phone: +91 98765 43210</p>
                            <div className="mt-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114173.34185244192!2d82.49887754335937!3d26.592535900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990b79134931a99%3A0x63319e79ea50b05!2sBharthia%2C%20Uttar%2 Pradesh!5e0!3m2!1sen!2sin!4v1725625442542!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Bakery Location"
                                    className="rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-2xl font-bold">{bakeryInfo.name}</h3>
                    <p className="mt-2">Connecting our community through the love of baking.</p>
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="#" className="hover:text-amber-400">Instagram</a>
                        <a href="#" className="hover:text-amber-400">Facebook</a>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-6">
                        <p>&copy; {new Date().getFullYear()} The Golden Crust. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
