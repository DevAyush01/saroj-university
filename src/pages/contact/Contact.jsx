import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, Globe } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    college: 'Saroj International University'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          college: formData.college
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      // Optional: Submit to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Thank you for contacting us! We'll respond soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        college: 'Saroj International University'
      });
    } catch (error) {
      console.error("Error!", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate gradient position based on mouse position
  const gradientPosition = {
    backgroundPosition: `${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%`
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Saroj International University</title>
        <meta name="description" content="Get in touch with Saroj International University for inquiries, support, admissions, and general information." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 opacity-70"
          style={gradientPosition}
        ></div>
        
        {/* Floating bubbles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-200 opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-purple-200 opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-blue-200 opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyMTUsMjE1LDIxNSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          <Toaster position="top-center" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-800 mb-4 relative inline-block">
                <span className="relative z-10">Contact Saroj International University</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-200 rounded-full z-0"></span>
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 transform transition-all hover:shadow-2xl hover:-translate-y-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <input
                    type="hidden"
                    name="college"
                    value={formData.college}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Right Column - Contact Info + Map */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 transform transition-all hover:shadow-2xl hover:-translate-y-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <MapPin className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Address</h3>
                        <p className="text-gray-600">
                        12th Km Stone, Sultanpur Road, <br/>Near Purvanchal Expressway, <br/>Gosaiganj, Lucknow, Uttar Pradesh - 226022
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <Phone className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                        <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          <a href="tel:+919513731275" className="hover:text-blue-600 transition-colors duration-300">
                            +91 9513731275
                          </a>
                        </p>
                        <p className="text-gray-600 mt-1 hover:text-blue-600 transition-colors duration-300">
                          <a href="tel:+919151038001" className="hover:text-blue-600 transition-colors duration-300">
                            +91 9151038001-005
                          </a>
                        </p>
                        <p className="text-gray-600 mt-1 hover:text-blue-600 transition-colors duration-300">
                          <a href="tel:18001807686" className="hover:text-blue-600 transition-colors duration-300">
                            1800 180 7686
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <Mail className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Email</h3>
                        <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          <a href="mailto:info@sarojuniversity.edu.in" className="hover:text-blue-600 transition-colors duration-300">
                            info@sarojuniversity.edu.in
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <Globe className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Website</h3>
                        <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          <a href="https://www.sarojuniversity.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
                            www.sarojuniversity.edu.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Google Map */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1">
                  
                  <div className="aspect-w-16 aspect-h-9 w-full h-58 ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.173324304345!2d81.0798900752192!3d26.770744476732116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be76246cd85e5%3A0xf68400cf231026d6!2sSaroj%20International%20University!5e0!3m2!1sen!2sin!4v1751712043473!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-xl"
                    ></iframe>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Contact;