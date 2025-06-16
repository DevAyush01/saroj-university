import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, 
  FaLaptopCode, 
  FaBrain, 
  FaDatabase, 
  FaUniversity, 
  FaGlobeAmericas,
  FaFileAlt,
  FaGraduationCap,
  FaChevronDown
} from 'react-icons/fa';

const AiAndTechPage = () => {
  const [expandedCourses, setExpandedCourses] = useState({});
  const [expandedAdmission, setExpandedAdmission] = useState({
    regular: false,
    global: false
  });

  const toggleCourse = (courseId) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const toggleAdmission = (type) => {
    setExpandedAdmission(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Animation variants
  const accordionVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut" 
      }
    }
  };

  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaRobot className="text-5xl text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Discover Your Academic Pathway</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our cutting-edge programs in AI, ML, Data Science, and Robotics designed to shape future technology leaders.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          {/* Section Header */}
          <div className="bg-blue-700 px-8 py-6 flex items-center">
            <FaLaptopCode className="text-3xl text-white mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white">Artificial Intelligence & Technology</h2>
              <p className="text-blue-100 mt-1">Cutting-edge programs in AI, ML, Data Science, and Robotics</p>
            </div>
          </div>

          {/* Programs List */}
          <div className="p-8">
            {/* Undergraduate Programs */}
            <div className="mb-10">
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FaGraduationCap className="text-xl text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">B.Tech Programs</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Program Card 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('btech-ai')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <FaBrain className="text-blue-500 mr-3 text-xl" />
                        <h4 className="text-lg font-bold text-gray-800">B.Tech (AI, ML, Data Science, Robotics)</h4>
                      </div>
                      <div className="flex items-center text-gray-600 pl-9">
                        <span className="mr-4">4 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['btech-ai'] ? "open" : "closed"}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['btech-ai'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6 pl-14"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Comprehensive curriculum covering AI fundamentals</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Hands-on projects with industry datasets</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Specializations in ML or Robotics</span>
                          </li>
                        </ul>
                        <a href="/programs/btech-ai-ml" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          <FaFileAlt className="mr-2" /> View Full Details
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Program Card 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('btech-cse')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <FaLaptopCode className="text-blue-500 mr-3 text-xl" />
                        <h4 className="text-lg font-bold text-gray-800">B.Tech Computer Science & Engineering</h4>
                      </div>
                      <div className="flex items-center text-gray-600 pl-9">
                        <span className="mr-4">4 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['btech-cse'] ? "open" : "closed"}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['btech-cse'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6 pl-14"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Core computer science principles</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Electives in AI/ML technologies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Industry-aligned capstone project</span>
                          </li>
                        </ul>
                        <a href="/programs/btech-cse" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          <FaFileAlt className="mr-2" /> View Full Details
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="mb-10">
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FaUniversity className="text-xl text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">M.Tech Programs</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Program Card 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('mtech-ai')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <FaDatabase className="text-blue-500 mr-3 text-xl" />
                        <h4 className="text-lg font-bold text-gray-800">M.Tech (AI, ML, Data Science, Robotics)</h4>
                      </div>
                      <div className="flex items-center text-gray-600 pl-9">
                        <span className="mr-4">2 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['mtech-ai'] ? "open" : "closed"}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['mtech-ai'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6 pl-14"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Advanced AI algorithms and techniques</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Research opportunities with faculty</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Industry internship component</span>
                          </li>
                        </ul>
                        <a href="/programs/mtech-ai-ml" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          <FaFileAlt className="mr-2" /> View Full Details
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Program Card 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleCourse('mtech-cse')}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <FaLaptopCode className="text-blue-500 mr-3 text-xl" />
                        <h4 className="text-lg font-bold text-gray-800">M.Tech Computer Science & Engineering</h4>
                      </div>
                      <div className="flex items-center text-gray-600 pl-9">
                        <span className="mr-4">2 Years</span>
                      </div>
                    </div>
                    <motion.div
                      variants={arrowVariants}
                      animate={expandedCourses['mtech-cse'] ? "open" : "closed"}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedCourses['mtech-cse'] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6 pl-14"
                      >
                        <ul className="space-y-2 text-gray-700 mb-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Specialized tracks available</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Thesis or project-based options</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Cutting-edge research facilities</span>
                          </li>
                        </ul>
                        <a href="/programs/mtech-cse" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          <FaFileAlt className="mr-2" /> View Full Details
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Regular Admission */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => toggleAdmission('regular')}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <FaFileAlt className="text-gray-700 mr-3 text-xl" />
                    <h3 className="text-xl font-semibold text-gray-800">Admission Process Overview</h3>
                  </div>
                  <motion.div
                    variants={arrowVariants}
                    animate={expandedAdmission.regular ? "open" : "closed"}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedAdmission.regular && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                    >
                      <div className="px-6 pb-6 pl-14">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Regular Mode</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Submit online application with required documents</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Appear for entrance exam (if applicable)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Attend personal interview/counseling session</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Global Admission */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => toggleAdmission('global')}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <FaGlobeAmericas className="text-gray-700 mr-3 text-xl" />
                    <h3 className="text-xl font-semibold text-gray-800">Global Mode</h3>
                  </div>
                  <motion.div
                    variants={arrowVariants}
                    animate={expandedAdmission.global ? "open" : "closed"}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedAdmission.global && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                    >
                      <div className="px-6 pb-6 pl-14">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Complete regular admission process</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Submit additional documents for international study</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Complete visa and travel formalities</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-center">
            <motion.a 
              href="/apply" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center mx-auto w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileAlt className="mr-2" /> Start Application
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AiAndTechPage;