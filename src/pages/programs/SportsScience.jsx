import React from 'react';
import Layout from '../../components/Layout';

const SportsScience = () => {
  const programs = [
    { title: 'BS in Sports Science', duration: '4 Years' },
    { title: 'MS in Sports Nutrition', duration: '2 Years' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-800 mb-4">Sports Science Programs</h1>
          <p className="text-xl text-gray-600">Advancing human performance through scientific study</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex-1 bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SportsScience;