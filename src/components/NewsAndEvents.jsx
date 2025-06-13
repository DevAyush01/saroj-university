import React from "react";
import { motion } from "framer-motion";

const NewsSection = () => {
  // News data
  const newsItems = [
    {
      id: 1,
      title: "Saroj International ranked among top 10 institutes for AI education",
      date: "June 15, 2023",
      category: "Achievement",
      excerpt: "The institute has been recognized for its excellence in artificial intelligence education and research."
    },
    {
      id: 2,
      title: "New partnership with Tech Giants Inc. for student internships",
      date: "June 10, 2023",
      category: "Collaboration",
      excerpt: "Students will now have access to exclusive internship opportunities at leading tech companies."
    },
    {
      id: 3,
      title: "Campus reopening announced with enhanced safety measures",
      date: "June 5, 2023",
      category: "Announcement",
      excerpt: "The institute will reopen with new health protocols to ensure student safety."
    },
    {
      id: 4,
      title: "Annual tech fest 'InnovateX 2023' scheduled for July 20-22",
      date: "May 28, 2023",
      category: "Event",
      excerpt: "Three days of workshops, competitions, and talks from industry leaders."
    },
   
  ];

  // Notice data
  const notices = [
    {
      id: 1,
      title: "Admission Deadline Extension",
      content: "Last date for admissions extended to June 30, 2023",
      date: "June 12, 2023",
      important: true
    },
    {
      id: 2,
      title: "Summer Break Schedule",
      content: "Institute will remain closed from July 1-15, 2023",
      date: "June 10, 2023",
      important: false
    },
    {
      id: 3,
      title: "Campus Maintenance",
      content: "Power shutdown on June 18, 2023 (9 AM - 5 PM)",
      date: "June 8, 2023",
      important: true
    },
    {
      id: 4,
      title: "Faculty Recruitment",
      content: "Walk-in interviews for Assistant Professors on June 25, 2023",
      date: "June 5, 2023",
      important: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b font-funneldisplay font-medium from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            News & Announcements
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto">
            Stay updated with the latest happenings and important notices from Saroj International
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Latest News
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {newsItems.length} Updates
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {newsItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                      variants={cardHover}
                      whileHover="hover"
                    >
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.category === "Achievement" ? "bg-green-100 text-green-800" :
                            item.category === "Collaboration" ? "bg-blue-100 text-blue-800" :
                            item.category === "Announcement" ? "bg-purple-100 text-purple-800" :
                            item.category === "Event" ? "bg-red-100 text-red-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.category}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">{item.date}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
                <motion.a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View all news articles
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Notice Board (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    Notice Board
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {notices.length} Notices
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {notices.map((notice) => (
                    <motion.li 
                      key={notice.id}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -3,
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                      }}
                      className={`p-4 rounded-lg border ${notice.important ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200'} hover:shadow-sm transition-all duration-200`}
                    >
                      <div className="flex items-start">
                        {notice.important && (
                          <div className="flex-shrink-0 mt-0.5 mr-3">
                            <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-base font-semibold ${notice.important ? 'text-yellow-800' : 'text-gray-900'}`}>
                              {notice.title}
                            </h4>
                            <span className="text-xs text-gray-500">{notice.date}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">{notice.content}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
                <motion.a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View all notices
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;