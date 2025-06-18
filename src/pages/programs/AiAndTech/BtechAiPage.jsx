import { useState } from 'react';
import Layout  from '../../../components/Layout';
import { 
  FaBrain,          // For BrainCircuit
  FaLaptopCode,     // For Code2
  FaDatabase,       // For Database
  FaChartBar,       // For BarChart2
  FaRobot,          // For Robot
  FaGraduationCap,  // For GraduationCap
  FaCalendarAlt,    // For Calendar
  FaClock,          // For Clock
  FaBookOpen,       // For BookOpen
  FaBriefcase,      // For Briefcase
  FaChevronDown,    // For ChevronDown
  FaExternalLinkAlt // For ExternalLink
} from 'react-icons/fa';

const BtechAIMLPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    overview: false,
    curriculum: false,
    careers: false,
    admission: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
 

  const careerPaths = [
    {
      title: 'Machine Learning Engineer',
      description: 'Design and implement ML models for real-world applications',
      icon: <FaBrain className="w-6 h-6 text-blue-600" /> // Replaced BrainCircuit
    },
    {
      title: 'Data Scientist',
      description: 'Extract insights from complex datasets using statistical methods',
      icon: <FaChartBar className="w-6 h-6 text-purple-600" /> // Replaced BarChart2
    },
    {
      title: 'AI Research Scientist',
      description: 'Develop new algorithms and advance AI capabilities',
      icon: <FaRobot className="w-6 h-6 text-green-600" /> // Replaced Robot
    },
    {
      title: 'Computer Vision Engineer',
      description: 'Build systems that interpret visual information',
      icon: <FaLaptopCode className="w-6 h-6 text-red-600" /> // Replaced Code2
    },
    {
      title: 'NLP Engineer',
      description: 'Create systems that understand human language',
      icon: <FaDatabase className="w-6 h-6 text-yellow-600" /> // Replaced Database
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <FaBrain className="w-12 h-12 text-blue-600" /> {/* Replaced BrainCircuit */}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">B.Tech in Artificial Intelligence & Machine Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge program blending theoretical foundations with practical applications in AI and ML
          </p>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced GraduationCap */}
              <h3 className="font-semibold text-lg">Degree Awarded</h3>
            </div>
            <p className="text-gray-700">Bachelor of Technology (B.Tech)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <FaClock className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced Clock */}
              <h3 className="font-semibold text-lg">Duration</h3>
            </div>
            <p className="text-gray-700">4 Years (8 Semesters)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced Calendar */}
              <h3 className="font-semibold text-lg">Intake</h3>
            </div>
            <p className="text-gray-700">60 Seats (Annual)</p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <button
            onClick={() => toggleSection('overview')}
            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaBookOpen className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced BookOpen */}
              Program Overview
            </h2>
            <FaChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.overview ? 'rotate-180' : ''}`} /> {/* Replaced ChevronDown */}
          </button>

          {expandedSections.overview && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 mb-4">
                Our B.Tech in Artificial Intelligence & Machine Learning is a comprehensive undergraduate program designed to equip students with the skills to develop intelligent systems and analyze complex data patterns. The curriculum blends computer science fundamentals with specialized AI/ML coursework.
              </p>
              <p className="text-gray-700 mb-4">
                The program emphasizes hands-on learning through projects, hackathons, and industry collaborations. Students will work with real-world datasets and develop solutions for practical problems across various domains.
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Industry-aligned curriculum with Python, TensorFlow, PyTorch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Specialized labs for AI, ML, Deep Learning, and Robotics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Faculty with both academic and industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Capstone projects with industry partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Internship opportunities with leading tech companies</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>


        {/* Career Paths */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <button
            onClick={() => toggleSection('careers')}
            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaBriefcase className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced Briefcase */}
              Career Opportunities
            </h2>
            <FaChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.careers ? 'rotate-180' : ''}`} /> {/* Replaced ChevronDown */}
          </button>

          {expandedSections.careers && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((career, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      {career.icon}
                      <h3 className="font-semibold text-lg ml-3">{career.title}</h3>
                    </div>
                    <p className="text-gray-700">{career.description}</p>
                    <div className="mt-4 text-sm text-blue-600 flex items-center">
                      <span>Average Salary: ₹8-25 LPA</span>
                      <FaExternalLinkAlt className="w-4 h-4 ml-2" /> {/* Replaced ExternalLink */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Top Recruiters:</h3>
                <div className="flex flex-wrap gap-4">
                  {['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'IBM', 'NVIDIA', 'Adobe', 'Intel'].map((company, i) => (
                    <div key={i} className="bg-gray-100 px-4 py-2 rounded-full text-gray-800">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Admission Requirements */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <button
            onClick={() => toggleSection('admission')}
            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaGraduationCap className="w-6 h-6 text-blue-600 mr-3" /> {/* Replaced GraduationCap */}
              Admission Process
            </h2>
            <FaChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.admission ? 'rotate-180' : ''}`} /> {/* Replaced ChevronDown */}
          </button>

          {expandedSections.admission && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Eligibility:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>10+2 with Physics, Chemistry, and Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Minimum 60% aggregate in 10+2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Valid JEE Main score or University Entrance Test</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Application Process:</h3>
                  <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                    <li>Fill online application form</li>
                    <li>Upload required documents</li>
                    <li>Pay application fee</li>
                    <li>Appear for counseling (if applicable)</li>
                    <li>Complete admission formalities</li>
                  </ol>
                </div>
              </div>
              
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-700 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our B.Tech in AI & ML program and become part of the next generation of AI innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BtechAIMLPage;