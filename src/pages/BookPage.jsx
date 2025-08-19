import React, { useState } from 'react';
import {
  Calendar, Clock, MapPin, Phone, User, Mail, Home, Building2, 
  Sparkles, CheckCircle, ArrowRight, AlertCircle, Star, Wrench,
  MessageSquare, Shield, Award, Users
} from 'lucide-react';

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    propertyType: '',
    propertySize: '',
    address: '',
    date: '',
    time: '',
    frequency: 'one-time',
    addOns: [],
    specialInstructions: '',
    estimatedBudget: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    {
      id: 'standard-residential',
      title: 'Standard Residential Cleaning',
      description: 'Regular home cleaning - dusting, mopping, bathrooms, kitchen',
      icon: Home,
      basePrice: 'From KSh 2,500',
      category: 'residential'
    },
    {
      id: 'deep-residential',
      title: 'Deep Residential Cleaning',
      description: 'Detailed clean - inside appliances, grout scrubbing, walls',
      icon: Sparkles,
      basePrice: 'From KSh 4,500',
      category: 'residential',
      popular: false
    },
    {
      id: 'commercial-onetime',
      title: 'One-Time Commercial Cleaning',
      description: 'Offices, shops, Airbnbs, schools - comprehensive cleaning',
      icon: Building2,
      basePrice: 'From KSh 4,500',
      category: 'commercial'
    },
    {
      id: 'commercial-recurring',
      title: 'Commercial Recurring Contract',
      description: 'Weekly, bi-weekly, or monthly visits',
      icon: Calendar,
      basePrice: 'From KSh 15,000/month',
      category: 'commercial'
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Cleaning',
      description: 'Dust, debris, paint stains removal after construction',
      icon: Wrench,
      basePrice: 'From KSh 8,000',
      category: 'specialized'
    },
    {
      id: 'move-in-out',
      title: 'Move-in/Move-out Cleaning',
      description: 'Intensive cleaning for property transitions',
      icon: Home,
      basePrice: 'From KSh 4,500',
      category: 'specialized'
    }
  ];

  const propertySizes = {
    residential: [
      { id: '1-2br', label: '1-2 Bedroom', price: 'KSh 2,500 - 4,500' },
      { id: '3-4br', label: '3-4 Bedroom', price: 'KSh 4,500 - 7,000' },
      { id: '5+br', label: '5+ Bedroom', price: 'KSh 6,500 - 14,000' }
    ],
    commercial: [
      { id: 'small', label: 'Small Office (≤ 100 m²)', price: 'KSh 4,500' },
      { id: 'medium', label: 'Medium Office (101-300 m²)', price: 'KSh 8,000' },
      { id: 'large', label: 'Large Office (301+ m²)', price: 'KSh 12,000+' }
    ],
    specialized: [
      { id: 'small-prop', label: 'Small Property (≤ 100 m²)', price: 'KSh 8,000 - 10,000' },
      { id: 'medium-prop', label: 'Medium Property (101-300 m²)', price: 'KSh 12,000 - 18,000' },
      { id: 'large-prop', label: 'Large Property (301+ m²)', price: 'KSh 20,000 - 28,000' }
    ]
  };

  const addOnServices = [
    { id: 'sofa-cleaning', name: 'Sofa/Upholstery Cleaning', price: 'KSh 1,500 per 3-seater' },
    { id: 'carpet-shampoo', name: 'Carpet Shampoo', price: 'KSh 250 per m²' },
    { id: 'mattress-cleaning', name: 'Mattress Cleaning', price: 'KSh 1,000 - 1,500' },
    { id: 'window-cleaning', name: 'Window Cleaning', price: 'From KSh 2,000' },
    { id: 'appliance-interior', name: 'Fridge/Oven Interior', price: 'KSh 1,000 each' }
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnToggle = (addOnId) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const getSelectedService = () => {
    return serviceOptions.find(service => service.id === formData.serviceType);
  };

  const getPropertySizeOptions = () => {
    const selectedService = getSelectedService();
    if (!selectedService) return [];
    
    if (selectedService.category === 'residential') return propertySizes.residential;
    if (selectedService.category === 'commercial') return propertySizes.commercial;
    return propertySizes.specialized;
  };

  const generateWhatsAppMessage = () => {
    const selectedService = getSelectedService();
    const selectedAddOns = addOnServices.filter(addon => formData.addOns.includes(addon.id));
    const propertySize = getPropertySizeOptions().find(size => size.id === formData.propertySize);

    let message = `🏠 *NEW BOOKING REQUEST*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Email: ${formData.email}\n\n`;
    
    message += `🧹 *Service Details:*\n`;
    message += `• Service: ${selectedService?.title || 'Not specified'}\n`;
    message += `• Property Size: ${propertySize?.label || 'Not specified'}\n`;
    message += `• Address: ${formData.address}\n`;
    message += `• Date: ${formData.date}\n`;
    message += `• Time: ${formData.time}\n`;
    message += `• Frequency: ${formData.frequency}\n\n`;
    
    if (selectedAddOns.length > 0) {
      message += `➕ *Add-on Services:*\n`;
      selectedAddOns.forEach(addon => {
        message += `• ${addon.name} (${addon.price})\n`;
      });
      message += `\n`;
    }
    
    if (formData.estimatedBudget) {
      message += `💰 *Estimated Budget:* ${formData.estimatedBudget}\n\n`;
    }
    
    if (formData.specialInstructions) {
      message += `📝 *Special Instructions:*\n${formData.specialInstructions}\n\n`;
    }
    
    message += `Please confirm availability and provide a detailed quote. Thank you!`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Generate WhatsApp message and redirect
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/254115081710?text=${message}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Reset form after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(1);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        propertyType: '',
        propertySize: '',
        address: '',
        date: '',
        time: '',
        frequency: 'one-time',
        addOns: [],
        specialInstructions: '',
        estimatedBudget: ''
      });
      
      // Show success message or redirect
      alert('Your booking request has been sent via WhatsApp! We will get back to you shortly.');
    }, 2000);
  };

  const canProceedToStep2 = () => {
    return formData.name && formData.phone && formData.serviceType && formData.propertySize;
  };

  const canSubmit = () => {
    return canProceedToStep2() && formData.address && formData.date && formData.time;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Book Your <span className="text-yellow-400">Cleaning</span> Service
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Get a spotless space with our professional cleaning services. Quick booking process with instant WhatsApp confirmation.
          </p>
          
          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= 1 ? 'bg-yellow-400 border-yellow-400 text-gray-900' : 'border-gray-400 text-gray-400'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-yellow-400' : 'bg-gray-400'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= 2 ? 'bg-yellow-400 border-yellow-400 text-gray-900' : 'border-gray-400 text-gray-400'
            }`}>
              2
            </div>
          </div>
          <div className="flex justify-center space-x-20 mt-4 text-sm">
            <span className={currentStep >= 1 ? 'text-yellow-400' : 'text-gray-400'}>Service & Contact</span>
            <span className={currentStep >= 2 ? 'text-yellow-400' : 'text-gray-400'}>Schedule & Details</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step 1: Service Selection & Contact Info */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Select Your Service & Contact Details</h2>
              
              {/* Contact Information */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-yellow-600 mr-3" />
                  Your Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 text-yellow-600 mr-3" />
                  Choose Your Service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleInputChange('serviceType', service.id)}
                      className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg ${
                        formData.serviceType === service.id
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute -top-3 left-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 p-2 rounded-lg">
                          <service.icon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                          <p className="text-yellow-600 font-bold">{service.basePrice}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Size Selection */}
              {formData.serviceType && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Home className="h-6 w-6 text-yellow-600 mr-3" />
                    Property Size
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {getPropertySizeOptions().map((size) => (
                      <div
                        key={size.id}
                        onClick={() => handleInputChange('propertySize', size.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all hover:shadow-lg ${
                          formData.propertySize === size.id
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{size.label}</h4>
                        <p className="text-yellow-600 font-bold text-sm">{size.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Step Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep2()}
                  className={`px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all ${
                    canProceedToStep2()
                      ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Continue to Schedule</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Schedule & Additional Details */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule & Additional Details</h2>
              
              {/* Address */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-600 mr-3" />
                  Service Location
                </h3>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter full address including building name, floor, apartment number, and landmarks"
                />
              </div>

              {/* Date and Time */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-yellow-600 mr-3" />
                  Preferred Date & Time
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Time *</label>
                    <select
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-yellow-600 mr-3" />
                  Service Frequency
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['one-time', 'weekly', 'bi-weekly', 'monthly'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => handleInputChange('frequency', freq)}
                      className={`p-3 border-2 rounded-lg font-medium transition-all ${
                        formData.frequency === freq
                          ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                          : 'border-gray-200 text-gray-700 hover:border-yellow-300'
                      }`}
                    >
                      {freq === 'one-time' ? 'One Time' : freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-600 mr-3" />
                  Optional Add-on Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnServices.map((addon) => (
                    <div
                      key={addon.id}
                      onClick={() => handleAddOnToggle(addon.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-sm ${
                        formData.addOns.includes(addon.id)
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                          formData.addOns.includes(addon.id)
                            ? 'border-yellow-500 bg-yellow-500'
                            : 'border-gray-300'
                        }`}>
                          {formData.addOns.includes(addon.id) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{addon.name}</h4>
                          <p className="text-yellow-600 font-semibold text-sm">{addon.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Special Instructions</h3>
                <textarea
                  value={formData.specialInstructions}
                  onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Any specific requirements, access instructions, or areas that need special attention..."
                />
              </div>

              {/* Estimated Budget */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Estimated Budget Range (Optional)</h3>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => handleInputChange('estimatedBudget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="">Select budget range</option>
                  <option value="Under KSh 5,000">Under KSh 5,000</option>
                  <option value="KSh 5,000 - 10,000">KSh 5,000 - 10,000</option>
                  <option value="KSh 10,000 - 20,000">KSh 10,000 - 20,000</option>
                  <option value="Over KSh 20,000">Over KSh 20,000</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
                >
                  ← Back
                </button>
                
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit() || isSubmitting}
                  className={`px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all ${
                    canSubmit() && !isSubmitting
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send to WhatsApp'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Cleandra?</h2>
            <p className="text-xl text-gray-600">Your satisfaction is our guarantee</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Insured",
                description: "Full insurance coverage for your peace of mind"
              },
              {
                icon: Award,
                title: "Satisfaction Guaranteed",
                description: "We'll return within 24hrs if not satisfied"
              },
              {
                icon: Users,
                title: "Trained Professionals",
                description: "Background-checked and trained staff"
              },
              {
                icon: CheckCircle,
                title: "Eco-Friendly Products",
                description: "Safe for your family and the environment"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;