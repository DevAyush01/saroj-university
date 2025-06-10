import React from 'react';
import Layout from '../../components/Layout';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  'Register at siu.org.in or manually at SIU admission cell',
  'Submit registration enquiry',
  'Review course details, eligibility, and fees',
  'Choose admission path: SUAT or National/State Level Exams (JEE, CAT, MAT, etc.)',
  'Fill the application form and pay the fee',
  'Receive ID and password',
  'Choose test location: PAN India Centers or SIU Campus',
  'Attempt SUAT',
  'Wait for result: If unsuccessful, exit process',
  'If successful, appear for PI at SIU (Group Discussion/Personal Interview)',
  'If rejected, exit process',
  'If selected, receive admission offer',
  'Pay program fee via cash/DD/credit/debit card/online',
  'Complete registration & document verification',
  'Commencement of classes'
];

const AdmissionProcess = () => {
  return (
    <Layout>
      <div className="bg-[#F3F8FF] py-20 px-4 lg:px-20">
        <div className="bg-white rounded-2xl max-w-4xl mx-auto shadow-xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
            <span className="text-gray-900">ADMISSION </span>
            <span className="text-blue-600">PROCESS</span>
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionProcess;
