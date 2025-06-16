import React from 'react';
import Layout from '../../components/Layout';

const ManagementAndTechPage = () => {
  const programs = [
    { title: 'BBA in Technology Management', duration: '4 Years' },
    { title: 'MSc in Business Analytics', duration: '2 Years' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Management & Technology Programs</h1>
          <p className="text-xl text-gray-600">Bridging business leadership with technological innovation</p>
        </div>
        
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <p className="text-gray-600">{program.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ManagementAndTechPage;