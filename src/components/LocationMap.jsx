/*
* Purpose: Show bakery’s physical address, phone number, and embedded Google Maps.
*/
export default function LocationMap() {
    return (
        <section className="bg-stone-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Come Say Hello!</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        We're looking forward to serving you at our cozy little corner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    {/* Contact Info Column */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex flex-col md:flex-row items-center md:items-start text-left gap-4">
                                <div className="flex-shrink-0 bg-amber-100 text-amber-600 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <address className="not-italic text-gray-700">
                                    <span className="font-bold text-lg text-gray-900">Our Bakery</span><br />
                                    123 Sweet Street<br />
                                    Bakersville, CA 90210
                                </address>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col md:flex-row items-center md:items-start text-left gap-4">
                                <div className="flex-shrink-0 bg-amber-100 text-amber-600 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-bold text-lg text-gray-900">Call Us</span><br />
                                    (555) 123-4567
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="flex flex-col md:flex-row items-center md:items-start text-left gap-4">
                                <div className="flex-shrink-0 bg-amber-100 text-amber-600 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-bold text-lg text-gray-900">Opening Hours</span><br />
                                    Mon - Sat: 7:00 AM - 6:00 PM<br />
                                    Sunday: 8:00 AM - 4:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="md:col-span-3 h-80 md:h-full min-h-[300px] rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.710204899539!2d-118.4118343847847!3d34.0512029806061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d3489119%3A0x252341055744803!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1678886456789!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bakery Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}