import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const HealthSciencesPage = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const toggleProgram = (programId) => {
    setExpandedPrograms(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  // Animation variants
  const accordionVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const programs = [
    {
      id: 'public-health',
      title: 'Diploma in Public Health',
      duration: '2 Years',
      description: 'Comprehensive training in community health, epidemiology, and health policy.',
      highlights: [
        'Foundations of public health practice',
        'Health promotion strategies',
        'Epidemiological methods',
        'Health policy and management'
      ]
    },
    {
      id: 'physiotherapy',
      title: 'BS in Physiotherapy',
      duration: '4 Years',
      description: 'Clinical training in physical rehabilitation and therapeutic techniques.',
      highlights: [
        'Musculoskeletal rehabilitation',
        'Neurological physiotherapy',
        'Cardiorespiratory physiotherapy',
        'Clinical placements'
      ]
    },
    {
      id: 'medical-lab',
      title: 'BS in Medical Laboratory Technology',
      duration: '4 Years',
      description: 'Hands-on training in diagnostic laboratory procedures and analysis.',
      highlights: [
        'Clinical biochemistry',
        'Microbiology and immunology',
        'Histopathology techniques',
        'Laboratory management'
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Health Sciences Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preparing healthcare professionals through rigorous academic and clinical training.
          </p>
        </div>

        {/* Programs Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          {/* Section Header */}
          <div className="bg-green-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Our Health Sciences Programs</h2>
            <p className="text-green-100 mt-1">Designed to meet the growing demands of healthcare industries</p>
          </div>

          {/* Programs List */}
          <div className="p-8">
            {programs.map((program) => (
              <div key={program.id} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <button
                  onClick={() => toggleProgram(program.id)}
                  className="w-full text-left flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                    <p className="text-gray-600 mt-1">{program.duration}</p>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedPrograms[program.id] ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedPrograms[program.id] && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                      className="mt-4 pl-2"
                    >
                      <p className="text-gray-700 mb-3">{program.description}</p>
                      <h4 className="font-medium text-gray-800 mb-2">Program Highlights:</h4>
                      <ul className="space-y-2 text-gray-700">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <a 
                          href={`/programs/${program.id}`} 
                          className="text-green-600 hover:text-green-800 font-medium"
                        >
                          View Program Details →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Admission Info */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Admission Requirements</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High school diploma or equivalent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Minimum GPA of 2.5 (varies by program)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Personal statement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Letters of recommendation</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 py-6 bg-green-50 text-center">
            <a 
              href="/apply" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
              Apply Now
            </a>
            <p className="mt-4 text-gray-600">
              Have questions? <a href="/contact" className="text-green-600 hover:underline">Contact our admissions team</a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Clinical Placements</h3>
            <p className="text-gray-700">
              Our students gain hands-on experience through partnerships with leading hospitals and healthcare facilities.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Opportunities</h3>
            <p className="text-gray-700">
              Graduates pursue careers in hospitals, research labs, public health organizations, and private practice.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthSciencesPage;