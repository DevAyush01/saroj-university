import logo from "../assets/logo.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  {
    title: "Academics",
    path: "/academics",
    subItems: [
      { title: "Programs", path: "/academics/programs" },
      { title: "Exam Calendar", path: "/academics/exam-calendar" },
    ],
  },
  {
    title: "Programs",
    path: "/programs", 
    megaMenu: true, 
    columns: [
      { 
        heading: "COLLABORATION",
        items: [
          { title: "B.Tech - CSE with AI & ML", path: "/programs/cse-ai-ml", icon: "https://placehold.co/16x16/f0f0f0/000000?text=MS" },
          { title: "B.Tech - CSE with Data Science", path: "/programs/cse-data-science", icon: "https://placehold.co/16x16/f0f0f0/000000?text=G" },
          { title: "B.Tech - CSE Cyber Security", path: "/programs/cse-cyber-security", icon: "https://placehold.co/16x16/f0f0f0/000000?text=QH" },
          { title: "B.Tech - CSE with Cloud Computing", path: "/programs/cse-cloud-computing", icon: "https://placehold.co/16x16/f0f0f0/000000?text=G" },
          { title: "M.Tech - CSE with AI & ML", path: "/programs/mtech-cse-ai-ml", icon: "https://placehold.co/16x16/f0f0f0/000000?text=S" },
          { title: "BBA(H) - Business Analytics", path: "/programs/bba-business-analytics", icon: "https://placehold.co/16x16/f0f0f0/000000?text=KPMG" },
          { title: "MBA - Global Business Management", path: "/programs/mba-global-business-management", icon: "https://placehold.co/16x16/f0f0f0/000000?text=KPMG" }, 
        ]
      },
      { 
        heading: "ENGINEERING",
        items: [
          { title: "B.Tech - CE", path: "/programs/btech-ce", icon: "https://placehold.co/16x16/f0f0f0/000000?text=EN" },
          { title: "B.Tech - Mechanical Engineering", path: "/programs/btech-me", icon: "https://placehold.co/16x16/f0f0f0/000000?text=EN" },
          { title: "B.Tech - Electronics and Communication Engineering", path: "/programs/btech-ece", icon: "https://placehold.co/16x16/f0f0f0/000000?text=EN" },
          { title: "B.Tech - Electrical Engineering", path: "/programs/btech-ee", icon: "https://placehold.co/16x16/f0f0f0/000000?text=EN" },
           
        ],
      },
      { 
        heading: "APPLIED SCIENCES",
        items: [
          { title: "B.Sc.(Hons./Hons. with Research) Data Science", path: "/programs/bsc-applied-data-science", icon: "https://placehold.co/16x16/f0f0f0/000000?text=AS" },
          { title: "B.Sc.(Hons./Hons. with Research) Biotechnology", path: "/programs/bsc-applied-biotech", icon: "https://placehold.co/16x16/f0f0f0/000000?text=AS" },
          { title: "B.Sc.(Hons./Hons. with Research) Forensic Science", path: "/programs/bsc-forensic-science", icon: "https://placehold.co/16x16/f0f0f0/000000?text=AS" },
          { title: "M.Sc. Data Science", path: "/programs/msc-data-science", icon: "https://placehold.co/16x16/f0f0f0/000000?text=AS" },
        ],
      },
      { 
        heading: "BUSINESS",
        items: [
          { title: "BBA (Hons)", path: "/programs/bba-hons-business", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
          { title: "BBA - DM(Hons)", path: "/programs/bba-dm-hons", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
          { title: "BBA - Branding & Advertising (Hons)", path: "/programs/bba-branding-advertising-hons", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
          { title: "MBA", path: "/programs/mba-business", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
          { title: "MBA- (Strategic HR)", path: "/programs/mba-strategic-hr", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
          { title: "MBA (Digital Marketing)", path: "/programs/mba-digital-marketing-business", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BS" },
        ],
      },
      { 
        heading: "BASIC SCIENCES",
        items: [
          { title: "B.Sc. (Hons./Hons. with Research) Physics", path: "/programs/bsc-basic-physics", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BSC" },
          { title: "B.Sc. (Hons./Hons. with Research) Chemistry", path: "/programs/bsc-basic-chemistry", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BSC" },
          { title: "M.Sc. Physics", path: "/programs/msc-physics", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BSC" },
          { title: "M.Sc. Chemistry", path: "/programs/msc-chemistry", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BSC" },
          { title: "M.Sc. Mathematics", path: "/programs/msc-mathematics", icon: "https://placehold.co/16x16/f0f0f0/000000?text=BSC" },
        ],
      },
      { 
        heading: "COMPUTER SCIENCE ENGINEERING",
        items: [
          { title: "B.Tech - Computer Science & Engineering", path: "/programs/btech-cse-cs", icon: "https://placehold.co/16x16/f0f0f0/000000?text=CS" },
          { title: "B.Tech - Information Technology", path: "/programs/btech-it-cs", icon: "https://placehold.co/16x16/f0f0f0/000000?text=CS" },
        ],
      },
      { 
        heading: "COMPUTING",
        items: [
          { title: "BCA (Hons)", path: "/programs/bca-hons", icon: "https://placehold.co/16x16/f0f0f0/000000?text=CMP" },
          { title: "MCA", path: "/programs/mca", icon: "https://placehold.co/16x16/f0f0f0/000000?text=CMP" },
          { title: "B.Sc. (Hons) - Animation, VFX & Gaming", path: "/programs/bsc-animation-vfx-gaming", icon: "https://placehold.co/16x16/f0f0f0/000000?text=CMP" },
        ],
      },
      { 
        heading: "LEGAL STUDIES",
        items: [
          { title: "Bachelor of Law (LLB)", path: "/programs/llb-legal", icon: "https://placehold.co/16x16/f0f0f0/000000?text=LAW" },
          { title: "BA.LLB. (Hons) Integrated", path: "/programs/ballb-hons-integrated", icon: "https://placehold.co/16x16/f0f0f0/000000?text=LAW" },
          { title: "BBA.LLB. (Hons) Integrated", path: "/programs/bballb-hons-integrated", icon: "https://placehold.co/16x16/f0f0f0/000000?text=LAW" },
        ],
      },
      { 
        heading: "LIBERAL ARTS & BEHAVIORAL SCIENCE",
        items: [
          { title: "BA. (Hons) - Liberal Arts", path: "/programs/ba-liberal-arts-ls", icon: "https://placehold.co/16x16/f0f0f0/000000?text=LA" },
          { title: "BA. Psychology (Hons.)", path: "/programs/ba-psychology-ls", icon: "https://placehold.co/16x16/f0f0f0/000000?text=LA" },
        ],
      },
      { 
        heading: "MEDIA STUDIES",
        items: [
          { title: "BA-IMC", path: "/programs/ba-imc-media", icon: "https://placehold.co/16x16/f0f0f0/000000?text=MD" },
          { title: "MA-Mass Communication", path: "/programs/ma-mass-comm-media", icon: "https://placehold.co/16x16/f0f0f0/000000?text=MD" },
        ],
      },
      { 
        heading: "COMMERCE",
        items: [
          { title: "B.Com (Hons)", path: "/programs/bcom-hons-commerce", icon: "https://placehold.co/16x16/f0f0f0/000000?text=COM" },
          { title: "M.Com", path: "/programs/mcom-commerce", icon: "https://placehold.co/16x16/f0f0f0/000000?text=COM" },
        ],
      },
      { 
        heading: "PHARMACY",
        items: [
          { title: "B.Pharm () Bachelor of Pharmacy", path: "/programs/bpharm-pharmacy", icon: "https://placehold.co/16x16/f0f0f0/000000?text=PH" },
          { title: "M.Pharm", path: "/programs/mpharm-pharmacy", icon: "https://placehold.co/16x16/f0f0f0/000000?text=PH" },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    subItems: [
      { title: "Admission Criteria", path: "/admissions/admission-criteria" },
      { title: "Admission Process", path: "/admissions/admission-process" },
      { title: "Scholarship", path: "/admissions/scholarship" },
    ],
  },
  {
    title: "Campus Life",
    path: "campus-life",
  },
  {
    title: "About",
    path: "/about",
    subItems: [
      { title: "About SIU", path: "/about/about-siu" },
      { title: "History of SIU", path: "/about/history" },
      { title: "Vision & Mission", path: "/about/vision-mission" },
      { title: "Chairman's Message", path: "/about/chairman-message" },
    ],
  },
  {
    title: "Connect",
    path: "/connect",
  },
  {
    title: "Research",
    path: "/research",
    subItems: [
      { title: "Research and Development Cell", path: "/research/RnD-cell" },
      { title: "Innovation Centre", path: "/research/innovation-center" },
    ],
  },
  { title: "Contact Us", path: "/contact-us" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); 
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); 
  const menuRef = useRef(null); 

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    setOpenMobileSubmenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className=" fixed left-0 right-0 top-[38px] z-40 shadow-xl bg-white"> 
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img src={logo} alt="SIU logo" className="h-16 w-auto" />
            </Link>

            <ul
              className="hidden md:flex space-x-2 text-xl items-center"
              ref={menuRef}
            >
              {navItems.map((item, index) => (
                <li key={item.path} className="relative group">
                  {item.subItems || item.megaMenu ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => toggleSubmenu(index)}
                        onFocus={() => toggleSubmenu(index)}
                        className="flex items-center text-gray-700 px-2 py-1 relative
                                  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                  before:bg-orange-500 before:transition-all before:duration-300
                                  hover:before:w-full"
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                            openSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      
                      {item.subItems && !item.megaMenu && (
                        <div
                          className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 ${
                            openSubmenu === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          } transition-opacity duration-300`}
                          onMouseEnter={() => setOpenSubmenu(index)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          {item.subItems.map((subItem) =>
                            subItem.target ? (
                              <a
                                key={subItem.path}
                                href={subItem.path}
                                target={subItem.target}
                                rel={subItem.rel}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 relative
                                            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                            before:bg-orange-500 before:transition-all before:duration-300
                                            hover:before:w-full"
                                onClick={closeAllMenus}
                              >
                                {subItem.title}
                              </a>
                            ) : (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 relative
                                            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                            before:bg-orange-500 before:transition-all before:duration-300
                                            hover:before:w-full"
                                onClick={closeAllMenus}
                              >
                                {subItem.title}
                              </Link>
                            )
                          )}
                        </div>
                      )}

                      {item.megaMenu && (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 mt-1 min-w-[1000px] bg-white rounded-md shadow-lg p-6 z-50 border border-gray-100 ${
                            openSubmenu === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          } transition-opacity duration-300`}
                          onMouseEnter={() => setOpenSubmenu(index)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <div className="grid grid-cols-5 gap-x-8 gap-y-4"> 
                            {/* Left Section - Collaboration */}
                            <div className="col-span-1"> 
                              {/* Assuming Collaboration is always the first column in the data */}
                              {item.columns[0] && item.columns[0].heading === "COLLABORATION" && ( 
                                <div>
                                  <h3 className="font-bold text-lg text-blue-800 mb-3 border-b-2 border-orange-500 pb-1">
                                    {item.columns[0].heading}
                                  </h3>
                                  <ul>
                                    {item.columns[0].items.map((subItem, subItemIndex) => (
                                      <li key={subItemIndex} className="mb-1">
                                        <Link
                                          to={subItem.path}
                                          className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group relative"
                                          onClick={closeAllMenus}
                                        >
                                          {subItem.icon && (
                                            <img
                                              src={subItem.icon}
                                              alt={`${subItem.title} icon`}
                                              className="w-4 h-4 mr-2"
                                              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/16x16/cccccc/white?text=?" }}
                                            />
                                          )}
                                          {subItem.title}
                                          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            &rarr;
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            {/* Right Section - Other Programs */}
                            <div className="col-span-4 grid grid-cols-4 gap-x-8 gap-y-4"> 
                              {item.columns.slice(1).map((column, colIndex) => ( 
                                <div key={colIndex}>
                                  <h3 className="font-bold text-lg text-blue-800 mb-3 border-b-2 border-orange-500 pb-1">
                                    {column.heading}
                                  </h3>
                                  <ul>
                                    {column.items.map((subItem, subItemIndex) => (
                                      <li key={subItemIndex} className="mb-1">
                                        <Link
                                          to={subItem.path}
                                          className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group relative"
                                          onClick={closeAllMenus}
                                        >
                                          {subItem.icon && (
                                            <img
                                              src={subItem.icon}
                                              alt={`${subItem.title} icon`}
                                              className="w-4 h-4 mr-2"
                                              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/16x16/cccccc/white?text=?" }}
                                            />
                                          )}
                                          {subItem.title}
                                          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            &rarr;
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 px-2 py-1 relative
                                  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                  before:bg-orange-500 before:transition-all before:duration-300
                                  hover:before:w-full"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div
            className={`md:hidden ${
              mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            } transition-all duration-300 ease-in-out`}
          >
            <ul className="pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <li key={item.path}>
                  {item.subItems || item.megaMenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        className="flex items-center justify-between w-full px-3 py-3 hover:bg-gray-50 text-gray-700"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openMobileSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`${
                          openMobileSubmenu === index ? "max-h-96" : "max-h-0"
                        } overflow-hidden transition-all duration-300 ease-in-out`}
                      >
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.subItems && !item.megaMenu && item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              {subItem.target ? (
                                <a
                                  href={subItem.path}
                                  target={subItem.target}
                                  rel={subItem.rel}
                                  className="block px-3 py-3 hover:bg-gray-50 text-gray-600"
                                  onClick={closeAllMenus}
                                >
                                  {subItem.title}
                                </a>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-3 py-3 hover:bg-gray-50 text-gray-600"
                                  onClick={closeAllMenus}
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </li>
                          ))}

                          {item.megaMenu && item.columns.map((column, colIndex) => (
                            <li key={colIndex}>
                              <h4 className="font-semibold text-blue-700 mt-2 mb-1 px-3">
                                {column.heading}
                              </h4>
                              <ul className="pl-4 space-y-1">
                                {column.items.map((subItem, subItemIndex) => (
                                  <li key={subItemIndex}>
                                    <Link
                                      to={subItem.path}
                                      className="block px-3 py-2 text-gray-600 hover:bg-gray-50 flex items-center" 
                                      onClick={closeAllMenus}
                                    >
                                      {subItem.icon && (
                                        <img
                                          src={subItem.icon}
                                          alt={`${subItem.title} icon`}
                                          className="w-4 h-4 mr-2"
                                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/16x16/cccccc/white?text=?" }}
                                        />
                                      )}
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-3 hover:bg-gray-50 text-gray-700"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
