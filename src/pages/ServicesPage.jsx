import React, { useState } from 'react';
import {
  Home, Building2, Sparkles, Car, Utensils, Droplets, Wind, Shield,
  Clock, CheckCircle, Star, ArrowRight, Phone, Calendar, Users,
  Zap, Heart, Leaf, Award, Target, TrendingUp, Wrench
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
    // RESIDENTIAL SERVICES
    {
      category: 'residential',
      title: "Standard Residential Cleaning",
      subtitle: "Routine home maintenance",
      icon: Home,
      price: "From KSh 2,500",
      duration: "2-4 hours",
      description: "Regular home cleaning service that keeps your space fresh and tidy. Perfect for weekly, bi-weekly, or monthly maintenance.",
      features: [
        "Thorough dusting of all surfaces and furniture",
        "Complete bathroom cleaning and sanitization",
        "Kitchen cleaning including counters and appliances",
        "Floor sweeping and mopping throughout",
        "Trash removal and fresh liner installation",
        "Bed making and light organizing",
        "Mirror and glass surface cleaning",
        "Final walkthrough and quality check"
      ],
      pricing: [
        { size: "1-2 Bedroom", price: "KSh 2,500" },
        { size: "3-4 Bedroom", price: "KSh 4,500" },
        { size: "5+ Bedroom", price: "KSh 6,500-8,000" }
      ],
      highlights: ["Same-day service", "Flexible scheduling", "Eco-friendly products"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'residential',
      title: "Deep Residential Cleaning",
      subtitle: "Complete detailed cleaning",
      icon: Sparkles,
      price: "From KSh 4,500",
      duration: "4-8 hours",
      description: "Comprehensive deep cleaning service that tackles every corner of your home. Perfect for seasonal cleaning, special occasions, or when you need that extra sparkle.",
      features: [
        "Inside appliance cleaning (oven, fridge, microwave)",
        "Grout scrubbing and tile deep cleaning",
        "Wall washing and baseboard cleaning",
        "Upholstery spot cleaning and treatment",
        "Light fixture and ceiling fan cleaning",
        "Cabinet exterior and interior wiping",
        "Window sill and frame cleaning",
        "Detailed bathroom and kitchen sanitization"
      ],
      pricing: [
        { size: "1-2 Bedroom", price: "KSh 4,500" },
        { size: "3-4 Bedroom", price: "KSh 7,000" },
        { size: "5+ Bedroom", price: "KSh 10,000-14,000" }
      ],
      highlights: ["Most popular service", "Guest-ready guarantee", "Deep sanitization"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'residential',
      title: "Window & Glass Cleaning",
      subtitle: "Crystal clear views",
      icon: Wind,
      price: "From KSh 2,000",
      duration: "1-3 hours",
      description: "Professional window and glass cleaning service that brings natural light back into your space with streak-free, crystal clear results.",
      features: [
        "Interior and exterior window cleaning",
        "Window sill and frame cleaning",
        "Screen cleaning and maintenance",
        "Mirror and glass surface polishing",
        "Sliding door glass cleaning",
        "Glass table and furniture cleaning",
        "Streak-free professional techniques",
        "Safety equipment for high windows"
      ],
      pricing: [
        { size: "Standard Service", price: "From KSh 2,000" }
      ],
      highlights: ["Streak-free guarantee", "Interior & exterior", "Safety certified"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },

    // COMMERCIAL SERVICES
    {
      category: 'commercial',
      title: "One-Time Commercial Cleaning",
      subtitle: "Professional workspace cleaning",
      icon: Building2,
      price: "From KSh 4,500",
      duration: "3-6 hours",
      description: "Comprehensive one-time office cleaning service for businesses, shops, Airbnbs, and schools. Perfect for special events or initial cleaning.",
      features: [
        "Complete workspace cleaning and sanitization",
        "Floor sweeping and mopping with professional equipment",
        "Glass and window cleaning",
        "Restroom deep cleaning and sanitization",
        "Desk and office furniture dusting",
        "Kitchen and break room cleaning",
        "Waste removal and recycling",
        "Entrance and reception area cleaning"
      ],
      pricing: [
        { size: "Small Office (≤ 100 m²)", price: "KSh 4,500" },
        { size: "Medium Office (101-300 m²)", price: "KSh 8,000" },
        { size: "Large Office (301+ m²)", price: "KSh 12,000-18,000" }
      ],
      highlights: ["Same-day service", "Professional equipment", "COVID-19 protocols"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'commercial',
      title: "Commercial Recurring Contracts",
      subtitle: "Ongoing maintenance programs",
      icon: Calendar,
      price: "From KSh 15,000/month",
      duration: "Scheduled visits",
      description: "Regular commercial cleaning contracts with weekly, bi-weekly, or monthly visits. Consistent maintenance for professional business environments.",
      features: [
        "Scheduled regular cleaning visits",
        "Customized cleaning checklist",
        "Dedicated cleaning team assignment",
        "Supply and equipment management",
        "Quality control and supervision",
        "Emergency cleaning response",
        "Monthly progress reports",
        "Cost-effective bulk pricing"
      ],
      pricing: [
        { size: "Small Office", price: "From KSh 15,000/month" },
        { size: "Medium Office", price: "From KSh 25,000/month" },
        { size: "Large Office", price: "From KSh 40,000/month" }
      ],
      highlights: ["Best value option", "Dedicated team", "Flexible contracts"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        "Laundry coordination services",
        "24/7 emergency cleaning response"
      ],
      pricing: [
        { size: "Contact for quote", price: "Custom pricing" }
      ],
      highlights: ["24/7 availability", "Hospitality trained", "Quality audits"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },

    // SPECIALIZED SERVICES
    {
      category: 'specialized',
      title: "Post-Construction Cleanup",
      subtitle: "Construction dust specialists",
      icon: Wrench,
      price: "From KSh 8,000",
      duration: "6-12 hours",
      description: "Specialized cleaning for newly constructed or renovated spaces, removing all construction debris, dust, paint stains, and residue safely and efficiently.",
      features: [
        "Construction debris and dust removal",
        "Paint splatter and stain removal",
        "Window and floor polishing",
        "Fine dust elimination from all surfaces",
        "HVAC system cleaning",
        "Light fixture and electrical cleaning",
        "Final cleanup and inspection",
        "Safety protocol compliance"
      ],
      pricing: [
        { size: "Small Property (1-2 BR or ≤ 100 m²)", price: "KSh 8,000-10,000" },
        { size: "Medium Property (3-4 BR or 101-300 m²)", price: "KSh 12,000-18,000" },
        { size: "Large Property (5+ BR or 301+ m²)", price: "KSh 20,000-28,000" }
      ],
      highlights: ["Safety certified", "Industrial equipment", "Warranty included"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Move-in/Move-out Cleaning",
      subtitle: "Fresh start guarantee",
      icon: Home,
      price: "From KSh 4,500",
      duration: "4-8 hours",
      description: "Intensive cleaning service for property transitions, ensuring spaces are move-in ready or helping you get your security deposit back.",
      features: [
        "Complete property deep cleaning",
        "Cabinet and drawer interior cleaning",
        "Appliance deep cleaning (inside and out)",
        "Light fixture and ceiling fan cleaning",
        "Baseboard and trim detailed cleaning",
        "Switch plate and outlet cleaning",
        "Closet and storage area cleaning",
        "Final walk-through inspection"
      ],
      pricing: [
        { size: "Based on standard deep cleaning rates", price: "From KSh 4,500" }
      ],
      highlights: ["Deposit back guarantee", "Same-day service", "Checklist provided"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },

    // ADD-ON SERVICES (can be added to any main service)
    {
      category: 'specialized',
      title: "Sofa & Upholstery Cleaning",
      subtitle: "Furniture care specialists",
      icon: Utensils,
      price: "KSh 1,500 per 3-seater",
      duration: "1-2 hours per item",
      description: "Professional upholstery cleaning that removes deep stains, odors, and allergens while protecting and extending the life of your furniture.",
      features: [
        "Deep steam cleaning treatment",
        "Stain removal and spot treatment",
        "Odor elimination and sanitization",
        "Fabric protection application",
        "Color restoration techniques",
        "Cushion cleaning and fluffing",
        "Leather conditioning (if applicable)",
        "Fast-drying professional methods"
      ],
      pricing: [
        { size: "3-seater sofa", price: "KSh 1,500" },
        { size: "Additional seats", price: "KSh 500 each" }
      ],
      highlights: ["Stain removal guarantee", "Fast-drying", "Fabric protection"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Carpet Deep Cleaning",
      subtitle: "Professional carpet care",
      icon: Zap,
      price: "KSh 250 per m²",
      duration: "Varies by area",
      description: "Professional carpet shampooing and deep cleaning service that removes embedded dirt, stains, and allergens for a fresh, clean carpet.",
      features: [
        "Pre-treatment of stains and spots",
        "Deep extraction cleaning",
        "Professional shampooing",
        "Odor removal treatment",
        "Fast-drying techniques",
        "Carpet protection application",
        "Traffic area focus",
        "Post-cleaning inspection"
      ],
      pricing: [
        { size: "Per square meter", price: "KSh 250" },
        { size: "Minimum charge", price: "KSh 2,000" }
      ],
      highlights: ["Deep extraction", "Odor removal", "Fast-drying"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Mattress Cleaning Service",
      subtitle: "Healthy sleep environment",
      icon: Star,
      price: "From KSh 1,000",
      duration: "30-45 minutes per mattress",
      description: "Professional mattress cleaning and sanitization service that removes dust mites, allergens, stains, and odors for better sleep hygiene.",
      features: [
        "Deep steam sanitization",
        "Dust mite elimination",
        "Stain and odor removal",
        "Allergen reduction treatment",
        "Both sides cleaning",
        "Fast-drying process",
        "Fabric protection application",
        "Health and hygiene focus"
      ],
      pricing: [
        { size: "Single mattress", price: "KSh 1,000" },
        { size: "Double/Queen mattress", price: "KSh 1,500" },
        { size: "King mattress", price: "KSh 2,000" }
      ],
      highlights: ["Dust mite removal", "Health focused", "Both sides cleaned"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: 'specialized',
      title: "Appliance Interior Cleaning",
      subtitle: "Deep appliance care",
      icon: Zap,
      price: "KSh 1,000 each",
      duration: "30-60 minutes per appliance",
      description: "Specialized interior cleaning for refrigerators and ovens, removing grease, food residue, and odors for optimal appliance performance.",
      features: [
        "Complete interior deep cleaning",
        "Grease and residue removal",
        "Odor elimination treatment",
        "Sanitization and disinfection",
        "Shelf and drawer cleaning",
        "Coil and vent cleaning (fridge)",
        "Safe cleaning products used",
        "Performance optimization"
      ],
      pricing: [
        { size: "Refrigerator interior", price: "KSh 1,000" },
        { size: "Oven interior", price: "KSh 1,000" },
        { size: "Both appliances", price: "KSh 1,800" }
      ],
      highlights: ["Grease removal", "Odor elimination", "Safe products"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-400">Cleaning</span> Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              From residential deep cleaning to specialized commercial services, we deliver exceptional results with eco-friendly products and guaranteed satisfaction across Kenya.
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
                {/* <category.icon className="h-5 w-5" /> */}
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
                      {/* <div>
                        <div className="text-white font-semibold text-lg">{service.price}</div>
                        <div className="text-yellow-400 text-sm">{service.duration}</div>
                      </div> */}
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
                    {/* {service.features.length > 6 && (
                      <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-4">
                        Show all features (+{service.features.length - 6} more)
                      </button>
                    )} */}
                  </div>

                  {/* Pricing (if available) */}
                  {/* {service.pricing && service.pricing.length > 1 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Pricing:</h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        {service.pricing.map((priceItem, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-700">{priceItem.size}</span>
                            <span className="text-yellow-600 font-semibold">{priceItem.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}

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
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/pricing"
                      className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <Calendar className="h-5 w-5" />
                      <span>View Pricing</span>
                    </Link>
                    {/* <Link
                      to="/contact"
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-yellow-600 hover:text-yellow-600 transition-colors flex items-center justify-center space-x-2"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <Phone className="h-5 w-5" />
                      <span>Get Quote</span>
                    </Link> */}
                  </div>
                </div>
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