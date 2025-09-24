/*
* Purpose: Encourage quick conversions with action buttons or subscription.
* */
export default function CallToAction() {
    return (
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">
                    Craving Something Sweet?
                </h2>
                <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                    Get your favorite treats delivered fresh to your door, or join our newsletter for exclusive offers.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Primary CTA Button */}
                    <button
                        className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg
                                   shadow-lg transition-transform duration-300 ease-in-out
                                   hover:bg-orange-50 hover:scale-105
                                   focus:outline-none focus:ring-4 focus:ring-white/50"
                    >
                        Order Online Now
                    </button>

                    {/* Newsletter Form */}
                    <form className="w-full max-w-sm flex" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 flex-auto rounded-l-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-white/50 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="flex-none rounded-r-lg bg-gray-800 px-5 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}