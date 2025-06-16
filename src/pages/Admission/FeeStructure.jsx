import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

const SIUFeeStructure = () => {
  
    const feeData = [
      ["B.Tech (CSE, IT, CS, ME, EC, EE, EN)", "₹4,40,000", "₹1,10,000/year"],
      ["B.Tech (AI & ML, AI & DS, Robotics)", "₹4,40,000", "₹1,10,000/year"],
      ["B.Pharm", "₹4,00,000", "₹1,00,000/year"],
      ["D.Pharm", "₹1,70,000", "₹85,000/year"],
      ["M.Pharm", "₹2,00,000", "₹1,00,000/year"],
      ["M.Tech (CSE, ME, IT)", "₹2,50,000", "₹1,25,000/year"],
      ["M.Tech (AI & DS, Robotics)", "₹2,50,000", "₹1,25,000/year"],
      ["Diploma Engg. (CE, EE, ME, CS)", "₹2,40,000", "₹1,20,000/year"],
      ["BCA", "₹4,50,000", "₹1,50,000/year"],
      ["MCA", "₹3,00,000", "₹1,50,000/year"],
      ["B.Sc (PCM)", "₹2,40,000", "₹80,000/year"],
      ["BS (Data Analytics, etc.)", "₹2,40,000", "₹80,000/year"],
      ["M.Sc (PCM)", "₹1,60,000", "₹80,000/year"],
      ["MS (related disciplines)", "₹1,60,000", "₹80,000/year"],
      ["Diploma (Public Health)", "₹60,000", "₹60,000"],
      ["Ph.D. (all domains)", "₹3,00,000", "₹1,00,000/year"],
      ["BA / B.Com / B.Ed", "₹1,80,000", "₹60,000/year"],
      ["BS (Intl. Relations, Sports)", "₹2,70,000", "₹90,000/year"],
      ["MS (Sports)", "₹1,80,000", "₹90,000/year"],
      ["BBA (all specializations)", "₹3,30,000", "₹1,10,000/year"]
    ];
  
    return (
      <Layout>
        <div className="min-h-screen flex items-center py-24 justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-6xl w-full">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
                  SAROJ INTERNATIONAL UNIVERSITY, LUCKNOW
                </h2>
                <h3 className="text-2xl text-blue-600 mt-2">
                  Fee Structure for Session 2025–2026
                </h3>
                <p className="text-gray-600 mt-2">
                  Ahimamau P.O. Arjunganj, Sultanpur Road, Lucknow | Phone: 9555699988
                </p>
              </div>
  
              <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Programme-wise Fee Details</h3>
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-2 text-left">Programme</th>
                      <th className="px-4 py-2 text-left">Total Fees</th>
                      <th className="px-4 py-2 text-left">Annual/Tuition Fees</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {feeData.map(([course, total, tuition], i) => (
                      <tr key={i}>
                        <td className="px-4 py-2 text-gray-900">{course}</td>
                        <td className="px-4 py-2 text-gray-700">{total}</td>
                        <td className="px-4 py-2 text-gray-700">{tuition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
  
                <div className="mt-6 text-sm text-gray-600 space-y-2">
                  <p>• Fees once deposited are non-refundable.</p>
                  <p>• Examination, form, and enrollment fees are to be paid directly to the university.</p>
                  <p>• Dress and transportation charges are separate (if availed).</p>
                  <p>• Hostel fee is ₹60,000/year (including mess facility).</p>
                  <p>• 10% of the total fee is charged as a Development Fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default SIUFeeStructure;