import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import david from "../assets/David.png"
import faith from "../assets/faithakinyi.png"
import james from "../assets/jamesmutua.png"

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    // {
    //   id: 1,
    //   name: "Grace Wanjiku",
    //   role: "Hotel Manager",
    //   company: "Nairobi Palace Hotel",
    //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    //   rating: 4,
    //   text: "Cleandra Solutions transformed our hotel's cleaning standards. Their post-checkout service is impeccable, and guests consistently comment on how spotless their rooms are. Professional team, eco-friendly products, and always on time."
    // },
    {
      id: 2,
      name: "James Mutua",
      role: "Office Manager",
      company: "Habaricom Ltd",
      image: james,
      rating: 5,
      text: "We've been using Cleandra for our office cleaning for over a year now. The consistency and attention to detail is remarkable. Our workspace is always pristine, and their flexible scheduling works perfectly with our business hours."
    },
    {
      id: 3,
      name: "Faith Akinyi",
      role: "Homeowner",
      company: "Karen Resident",
      image: faith,
      rating: 5,
      text: "After trying several cleaning services, Cleandra is by far the best. They're thorough, reliable, and use safe products around my children. My home has never looked better, and the peace of mind is priceless."
    },
    {
      id: 4,
      name: "David Kiprotich",
      role: "Restaurant Owner",
      company: "Java House",
      image: david,
      rating: 5,
      text: "Maintaining hygiene standards in the food industry is crucial. Cleandra's deep cleaning service exceeds all health department requirements. Their kitchen and dining area cleaning is exceptional - truly professional."
    },
    // {
    //   id: 5,
    //   name: "Mary Njeri",
    //   role: "Airbnb Host",
    //   company: "Westlands Apartments",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616c8e5e50d?w=400&h=400&fit=crop&crop=face",
    //   rating: 4,
    //   text: "Running multiple Airbnb properties, I need reliable turnover cleaning. Cleandra's team is fast, efficient, and thorough. My guests always leave 5-star reviews mentioning cleanliness. Best investment for my business!"
    // },
    // {
    //   id: 6,
    //   name: "Peter Ochieng",
    //   role: "Retail Manager",
    //   company: "Nakumatt Supermarket",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    //   rating: 5,
    //   text: "Customer experience starts with cleanliness. Cleandra keeps our store floors, windows, and facilities spotless. Their night cleaning schedule doesn't disrupt our operations, and the results speak for themselves."
    // }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-yellow-600">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses and homeowners across Kenya say about our cleaning services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-yellow-600" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-lg lg:text-xl text-gray-700 text-center mb-8 leading-relaxed relative z-10">
              "{testimonials[currentSlide].text}"
            </blockquote>

            {/* Client info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-yellow-100"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-yellow-600 font-semibold">
                  {testimonials[currentSlide].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-yellow-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-yellow-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                  ? 'bg-yellow-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;