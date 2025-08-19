import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Send, User, Building2,
  Shield, Award, Users, CheckCircle, Star, Calendar, ArrowRight,
  HeadphonesIcon, Globe, Facebook, Twitter, Instagram, Linkedin,
  Zap, Heart, ThumbsUp, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 792 278719"],
      description: "Available 24/7 for emergencies",
      action: "tel:+254115081710",
      actionText: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+254 115 081 710"],
      description: "Instant response via WhatsApp",
      action: "whatsapp",
      actionText: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info.cleandrasolutions@gmail.com"],
      description: "We respond within 2 hours",
      action: "mailto:hello@cleandra.co.ke",
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Nairobi, Kenya"],
      description: "Service available across Kenya",
      action: "location",
      actionText: "Get Directions"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'booking', label: 'Booking Support' },
    { value: 'complaint', label: 'Complaint/Issue' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Careers' }
  ];

  const faqs = [
    {
      question: "How do I book a cleaning service?",
      answer: "You can book through our website, call us, or send a WhatsApp message. We'll confirm your booking within minutes and send you all the details."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide cleaning services across Kenya, with primary focus on Nairobi and surrounding areas. Contact us to confirm service availability in your location."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies and professional equipment. We use eco-friendly products that are safe for your family and pets."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with our service, we'll return within 24 hours to make it right at no extra charge."
    },
    {
      question: "How far in advance should I book?",
      answer: "We offer same-day service based on availability. However, we recommend booking 24-48 hours in advance for the best time slots."
    },
    {
      question: "Are your staff insured and background-checked?",
      answer: "Yes, all our cleaning professionals are fully insured, bonded, and undergo thorough background checks for your security and peace of mind."
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    // { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    let message = `👋 Hello! I'm reaching out from your website.\n\n`;
    message += `📝 *Contact Form Message:*\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Inquiry Type: ${inquiryTypes.find(type => type.value === formData.inquiryType)?.label}\n`;
    message += `• Subject: ${formData.subject}\n\n`;
    message += `💬 *Message:*\n${formData.message}\n\n`;
    message += `I'm looking forward to hearing from you. Thank you!`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppContact = (customMessage = null) => {
    let message;
    if (customMessage) {
      message = encodeURIComponent(customMessage);
    } else {
      message = encodeURIComponent("👋 Hello! I'm interested in your cleaning services. Could you please provide more information?");
    }
    
    const whatsappUrl = `https://wa.me/254115081710?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate WhatsApp message from form data
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/254115081710?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form after brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      alert('Your message has been sent via WhatsApp! We will respond shortly.');
    }, 2000);
  };

  const canSubmit = () => {
    return formData.name && formData.email && formData.subject && formData.message;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Have questions about our cleaning services? Need a custom quote? We're here to help! 
            Get instant responses via WhatsApp or use our contact form.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll send your message via WhatsApp for the fastest response.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit() || isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 ${
                    canSubmit() && !isSubmitting
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="h-6 w-6" />
                  <span>{isSubmitting ? 'Sending...' : 'Send via WhatsApp'}</span>
                </button>
              </form>

              <p className="text-gray-500 text-sm text-center mt-4">
                Your message will be sent directly to our WhatsApp for the fastest response time.
              </p>
            </div>

            {/* Business Hours & Additional Info */}
            <div className="space-y-8">
              
              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-yellow-600 font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">WhatsApp Available 24/7</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    For urgent cleaning needs or emergencies, reach out via WhatsApp anytime!
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-8 w-8 text-yellow-600 mr-3" />
                  Why Choose Cleandra?
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "100% Insured & Bonded" },
                    { icon: Award, text: "Satisfaction Guaranteed" },
                    { icon: Users, text: "Trained Professionals" },
                    { icon: CheckCircle, text: "Eco-Friendly Products" },
                    { icon: Zap, text: "Same-Day Service Available" },
                    { icon: Heart, text: "Trusted by 500+ Customers" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-yellow-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to="/services"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center space-x-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span>View All Our Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Emergency Cleaning?</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Need immediate cleaning services? We offer 24/7 emergency response for urgent situations.
                </p>
                <button
                  onClick={() => handleWhatsAppContact("🚨 EMERGENCY CLEANING REQUEST - I need immediate cleaning services. Please respond ASAP!")}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Emergency WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our cleaning services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button
              onClick={() => handleWhatsAppContact("Hi! I have some questions about your cleaning services that aren't covered in your FAQ. Could you help me?")}
              className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Ask via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-12 text-yellow-100">
              Join hundreds of satisfied customers across Kenya. Contact us today for a free quote and experience the Cleandra difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
              <button
                onClick={() => handleWhatsAppContact()}
                className="w-full sm:w-auto bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center space-x-3"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </button>
              <Link
                to="/book"
                className="w-full sm:w-auto bg-white text-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Calendar className="h-6 w-6" />
                <span>Book Service Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;