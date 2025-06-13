import { useState, useEffect } from 'react';
import { GraduationCap, ArrowRight, Mail, Phone, ChevronDown } from 'lucide-react';

import backgroundImage from '../assets/bg.jpg'

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you shortly about ${formData.interest || 'our programs'}`);
    setFormData({
      name: '',
      email: '',
      interest: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="University campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-xl ${animate ? 'animate-[float_8s_ease-in-out_infinite]' : ''}`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-yellow-100/10 blur-xl ${animate ? 'animate-[float_10s_ease-in-out_infinite_2s]' : ''}`}></div>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Main content */}
        <div className={`lg:w-2/3 ${animate ? 'animate-[fadeInLeft_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Shape Your Future at <span className="text-yellow-300">Saroj International</span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8">
              Join 10,000+ students in our innovative programs designed for tomorrow's leaders.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium text-black">50+ Programs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <Phone className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium text-black">Global Campuses</span>
              </div>
            </div>
            
            <button className="group relative overflow-hidden px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-medium shadow-lg hover:shadow-md transition-all duration-300 hover:bg-yellow-300">
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Compact floating form */}
        <div className={`lg:w-1/3 ${animate ? 'animate-[fadeInUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}>
          <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-500">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-1">Get Program Info</h3>
              <p className="text-sm text-blue-600/80">We'll contact you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-blue-200 focus:border-blue-400 focus:outline-none text-sm placeholder-blue-300 transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-blue-200 focus:border-blue-400 focus:outline-none text-sm placeholder-blue-300 transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-blue-200 focus:border-blue-400 focus:outline-none text-sm appearance-none bg-white text-blue-900 placeholder-blue-300 pr-8"
                >
                  <option value="">Program Interest</option>
                  <option value="Business">Business & Management</option>
                  <option value="Technology">Computer Science & IT</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Health">Health Sciences</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-300" size={16} />
              </div>
              
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request Information <Mail size={16} />
              </button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-blue-50">
              <div className="flex items-center gap-3 text-xs text-blue-500 hover:text-blue-700 transition-colors">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;