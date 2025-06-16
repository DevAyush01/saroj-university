import React from 'react';
import Layout from '../../components/Layout';

const HumanitiesPage = () => {
  const programs = [
    { title: 'BA in English Literature', duration: '3 Years' },
    { title: 'MA in History', duration: '2 Years' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Humanities Programs</h1>
          <p className="text-xl text-gray-600">Exploring human culture, thought, and creativity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HumanitiesPage;