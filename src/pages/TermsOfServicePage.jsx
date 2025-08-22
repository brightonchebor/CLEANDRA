import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Phone, Mail, Calendar, FileText, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms of <span className="text-yellow-400">Service</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Understanding our service terms, policies, and mutual responsibilities
              for a transparent and professional cleaning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-yellow-600 p-3 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Service Agreement</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to Cleandra Solutions. These terms of service outline the conditions under which
              we provide our professional cleaning services. By booking our services, you agree to these terms.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-yellow-800 font-medium">
                <strong>Last Updated:</strong> January 2025
              </p>
            </div>
          </div>

          {/* Service Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Service Provisions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Quality</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All services will be performed by trained, insured professionals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">We guarantee satisfaction with our quality assurance program</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Only eco-friendly, professional-grade cleaning products will be used</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduling & Access</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Services must be scheduled at least 24 hours in advance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Client must provide secure access to the premises</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cancellations must be made at least 4 hours before scheduled time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Payment & Pricing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Cash payment upon service completion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Mobile money (M-Pesa, Airtel Money)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Bank transfer for commercial accounts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Policy</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Fixed pricing based on service type</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">No hidden fees or surprise charges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Written quotes provided before service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liability & Insurance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-600 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Liability & Insurance</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Coverage</h3>
                <p className="text-blue-800 mb-4">
                  Cleandra Solutions maintains comprehensive liability insurance covering property damage
                  and accidents during service provision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-800">Property damage protection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-800">Employee accident coverage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-800">Bonded staff for your security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Important Limitations</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-amber-800">Pre-existing damage must be reported before service begins</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-amber-800">Valuable or fragile items should be secured by client</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-amber-800">Claims must be reported within 24 hours of service completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-red-600 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cancellation & Rescheduling</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Cancellation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">4+ hours notice:</span>
                      <p className="text-gray-700 text-sm">No cancellation fee</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Less than 4 hours:</span>
                      <p className="text-gray-700 text-sm">50% service charge may apply</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rescheduling</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Free rescheduling:</span>
                      <p className="text-gray-700 text-sm">With 24+ hours notice</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Emergency situations:</span>
                      <p className="text-gray-700 text-sm">Case-by-case consideration</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h2>
            <p className="text-gray-700 mb-6">
              Our team is here to clarify any questions about our service terms and policies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center">
              <Link
                to="/book"
                className="w-full sm:w-auto text-white bg-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition-colors shadow-lg flex items-center justify-center space-x-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Calendar className="h-6 w-6" />
                <span>Contact Us</span>
              </Link>
              <a
                href="mailto:info.cleandrasolutions@gmail.com"
                className="w-full sm:w-auto text-white bg-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition-colors shadow-lg flex items-center justify-center space-x-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Mail className="h-6 w-6" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;