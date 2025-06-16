import React, { useState } from 'react';
import Layout from '../../components/Layout';

const FilmsAndFashion = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});

  const programs = [
    {
      id: 'film-production',
      title: 'BFA in Film Production',
      duration: '4 Years',
      description: 'Comprehensive training in all aspects of filmmaking.'
    },
    {
      id: 'fashion-design',
      title: 'BDes in Fashion Design',
      duration: '4 Years',
      description: 'Developing creative vision and technical skills in fashion.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Film & Fashion Programs</h1>
          <p className="text-xl text-gray-600">Nurturing creative talent for the entertainment and fashion industries</p>
        </div>
        
        {/* Programs list */}
        {programs.map(program => (
          <div key={program.id} className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-700">{program.title}</h3>
            <p className="text-gray-600">{program.duration}</p>
            <p className="text-gray-700 mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FilmsAndFashion;