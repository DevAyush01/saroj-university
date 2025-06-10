import React from "react";
import { GraduationCap, Globe, User2, Info } from "lucide-react";
import Layout from "../../components/Layout";

const criteria = [
  {
    title: "Undergraduate Programs (Indian Nationals)",
    description:
      "Successful completion of Class 12th from any recognized board in India.",
    icon: <User2 className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Undergraduate Programs (Foreign Nationals)",
    description:
      "Submission of a certificate equivalent to Class 12th from the respective country and meeting the equivalence standards of the ‘Association of Indian Universities’.",
    icon: <Globe className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Postgraduate Programs (Indian Nationals)",
    description: "Graduation from any recognized university in India.",
    icon: <GraduationCap className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Postgraduate Programs (Foreign Nationals)",
    description:
      "Submission of a degree awarded by a university in the respective country and meeting the equivalence criteria of the ‘Association of Indian Universities’.",
    icon: <Globe className="text-blue-600 w-6 h-6" />,
  },
];

const additionalNotes = [
  "Applicants currently appearing for their final year graduation exams in 2024 are also eligible to apply for Postgraduate programs.",
  "The university reserves the right to assess a candidate’s capability through Group Discussion/Personal Interview (GD/PI) before final admission.",
  "Applicants must be at least 17 years old by 31st December of the academic year for which they are applying.",
];

const AdmissionCriteria = () => {
  return (
    <Layout >
    <div className="min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Admission Criteria</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pre-qualification examination criteria for undergraduate and postgraduate programs at Saroj International University.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-blue-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Info className="text-blue-600 w-5 h-5 mr-2" />
            <h3 className="text-xl font-semibold text-blue-800">Additionally</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            {additionalNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AdmissionCriteria;
