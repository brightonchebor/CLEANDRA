import React from 'react';
import { Sparkles, Clock, Shield, ArrowRight, Home, Building2, Utensils, Car, Sofa, Droplets, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Home,
            title: "Post-Checkout Cleaning",
            description: "Complete deep cleaning after guest departure including linen change and bed making",
            features: ["Linen change & bed making", "Complete surface sanitization", "Guest-ready preparation"],
            color: "bg-blue-500"
        },
        {
            icon: Droplets,
            title: "Bathroom & Kitchen Deep Clean",
            description: "Intensive scrubbing and sanitization of all bathroom and kitchen surfaces",
            features: ["Deep scrubbing all surfaces", "Appliance cleaning inside & out", "Grout and tile restoration"],
            color: "bg-teal-500"
        },
        {
            icon: Sparkles,
            title: "Complete Surface Care",
            description: "Comprehensive sweeping, mopping, dusting and polishing of all areas",
            features: ["Professional sweeping & mopping", "Detailed dusting service", "Surface polishing & protection"],
            color: "bg-purple-500"
        },
        {
            icon: Building2,
            title: "Window & Curtain Service",
            description: "Crystal clear windows and fresh curtain cleaning for the perfect finish",
            features: ["Interior & exterior windows", "Curtain deep cleaning", "Blind maintenance"],
            color: "bg-green-500"
        },
        {
            icon: Sofa,
            title: "Furniture & Upholstery",
            description: "Professional care for all furniture and upholstered items",
            features: ["Deep upholstery cleaning", "Leather care & conditioning", "Fabric protection treatment"],
            color: "bg-orange-500"
        },
        {
            icon: Shield,
            title: "Premium Protection",
            description: "Eco-friendly products with comprehensive insurance coverage",
            features: ["100% eco-friendly products", "Fully insured service", "Satisfaction guarantee"],
            color: "bg-yellow-600"
        }
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-yellow-600">Professional</span> Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From post-checkout deep cleaning to comprehensive maintenance, we deliver exceptional results with eco-friendly products and insured professionals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            {/* Service Header */}
                            <div className="p-8 pb-6">
                                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="h-7 w-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Effect Bottom */}
                            <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="text-white">
                            <div className="flex items-center justify-center mb-4">
                                <Clock className="h-8 w-8 text-yellow-400" />
                            </div>
                            <div className="text-3xl font-bold mb-2">500+</div>
                            <div className="text-gray-300">Properties Cleaned</div>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center justify-center mb-4">
                                <Shield className="h-8 w-8 text-yellow-400" />
                            </div>
                            <div className="text-3xl font-bold mb-2">100%</div>
                            <div className="text-gray-300">Satisfaction Rate</div>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center justify-center mb-4">
                                <Sparkles className="h-8 w-8 text-yellow-400" />
                            </div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <div className="text-gray-300">Service Availability</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-yellow-50 rounded-2xl p-8 lg:p-12 border-2 border-yellow-100">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Ready for a <span className="text-yellow-600">Spotless</span> Space?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Experience the difference with Kenya's most trusted cleaning professionals.
                            Eco-friendly products, insured team, and guaranteed satisfaction.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
                            <Link
                                to="/services"
                                className="w-full sm:w-auto bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-3 shadow-lg group"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <span>View All Services</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/book"
                                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <Calendar className="h-5 w-5" />
                                <span>Book Now</span>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;