import React from 'react';
import { CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';

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
                We deliver spotless results for homes and businesses across Kilifi County.
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
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-yellow-600 hover:text-yellow-600 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Trusted by leading businesses in Kenya</p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-gray-400 font-bold">HOTELS</div>
                  <div className="text-gray-400 font-bold">OFFICES</div>
                  <div className="text-gray-400 font-bold">HOMES</div>
                  <div className="text-gray-400 font-bold">RETAIL</div>
                </div>
              </div>
            </div>

            {/* Right content - Image/Visual */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-yellow-600 rounded-3xl transform rotate-3 opacity-10"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-white">
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </div>

                {/* Service highlights */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Same Day Service</div>
                      <div className="text-sm opacity-80">Available for urgent requests</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Trained Professionals</div>
                      <div className="text-sm opacity-80">Background-checked staff</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      <div className="font-semibold">Quality Guarantee</div>
                      <div className="text-sm opacity-80">We stand behind our work</div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Get Started Today!</div>
                    <div className="text-sm opacity-90 mt-1">Professional cleaning at your fingertips</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-60 animate-pulse delay-75"></div>
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