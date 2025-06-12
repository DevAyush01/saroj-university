import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/bg.jpg";
import { ArrowRight, BookOpenIcon, GlobeIcon, LayersIcon, RocketIcon, TrendingUpIcon } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants = {
    hover: {
      y: -2,
      backgroundColor: "#214A9A",
      boxShadow: "0 10px 15px -3px rgba(33, 74, 154, 0.3)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 4px 6px -1px rgba(33, 74, 154, 0.2)"
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    program: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      className=" bg-cover bg-center min-h-screen flex items-center py-10 bg-blue-100 bg-blend-multiply"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroImage})`,
        backgroundPosition: "center center",
        backgroundAttachment: ""
      }}
      initial="hidden"
      animate="visible"
    >
      
      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12  w-full"
        variants={containerVariants}
      >
        {/* Text Section */}
        <motion.div
  className="text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {/* Hero Header */}
  <motion.div className="mb-8" variants={itemVariants}>
    <motion.span
      className="inline-block bg-gradient-to-r from-secondary to-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg mb-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      ✨ Admissions Now Open!
    </motion.span>
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
      variants={itemVariants}
    >
      <span className="text-white">Ignite Your Future at </span>
      <motion.span 
        className="bg-yellow-400 bg-clip-text text-transparent"
        whileHover={{ rotate: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Saroj International
      </motion.span>
    </motion.h1>
  </motion.div>

  {/* Description */}
  <motion.p 
    className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed" 
    variants={itemVariants}
  >
    Where passion meets innovation. Join our dynamic learning community to develop cutting-edge skills, 
    collaborate with industry leaders, and launch your dream career in tech and beyond.
  </motion.p>

  {/* CTA Buttons */}
  <motion.div 
    className="mt-12 flex flex-col sm:flex-row gap-4" 
    variants={itemVariants}
  >
    <motion.a
      href="#apply"
      className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <RocketIcon className="w-5 h-5" />
      Apply Now
    </motion.a>
    <motion.a
      href="#programs"
      className="px-8 py-4 border-2 border-secondary text-white rounded-xl font-semibold hover:bg-secondary/10 hover:border-secondary/80 transition-colors text-lg"
      whileHover={{ 
        y: -2, 
        backgroundColor: "rgba(240, 143, 7, 0.1)",
        borderColor: "#f08f07"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <BookOpenIcon className="w-5 h-5 inline mr-2" />
      Explore Programs
    </motion.a>
  </motion.div>

 
</motion.div>

        {/* Form Section */}
        <motion.div
  className=" w-full max-w-md pt-8"
  variants={formVariants}
  whileHover="hover"
>
  <div className="bg-white shadow-2xl overflow-hidden border border-gray-100">
    <div className="bg-blue-600 p-6 text-white">
      <h3 className="text-2xl font-bold">Request Information</h3>
      <p className="text-blue-100 opacity-90">Get details about our programs and admission process</p>
    </div>
    
    <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <div className="space-y-1">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 transition-all"
            placeholder="Your Name"
            required
          />
          <div className="absolute right-3 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 transition-all"
            placeholder="your@email.com"
            required
          />
          <div className="absolute right-3 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="phone" className="block text-gray-700 font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 transition-all"
            placeholder="(123) 456-7890"
            required
          />
          <div className="absolute right-3 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="program" className="block text-gray-700 font-medium">
          Program of Interest <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white pr-8 transition-all"
            required
          >
            <option value="">Select a program</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="cs">Computer Science</option>
            <option value="business">Business Administration</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
          </select>
          <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="pt-2">
      <motion.button
  type="submit"
  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-yellow-400"
  variants={buttonVariants}
  whileHover={{
    y: -3,
    boxShadow: "0 12px 20px -5px rgba(234, 179, 8, 0.4)"
  }}
  whileTap={{
    scale: 0.96,
    boxShadow: "0 5px 10px -2px rgba(202, 138, 4, 0.3)"
  }}
>
  <span className="transition-transform group-hover:translate-x-1 text-gray-900 group-hover:text-gray-900">
    Submit Request
  </span>
  <ArrowRight className="w-5 h-5 text-gray-900 group-hover:text-gray-900" />
</motion.button>



      </div>
      
    
    </form>
  </div>
</motion.div>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, -10, -20]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut"
        }}
      >
        <div className="text-center">
          <div className="text-white text-sm mb-2">Scroll to explore</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-white animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;