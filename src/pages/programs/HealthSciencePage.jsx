import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
// Import the icon you want to use
import { FaMedkit } from 'react-icons/fa'; // or FaStethoscope, FaMicroscope, FaDna

const HealthSciencesPage = () => {
  const [expandedPrograms, setExpandedPrograms] = useState({});
  // State for the active program filter
  const [activeFilter, setActiveFilter] = useState('All Programs');

  const toggleProgram = (programId) => {
    setExpandedPrograms(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  // Animation variants
  const accordionVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const programs = [
    // B.Sc Programs
    {
      id: 'bsc-physics',
      title: 'B.Sc in Physics',
      duration: '3 Years',
      description: 'Fundamental study of matter, energy, and their interactions with rigorous theoretical and experimental training.',
      highlights: [
        'Classical and quantum mechanics',
        'Electromagnetism',
        'Thermodynamics',
        'Computational physics',
        'Laboratory experiments'
      ],
      level: 'Undergraduate' // Add level for filtering
    },
    {
      id: 'bsc-chemistry',
      title: 'B.Sc in Chemistry',
      duration: '3 Years',
      description: 'Comprehensive study of chemical substances, compounds, and reactions with hands-on laboratory experience.',
      highlights: [
        'Organic and inorganic chemistry',
        'Physical chemistry',
        'Analytical techniques',
        'Industrial chemistry',
        'Research projects'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bsc-mathematics',
      title: 'B.Sc in Mathematics',
      duration: '3 Years',
      description: 'Advanced study of mathematical theories, proofs, and applications across various scientific disciplines.',
      highlights: [
        'Algebra and calculus',
        'Discrete mathematics',
        'Numerical analysis',
        'Mathematical modeling',
        'Applied statistics'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bsc-biology',
      title: 'B.Sc in Biology',
      duration: '3 Years',
      description: 'Comprehensive study of living organisms and their interactions with each other and their environments.',
      highlights: [
        'Cell and molecular biology',
        'Genetics and evolution',
        'Ecology',
        'Microbiology',
        'Field studies'
      ],
      level: 'Undergraduate'
    },

    // BS Programs
    {
      id: 'bs-data-sciences',
      title: 'BS in Data Sciences',
      duration: '3 Years',
      description: 'Interdisciplinary program combining statistics, computer science, and domain knowledge to extract insights from data.',
      highlights: [
        'Machine learning fundamentals',
        'Data visualization',
        'Big data technologies',
        'Statistical modeling',
        'Industry projects'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bs-physiotherapy',
      title: 'BS in Physiotherapy',
      duration: '4 Years',
      description: 'Clinical training in physical rehabilitation and therapeutic techniques.',
      highlights: [
        'Musculoskeletal rehabilitation',
        'Neurological physiotherapy',
        'Cardiorespiratory physiotherapy',
        'Clinical placements',
        'Patient assessment techniques'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bs-forensic-science',
      title: 'BS in Forensic Science',
      duration: '3 Years',
      description: 'Application of scientific principles to criminal investigations and legal matters.',
      highlights: [
        'Crime scene investigation',
        'DNA analysis',
        'Toxicology',
        'Forensic pathology',
        'Courtroom procedures'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bs-radiology-imaging',
      title: 'BS in Radiology & Imaging',
      duration: '3 Years',
      description: 'Training in medical imaging techniques for diagnostic and therapeutic purposes.',
      highlights: [
        'Radiographic techniques',
        'Ultrasound imaging',
        'CT and MRI scanning',
        'Radiation safety',
        'Clinical rotations'
      ],
      level: 'Undergraduate'
    },
    {
      id: 'bs-medical-lab-tech',
      title: 'BS in Medical Lab Technology',
      duration: '3 Years',
      description: 'Hands-on training in diagnostic laboratory procedures and analysis.',
      highlights: [
        'Clinical biochemistry',
        'Microbiology and immunology',
        'Histopathology techniques',
        'Hematology',
        'Laboratory management'
      ],
      level: 'Undergraduate'
    },

    // M.Sc Programs
    {
      id: 'msc-physics',
      title: 'M.Sc in Physics',
      duration: '2 Years',
      description: 'Advanced study of physical theories and experimental techniques with research specialization.',
      highlights: [
        'Quantum field theory',
        'Condensed matter physics',
        'Particle physics',
        'Advanced laboratory techniques',
        'Thesis research'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'msc-chemistry',
      title: 'M.Sc in Chemistry',
      duration: '2 Years',
      description: 'Specialized study in advanced chemical concepts with emphasis on research applications.',
      highlights: [
        'Advanced organic synthesis',
        'Spectroscopic techniques',
        'Computational chemistry',
        'Nanotechnology',
        'Research dissertation'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'msc-mathematics',
      title: 'M.Sc in Mathematics',
      duration: '2 Years',
      description: 'Advanced mathematical theories and their applications in science and engineering.',
      highlights: [
        'Abstract algebra',
        'Topology',
        'Differential equations',
        'Mathematical finance',
        'Research seminar'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'msc-biology',
      title: 'M.Sc in Biology',
      duration: '2 Years',
      description: 'Specialized study in biological sciences with research focus areas.',
      highlights: [
        'Molecular biology techniques',
        'Bioinformatics',
        'Environmental biology',
        'Biotechnology applications',
        'Thesis work'
      ],
      level: 'Postgraduate'
    },

    // MS Programs
    {
      id: 'ms-data-sciences',
      title: 'MS in Data Sciences',
      duration: '2 Years',
      description: 'Advanced training in data analysis, machine learning, and big data technologies.',
      highlights: [
        'Deep learning',
        'Data mining',
        'Cloud computing for data science',
        'Natural language processing',
        'Capstone project'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'ms-physiotherapy',
      title: 'MS in Physiotherapy',
      duration: '2 Years',
      description: 'Advanced clinical training with specialization in specific areas of rehabilitation.',
      highlights: [
        'Sports physiotherapy',
        'Pediatric rehabilitation',
        'Geriatric care',
        'Research methodology',
        'Clinical specialization'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'ms-forensic-science',
      title: 'MS in Forensic Science',
      duration: '2 Years',
      description: 'Advanced study of forensic techniques with emphasis on research and casework.',
      highlights: [
        'Advanced DNA profiling',
        'Forensic anthropology',
        'Digital forensics',
        'Forensic chemistry',
        'Thesis research'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'ms-radiology-imaging',
      title: 'MS in Radiology & Imaging',
      duration: '2 Years',
      description: 'Specialized training in advanced medical imaging modalities and interpretation.',
      highlights: [
        'Advanced MRI techniques',
        'Interventional radiology',
        'Nuclear medicine',
        'Radiology informatics',
        'Clinical research'
      ],
      level: 'Postgraduate'
    },
    {
      id: 'ms-medical-lab-tech',
      title: 'MS in Medical Lab Technology',
      duration: '2 Years',
      description: 'Advanced laboratory techniques and management for diagnostic and research applications.',
      highlights: [
        'Molecular diagnostics',
        'Clinical research methods',
        'Laboratory quality control',
        'Advanced instrumentation',
        'Thesis project'
      ],
      level: 'Postgraduate'
    },

    // Diploma Programs
    {
      id: 'diploma-public-health',
      title: 'Diploma in Public Health',
      duration: '1 Year',
      description: 'Foundational training in community health, epidemiology, and health policy.',
      highlights: [
        'Public health principles',
        'Epidemiological methods',
        'Health promotion',
        'Disease prevention',
        'Field projects'
      ],
      level: 'Diploma'
    },
    {
      id: 'diploma-health-science',
      title: 'Diploma in Health Science',
      duration: '1 Year',
      description: 'Introductory program covering basic concepts in various health science disciplines.',
      highlights: [
        'Human anatomy basics',
        'Medical terminology',
        'Healthcare systems',
        'Basic laboratory techniques',
        'Field observations'
      ],
      level: 'Diploma'
    },

    // Ph.D Programs
    {
      id: 'phd-physics',
      title: 'Ph.D in Physics',
      duration: '3-5 Years',
      description: 'Doctoral research program for original contributions to physics knowledge.',
      highlights: [
        'Advanced theoretical physics',
        'Experimental research',
        'Scientific computing',
        'Academic publishing',
        'Dissertation defense'
      ],
      level: 'Doctoral'
    },
    {
      id: 'phd-chemistry',
      title: 'Ph.D in Chemistry',
      duration: '3-5 Years',
      description: 'Advanced research program in specialized areas of chemical sciences.',
      highlights: [
        'Novel synthesis methods',
        'Materials characterization',
        'Catalysis research',
        'Grant writing',
        'Independent research'
      ],
      level: 'Doctoral'
    },
    {
      id: 'phd-mathematics',
      title: 'Ph.D in Mathematics',
      duration: '3-5 Years',
      description: 'Original research in pure or applied mathematics under faculty supervision.',
      highlights: [
        'Advanced mathematical research',
        'Problem-solving techniques',
        'Academic collaboration',
        'Conference presentations',
        'Thesis completion'
      ],
      level: 'Doctoral'
    },
    {
      id: 'phd-biology',
      title: 'Ph.D in Biology',
      duration: '3-5 Years',
      description: 'Doctoral program for significant contributions to biological sciences.',
      highlights: [
        'Specialized biological research',
        'Experimental design',
        'Scientific writing',
        'Laboratory leadership',
        'Original discoveries'
      ],
      level: 'Doctoral'
    },
    {
      id: 'phd-data-analytics',
      title: 'Ph.D in Data Analytics',
      duration: '3-5 Years',
      description: 'Advanced research in data science methodologies and applications.',
      highlights: [
        'Machine learning algorithms',
        'Big data architectures',
        'Statistical modeling',
        'Interdisciplinary applications',
        'Dissertation research'
      ],
      level: 'Doctoral'
    }
  ];

  // Filter programs based on activeFilter state
  const filteredPrograms = programs.filter(program => {
    if (activeFilter === 'All Programs') {
      return true;
    }
    return program.level === activeFilter;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
            {/* Added Icon Here */}
            <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                    <FaMedkit className="w-12 h-12 text-green-600" />
                </div>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Health Sciences Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education in medical, biological, and physical sciences with cutting-edge research opportunities.
          </p>
          {/* Total Programs Count */}
          <p className="text-lg text-gray-700 mt-4">
            Total Programs Available: <span className="font-semibold text-green-700">{programs.length}</span>
            <span className="block text-sm text-gray-500 mt-1">(Including UG, PG, Diploma, and Doctoral programs)</span>
          </p>
        </div>

        {/* Programs Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          {/* Section Header */}
          <div className="bg-black px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Our Health Sciences Programs</h2>
            <p className="text-green-100 mt-1">From foundational diplomas to advanced doctoral research</p>
          </div>

          {/* Unsplash Image added here */}
            <div className="flex justify-center width:full relative h-64 overflow-hidden shadown-md ">
            <img 
              src="https://images.unsplash.com/photo-1614308457932-e16d85c5d053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZWFyY2glMjBsYWJzfHxlbnwwfDB8MHx8MA%3D%3D" 
              alt="AI and Technology Banner" 
              className="w-full h-full object-cover " // Added styling
            /></div>

          {/* Programs Filter */}
          <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap gap-4">
              {['All Programs', 'Undergraduate', 'Postgraduate', 'Diploma', 'Doctoral'].map(filterName => (
                <button
                  key={filterName}
                  onClick={() => setActiveFilter(filterName)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeFilter === filterName
                      ? 'bg-green-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {filterName}
                </button>
              ))}
            </div>
          </div>

          {/* Programs List */}
          <div className="p-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <div key={program.id} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <button
                    onClick={() => toggleProgram(program.id)}
                    className="w-full text-left flex justify-between items-start"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-600 mr-3">{program.duration}</span>
                        {/* Dynamic level tag based on 'level' property */}
                        {program.level === 'Undergraduate' && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">UG</span>
                        )}
                        {program.level === 'Postgraduate' && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PG</span>
                        )}
                        {program.level === 'Diploma' && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Diploma</span>
                        )}
                        {program.level === 'Doctoral' && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Ph.D</span>
                        )}
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedPrograms[program.id] ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedPrograms[program.id] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="mt-4 pl-2"
                      >
                        <p className="text-gray-700 mb-3">{program.description}</p>
                        <h4 className="font-medium text-gray-800 mb-2">Program Highlights:</h4>
                        <ul className="space-y-2 text-gray-700">
                          {program.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex gap-4">
                          <a
                            href={`/programs/${program.id}`}
                            className="text-green-600 hover:text-green-800 font-medium"
                          >
                            View Program Details →
                          </a>
                          <a
                            href="/apply"
                            className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
                          >
                            Apply Now
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 py-8">No programs found for this filter.</p>
            )}
          </div>

          {/* Admission Info */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Admission Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Undergraduate Programs:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>10+2 with Science (PCB/PCM) with minimum 50% marks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Entrance exam (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Personal interview</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Postgraduate/Doctoral Programs:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Relevant bachelor's/master's degree with minimum 55% marks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Research proposal (for Ph.D)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Entrance exam and interview</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 py-6 bg-green-50 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Start Your Journey in Health Sciences?</h3>
            <a
              href="/apply"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
          <span>
                Apply Now
                </span>
            </a>
            <p className="mt-4 text-gray-600">
              Have questions? <a href="/contact" className="text-green-600 hover:underline">Contact our admissions team</a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Clinical Placements</h3>
            <p className="text-gray-700">
              Our students gain hands-on experience through partnerships with leading hospitals, research labs, and healthcare facilities across India.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Opportunities</h3>
            <p className="text-gray-700">
              Work with faculty on cutting-edge research projects in medical sciences, biotechnology, and public health.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Mode Option</h3>
            <p className="text-gray-700">
              Selected programs offer international study components with partner universities worldwide.
            </p>
          </div>
        </div>

        {/* Fee Information */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Fees Structure</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regular Mode (Annual)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Global Mode (Annual)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">B.Sc/BS</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹80,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹1,25,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">M.Sc/MS</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹80,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹1,25,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Diploma</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹60,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Ph.D</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹1,00,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹1,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">* Fees are approximate and subject to change. Additional charges may apply for lab work, field trips, and international components.</p>
        </div>
      </div>
    </Layout>
  );
};

export default HealthSciencesPage;