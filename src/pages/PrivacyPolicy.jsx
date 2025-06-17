import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({
    dataCollection: false,
    dataUsage: false,
    dataProtection: false,
    cookies: false,
    rights: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Privacy Policy | Saroj International University</title>
          <meta name="description" content="Learn how Saroj International University collects, uses, and protects your personal information." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-3 sm:mb-4">Privacy Policy</h1>
 </div>
          

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Introduction */}
            <section id="introduction" className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Introduction</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Saroj International University ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section id="dataCollection" className="p-6 border-b border-gray-200">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('dataCollection')}
              >
                <h2 className="text-2xl font-bold text-indigo-900">Information We Collect</h2>
                <svg 
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${expandedSections.dataCollection ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedSections.dataCollection && (
                <div className="mt-4 text-gray-700 space-y-4">
                  <p>We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Register for an account on our website</li>
                    <li>Apply for admission or enroll in programs</li>
                    <li>Subscribe to our newsletters or updates</li>
                    <li>Participate in surveys or feedback forms</li>
                    <li>Contact us via email, phone, or other channels</li>
                  </ul>
                  <p>The types of personal information we collect may include:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Name and contact details
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demographic information
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Academic records and qualifications
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Payment and financial information
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Data Usage */}
            <section id="dataUsage" className="p-6 border-b border-gray-200">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('dataUsage')}
              >
                <h2 className="text-2xl font-bold text-indigo-900">How We Use Your Information</h2>
                <svg 
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${expandedSections.dataUsage ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedSections.dataUsage && (
                <div className="mt-4 text-gray-700 space-y-4">
                  <p>We use the information we collect for various purposes, including:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Academic Purposes</h3>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-900">
                        <li>Admission processing</li>
                        <li>Academic record maintenance</li>
                        <li>Course registration and management</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Administrative Purposes</h3>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-900">
                        <li>Account management</li>
                        <li>Fee collection and processing</li>
                        <li>Communication with students</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Improvement Purposes</h3>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-900">
                        <li>Website enhancement</li>
                        <li>Service improvement</li>
                        <li>Research and analytics</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-800 mb-2">Legal Compliance</h3>
                      <ul className="list-disc pl-5 space-y-1 text-indigo-900">
                        <li>Regulatory requirements</li>
                        <li>Legal obligations</li>
                        <li>Dispute resolution</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    We will never sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
              )}
            </section>

            {/* Data Protection */}
            <section id="dataProtection" className="p-6 border-b border-gray-200">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('dataProtection')}
              >
                <h2 className="text-2xl font-bold text-indigo-900">Data Protection</h2>
                <svg 
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${expandedSections.dataProtection ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedSections.dataProtection && (
                <div className="mt-4 text-gray-700 space-y-4">
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700">
                          Our security measures include encryption, access controls, secure networks, and regular security audits.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p>While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</p>
                </div>
              )}
            </section>

            {/* Cookies */}
            <section id="cookies" className="p-6 border-b border-gray-200">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('cookies')}
              >
                <h2 className="text-2xl font-bold text-indigo-900">Cookies and Tracking Technologies</h2>
                <svg 
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${expandedSections.cookies ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedSections.cookies && (
                <div className="mt-4 text-gray-700 space-y-4">
                  <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Control</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Essential</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Website functionality</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cannot be disabled</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analytics</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Website improvement</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Opt-out</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marketing</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Personalized content</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Manage preferences</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-sm">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.</p>
                </div>
              )}
            </section>

            {/* Your Rights */}
            <section id="rights" className="p-6 border-b border-gray-200">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('rights')}
              >
                <h2 className="text-2xl font-bold text-indigo-900">Your Data Protection Rights</h2>
                <svg 
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${expandedSections.rights ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {expandedSections.rights && (
                <div className="mt-4 text-gray-700 space-y-4">
                  <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Access and Portability
                      </h3>
                      <p className="text-gray-600">Request access to or a copy of your personal data.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Deletion
                      </h3>
                      <p className="text-gray-600">Request deletion of your personal data under certain conditions.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Rectification
                      </h3>
                      <p className="text-gray-600">Request correction of inaccurate or incomplete data.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                        Restriction
                      </h3>
                      <p className="text-gray-600">Request restriction of processing your personal data.</p>
                    </div>
                  </div>
                  
                  <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.</p>
                </div>
              )}
            </section>

            {/* Policy Changes */}
            <section id="changes" className="p-6">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Changes to This Privacy Policy</h2>
              <div className="text-gray-700 space-y-4">
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        For significant changes, we may provide more prominent notice (including, for certain services, email notification of privacy policy changes).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;