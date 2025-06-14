import { useEffect, useRef, useState } from 'react';
import { BrainCircuit, Rocket, Cpu, Database, Atom, Sparkles, CircuitBoard, Binary, Network, Zap } from 'lucide-react';

const LightAIBanner = () => {
  const [hoverState, setHoverState] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const bannerRef = useRef(null);
  
  // AI Program Data
  const programs = [
    {
      title: "AI Engineering",
      icon: <BrainCircuit size={28} className="text-blue-600" />,
      desc: "Master neural networks and deep learning architectures",
      stats: "94% placement rate",
      color: "bg-gradient-to-br from-blue-100 to-blue-50"
    },
    {
      title: "Machine Learning",
      icon: <CircuitBoard size={28} className="text-green-600" />,
      desc: "Build advanced predictive models and algorithms",
      stats: "87% salary hike",
      color: "bg-gradient-to-br from-green-100 to-green-50"
    },
    {
      title: "Data Science",
      icon: <Database size={28} className="text-orange-600" />,
      desc: "Extract insights from complex datasets at scale",
      stats: "2.5x industry demand",
      color: "bg-gradient-to-br from-orange-100 to-orange-50"
    },
    {
      title: "Quantum AI",
      icon: <Atom size={28} className="text-purple-600" />,
      desc: "Pioneer the next frontier of computational intelligence",
      stats: "Emerging field",
      color: "bg-gradient-to-br from-purple-100 to-purple-50"
    }
  ];

  // Floating dots animation
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const dotCount = window.innerWidth < 768 ? 20 : 40;
    const newDots = Array.from({ length: dotCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.2 + 0.1
    }));
    setDots(newDots);
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative overflow-hidden bg-white rounded-3xl border border-gray-200 shadow-lg"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      {/* Animated dots background */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-blue-100"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animation: `float ${dot.speed}s ease-in-out ${dot.delay}s infinite alternate`
          }}
        />
      ))}
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Light glow effects */}
      <div className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-100 blur-3xl transition-all duration-1000 ${hoverState ? 'opacity-40' : 'opacity-20'}`} />
      <div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-purple-100 blur-3xl transition-all duration-1000 ${hoverState ? 'opacity-40' : 'opacity-20'}`} />
      
      {/* Main content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
              <Sparkles className="text-blue-400" size={18} />
              <span className="font-mono text-sm tracking-wider text-blue-600">AI-DRIVEN EDUCATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Transform
              </span>{' '}
              <span className="text-gray-900">Your Career</span>
              <br />
              <span className="text-gray-600">With Cutting-Edge AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Industry-aligned programs designed with tech leaders to prepare you for the AI revolution.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center gap-3 group">
                <span>Explore Programs</span>
                <Rocket className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300">
                Download Brochure
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { value: "94%", label: "Placement Rate" },
                { value: "3.5x", label: "Salary Hike" },
                { value: "50+", label: "Industry Partners" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right program selector */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {programs.map((program, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-6 py-4 text-sm font-medium flex-1 flex items-center justify-center gap-2 transition-all ${activeTab === i ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {program.icon}
                    <span>{program.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Program content */}
              <div className="p-6 md:p-8">
                <div className={`${programs[activeTab].color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-gray-100`}>
                  {programs[activeTab].icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{programs[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{programs[activeTab].desc}</p>
                
                <div className="flex items-center gap-2">
                  <Zap className="text-yellow-500" size={18} />
                  <span className="font-mono text-sm text-gray-500">{programs[activeTab].stats}</span>
                </div>
                
                {/* Progress steps */}
                <div className="mt-8">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Beginner</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${(activeTab + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 text-blue-100">
        <Binary size={120} />
      </div>
      <div className="absolute top-8 right-8 text-blue-100">
        <Network size={120} />
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default LightAIBanner;