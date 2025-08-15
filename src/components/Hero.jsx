import React from 'react';
import { CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import woman from '../assets/woman.jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              {/* Trust badges */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  5.0 rating from 200+ happy customers
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">Professional</span>
                <span className="block text-yellow-600">Cleaning</span>
                <span className="block">Solutions</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your space with Kenya's most trusted cleaning service. 
                We deliver spotless results for homes and businesses across the country.
              </p>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">100% Eco-friendly cleaning products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">Fully insured and bonded team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">Flexible scheduling 7 days a week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">Satisfaction guaranteed or money back</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                  <span>View Our Services</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-4">Trusted by leading businesses in Kenya</p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-gray-500 font-bold">HOTELS</div>
                  <div className="text-gray-500 font-bold">OFFICES</div>
                  <div className="text-gray-500 font-bold">HOMES</div>
                  <div className="text-gray-500 font-bold">RETAIL</div>
                </div>
              </div>
            </div>

            {/* Right content - Image/Visual */}
            <div className="relative">
              {/* Main hero image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={woman}
                  alt="Professional cleaning team at work"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Floating stats cards */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6">
                  <div className="bg-yellow-600 text-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold">5.0★</div>
                    <div className="text-sm opacity-90">Rating</div>
                  </div>
                </div>

                {/* Bottom info card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Why Choose Us?</h3>
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-700">Eco-friendly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-700">Insured Team</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-700">24/7 Support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span className="text-gray-700">Money Back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-300 rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,120 C480,60 960,60 1440,120 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;