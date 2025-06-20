import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaChartBar, FaNetworkWired, FaChevronDown, FaFileAlt, FaFilter, FaLightbulb, FaTools } from 'react-icons/fa'; // Added FaTools for the main icon
import { Helmet } from 'react-helmet';

const ManagementAndTechPage = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [filters, setFilters] = useState({
    level: 'all', // Default to 'all' for initial display
    category: 'all',
    duration: 'all'
  });

  const allPrograms = [
    // BBA Programs (Updated to reflect "Business & Entrepreneurship")
    {
      id: 'bba-entrepreneurship',
      title: 'BBA in Entrepreneurship',
      level: 'undergraduate',
      category: 'business',
      duration: '4 Years',
      icon: <FaLightbulb className="text-orange-400 text-xl" />, // Smaller, orange icon for consistency
      description: 'A comprehensive program designed to cultivate entrepreneurial mindset and skills.',
      highlights: [
        'Startup ecosystem understanding',
        'Business model canvas',
        'Venture capital & funding',
        'Innovation and design thinking',
        'Marketing and sales strategies'
      ]
    },
    {
      id: 'bba-finance',
      title: 'BBA in Finance',
      level: 'undergraduate',
      category: 'business',
      duration: '3 Years',
      icon: <FaLightbulb className="text-orange-400 text-xl" />,
      description: 'Focus on financial markets, investment, and corporate finance.',
      highlights: [
        'Financial accounting',
        'Investment analysis',
        'Risk management',
        'Corporate finance',
        'Financial modeling'
      ]
    },
    {
      id: 'bba-marketing',
      title: 'BBA in Marketing',
      level: 'undergraduate',
      category: 'business',
      duration: '3 Years',
      icon: <FaLightbulb className="text-orange-400 text-xl" />,
      description: 'Develop skills in market research, branding, and sales strategies.',
      highlights: [
        'Consumer behavior',
        'Digital marketing',
        'Brand management',
        'Marketing research',
        'Sales management'
      ]
    },
    // MBA Programs
    {
      id: 'mba-general',
      title: 'MBA - General Management',
      level: 'postgraduate',
      category: 'business',
      duration: '2 Years',
      icon: <FaLightbulb className="text-yellow-600 text-xl" />, // Different shade for PG
      description: 'Broad-based management education for leadership roles.',
      highlights: [
        'Strategic management',
        'Organizational behavior',
        'Operations management',
        'Business analytics',
        'Leadership development'
      ]
    },
    {
      id: 'mba-hr',
      title: 'MBA - Human Resources',
      level: 'postgraduate',
      category: 'business',
      duration: '2 Years',
      icon: <FaLightbulb className="text-yellow-600 text-xl" />,
      description: 'Specialization in human resource management and organizational development.',
      highlights: [
        'Talent acquisition',
        'Performance management',
        'Compensation & benefits',
        'Labor laws',
        'HR analytics'
      ]
    },
    // Diploma Programs (if applicable for business)
    {
      id: 'diploma-business',
      title: 'Diploma in Business Administration',
      level: 'diploma',
      category: 'business',
      duration: '1 Year', // Example duration
      icon: <FaLightbulb className="text-yellow-400 text-xl" />, // Different shade for Diploma
      description: 'Foundational understanding of business principles.',
      highlights: [
        'Business communication',
        'Basic accounting',
        'Marketing fundamentals',
        'Business law basics',
        'Office administration'
      ]
    },
    // Added Tech Programs for "Management & Tech" context
    {
      id: 'bsc-cs',
      title: 'BSc in Computer Science',
      level: 'undergraduate',
      category: 'tech',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-600 text-xl" />,
      description: 'Foundational study of computing and programming.',
      highlights: [
        'Programming languages',
        'Data structures',
        'Algorithms',
        'Operating systems',
        'Database management'
      ]
    },
    {
      id: 'msc-it',
      title: 'MSc in Information Technology',
      level: 'postgraduate',
      category: 'tech',
      duration: '2 Years',
      icon: <FaNetworkWired className="text-teal-600 text-xl" />,
      description: 'Advanced studies in IT infrastructure and management.',
      highlights: [
        'Network security',
        'Cloud computing',
        'IT project management',
        'Data analytics',
        'Software engineering'
      ]
    },
  ];

  const filteredPrograms = allPrograms.filter(program => {
    return (
      (filters.level === 'all' || program.level === filters.level) &&
      (filters.category === 'all' || program.category === filters.category) &&
      (filters.duration === 'all' ||
        (filters.duration === 'short' && (program.duration.includes('1') || program.duration.includes('2'))) || // Assuming 1 & 2 years are 'short'
        (filters.duration === 'medium' && program.duration.includes('3')) ||
        (filters.duration === 'long' && program.duration.includes('4'))
      )
    );
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const levelFilters = [
    { label: 'All Programs', value: 'all' },
    { label: 'Undergraduate', value: 'undergraduate' },
    { label: 'Postgraduate', value: 'postgraduate' },
    { label: 'Diploma', value: 'diploma' },
  ];

  return (
    <Layout>
      <Helmet>
  <title>Management & Technology Programs | Saroj International University</title>
  <meta name="description" content="Combine leadership skills with technical knowledge in our interdisciplinary Management and Technology programs." />
</Helmet>

      <div className="container mx-auto max-w-6xl py-12">
        {/* NEW TOP HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4 text-5xl text-gray-700">
            {/* Icon relevant to Management & Technology - using FaTools as a generic representation */}
            <FaTools />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Management & Technology Programs</h1>
          <p className="text-xl text-gray-600 mb-2">Innovating the future through strategic leadership and cutting-edge technology.</p>
          <p className="text-md text-gray-500">Total Programs Available: {allPrograms.length} (including all levels)</p>
        </motion.div>
        {/* END NEW TOP HEADER SECTION */}


        {/* Black Banner/Card with text, image, and filters */}
        <div className="bg-black rounded-t-xl shadow-lg overflow-hidden mb-0"> {/* Adjusted rounded-xl for full card */}
          <div className="px-8 py-6 text-white">
            <div className="flex items-center">
              <FaBusinessTime className="text-3xl text-white mr-4" /> {/* Icon changed */}
              <div>
                <h2 className="text-2xl font-bold">Our Business & Entrepreneurship Programs</h2> {/* Text updated */}
                <p className="text-gray-300 mt-1">Building the next generation of business innovators and strategists</p> {/* Text updated */}
              </div>
            </div>
          </div>

          {/* Image Section - Directly below the header */}
          <div className="w-full relative h-64 overflow-hidden ">
            <img
              src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8MHwwfHx8MA%3D%3D"
              alt="AI and Technology Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Filter Buttons Section - Directly below the image */}
          <div className="bg-white p-4 shadow-md flex flex-wrap gap-2 justify-start"> {/* Kept shadow-md for this section */}
            {levelFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange('level', filter.value)}
                className={`px-4 py-2 rounded-b-lg text-sm font-medium transition-colors duration-200
                  ${filters.level === filter.value
                    ? 'bg-orange-500 text-white' // Orange active state from image
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          
          </div>
        </div>

        {/* Programs List Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-b--xl shadow-md overflow-hidden mb-12" // Original styling for program list container
        >
          <div className="p-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <div key={program.id} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <button
                    onClick={() => setExpandedPrograms(prev => ({
                      ...prev,
                      [program.id]: !prev[program.id]
                    }))}
                    className="w-full text-left flex justify-between items-center" // Changed items-start to items-center
                  >
                    <div className="flex items-center">
                      {program.icon} {/* Program-specific icon */}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                        <div className="flex items-center mt-1"> {/* Container for duration and badge */}
                            <p className="text-gray-600 text-sm">{program.duration}</p>
                            {/* Level Badge Styling */}
                            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white
                                ${program.level === 'undergraduate' ? 'bg-orange-500' :
                                  program.level === 'postgraduate' ? 'bg-purple-600' :
                                  program.level === 'diploma' ? 'bg-yellow-600' : 'bg-gray-500'
                                }`}>
                                {program.level === 'undergraduate' ? 'UG' :
                                 program.level === 'postgraduate' ? 'PG' :
                                 program.level === 'diploma' ? 'Diploma' : ''}
                            </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedPrograms[program.id] ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedPrograms[program.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pl-12"
                      >
                        <p className="text-gray-700 mb-3">{program.description}</p>
                        <h4 className="font-medium text-gray-800 mb-2">Program Highlights:</h4>
                        <ul className="space-y-2 text-gray-700">
                          {program.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No programs match your filter criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>

          <div className="px-8 py-6 bg-blue-50 border-t border-gray-200 text-center">
            <motion.a
             href="https://siu.in8.nopaperforms.com/"  target="_blank"
              className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center mx-auto w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileAlt className="mr-2" /><span>
                Start Application
                </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ManagementAndTechPage;