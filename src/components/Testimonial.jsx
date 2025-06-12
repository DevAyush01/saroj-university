import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Saroj International University provided me with exceptional education and career opportunities. The faculty is highly knowledgeable and supportive.",
      name: "Priya Sharma",
      role: "B.Tech Computer Science, 2022",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The international exposure I received at SIU was transformative. The university's focus on practical skills prepared me perfectly for my career.",
      name: "Rahul Verma",
      role: "MBA Graduate, 2021",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      id: 3,
      quote: "As a parent, I'm extremely satisfied with the holistic development my child has experienced at SIU. The emphasis on both academics and extracurriculars is commendable.",
      name: "Sunita Patel",
      role: "Parent of BBA Student",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
    {
      id: 4,
      quote: "The research facilities at SIU helped me publish three papers during my postgraduate studies. The faculty goes above and beyond to support student research.",
      name: "Amit Kumar",
      role: "M.Sc. Biotechnology, 2023",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4
    },
    {
      id: 5,
      quote: "SIU's industry partnerships provided excellent internship opportunities that led to my current job. The career services team is exceptionally supportive.",
      name: "Neha Gupta",
      role: "B.Com Graduate, 2020",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-3">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our community about their experiences</p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2 h-2 inline-block rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300',
              bulletActiveClass: 'w-4 bg-amber-500 rounded-lg',
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="relative mb-4">
                        <svg className="w-10 h-10 text-amber-100 absolute -top-2 -left-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-600 text-sm md:text-base italic relative z-10 pl-4">{testimonial.quote}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-amber-400 object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-semibold text-indigo-900 text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center ml-2 hover:bg-amber-500 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-2 hover:bg-amber-500 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Centered Pagination */}
        <div className="flex justify-center mt-8">
          <div className="testimonial-pagination"></div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-5 py-2 shadow-sm">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium text-sm md:text-base">4.8/5 from 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;