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
      quote:
        "Saroj International University offers a well-structured curriculum in English literature that encourages critical thinking and global perspectives. The library and literary societies foster a vibrant academic culture.",
      name: "Abhishek Balsam",
      role: "English Literature Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      quote:
        "The faculty at SIU are incredibly supportive and emphasize hands-on learning. The advanced labs and real-world projects have strengthened my technical foundation significantly.",
      name: "Priya Sharma",
      role: "Computer Science Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      quote:
        "Saroj International University has a modern campus with top-tier infrastructure. The workshops, seminars, and cultural activities ensure holistic development beyond academics.",
      name: "Rahul Verma",
      role: "Business Administration Student",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      quote:
        "SIU provides excellent research opportunities, especially in biotechnology. With guidance from experienced mentors, I was able to work on impactful projects and publish academic papers.",
      name: "Neha Gupta",
      role: "Biotechnology Student",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    }
  ];
  

  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/path-to-your-student-image.jpg" // Replace with actual image path
          alt="Student Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-end h-full px-4 md:px-12">
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-3xl font-bold mb-6">STUDENT VOICES</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'w-2 h-2 inline-block rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300',
              bulletActiveClass: 'w-4 bg-amber-500 rounded-lg',
            }}
            navigation={{
              nextEl: '.student-next',
              prevEl: '.student-prev',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-red-600">{testimonial.name}</h3>
                      <p className="text-sm text-gray-700 mt-1">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional: Arrows and pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="student-prev cursor-pointer text-white">←</div>
            <div className="custom-pagination"></div>
            <div className="student-next cursor-pointer text-white">→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
