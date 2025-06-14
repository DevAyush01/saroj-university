import { BrainCircuit, Database, Cpu, Globe, Rocket, Atom, Binary, Network } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import EligibilityCriteria from '../../components/EligibilityCriteria';

// Course data arrays
const btechCourses = [
  {
    id: 1,
    icon: <BrainCircuit />,
    title: "B.Tech in Artificial Intelligence",
    duration: "4 Years",
    fee: "₹4,40,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 2,
    icon: <Database />,
    title: "B.Tech in Data Science",
    duration: "4 Years",
    fee: "₹4,40,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 3,
    icon: <Cpu />,
    title: "B.Tech in Robotics",
    duration: "4 Years",
    fee: "₹4,40,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 4,
    icon: <Globe />,
    title: "B.Tech in AI (Global)",
    duration: "4 Years",
    fee: "₹6,40,000",
    mode: "International Study",
    special: "Study abroad each year"
  },
  {
    id: 5,
    icon: <Network />,
    title: "B.Tech in Machine Learning",
    duration: "4 Years",
    fee: "₹4,40,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 6,
    icon: <Atom />,
    title: "B.Tech in Quantum AI",
    duration: "4 Years",
    fee: "₹5,20,000",
    mode: "Domestic, Full-time",
    special: "Cutting-edge curriculum"
  }
];

const mtechCourses = [
  {
    id: 7,
    icon: <BrainCircuit />,
    title: "M.Tech in Advanced AI",
    duration: "2 Years",
    fee: "₹2,50,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 8,
    icon: <Database />,
    title: "M.Tech in Big Data Science",
    duration: "2 Years",
    fee: "₹2,50,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 9,
    icon: <Cpu />,
    title: "M.Tech in Robotics",
    duration: "2 Years",
    fee: "₹2,50,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 10,
    icon: <Globe />,
    title: "M.Tech in AI (Global)",
    duration: "2 Years",
    fee: "₹3,50,000",
    mode: "International Study",
    special: "Study abroad each year"
  },
  {
    id: 11,
    icon: <Network />,
    title: "M.Tech in Neural Networks",
    duration: "2 Years",
    fee: "₹2,50,000",
    mode: "Domestic, Full-time"
  },
  {
    id: 12,
    icon: <Atom />,
    title: "M.Tech in Quantum Computing",
    duration: "2 Years",
    fee: "₹3,20,000",
    mode: "Domestic, Full-time",
    special: "Advanced research focus"
  }
];

const InteractiveGridCard = ({ course }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      ref={cardRef}
      className="relative h-full rounded-xl border border-gray-200 overflow-hidden bg-white hover:border-blue-400 transition-all duration-300 group shadow-sm hover:shadow-md"
      onMouseMove={handleMouseMove}
      key={course.id}
    >
      {/* Interactive grid background */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id={`grid-pattern-${course.id}`} 
              width="40" 
              height="40" 
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${-mousePosition.x * 0.05} ${-mousePosition.y * 0.05})`}
            >
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.3)" 
                strokeWidth="1"
                className="group-hover:stroke-blue-400 transition-colors duration-300"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-pattern-${course.id})`} />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-6 z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200 transition-all duration-300">
            {React.cloneElement(course.icon, { 
              size: 24, 
              className: "text-blue-600 group-hover:text-blue-700 transition-colors duration-300" 
            })}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-1">{course.title}</h3>
        </div>
        
        <div className="space-y-4 text-gray-600 mb-8 flex-grow">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
              <span className="text-xs text-blue-600">⏱️</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-medium text-gray-800">{course.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
              <span className="text-xs text-purple-600">💰</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Fee</p>
              <p className="font-medium text-gray-900">{course.fee}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
              <span className="text-xs text-cyan-600">🌐</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Mode</p>
              <p className="font-medium text-gray-800">{course.mode}</p>
            </div>
          </div>
          
          {course.special && (
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100 animate-pulse">
                <Rocket size={14} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Special</p>
                <p className="font-medium text-green-600">{course.special}</p>
              </div>
            </div>
          )}
        </div>
        
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
          <span>Apply Now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="group-hover:translate-x-1 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const TechParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const symbols = ['⟁', '⧉', '⌬', '⍟', '⎔', '⊡'];
      const newParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        char: symbols[Math.floor(Math.random() * symbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 8,
        speed: Math.random() * 30 + 20,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.03 + 0.02
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-gray-200 font-mono"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.speed}s ease-in-out ${particle.delay}s infinite alternate`
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};

const Courses = () => {
  return (
    <Layout >
    <div className="min-h-screen py-32 bg-gray-50 text-gray-800  px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <TechParticles />
      
      {/* Main grid background */}
      <div className="fixed inset-0 -z-20 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="main-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(200, 200, 200, 0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#main-grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
            SAROJ INSTITUTE OF AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence education
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors font-medium flex items-center gap-2 shadow-sm hover:shadow-md">
              <span>Explore Programs</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="px-6 py-3 border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
              Virtual Tour
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3 justify-center">
          <Binary size={28} className="text-blue-600" />
          <span>Undergraduate Programs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {btechCourses.map(course => (
            <InteractiveGridCard course={course} key={course.id} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3 justify-center">
          <Binary size={28} className="text-purple-600" />
          <span>Graduate Programs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mtechCourses.map(course => (
            <InteractiveGridCard course={course} key={course.id} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
    <EligibilityCriteria />
    </Layout>
  );
};

export default Courses;