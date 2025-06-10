import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react';
import siuLogo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          

 {/* College Logo */}
<div className="flex flex-col items-start space-y-4">
  <img src={siuLogo} alt="SIU Logo" className="w-40 h-auto object-contain" />
  <p className="text-md text-white-700 max-w-2xl">
    Saroj International University is committed to excellence in education, empowering the future.
  </p>
</div>


          {/* Other Colleges */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Other Colleges</h3>
            <ul className="space-y-3 text-md">
              {[
                'Saroj Institute of Technology & Management',
                'Shivdan Singh Institute of Technology & Management',
                'Saroj College Of Pharmacy',
              ].map((college, idx) => (
                <li key={idx} className="flex items-start gap-2 hover:text-orange-500 transition-colors">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <span className="leading-snug">{college}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Admissions</h3>
            <ul className="space-y-3 text-md">
              <li className="hover:text-orange-500 transition-colors">
                <a href="/admission/admission-process">Admission Process</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="/admission/eligibility">Eligibility Criteria</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="/">Fee Structure</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-md">
              <li className="hover:text-orange-500 transition-colors">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Contact</h3>
            <div className="space-y-3 text-md">
              <div className="flex items-start gap-2 hover:text-orange-500 transition-colors">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span className="leading-snug">
                 12th Km Stone, Sultanpur Road, Near Purvanchal Expressway, Gosaiganj, Lucknow, Uttar Pradesh - 226 022
                </span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone size={18} className="shrink-0" />
                <span>+91 95137-31275</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone size={18} className="shrink-0" />
                <span>+91-522-311-6178</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/segindia/" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/saroj-educational-group/" className="text-blue-500 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/SEGofficial" className="text-blue-600 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Saroj International University - SIU. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
