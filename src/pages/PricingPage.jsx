import React from 'react';
import {
  CheckCircle,
  Home,
  Building2,
  Wrench,
  Calendar,
  Sparkles,
  Phone,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const residentialServices = [
    {
      title: "Standard Cleaning",
      icon: <Home className="h-6 w-6" />,
      description: "Routine home cleaning - dusting, mopping, bathrooms, kitchen, trash removal",
      prices: [
        { size: "1-2 Bedroom", price: "KSh 2,500" },
        { size: "3-4 Bedroom", price: "KSh 4,500" },
        { size: "5+ Bedroom", price: "KSh 6,500-8,000" }
      ]
    },
    {
      title: "Deep Cleaning",
      icon: <Sparkles className="h-6 w-6" />,
      description: "Detailed clean - inside appliances, grout scrubbing, walls, upholstery, etc.",
      prices: [
        { size: "1-2 Bedroom", price: "KSh 4,500" },
        { size: "3-4 Bedroom", price: "KSh 7,000" },
        { size: "5+ Bedroom", price: "KSh 10,000-14,000" }
      ],
      popular: false
    }
  ];

  const commercialServices = [
    {
      title: "One-Time Cleaning",
      icon: <Building2 className="h-6 w-6" />,
      description: "Offices, shops, Airbnbs, schools - sweeping, mopping, glass, toilets, dusting desks",
      prices: [
        { size: "Small Office (≤ 100 m²)", price: "KSh 4,500" },
        { size: "Medium Office (101-300 m²)", price: "KSh 8,000" },
        { size: "Large Office (301+ m²)", price: "KSh 12,000-18,000" }
      ]
    },
    {
      title: "Recurring Contracts",
      icon: <Calendar className="h-6 w-6" />,
      description: "Weekly, bi-weekly, or monthly visits for ongoing maintenance",
      prices: [
        { size: "Small Office", price: "From KSh 15,000/month" },
        { size: "Medium Office", price: "From KSh 25,000/month" },
        { size: "Large Office", price: "From KSh 40,000/month" }
      ]
    }
  ];

  const specializedServices = [
    {
      title: "Post-Construction Cleaning",
      icon: <Wrench className="h-6 w-6" />,
      description: "Removal of dust, debris, paint stains, window and floor polishing, final clean-up after building/renovation",
      prices: [
        { size: "Small Property (1-2 BR or ≤ 100 m²)", price: "KSh 8,000-10,000" },
        { size: "Medium Property (3-4 BR or 101-300 m²)", price: "KSh 12,000-18,000" },
        { size: "Large Property (5+ BR or 301+ m²)", price: "KSh 20,000-28,000" }
      ]
    }
  ];

  const addOnServices = [
    { service: "Sofa/Upholstery Cleaning", price: "KSh 1,500 per 3-seater" },
    { service: "Carpet Shampoo", price: "KSh 250 per m²" },
    { service: "Mattress Cleaning", price: "KSh 1,000 (single), 1,500 (double/queen)" },
    { service: "Window Cleaning (Inside & Outside)", price: "From KSh 2,000" },
    { service: "Fridge/Oven Interior", price: "KSh 1,000 each" }
  ];

  const PricingCard = ({ service, category }) => (
    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${service.popular ? 'border-yellow-500 relative' : 'border-gray-200 hover:border-yellow-300'
      }`}>
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="h-4 w-4" />
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {/* <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
            {service.icon}
          </div> */}
          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-3">
          {service.prices.map((priceItem, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700 font-medium">{priceItem.size}</span>
              <span className="text-yellow-600 font-bold text-lg">{priceItem.price}</span>
            </div>
          ))}
        </div>

        {/* <button className="w-full mt-6 bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2">
          <Phone className="h-5 w-5" />
          Get Quote
        </button> */}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Transparent <span className="text-yellow-400">Pricing</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            No hidden fees, no surprises. Choose the perfect cleaning package for your needs with our competitive rates across Kenya.
          </p>

        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Residential Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional home cleaning services tailored to your space and needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {residentialServices.map((service, index) => (
              <PricingCard key={index} service={service} category="residential" />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Commercial Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keep your business spotless with our professional commercial cleaning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <PricingCard key={index} service={service} category="commercial" />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert cleaning for construction sites and post-renovation cleanup
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            {specializedServices.map((service, index) => (
              <PricingCard key={index} service={service} category="specialized" />
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your cleaning package with these optional specialized services
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOnServices.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-gray-900">{item.service}</span>
                  </div>
                  <span className="text-yellow-600 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Found the Perfect Package?
            </h2>
            <p className="text-xl mb-12 text-yellow-100">
              Take the next step today — book your preferred cleaning plan or request a custom quote tailored to your needs. Affordable, transparent, and hassle-free service across Kenya.
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

export default PricingPage;