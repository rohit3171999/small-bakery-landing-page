/*
* Purpose: Provide closing navigation, contact details, and legal disclaimers.
* */
export default function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand & About Column */}
                    <div className="lg:col-span-2 md:col-span-3">
                        <h3 className="text-2xl font-bold text-white mb-2">Rohit Sharma Fitness</h3>
                        <p className="max-w-md mx-auto md:mx-0">
                            Your dedicated partner in achieving sustainable fitness and a healthier lifestyle.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <address className="not-italic space-y-2">
                            <p><a href="mailto:alex@fitness.com" className="hover:text-blue-400 transition-colors">rohit3171999@gmail.com</a></p>
                            <p><a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">9873753135</a></p>
                        </address>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Alex Johnson Fitness. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}