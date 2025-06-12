import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-700 text-white pt-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* University Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 relative pb-2">
              Saroj International University
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <p className="mb-4 text-gray-200">
              Committed to excellence in education, empowering the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white  hover:text-yellow-400 transition-colors  duration-300 ">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors  duration-300 ">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Other Colleges */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2">
              Other Colleges
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Saroj Institute of Technology & Management</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Shivdan Singh Institute of Technology & Management</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Saroj College Of Pharmacy</a></li>
            </ul>
          </div>

          {/* Admissions & Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2">
              Admissions
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Admission Process</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Eligibility Criteria</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Fee Structure</a></li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2">
              Quick Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-yellow-400" />
                <span>12th Km Stone, Sultanpur Road, Near Purvanchal Expressway, Gosaiganj, Lucknow, Uttar Pradesh - 226 022</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" />
                <a href="tel:+919513731275" className="hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">+91 95137-31275</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" />
                <a href="tel:+915223116178" className="hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">+91-522-311-6178</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                <a href="mailto:info@sarojuniversity.edu.in" className="hover:text-yellow-400 hover:underline hover:underline-offset-8 transition-colors duration-300">info@sarojuniversity.edu.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="border-t border-gray-700 mt-10 py-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Saroj International University. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop}
            className="bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-white  hover:underline hover:underline-offset-8 transition-colors duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;