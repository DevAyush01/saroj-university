import React from 'react';
import Layout from '../../components/Layout';

const PharmacyPage = () => {
  const programs = [
    { title: 'Doctor of Pharmacy (PharmD)', duration: '6 Years' },
    { title: 'BPharm', duration: '4 Years' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Pharmacy Programs</h1>
          <p className="text-xl text-gray-600">Training healthcare professionals in medication therapy</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <ul className="space-y-4">
            {programs.map((program, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <p className="text-gray-600">{program.duration}</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PharmacyPage;