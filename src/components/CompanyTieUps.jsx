import React, { useEffect, useRef, useState } from 'react';

const HiringPartnersSection = () => {
  const logos = [
    { id: 1, src: '/companyLogos/hcl_logo.png', alt: 'HCL' },
    { id: 2, src: '/companyLogos/ibm_logo.png', alt: 'IBM' },
    { id: 3, src: '/companyLogos/Infosys_logo.png', alt: 'Infosys' },
    { id: 4, src: '/companyLogos/max_logo.png', alt: 'MAX' },
    { id: 5, src: '/companyLogos/tcs_logo.png', alt: 'TCS' },
    { id: 6, src: '/companyLogos/wipro_logo.png', alt: 'Wipro' },
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const angleRef = useRef(0);
  const [radius, setRadius] = useState(180);
  const speed = 0.003;

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 120 : 180);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const logos = container?.querySelectorAll('.logo-item');
    if (!logos) return;

    const totalLogos = logos.length;
    const baseScale = 1.2;
    const scaleRange = 0.4;

    const animate = () => {
      if (!isPaused && container) {
        angleRef.current += speed;
        
        logos.forEach((logo, index) => {
          const angle = angleRef.current + (index * (2 * Math.PI / totalLogos));
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          // Calculate scale based on position (front logos appear larger)
          const scale = baseScale + (y / radius) * scaleRange;
          const zIndex = Math.floor((y + radius) * 10);
          
          logo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
          logo.style.opacity = 0.8 + (y / radius) * 0.4;
          logo.style.zIndex = zIndex;
          logo.style.filter = `none`;
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, radius]);

  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-[120px] opacity-20 animate-float-delay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                Industry Connections
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Our Esteemed Hiring Partners
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We've built strong relationships with leading companies across industries to ensure our graduates 
              have access to exceptional career opportunities and the latest industry insights.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mt-1">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Direct hiring partnerships</p>
                  <p className="text-gray-600 text-sm">With 100+ top companies across various sectors</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full mt-1">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Rapid placement</p>
                  <p className="text-gray-600 text-sm">90% of graduates placed within 3 months</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mt-1">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Industry-aligned curriculum</p>
                  <p className="text-gray-600 text-sm">Courses designed with input from hiring partners</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Explore Career Opportunities
              </button>
              <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                Meet Our Alumni
              </button>
            </div>
          </div>
          
          {/* Right Carousel */}
          <div 
            className="relative h-80 md:h-96 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Circular background element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-60 animate-pulse-slow"></div>
            
            <div 
              ref={containerRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {logos.map((logo) => (
                <div 
                  key={logo.id}
                  className="logo-item absolute w-28 h-14 md:w-32 md:h-16 transition-all duration-500 ease-out hover:!scale-150 hover:!opacity-100 hover:!filter-none"
                  style={{
                    left: '-3.5rem',
                    top: '-1.75rem',
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="w-full h-full object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Center element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-white rounded-full shadow-xl border-8 border-blue-50/50 hover:border-purple-50/70 transition-all duration-300 group">
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">50+</span>
                <p className="text-xs md:text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition-colors duration-300">Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating company badges for mobile */}
      <div className="lg:hidden mt-12 flex flex-wrap justify-center gap-4 px-4">
        {logos.slice(0, 6).map(logo => (
          <div key={`mobile-${logo.id}`} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringPartnersSection;