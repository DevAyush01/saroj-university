import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, Play, Rocket, GraduationCap, Globe, BookOpen } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const primaryBlue = "#214A9A";
  const accentYellow = "#F08F07";
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderContent = [
    {
      title: "World-Class Campus",
      description: "Experience our state-of-the-art facilities designed for innovation and collaboration",
      image: "https://bridge-u.com/wp-content/uploads/2023/06/campus-or-city-university-blog-post-featured-image.jpg",
      cta: "Take a campus tour",
      icon: <GraduationCap size={24} />
    },
    {
      title: "Global Opportunities",
      description: "Join our international network of students and faculty across 50+ countries",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuXRnQ3CpVnxNhQMdK1BBwcNzf39PdPC_Og&s",
      cta: "Explore exchange programs",
      icon: <Globe size={24} />
    },
    {
      title: "Cutting-Edge Research",
      description: "Work alongside leading researchers in fields that shape tomorrow's world",
      image: "https://img2.storyblok.com//f/64062/992x657/de15b07cbe/yale-university.jpg",
      cta: "View research areas",
      icon: <BookOpen size={24} />
    },
  ];

  // Animation effect for stats counter
  const StatsCounter = ({ target, label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const duration = 2000; // Animation duration in ms
      const increment = target / (duration / 16); // Roughly 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [target]);
    
    return (
      <div className="text-center">
        <div className="text-3xl font-bold" style={{ color: primaryBlue }}>
          {count.toLocaleString()}+
        </div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 animate-float"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-yellow-100 opacity-20 animate-float-delay"></div>
      </div>
      
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <header className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#214A9A]/10 text-[#214A9A] animate-bounce"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <Rocket style={{ color: accentYellow }} size={18} />
            <span className="font-medium">Future-Ready Education</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600"
          >
            Saroj International University
          </h1>
          <p className="text-xl text-blue-800/90 animate-pulse">
            Where innovation meets excellence
          </p>
        </header>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content (30%) */}
          <div className="lg:w-[30%] pt-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              Your Future Starts Here
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Join a vibrant community of learners and innovators at one of
              the world's most forward-looking universities with
              state-of-the-art facilities and global opportunities.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <button
                className="relative overflow-hidden group text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 transform transition-transform"
                style={{ 
                  backgroundColor: primaryBlue,
                  boxShadow: `0 4px 14px ${primaryBlue}80`
                }}
              >
                <span>Explore Programs</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </button>

              <button
                className="flex items-center justify-center gap-2 font-medium py-3 px-6 rounded-lg border transition-all group hover:-translate-y-1 transform transition-transform hover:shadow-md"
                style={{
                  color: primaryBlue,
                  borderColor: `${primaryBlue}4d`,
                  backgroundColor: "white",
                }}
              >
                <Play
                  style={{ color: accentYellow }}
                  className="group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span>Virtual Tour</span>
                <span className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-5 transition-opacity rounded-lg"></span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-50">
              <StatsCounter target={15000} label="Students" />
              <StatsCounter target={350} label="Faculty" />
              <StatsCounter target={120} label="Programs" />
            </div>
          </div>

          {/* Right Content - Slider (70%) */}
          <div className="lg:w-[70%] rounded-xl mt-6 overflow-hidden shadow-2xl border-4 border-white relative group">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination, Navigation]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}" style="background:${
                    index === activeSlide ? accentYellow : "rgba(255,255,255,0.5)"
                  }; width:${index === activeSlide ? "30px" : "10px"}; border-radius:${
                    index === activeSlide ? "5px" : "50%"
                  }; transition: all 0.3s ease;"></span>`;
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="h-full"
            >
              {sliderContent.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-96 md:h-[500px] w-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 swiper-slide-bg group-hover:scale-105"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                      <div className="max-w-2xl transform transition-transform group-hover:translate-y-[-10px]">
                        {/* <div className="flex items-center gap-3 mb-4 text-white">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 backdrop-blur-sm border border-white/20">
                            {slide.icon}
                          </span>
                          <span className="text-sm opacity-90 font-medium">
                            {slide.title}
                          </span>
                        </div> */}

                        {/* <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                          {slide.description}
                        </h2> */}

                        <button className="flex items-center gap-2 text-white group mt-6">
                          <span className="font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20">
                            {slide.cta}
                          </span>
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-2 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="absolute z-10 top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="swiper-button-prev bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/50 transition-all">
                <ArrowRight size={24} className="text-white rotate-180" />
              </button>
              <button className="swiper-button-next bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/50 transition-all">
                <ArrowRight size={24} className="text-white" />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-xs">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;