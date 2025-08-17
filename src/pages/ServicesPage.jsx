import React, { useState } from 'react';
import {
  Home, Building2, Sparkles, Car, Utensils, Droplets, Wind, Shield,
  Clock, CheckCircle, Star, ArrowRight, Phone, Calendar, Users,
  Zap, Heart, Leaf, Award, Target, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'specialized', name: 'Specialized', icon: Star }
  ];

  const detailedServices = [
    {
      category: 'residential',
      title: "Post-Checkout Deep Cleaning",
      subtitle: "Complete guest turnover service",
      icon: Home,
      price: "From KES 2,500",
      duration: "2-4 hours",
      description: "Comprehensive cleaning service designed for short-term rentals and guest accommodations. We ensure your property is spotless and guest-ready.",
      features: [
        "Complete linen change and bed making with hotel-quality standards",
        "Thorough bathroom sanitization and deep cleaning",
        "Kitchen appliance cleaning (inside and outside)",
        "Intensive surface scrubbing and disinfection",
        "Floor sweeping, mopping with professional equipment",
        "Comprehensive dusting of all surfaces and furniture",
        "Trash removal and fresh liner installation",
        "Final walkthrough and quality inspection"
      ],
      highlights: ["Same-day service", "Guest-ready guarantee", "Professional linen service"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'residential',
      title: "Window & Curtain Cleaning",
      subtitle: "Crystal clear views",
      icon: Wind,
      price: "From KES 1,800",
      duration: "1-3 hours",
      description: "Professional window and curtain cleaning service that brings natural light back into your space with streak-free, crystal clear results.",
      features: [
        "Interior and exterior window cleaning",
        "Professional curtain deep cleaning and steaming",
        "Blind cleaning and maintenance",
        "Window sill and frame cleaning",
        "Screen cleaning and repair assessment",
        "Mirror and glass surface polishing",
        "UV protection treatment available",
        "Eco-friendly streak-free cleaning solutions"
      ],
      highlights: ["Streak-free guarantee", "UV protection", "Same-week service"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'residential',
      title: "Furniture & Upholstery Care",
      subtitle: "Extend furniture life",
      icon: Utensils,
      price: "From KES 3,200",
      duration: "2-5 hours",
      description: "Specialized furniture and upholstery cleaning that removes deep stains, odors, and allergens while protecting and extending the life of your investment.",
      features: [
        "Deep upholstery steam cleaning",
        "Leather conditioning and protection",
        "Fabric stain removal and treatment",
        "Odor elimination and sanitization",
        "Wood furniture polishing and care",
        "Cushion cleaning and fluffing",
        "Fabric protection application",
        "Color restoration for faded materials"
      ],
      highlights: ["Stain removal guarantee", "Fabric protection", "Leather specialists"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'commercial',
      title: "Office Deep Cleaning",
      subtitle: "Professional workspace sanitization",
      icon: Building2,
      price: "From KES 5,000",
      duration: "3-6 hours",
      description: "Comprehensive office cleaning service that creates a healthy, productive work environment for your team and impresses your clients.",
      features: [
        "Workspace deep cleaning and sanitization",
        "Conference room and common area cleaning",
        "Restroom deep cleaning and restocking",
        "Kitchen and break room maintenance",
        "Floor care (carpet cleaning, hard floor maintenance)",
        "Window and glass partition cleaning",
        "Electronics and equipment dusting",
        "Waste management and recycling"
      ],
      highlights: ["After-hours service", "COVID-19 protocols", "Monthly packages"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'commercial',
      title: "Hotel & Hospitality Cleaning",
      subtitle: "Guest satisfaction guaranteed",
      icon: Building2,
      price: "Custom pricing",
      duration: "Varies",
      description: "Specialized hospitality cleaning services that maintain the highest standards of cleanliness and guest satisfaction in hotels, B&Bs, and lodges.",
      features: [
        "Guest room turnover cleaning",
        "Public area maintenance",
        "Restaurant and bar cleaning",
        "Lobby and reception area care",
        "Swimming pool area cleaning",
        "Event space preparation",
        "Laundry and linen services",
        "24/7 emergency cleaning response"
      ],
      highlights: ["24/7 availability", "Hospitality trained", "Quality audits"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Move-in/Move-out Cleaning",
      subtitle: "Fresh start guarantee",
      icon: Home,
      price: "From KES 4,500",
      duration: "4-8 hours",
      description: "Intensive cleaning service for property transitions, ensuring spaces are move-in ready or helping you get your deposit back.",
      features: [
        "Complete property deep cleaning",
        "Cabinet and drawer interior cleaning",
        "Appliance deep cleaning (inside and out)",
        "Light fixture and ceiling fan cleaning",
        "Baseboard and trim cleaning",
        "Switch plate and outlet cleaning",
        "Closet and storage area cleaning",
        "Final walk-through inspection"
      ],
      highlights: ["Deposit back guarantee", "Same-day service", "Checklist provided"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Post-Construction Cleanup",
      subtitle: "Construction dust specialists",
      icon: Zap,
      price: "From KES 8,000",
      duration: "6-12 hours",
      description: "Specialized cleaning for newly constructed or renovated spaces, removing all construction debris, dust, and residue safely and efficiently.",
      features: [
        "Construction debris removal",
        "Fine dust elimination",
        "Paint splatter and residue removal",
        "Window and glass cleaning",
        "HVAC system cleaning",
        "Floor preparation and polishing",
        "Light fixture installation cleaning",
        "Final inspection and touch-ups"
      ],
      highlights: ["Safety certified", "Industrial equipment", "Warranty included"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const whyChooseUs = [
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "We use only environmentally safe, biodegradable cleaning products that are safe for your family and pets."
    },
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete insurance coverage and bonded staff give you peace of mind and protection for your property."
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "If you're not completely satisfied, we'll return within 24 hours to make it right at no extra charge."
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our team undergoes rigorous training and background checks to ensure the highest quality service."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Available 7 days a week with same-day and emergency services to fit your busy schedule."
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Every job includes a detailed checklist and quality inspection to ensure our high standards are met."
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? detailedServices
    : detailedServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-400">Cleaning</span> Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto ">
              From post-checkout deep cleaning to specialized commercial services, we deliver exceptional results with eco-friendly products and guaranteed satisfaction across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all ${activeCategory === category.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex-row`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div
                    className="h-64 lg:h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
                    <div className="absolute top-6 left-6 flex items-center space-x-3">
                      <div className="bg-yellow-600 p-3 rounded-xl">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">{service.price}</div>
                        {/* <div className="text-yellow-400 text-sm">{service.duration}</div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-yellow-600 font-medium text-lg">{service.subtitle}</p>
                  </div>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {service.features.length > 6 && (
                      <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-4">
                        Show all features (+{service.features.length - 6} more)
                      </button>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/book"
                      className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Book This Service</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-yellow-600 hover:text-yellow-600 transition-colors flex items-center justify-center space-x-2"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <Phone className="h-5 w-5" />
                      <span>Get Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-yellow-600">Cleandra Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleaning service. We're your trusted partners in maintaining pristine, healthy spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                  <item.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl mb-12 text-yellow-100">
              Join hundreds of satisfied customers across Kenya. Book your professional cleaning service today and experience the Cleandra difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
              <Link
                to="/book"
                className="w-full sm:w-auto bg-white text-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Calendar className="h-6 w-6" />
                <span>Book Your Service</span>
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
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;