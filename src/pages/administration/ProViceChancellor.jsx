import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

const ViceChancellorPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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

  const stats = [
    { value: "AI-Driven", label: "Curriculum" },
    { value: "Industry", label: "Connections" },
    { value: "Future", label: "Ready Students" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Vice Chancellor | Saroj International University</title>
        <meta name="description" content="Message from the Vice Chancellor of Saroj International University" />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl">
              Vice Chancellor's Message
            </h1>
            <p className="mt-4 text-xl text-indigo-700 font-medium">
              Saroj International University
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-indigo-500 to-indigo-700 p-8 flex flex-col items-center justify-center">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  className="h-64 w-64 rounded-full object-cover border-4 border-white shadow-lg mb-6"
                  src="/vice-chancellor.jpg" 
                  alt="Col (Dr) Sameer Misra"
                />
                <h2 className="text-2xl font-bold text-white">Col (Dr) Sameer Misra</h2>
                <p className="text-indigo-100">Vice Chancellor</p>
              </div>

              <div className="md:w-2/3 p-8 md:p-12">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="prose prose-lg text-gray-700 max-w-none"
                >
                  <p className="mb-6 text-lg">
                    <span className="text-indigo-600 font-semibold">Greetings, Dear Students!</span>
                  </p>
                  
                  <p className="mb-6">
                    I am thrilled to share with you that <span className="font-semibold text-indigo-700">Saroj International University</span> is committed to making you future-ready! Our curriculum and programs are designed to equip you with the skills and knowledge required to excel in the AI-driven corporate world.
                  </p>
                  
                  <div className="relative mb-8 pl-6 border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-r-lg">
                    <FiBookOpen className="absolute -left-3 top-4 bg-white text-indigo-600 p-1 rounded-full border-2 border-indigo-500" size={24} />
                    <p className="italic text-indigo-800">
                      "At SIU, we are dedicated to providing you with the best possible education, training, and resources to make you AI and corporate ready."
                    </p>
                  </div>
                  
                  <p className="mb-6">
                    Our goal is to empower you to succeed in your chosen careers and become leaders in your fields.
                  </p>
                  
                  <p className="mb-6">
                    With our strong industry connections and innovative approach, we are confident that you will be well-prepared to secure top jobs and thrive in the competitive job market.
                  </p>
                  
                  <p className="mb-8">
                    Stay focused, work hard, and let's achieve greatness together!
                  </p>
                  
                  <div className="border-t pt-6">
                    <p className="text-gray-600">
                      Best regards,
                    </p>
                    <p className="text-xl font-semibold text-indigo-800">
                      Col (Dr) Sameer Misra
                    </p>
                    <p className="text-indigo-600">
                      Vice Chancellor, Saroj International University
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <p className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </Layout>
  );
};

export default ViceChancellorPage;
