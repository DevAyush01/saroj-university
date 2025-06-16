import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const EntrepreneurshipAndBusiness = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const programs = [
    {
      id: 'bba-entrepreneurship',
      title: 'BBA in Entrepreneurship',
      duration: '4 Years',
      description: 'Develop the skills to launch and grow successful businesses.',
      highlights: [
        'Business plan development',
        'Startup financing',
        'Innovation management',
        'Entrepreneurial marketing'
      ]
    },
    {
      id: 'mba-innovation',
      title: 'MBA in Innovation Management',
      duration: '2 Years',
      description: 'Advanced training in leading innovative organizations.',
      highlights: [
        'Corporate innovation strategies',
        'Design thinking',
        'Technology commercialization',
        'Venture growth management'
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Entrepreneurship & Business Programs</h1>
          <p className="text-xl text-gray-600">Empowering future business leaders and innovators</p>
        </div>
        
        {/* Programs list with accordions */}
        {programs.map(program => (
          <ProgramAccordion 
            key={program.id}
            program={program}
            expanded={expandedPrograms[program.id]} 
            toggle={() => setExpandedPrograms(prev => ({
              ...prev,
              [program.id]: !prev[program.id]
            }))}
          />
        ))}
      </div>
    </Layout>
  );
};

export default EntrepreneurshipAndBusiness;