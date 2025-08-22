import React from 'react';
import { CheckCircle, Star, Sparkles, Clock, Shield, Heart, Award, Users, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">Cleandra</span> Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              At Cleandra Cleaning Company, we turn messy spaces into spotless havens.
              From Airbnb turnovers and rental upkeep to deep cleaning and
              post-construction cleaning, our reliable team makes every corner shine.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fresh Spaces, Happy Faces
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Fast, professional, and detail-driven, we give you more time to enjoy
                  what matters most. Our mission is simple: transform your space and
                  bring joy to your daily environment.
                </p>

                {/* Key features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">Reliable and trustworthy team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">Detail-driven cleaning approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">Fast and efficient service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">Professional standards maintained</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors text-center"
                  >
                    View Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-yellow-600 hover:text-yellow-600 transition-colors text-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right content - Stats/Info cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Time-Saving</h3>
                </div>
                <p className="text-gray-700">
                  We handle the cleaning so you can focus on what truly matters to you.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Reliable Service</h3>
                </div>
                <p className="text-gray-700">
                  Count on our dependable team for consistent, quality cleaning every time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Care & Attention</h3>
                </div>
                <p className="text-gray-700">
                  Every corner is treated with care and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in various cleaning services to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Airbnb Turnovers</h3>
              <p className="text-gray-600 text-sm">
                Quick and thorough cleaning between guests
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rental Upkeep</h3>
              <p className="text-gray-600 text-sm">
                Regular maintenance cleaning for rental properties
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Cleaning</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive cleaning for every corner
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Post-Construction</h3>
              <p className="text-gray-600 text-sm">
                Specialized cleaning after construction work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cleandra?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional cleaning services that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team is trained to maintain the highest professional standards in every cleaning task.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast & Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                We work quickly without compromising quality, ensuring your space is ready when you need it.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detail-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Every corner matters to us. We pay attention to the smallest details for a truly spotless result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Cleandra Solutions for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-white text-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Calendar className="h-6 w-6" />
              <span>Book Now</span>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all flex items-center justify-center space-x-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Phone className="h-6 w-6" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;