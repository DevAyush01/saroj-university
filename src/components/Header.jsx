import logo from "../assets/logo.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    title: "About",
    path: "/about",
    subItems: [
      { title: "About SIU", path: "/about/about-siu" },
      { title: "Act and Statutes or MoA", path: "/about/act-statutes" },
      { title: "Institutional Development Plan", path: "/about/development-plan" },
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
      { title: "Controller of Examination (CoE)", path: "/administration/controller-exams" },
      { title: "Chief Vigilance Officer", path: "/administration/chief-vigilance" },
      { title: "Ombudsperson", path: "/administration/ombudsperson" },
      { title: "Academic Leadership", path: "/administration/academic-leadership" },
      { title: "Internal Complaint Committee", path: "/administration/internal-complaint" },
    ],
  },
  {
    title: "Programs",
    path: "/programs",
    megaMenu: true,
    columns: [
      {
        heading: "ENGINEERING & TECHNOLOGY",
        items: [
          { title: "B.Tech - Computer Science & Engineering", path: "/programs/btech-cse" },
          { title: "B.Tech - Mechanical Engineering", path: "/programs/btech-me" },
          { title: "B.Tech - Civil Engineering", path: "/programs/btech-ce" },
          { title: "B.Tech - Electronics & Communication Engineering", path: "/programs/btech-ece" },
          { title: "B.Tech - Electrical Engineering", path: "/programs/btech-ee" },
          { title: "M.Tech - Computer Science & Engineering", path: "/programs/mtech-cse" },
        ],
      },
      {
        heading: "MANAGEMENT",
        items: [
          { title: "BBA (Bachelor of Business Administration)", path: "/programs/bba" },
          { title: "MBA (Master of Business Administration)", path: "/programs/mba" },
          { title: "B.Com (Bachelor of Commerce)", path: "/programs/bcom" },
          { title: "M.Com (Master of Commerce)", path: "/programs/mcom" },
        ],
      },
      {
        heading: "COMPUTER APPLICATIONS",
        items: [
          { title: "BCA (Bachelor of Computer Applications)", path: "/programs/bca" },
          { title: "MCA (Master of Computer Applications)", path: "/programs/mca" },
        ],
      },
      {
        heading: "LAW",
        items: [
          { title: "BA LLB (5 Years Integrated)", path: "/programs/ba-llb" },
          { title: "BBA LLB (5 Years Integrated)", path: "/programs/bba-llb" },
          { title: "LLB (3 Years)", path: "/programs/llb" },
          { title: "LLM (Master of Laws)", path: "/programs/llm" },
        ],
      },
      {
        heading: "PHARMACY",
        items: [
          { title: "B.Pharm (Bachelor of Pharmacy)", path: "/programs/bpharm" },
          { title: "D.Pharm (Diploma in Pharmacy)", path: "/programs/dpharm" },
          { title: "M.Pharm (Master of Pharmacy)", path: "/programs/mpharm" },
        ],
      },
      {
        heading: "SCIENCE",
        items: [
          { title: "B.Sc. - Physics, Chemistry, Mathematics", path: "/programs/bsc-pcm" },
          { title: "B.Sc. - Biotechnology", path: "/programs/bsc-biotech" },
          { title: "M.Sc. - Physics", path: "/programs/msc-physics" },
          { title: "M.Sc. - Chemistry", path: "/programs/msc-chemistry" },
          { title: "M.Sc. - Mathematics", path: "/programs/msc-maths" },
        ],
      },
      {
        heading: "EDUCATION",
        items: [
          { title: "B.Ed (Bachelor of Education)", path: "/programs/bed" },
          { title: "D.El.Ed (Diploma in Elementary Education)", path: "/programs/deled" },
        ],
      },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    subItems: [
      { title: "Academic Calendar", path: "/academics/academic-calendar" },
      { title: "Statutes", path: "/academics/statutes" },
      { title: "Library", path: "/academics/library" },
      { title: "Faculty", path: "/academics/faculty" },
      { title: "Syllabus", path: "/academics/syllabus" },
      { title: "Exam Schedule", path: "/academics/exam-schedule" },
      { title: "Internal Quality Assurance Cell (IQAC)", path: "/academics/iqac" },
      { title: "Industry Collaboration", path: "/academics/industry-collaboration" },
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
      { title: "Internal Complaint Committee", path: "/studentlife/internal-complaint" },
      { title: "Anti-Ragging Cell", path: "/studentlife/anti-ragging" },
      { title: "Mentoring Schema", path: "/studentlife/mentoring" },
      { title: "Facilities for differently-abled", path: "/studentlife/differently-abled" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    const handleMouseLeave = () => {
      setOpenSubmenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    navRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      navRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={navRef}>
      <nav className="fixed left-0 right-0 top-0 z-40 bg-transparent shadow-xl  text-gray-800">
        <div className="max-w-8xl mx-auto px-4  py-4 ">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img src={logo} alt="SIU logo" className="h-16 w-auto" />
            </Link>

            <ul
              className="hidden font-outfit md:flex space-x-2 text-lg items-center"
              ref={menuRef}
            >
              {navItems.map((item, index) => (
                <li key={`${item.path}-${index}`} className="relative group">
                  {item.subItems || item.megaMenu ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => toggleSubmenu(index)}
                        onFocus={() => toggleSubmenu(index)}
                        className="flex items-center px-2 py-1 text-white relative
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
                          className={`absolute left-1/2 -translate-x-1/2 mt-1 min-w-[1000px] bg-white rounded-md shadow-lg p-6 z-50 border border-gray-100 ${
                            openSubmenu === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          } transition-opacity duration-300`}
                          onMouseEnter={() => setOpenSubmenu(index)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                            {item.columns.map((column, colIndex) => (
                              <div key={`${column.heading}-${colIndex}`}>
                                <h3 className="font-bold text-lg text-blue-800 mb-3 border-b-2 border-orange-500 pb-1">
                                  {column.heading}
                                </h3>
                                <ul>
                                  {column.items.map((subItem, subItemIndex) => (
                                    <li key={`${subItem.path}-${subItemIndex}`} className="mb-1">
                                      <Link
                                        to={subItem.path}
                                        className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group relative"
                                        onClick={closeAllMenus}
                                      >
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
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-2 py-1 relative
                                 before:absolute before:-bottom-1 text-white before:left-0 before:w-0 before:h-0.5
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
                                    <li key={`${subItem.path}-${subItemIndex}-mobile`}>
                                      <Link
                                        to={subItem.path}
                                        className="block px-3 py-2 hover:bg-gray-50 flex items-center group relative"
                                        onClick={closeAllMenus}
                                      >
                                        {subItem.title}
                                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                          &rarr;
                                        </span>
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
    </div>
  );
}

export default Header;