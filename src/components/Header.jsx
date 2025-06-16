import logo from "../assets/logo.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import programsData from '../assets/json/programs.json';

const navItems = [
  {
    title: "About",
    path: "/about",
    subItems: [
      { title: "About SIU", path: "/about/about-siu" },
      { title: "Act and Statutes or MoA", path: "/about/act-statutes" },
      {
        title: "Institutional Development Plan",
        path: "/about/development-plan",
      },
      { title: "Constituent Units", path: "/about/constituent-units" },
      { title: "Accreditation", path: "/about/accreditation" },
      { title: "Recognition", path: "/about/recognition" },
      { title: "Annual Reports", path: "/about/annual-reports" },
      { title: "Annual Account", path: "/about/annual-account" },
      { title: "Committees", path: "/about/committees" },
      { title: "Mandatory Disclosure", path: "/about/mandatory-disclosure" },
    ],
  },
  {
    title: "Administration",
    path: "/administration",
    subItems: [
      { title: "Chancellor", path: "/administration/chancellor" },
      { title: "Pro Chancellor", path: "/administration/pro-chancellor" },
      { title: "Vice Chancellor", path: "/administration/vice-chancellor" },
      { title: "Registrar", path: "/administration/registrar" },
      { title: "Financial Officer", path: "/administration/financial-officer" },
      {
        title: "Controller of Examination (CoE)",
        path: "/administration/controller-exams",
      },
      {
        title: "Chief Vigilance Officer",
        path: "/administration/chief-vigilance",
      },
      { title: "Ombudsperson", path: "/administration/ombudsperson" },
      {
        title: "Academic Leadership",
        path: "/administration/academic-leadership",
      },
      {
        title: "Internal Complaint Committee",
        path: "/administration/internal-complaint",
      },
    ],
  },
{
    title: "Programs",
    path: "/programs",
    megaMenu: true,
    columns: programsData.columns // Use the imported programs data
  },
  {
    title: "Academics",
    path: "/academics",
    subItems: [
      { title: "Academic Calendar", path: "/academics/academic-calendar" },
      { title: "Statutes", path: "/academics/statutes" },
      { title: "Library", path: "/academics/library" },
      { title: "Faculty", path: "/academics/faculty" },
      { title: "Exam Schedule", path: "/academics/exam-schedule" },
      {
        title: "Internal Quality Assurance Cell (IQAC)",
        path: "/academics/iqac",
      },
      {
        title: "Industry Collaboration",
        path: "/academics/industry-collaboration",
      },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    subItems: [
      { title: "Admission Process", path: "/admissions/admission-process" },
      { title: "Eligibility Criteria", path: "/admissions/admission-criteria" },
      { title: "Scholarship", path: "/admissions/scholarship" },
      { title: "Admission Helpdesk", path: "/admissions/helpdesk" },
    ],
  },
  { title: "Research and development", path: "/rnd" },
  {
    title: "Student Life",
    path: "/studentlife",
    subItems: [
      { title: "Hostel Details", path: "/studentlife/hostel" },
      { title: "Sports", path: "/studentlife/sports" },
      { title: "Scholarships", path: "/studentlife/scholarships" },
      { title: "Health Facilities", path: "/studentlife/health" },
      {
        title: "Internal Complaint Committee",
        path: "/studentlife/internal-complaint",
      },
      { title: "Anti-Ragging Cell", path: "/studentlife/anti-ragging" },
      { title: "Mentoring Schema", path: "/studentlife/mentoring" },
      {
        title: "Facilities for differently-abled",
        path: "/studentlife/differently-abled",
      },
      { title: "Research and Development Cell", path: "/studentlife/RnD-cell" },
      { title: "Innovation Centre", path: "/studentlife/innovation-center" },
    ],
  },
  { title: "Contact Us", path: "/contact-us" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

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
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef}>
      <nav
        className={`fixed left-0 right-0 top-0 z-40 shadow-xl transition-all duration-300 mb-4 pb-4 ${
          scrolled || window.location.pathname !== "/"
            ? "py-2 bg-white text-gray-600" // This applies when scrolled OR not on home page
            : "bg-transparent py-4 text-gray-600" // Change text-white to text-gray-600 for home page without scroll
        }`}
      >
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img src={logo} alt="SIU logo" className="h-16 w-auto" />
            </Link>

            <ul
              className="hidden font-outfit md:flex space-x-2 text-lg items-center"
              ref={menuRef}
            >
              {/* Navbar items */}
              {navItems.map((item, index) => (
                <li
                  key={`${item.path}-${index}`}
                  className="relative"
                  onMouseEnter={() => toggleSubmenu(index)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.subItems || item.megaMenu ? (
                    <div className="relative">
                      <button
                        className={`flex items-center px-2 py-1 relative
                                  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                  before:bg-orange-500 before:transition-all before:duration-300
                                  hover:before:w-full ${
                                    openSubmenu === index
                                      ? "text-orange-500"
                                      : ""
                                  }`}
                        aria-haspopup="true"
                        aria-expanded={openSubmenu === index}
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
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          } transition-all duration-300`}
                        >
                          {item.subItems.map((subItem, subIndex) =>
                            subItem.target ? (
                              <a
                                key={`${subItem.path}-${subIndex}`}
                                href={subItem.path}
                                target={subItem.target}
                                rel={subItem.rel}
                                className="block px-4 py-2 hover:bg-gray-100 relative
                                        before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                        before:bg-orange-500 before:transition-all before:duration-300
                                        hover:before:w-full"
                                onClick={closeAllMenus}
                              >
                                {subItem.title}
                              </a>
                            ) : (
                              <Link
                                key={`${subItem.path}-${subIndex}`}
                                to={subItem.path}
                                className="block px-4 py-2 hover:bg-gray-100 relative
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
                          className={`absolute left-1/2 -translate-x-1/2 mt-1 w-[1200px] bg-white rounded-md shadow-lg p-6 z-50 border border-gray-200 ${
                            openSubmenu === index
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          } transition-all duration-300`}
                        >
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                          {/* Main grid for two columns */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {/* Left column for Collaboration and TCS Academia */}
                            <div>
                              {item.columns.map(
                                (column, colIndex) =>
                                  (column.heading === "COLLABORATION" ||
                                    column.heading === "TCS ACADEMIA") && ( // Changed here
                                    <div
                                      key={`${column.heading}-${colIndex}`}
                                      className="relative"
                                    >
                                      <h3 className="font-bold text-lg text-blue-800 mb-3 pb-2 border-b-2 border-orange-500 relative">
                                        {column.heading}
                                        <span className="absolute bottom-0 left-0 w-1/8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                                      </h3>
                                      <ul className="space-y-2">
                                        {column.items.map(
                                          (subItem, subItemIndex) => (
                                            <li
                                              key={`${subItem.path}-${subItemIndex}`}
                                              className="mb-1"
                                            >
                                              <Link
                                                to={subItem.path}
                                                className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center justify-between group"
                                                onClick={closeAllMenus}
                                              >
                                                <div className="flex items-start">
                                                  <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                                  {subItem.title}
                                                </div>
                                                <ArrowRight
                                                  size={16}
                                                  color="orange"
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                />
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                              )}
                            </div>

                            {/* Right column for other programs */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                              {item.columns.map(
                                (column, colIndex) =>
                                  column.heading !== "COLLABORATION" &&
                                  column.heading !== "TCS ACADEMIA" && ( // Changed here
                                    <div
                                      key={`${column.heading}-${colIndex}`}
                                      className="relative"
                                    >
                                      <h3 className="font-bold text-lg text-blue-800 mb-3 pb-2 border-b-2 border-orange-500 relative">
                                        {column.heading}
                                        <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                                      </h3>
                                      <ul className="space-y-2">
                                        {/* Apply slice(0, 2) here */}
                                        {column.items
                                          .slice(0, 2)
                                          .map((subItem, subItemIndex) => (
                                            <li
                                              key={`${subItem.path}-${subItemIndex}`}
                                              className="mb-1"
                                            >
                                              <Link
                                                to={subItem.path}
                                                className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center justify-between group"
                                                onClick={closeAllMenus}
                                              >
                                                <div className="flex items-start">
                                                  <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                                  {subItem.title}
                                                </div>
                                                <ArrowRight
                                                  size={16}
                                                  color="orange"
                                                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                />
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                      {/* View all course button remains for each category */}
                                      <Link
                                        to="/programs" // Consider making this more dynamic if each column has a specific "view all" link
                                        className="text-orange-500 md:font-sm hover:underline flex items-center mt-2"
                                        onClick={closeAllMenus}
                                      >
                                        View all programs
                                        <ArrowRight
                                          size={16}
                                          className="ml-1"
                                        />
                                      </Link>
                                    </div>

                                    
                                  )
                              )}
                            </div>
                            
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-2 py-1 relative
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
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                <li key={`${item.path}-${index}-mobile`}>
                  {item.subItems || item.megaMenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        className="flex items-center justify-between w-full px-3 py-3 hover:bg-gray-50"
                        aria-haspopup="true"
                        aria-expanded={openMobileSubmenu === index}
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
                          openMobileSubmenu === index
                            ? "max-h-[2000px]" // Increased max-h for potential longer menus
                            : "max-h-0"
                        } overflow-hidden transition-all duration-300 ease-in-out`}
                      >
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.subItems &&
                            !item.megaMenu &&
                            item.subItems.map((subItem, subIndex) => (
                              <li key={`${subItem.path}-${subIndex}-mobile`}>
                                {subItem.target ? (
                                  <a
                                    href={subItem.path}
                                    target={subItem.target}
                                    rel={subItem.rel}
                                    className="block px-3 py-3 hover:bg-gray-50 relative
                                            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                            before:bg-orange-500 before:transition-all before:duration-300
                                            hover:before:w-full"
                                    onClick={closeAllMenus}
                                  >
                                    {subItem.title}
                                  </a>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    className="block px-3 py-3 hover:bg-gray-50 relative
                                            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                            before:bg-orange-500 before:transition-all before:duration-300
                                            hover:before:w-full"
                                    onClick={closeAllMenus}
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </li>
                            ))}

                          {item.megaMenu &&
                            item.columns.map((column, colIndex) => (
                              <li key={`${column.heading}-${colIndex}-mobile`}>
                                <h4 className="font-bold text-lg text-blue-800 mt-2 mb-1 px-3 border-b-2 border-orange-500 pb-1">
                                  {column.heading}
                                </h4>
                                <ul className="pl-4 space-y-1">
                                  {column.items.map((subItem, subItemIndex) => (
                                    <li
                                      key={`${subItem.path}-${subItemIndex}-mobile`}
                                    >
                                      <Link
                                        to={subItem.path}
                                        className="block px-3 py-2 hover:bg-gray-50 flex items-center justify-between group relative" // Added justify-between
                                        onClick={closeAllMenus}
                                      >
                                        {subItem.title}
                                        <ArrowRight
                                          size={16}
                                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        />
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
                      className="block px-3 py-3 hover:bg-gray-50 relative
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
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from being hidden behind the fixed navbar */}
      <div className={`h-${scrolled ? "20" : "24"}`}></div>
    </div>
  );
}

export default Header;
