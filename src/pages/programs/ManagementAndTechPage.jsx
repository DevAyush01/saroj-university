import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaChartBar, FaNetworkWired, FaChevronDown, FaFileAlt, FaFilter, FaStethoscope } from 'react-icons/fa'; // Added FaStethoscope for the header icon

const ManagementAndTechPage = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});
  const [filters, setFilters] = useState({
    level: 'all', // Default to 'all' for initial display
    category: 'all',
    duration: 'all'
  });
  // Removed showFilters state as buttons will directly control the filter

  const allPrograms = [
    // B.Tech Programs
    {
      id: 'btech-cse',
      title: 'B.Tech - Computer Science & Engineering',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Comprehensive computer science education with hands-on training in software development and system design.',
      highlights: [
        'Software engineering principles',
        'Data structures and algorithms',
        'Database management systems',
        'Computer networks',
        'Cloud computing'
      ]
    },
    {
      id: 'btech-it',
      title: 'B.Tech - Information Technology',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Focus on IT systems, applications, and their integration in business environments.',
      highlights: [
        'Web technologies',
        'Information systems',
        'Network security',
        'Enterprise computing',
        'IT project management'
      ]
    },
    {
      id: 'btech-cyber-security',
      title: 'B.Tech - Cyber Security',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Specialized program in securing digital systems and networks against cyber threats.',
      highlights: [
        'Cryptography',
        'Ethical hacking',
        'Digital forensics',
        'Network security',
        'Cyber laws'
      ]
    },
    {
      id: 'btech-iot',
      title: 'B.Tech - Internet of Things',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Design and development of interconnected smart devices and systems.',
      highlights: [
        'Embedded systems',
        'Sensor networks',
        'Cloud computing for IoT',
        'Data analytics for IoT',
        'IoT security'
      ]
    },
    {
      id: 'btech-network-eng',
      title: 'B.Tech - Network Engineering',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaNetworkWired className="text-blue-500 text-2xl" />, // Using FaNetworkWired here
      description: 'Dedicated program for designing, implementing, and managing robust computer networks.',
      highlights: [
        'Network architecture and protocols',
        'Wireless and mobile networks',
        'Network security and administration',
        'Cloud networking solutions',
        'Router and switch configurations'
      ]
    },
    {
      id: 'btech-ece',
      title: 'B.Tech - Electronics & Communication',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Fundamentals of electronic systems and communication technologies.',
      highlights: [
        'Digital electronics',
        'Signal processing',
        'VLSI design',
        'Wireless communication',
        'Embedded systems'
      ]
    },
    {
      id: 'btech-mechanical',
      title: 'B.Tech - Mechanical Engineering',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Classical and modern mechanical engineering principles with industry applications.',
      highlights: [
        'Thermodynamics',
        'Machine design',
        'Manufacturing processes',
        'Automation and robotics',
        'CAD/CAM'
      ]
    },
    {
      id: 'btech-civil',
      title: 'B.Tech - Civil Engineering',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Design, construction, and maintenance of infrastructure projects.',
      highlights: [
        'Structural engineering',
        'Geotechnical engineering',
        'Transportation engineering',
        'Environmental engineering',
        'Construction management'
      ]
    },
    {
      id: 'btech-mechtronics',
      title: 'B.Tech - Mechtronics',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Integration of mechanical, electronic and computer engineering for smart systems.',
      highlights: [
        'Control systems',
        'Robotics',
        'Industrial automation',
        'Sensors and actuators',
        'System integration'
      ]
    },
    {
      id: 'btech-biotech',
      title: 'B.Tech - Bio-Tech',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Application of engineering principles to biological systems and medical technologies.',
      highlights: [
        'Genetic engineering',
        'Bioprocess engineering',
        'Bioinformatics',
        'Medical instrumentation',
        'Pharmaceutical technology'
      ]
    },
    {
      id: 'btech-electrical',
      title: 'B.Tech - Electrical Engineering',
      level: 'undergraduate',
      category: 'engineering',
      duration: '4 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Design and analysis of electrical systems and power distribution networks.',
      highlights: [
        'Power systems',
        'Control systems',
        'Electrical machines',
        'Power electronics',
        'Renewable energy systems'
      ]
    },

    // M.Tech Programs
    {
      id: 'mtech-cse',
      title: 'M.Tech - Computer Science & Engineering',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced study in computer science with specialization options.',
      highlights: [
        'Advanced algorithms',
        'Distributed systems',
        'Machine learning',
        'Cloud computing',
        'Research project'
      ]
    },
    {
      id: 'mtech-it',
      title: 'M.Tech - Information Technology',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced IT concepts with focus on emerging technologies.',
      highlights: [
        'Big data analytics',
        'Enterprise architecture',
        'Information security',
        'IT governance',
        'Capstone project'
      ]
    },
    {
      id: 'mtech-cyber-security',
      title: 'M.Tech - Cyber Security',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced study of cyber security threats and defense mechanisms.',
      highlights: [
        'Advanced cryptography',
        'Penetration testing',
        'Incident response',
        'Security architecture',
        'Research thesis'
      ]
    },
    {
      id: 'mtech-iot',
      title: 'M.Tech - Internet of Things',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced IoT systems design and implementation.',
      highlights: [
        'Edge computing',
        'IoT data analytics',
        'Industrial IoT',
        'Smart city applications',
        'Research project'
      ]
    },
    {
      id: 'mtech-ece',
      title: 'M.Tech - Electronics & Communication',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced topics in electronics and communication systems.',
      highlights: [
        'Advanced DSP',
        'VLSI design',
        'Wireless networks',
        'Optical communication',
        'Thesis work'
      ]
    },
    {
      id: 'mtech-mechanical',
      title: 'M.Tech - Mechanical Engineering',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Specialized mechanical engineering with research focus.',
      highlights: [
        'Advanced thermodynamics',
        'Computational mechanics',
        'Advanced materials',
        'Robotics and automation',
        'Research thesis'
      ]
    },
    {
      id: 'mtech-civil',
      title: 'M.Tech - Civil Engineering',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced civil engineering with specialization options.',
      highlights: [
        'Structural dynamics',
        'Geotechnical engineering',
        'Environmental engineering',
        'Construction technology',
        'Research project'
      ]
    },
    {
      id: 'mtech-mechtronics',
      title: 'M.Tech - Mechtronics',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced integration of mechanical and electronic systems.',
      highlights: [
        'Advanced robotics',
        'Industrial automation',
        'Smart manufacturing',
        'System simulation',
        'Research work'
      ]
    },
    {
      id: 'mtech-biotech',
      title: 'M.Tech - Bio-Tech',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced biotechnological applications and research.',
      highlights: [
        'Advanced genetic engineering',
        'Bioprocess optimization',
        'Tissue engineering',
        'Pharmaceutical biotechnology',
        'Research thesis'
      ]
    },
    {
      id: 'mtech-electrical',
      title: 'M.Tech - Electrical Engineering',
      level: 'postgraduate',
      category: 'engineering',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced electrical systems and smart grid technologies.',
      highlights: [
        'Power system analysis',
        'Renewable energy systems',
        'Advanced control systems',
        'High voltage engineering',
        'Research project'
      ]
    },

    // Diploma Programs
    {
      id: 'diploma-civil',
      title: 'Diploma - Civil Engineering',
      level: 'diploma',
      category: 'engineering',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      description: 'Practical training in civil engineering fundamentals.',
      highlights: [
        'Construction materials',
        'Surveying',
        'Building drawing',
        'Estimating and costing',
        'Site training'
      ]
    },
    {
      id: 'diploma-electrical',
      title: 'Diploma - Electrical Engineering',
      level: 'diploma',
      category: 'engineering',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      description: 'Hands-on electrical engineering skills for industry.',
      highlights: [
        'Electrical circuits',
        'Power systems',
        'Electrical machines',
        'Installation practices',
        'Workshop training'
      ]
    },
    {
      id: 'diploma-mechanical',
      title: 'Diploma - Mechanical Engineering',
      level: 'diploma',
      category: 'engineering',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      description: 'Practical mechanical engineering skills development.',
      highlights: [
        'Workshop technology',
        'Thermal engineering',
        'Manufacturing processes',
        'Machine drawing',
        'Industrial training'
      ]
    },
    {
      id: 'diploma-cs',
      title: 'Diploma - Computer Science',
      level: 'diploma',
      category: 'computing',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      description: 'Fundamental computer science and programming skills.',
      highlights: [
        'Programming fundamentals',
        'Web development',
        'Database management',
        'Networking basics',
        'Project work'
      ]
    },

    // BCA/MCA Programs
    {
      id: 'bca-ai-ml-cyber',
      title: 'BCA - AI, ML, Cyber Security',
      level: 'undergraduate',
      category: 'computing',
      duration: '3 Years',
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description: 'Computer applications with focus on emerging technologies.',
      highlights: [
        'Programming languages',
        'Artificial intelligence',
        'Machine learning',
        'Cyber security basics',
        'Application development'
      ]
    },
    {
      id: 'mca-ai-ml-cyber',
      title: 'MCA - AI, ML, Cyber Security',
      level: 'postgraduate',
      category: 'computing',
      duration: '2 Years',
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      description: 'Advanced computer applications with specialization options.',
      highlights: [
        'Advanced algorithms',
        'AI and ML applications',
        'Advanced cyber security',
        'Cloud computing',
        'Capstone project'
      ]
    }
    // You might also consider adding a 'doctoral' level if applicable to your data
    // {
    //   id: 'phd-cse',
    //   title: 'Ph.D. - Computer Science',
    //   level: 'doctoral',
    //   category: 'engineering',
    //   duration: '3-5 Years',
    //   icon: <FaLaptopCode className="text-blue-700 text-2xl" />,
    //   description: 'Doctoral research in cutting-edge computer science topics.',
    //   highlights: [
    //     'Advanced research methodologies',
    //     'Specialized domain expertise',
    //     'Dissertation writing',
    //     'Conference publications',
    //     'Innovation and discovery'
    //   ]
    // },
  ];

  const filteredPrograms = allPrograms.filter(program => {
    return (
      (filters.level === 'all' || program.level === filters.level) &&
      (filters.category === 'all' || program.category === filters.category) &&
      (filters.duration === 'all' || 
        (filters.duration === 'short' && program.duration.includes('2')) ||
        (filters.duration === 'medium' && program.duration.includes('3')) ||
        (filters.duration === 'long' && program.duration.includes('4'))
      )
    );
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const levelFilters = [
    { label: 'All Programs', value: 'all' },
    { label: 'Undergraduate', value: 'undergraduate' },
    { label: 'Postgraduate', value: 'postgraduate' },
    { label: 'Diploma', value: 'diploma' },
    // Uncomment if you add 'doctoral' level programs
    // { label: 'Doctoral', value: 'doctoral' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaNetworkWired className="text-5xl text-blue-600" /> {/* Or FaStethoscope if this was meant for Health Sciences page */}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Management & Technology Programs</h1>
          <p className="text-xl text-gray-600">Comprehensive engineering and technology programs for future leaders</p>
        </motion.div>

      

        {/* Automatic Filters Section */}
        <div className="bg-green-700 rounded-t-lg px-8 py-6 text-white mb-0"> {/* Adjusted background color to green based on image */}
          <div className="flex items-center">
            {/* You can change this icon if it's for Health Sciences */}
            <FaStethoscope className="text-3xl text-white mr-4" /> 
            <div>
              <h2 className="text-2xl font-bold">Our Engineering & Tech Programs</h2>
              <p className="text-green-100 mt-1">From foundational diplomas to advanced postgraduate degrees</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-b-lg shadow-md mb-8 flex flex-wrap gap-2 justify-start">
          {levelFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange('level', filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
                ${filters.level === filter.value 
                  ? 'bg-blue-600 text-white' // Active state for Management & Tech
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {filter.label}
            </button>
          ))}
          {/* You can add dropdowns for other filters (category, duration) here
              if you still want them, but they won't be "automatic buttons" like levels */}
          
          {/* Example of adding category dropdown back if desired */}
          <div className="relative ml-auto"> {/* Aligns to the right if space allows */}
            <select
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 appearance-none pr-8"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="computing">Computing</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
           {/* Example of adding duration dropdown back if desired */}
           <div className="relative">
            <select 
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 appearance-none pr-8"
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option value="all">All Durations</option>
              <option value="short">2 Years</option>
              <option value="medium">3 Years</option>
              <option value="long">4 Years</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        {/* End Automatic Filters Section */}

          {/* Unsplash Image added here */}
            <div className="flex justify-center width:full relative h-64 overflow-hidden shadown-md ">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8MHwwfHx8MA%3D%3D" 
              alt="AI and Technology Banner" 
              className="w-full h-full object-cover " // Added styling
            /></div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          {/* This header is now redundant with the new filter bar, you might want to remove it
              or repurpose it. For now, keeping it but consider its placement. */}
          {/* <div className="bg-blue-700 px-8 py-6 flex items-center">
            <FaLaptopCode className="text-3xl text-white mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white">Engineering & Technology Programs</h2>
              <p className="text-blue-100 mt-1">Comprehensive programs to build technical expertise</p>
            </div>
          </div> */}

          <div className="p-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <div key={program.id} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <button
                    onClick={() => setExpandedPrograms(prev => ({
                      ...prev,
                      [program.id]: !prev[program.id]
                    }))}
                    className="w-full text-left flex justify-between items-start"
                  >
                    <div className="flex items-center">
                      {program.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                        <p className="text-gray-600">{program.duration} • {program.level.charAt(0).toUpperCase() + program.level.slice(1)}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedPrograms[program.id] ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedPrograms[program.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pl-12"
                      >
                        <p className="text-gray-700 mb-3">{program.description}</p>
                        <h4 className="font-medium text-gray-800 mb-2">Program Highlights:</h4>
                        <ul className="space-y-2 text-gray-700">
                          {program.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <a 
                            href={`/programs/${program.id}`} 
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          >
                            <FaFileAlt className="mr-2" /> View Program Details
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No programs match your filter criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>

          <div className="px-8 py-6 bg-blue-50 border-t border-gray-200 text-center">
            <motion.a 
              href="/apply" 
              className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center mx-auto w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileAlt className="mr-2" /><span>
                Start Application
                </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ManagementAndTechPage;