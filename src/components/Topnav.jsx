import {Facebook, Instagram, Linkedin } from 'lucide-react';

const TopNavbar = () => {
  return (
    <nav className=" hidden fixed left-0 right-0 top-0 z-50 md:flex bg-secondary text-white py-1 px-4 md:px-8 shadow-md"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' }}>
      
      <div className="max-w-7xl mx-auto flex justify-end items-center text-sm md:text-base font-inter">
     

        <ul className="flex items-center space-x-4">
          <li>
            <a href="" className="px-3 py-1  ">
              Apply Now
            </a>
          </li>

          <span className="text-gray-400">|</span>

          <li>
            <a href="/current-students" className="px-3 py-1">
              Admission Helpline: +91 9513731275
            </a>
          </li>
        </ul>

{/* ICONS */}
         <div className="flex flex-center space-x-4 ">
        <a href="" target="_blank" >
          <Facebook size={18} />
        </a>

        <a href="" target="_blank">
          <Instagram size={18} />
        </a>

        <a href="" target="_blank" >
          <Linkedin size={18} />
        </a>


      </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
