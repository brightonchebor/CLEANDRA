import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Phone, Mail, Calendar, FileText, Users, Clock, CreditCard } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms of <span className="text-yellow-400">Service</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto">
              Professional cleaning service agreement and terms of engagement
            </p>
            <div className="mt-6 text-sm text-gray-300">
              Effective Date: January 2025 | Document Version 1.2
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Agreement Overview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              1. AGREEMENT OVERVIEW
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                This Terms of Service Agreement ("Agreement") is entered into between Cleandra Solutions, 
                a professional cleaning service company ("Company", "we", "us", or "our"), and the individual 
                or entity engaging our services ("Client", "you", or "your").
              </p>
              <p className="mb-4">
                By booking, scheduling, or utilizing any of our cleaning services, you acknowledge that you 
                have read, understood, and agree to be bound by all terms and conditions set forth in this Agreement.
              </p>
              <p>
                This Agreement supersedes all prior agreements, understandings, or representations relating 
                to the subject matter herein and may only be modified in writing by both parties.
              </p>
            </div>
          </div>

          {/* 2. Service Specifications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              2. SERVICE SPECIFICATIONS
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2.1 Service Standards</h3>
            <div className="prose prose-gray max-w-none text-gray-700 mb-6">
              <p className="mb-3">The Company agrees to provide professional cleaning services subject to the following standards:</p>
              <ul className="space-y-2 ml-6">
                <li>• All services performed by trained, insured, and bonded personnel</li>
                <li>• Exclusive use of professional-grade, eco-friendly cleaning products and equipment</li>
                <li>• Services delivered in accordance with industry best practices and safety protocols</li>
                <li>• Quality assurance inspections and client satisfaction guarantee program</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">2.2 Scheduling Requirements</h3>
            <div className="prose prose-gray max-w-none text-gray-700">
              <ul className="space-y-2 ml-6">
                <li>• Service appointments must be scheduled a minimum of 24 hours in advance</li>
                <li>• Client must provide secure and reasonable access to the premises during scheduled times</li>
                <li>• Any special requirements or access instructions must be communicated at time of booking</li>
                <li>• Company reserves the right to reschedule due to weather, emergency, or safety concerns</li>
              </ul>
            </div>
          </div>

          {/* 3. Payment Terms */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              3. PAYMENT TERMS AND CONDITIONS
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">3.1 Accepted Payment Methods</h3>
            <div className="prose prose-gray max-w-none text-gray-700 mb-6">
              <p className="mb-3">Payment for services is accepted through the following approved methods only:</p>
              <ul className="space-y-2 ml-6">
                <li>• Mobile money transfers (M-Pesa, Airtel Money, T-Kash)</li>
                <li>• Electronic bank transfers and wire transfers</li>
                <li>• Business cheques for commercial accounts (subject to clearance)</li>
                <li>• Digital payment platforms and online payment systems</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800 font-medium">
                  <strong>Important:</strong> Cash payments are not accepted under any circumstances for security and accountability purposes.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">3.2 Pricing and Payment Schedule</h3>
            <div className="prose prose-gray max-w-none text-gray-700">
              <ul className="space-y-2 ml-6">
                <li>• All pricing is fixed based on service type and property specifications</li>
                <li>• Written quotations provided prior to service commencement</li>
                <li>• Payment due upon completion of services unless otherwise arranged</li>
                <li>• Late payment fees may apply to overdue accounts (2% per month)</li>
                <li>• No hidden fees, surcharges, or undisclosed costs</li>
              </ul>
            </div>
          </div>

          {/* 4. Liability and Insurance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              4. LIABILITY, INSURANCE, AND RISK ALLOCATION
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">4.1 Company Insurance Coverage</h3>
            <div className="prose prose-gray max-w-none text-gray-700 mb-6">
              <p className="mb-3">Cleandra Solutions maintains comprehensive insurance coverage including:</p>
              <ul className="space-y-2 ml-6">
                <li>• General liability insurance covering property damage and personal injury</li>
                <li>• Workers' compensation insurance for all employees</li>
                <li>• Professional indemnity coverage for service-related claims</li>
                <li>• Bonding and fidelity insurance for employee dishonesty protection</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">4.2 Limitation of Liability</h3>
            <div className="prose prose-gray max-w-none text-gray-700 mb-6">
              <p className="mb-3">Client acknowledges and agrees to the following liability limitations:</p>
              <ul className="space-y-2 ml-6">
                <li>• Pre-existing damage or defects must be disclosed before service commencement</li>
                <li>• Valuable, fragile, or irreplaceable items should be secured by Client prior to service</li>
                <li>• Company liability limited to direct damages not exceeding the service fee paid</li>
                <li>• Claims must be reported in writing within 24 hours of service completion</li>
                <li>• Company not liable for consequential, indirect, or punitive damages</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">4.3 Client Responsibilities</h3>
            <div className="prose prose-gray max-w-none text-gray-700">
              <ul className="space-y-2 ml-6">
                <li>• Provide safe working conditions and disclose any known hazards</li>
                <li>• Secure pets and ensure clear access to areas requiring cleaning</li>
                <li>• Report any concerns or issues promptly during service provision</li>
                <li>• Maintain adequate homeowner's or business insurance coverage</li>
              </ul>
            </div>
          </div>

          {/* 5. Cancellation Policy */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              5. CANCELLATION AND MODIFICATION POLICY
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">5.1 Client-Initiated Cancellation</h3>
            <div className="prose prose-gray max-w-none text-gray-700 mb-6">
              <ul className="space-y-3 ml-6">
                <li>
                  <strong>More than 4 hours notice:</strong> No cancellation penalty applied
                </li>
                <li>
                  <strong>Less than 4 hours notice:</strong> Cancellation fee equal to 50% of scheduled service cost
                </li>
                <li>
                  <strong>No-show/Same-day cancellation:</strong> Full service charge may be applied
                </li>
                <li>
                  <strong>Emergency situations:</strong> Evaluated on case-by-case basis with documentation
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 Rescheduling Policy</h3>
            <div className="prose prose-gray max-w-none text-gray-700">
              <ul className="space-y-2 ml-6">
                <li>• Free rescheduling available with 24+ hours advance notice</li>
                <li>• One complimentary reschedule per booking; subsequent changes subject to fees</li>
                <li>• Emergency weather or safety-related postponements exempt from fees</li>
                <li>• Company-initiated rescheduling does not incur client penalties</li>
              </ul>
            </div>
          </div>

          {/* 6. General Provisions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              6. GENERAL PROVISIONS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.1 Governing Law</h3>
                <p className="text-gray-700 mb-6">
                  This Agreement shall be governed by and construed in accordance with the laws of Kenya. 
                  Any disputes arising shall be subject to the jurisdiction of Kenyan courts.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.2 Severability</h3>
                <p className="text-gray-700">
                  If any provision of this Agreement is deemed invalid or unenforceable, the remaining 
                  provisions shall continue in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.3 Entire Agreement</h3>
                <p className="text-gray-700 mb-6">
                  This document constitutes the entire agreement between the parties and supersedes 
                  all prior negotiations, representations, or agreements.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.4 Amendment</h3>
                <p className="text-gray-700">
                  This Agreement may only be modified by written consent of both parties. 
                  Company reserves the right to update terms with 30 days written notice.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Questions or Clarifications?</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              For questions regarding these terms of service, contract modifications, or legal clarifications, 
              please contact our customer service team or legal department.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center space-x-2 bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors shadow-md"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Legal Team</span>
              </button>
              <a
                href="mailto:legal@cleandrasolutions.com"
                className="inline-flex items-center space-x-2 bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-md"
              >
                <Mail className="h-5 w-5" />
                <span>Email Legal Dept</span>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-yellow-200 text-sm text-gray-600">
              <p>Document ID: TOS-2025-001 | Last Reviewed: January 2025</p>
              <p className="mt-1">© 2025 Cleandra Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;