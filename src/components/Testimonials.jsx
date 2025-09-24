/*
* Purpose: Build credibility with client stories, ratings, and transformation visuals.
* */
export default function Testimonials(){
    return (
        <section id="testimonials" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Testimonials & Success Stories
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from clients who have transformed their lives with our help.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Testimonial Card 1 */}
                    <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        {/* Star Rating */}
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-600 italic mb-6 flex-grow">
                            "The personalized plan was a game-changer. I've never felt stronger or more confident. Alex is not just a trainer, but a true motivator."
                        </blockquote>
                        <div className="flex items-center mt-auto">
                            <img className="w-12 h-12 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar of Jessica L."/>
                            <div>
                                <p className="font-bold text-gray-900">Jessica L.</p>
                                <p className="text-sm text-gray-500">- Lost 25 lbs in 3 months</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        {/* Star Rating */}
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-600 italic mb-6 flex-grow">
                            "Online coaching was perfect for my busy schedule. The weekly check-ins kept me accountable and the results speak for themselves."
                        </blockquote>
                        <div className="flex items-center mt-auto">
                            <img className="w-12 h-12 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar of Mark C."/>
                            <div>
                                <p className="font-bold text-gray-900">Mark C.</p>
                                <p className="text-sm text-gray-500">- Gained 10 lbs of muscle</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
                        {/* Star Rating */}
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-600 italic mb-6 flex-grow">
                            "The nutritional guidance was eye-opening. I learned so much about fueling my body correctly. It's not a diet, it's a lifestyle."
                        </blockquote>
                        <div className="flex items-center mt-auto">
                            <img className="w-12 h-12 rounded-full mr-4 object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar of Sarah P."/>
                            <div>
                                <p className="font-bold text-gray-900">Sarah P.</p>
                                <p className="text-sm text-gray-500">- Improved energy levels</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}