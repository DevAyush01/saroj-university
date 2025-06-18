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
      { title: "Act and Statutes or MoA", path: "/about/approvals-documents" },
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
    columns: programsData.columns
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
      { title: "Fee Structure", path: "/admissions/fee-structure" },
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

  return (
    <div ref={navRef}>
      <nav className="fixed left-0 right-0 top-0 z-40 bg-white text-gray-600 shadow-md">
        <div className="max-w-8xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img 
                src={logo} 
                alt="SIU logo" 
                className="h-auto w-48" 
              />
            </Link>

            <ul
              className="xl:flex hidden font-outfit space-x-2 text-lg items-center"
              ref={menuRef}
            >
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
                            openSubmenu === index ? "block" : "hidden"
                          }`}
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
                          className={`absolute left-1/2 -translate-x-1/2 mt-1 w-[900px] max-h-[80vh] overflow-y-auto bg-white rounded-md shadow-lg p-6 z-50 border border-gray-200 ${
                            openSubmenu === index ? "block" : "hidden"
                          }`}
                        >
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            <div>
                              {item.columns.map(
                                (column, colIndex) =>
                                  (column.heading === "COLLABORATION" ||
                                    column.heading === "TCS ACADEMIA") && (
                                    <div
                                      key={`${column.heading}-${colIndex}`}
                                      className="relative mb-6"
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

                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                              {item.columns.map(
                                (column, colIndex) =>
                                  column.heading !== "COLLABORATION" &&
                                  column.heading !== "TCS ACADEMIA" && (
                                    <div
                                      key={`${column.heading}-${colIndex}`}
                                      className="relative mb-6"
                                    >
                                      <h3 className="font-bold text-lg text-blue-800 mb-3 pb-2 border-b-2 border-orange-500 relative">
                                        {column.heading}
                                        <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                                      </h3>
                                      <ul className="space-y-2">
                                        {column.items
                                          .slice(0, 4)
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
                                    </div>
                                  )
                              )}
                            </div>
                          </div>

                          <div className="flex justify-center mt-4">
                            <Link to="/programs" onClick={closeAllMenus}>
                              <button
                                className="inline-flex items-center justify-center bg-blue-700 text-white font-semibold px-10 
                                py-3 rounded-sm shadow-lg hover:bg-blue-800 transition duration-300 text-base sm:text-lg"
                              >
                                View all Programs
                              </button>
                            </Link>
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
              className="xl:hidden p-2 rounded-md hover:bg-gray-100"
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

          {/* Modified mobile menu section */}
          <div
            className={`xl:hidden ${
              mobileMenuOpen ? "max-h-[90vh]z-[888] pb-10" : "max-h-0"
            } transition-all duration-300 ease-in-out overflow-y-auto `}
          >
            <ul className="pt-2 pb-4 space-y-3 min-h-screen "> 
              {navItems.map((item, index) => (
                <li key={`${item.path}-${index}-mobile`} className="border-b border-gray-100 last:border-b-0">
                  {item.subItems || item.megaMenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-50" 
                        aria-haspopup="true"
                        aria-expanded={openMobileSubmenu === index}
                      >
                        <span className="text-gray-800 font-medium">{item.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openMobileSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`${
                          openMobileSubmenu === index
                            ? "max-h-[2000px]"
                            : "max-h-0"
                        } overflow-hidden transition-all duration-300 ease-in-out`}
                      >
                        <ul className="pl-2 space-y-0"> {/* Changed pl-4 to pl-2 and space-y-1 to space-y-0 */}
                          {item.subItems &&
                            !item.megaMenu &&
                            item.subItems.map((subItem, subIndex) => (
                              <li key={`${subItem.path}-${subIndex}-mobile`} className="border-t border-gray-100">
                                {subItem.target ? (
                                  <a
                                    href={subItem.path}
                                    target={subItem.target}
                                    rel={subItem.rel}
                                    className="block px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                                    onClick={closeAllMenus}
                                  >
                                    {subItem.title}
                                  </a>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    className="block px-3 py-2 hover:bg-gray-50 text-gray-700 text-sm" 
                                    onClick={closeAllMenus}
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </li>
                            ))}

                          {item.megaMenu &&
                            item.columns.map((column, colIndex) => (
                              <li key={`${column.heading}-${colIndex}-mobile-column`} className="border-t border-gray-100">
                                <h4 className="font-semibold text-blue-800 mt-1 mb-1 px-3 border-b border-orange-200 pb-1 text-sm"> {/* Reduced text size and adjusted styling */}
                                  {column.heading}
                                </h4>
                                <ul className="pl-2 space-y-0"> {/* Changed pl-4 to pl-2 and space-y-1 to space-y-0 */}
                                  {column.items.map((subItem, subItemIndex) => (
                                    <li
                                      key={`${subItem.path}-${subItemIndex}-mobile`}
                                      className="border-t border-gray-100"
                                    >
                                      <Link
                                        to={subItem.path}
                                        className="block px-3 py-2 hover:bg-gray-50 flex items-center justify-between group text-gray-700 text-sm" 
                                        onClick={closeAllMenus}
                                      >
                                        {subItem.title}
                                        <ArrowRight
                                          size={14} 
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
                      className="block px-3 py-2 hover:bg-gray-50 text-gray-800 font-medium" 
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
      <div className="h-20"></div>
    </div>
  );
}

export default Header;