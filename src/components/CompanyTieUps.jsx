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
  const radius = 180;
  const speed = 0.005;

  useEffect(() => {
    const container = containerRef.current;
    const logos = container?.querySelectorAll('.logo-item');
    if (!logos) return;

    const totalLogos = logos.length;

    const animate = () => {
      if (!isPaused && container) {
        angleRef.current += speed;
        
        logos.forEach((logo, index) => {
          const angle = angleRef.current + (index * (2 * Math.PI / totalLogos));
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          logo.style.transform = `
            translate3d(${x}px, ${y}px, 0)
            scale(${1 + y * 0.001})
          `;
          
          logo.style.opacity = 0.7 + (y / radius) * 0.3;
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Trusted by Top Companies
              </span>
            </h2>
            
            <p className="text-lg text-gray-600">
              We partner with industry leaders to provide exceptional talent and create 
              meaningful career opportunities for our graduates.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Direct hiring partnerships with 100+ companies</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">90% placement rate within 3 months of graduation</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-700">Rigorous training aligned with industry needs</p>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Career Opportunities
            </button>
          </div>
          
          {/* Right Carousel */}
          <div 
            className="relative h-96 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Circular background element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-60"></div>
            
            <div 
              ref={containerRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {logos.map((logo) => (
                <div 
                  key={logo.id}
                  className="logo-item absolute w-32 h-16 transition-all duration-300 hover:scale-125 hover:z-10 hover:opacity-100"
                  style={{
                    left: '-4rem',
                    top: '-2rem',
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="w-full h-full object-contain transition-all duration-300  hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            
            {/* Center element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-xl border-8 border-blue-50">
              <div className="text-center">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">50+</span>
                <p className="text-sm text-gray-600 mt-1">Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default HiringPartnersSection;