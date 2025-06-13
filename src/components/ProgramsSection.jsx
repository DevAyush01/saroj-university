import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Palette,
  FlaskConical,
  HeartPulse,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Engineering & Technology",
      degrees: [
        { name: "B.Tech Computer Science", duration: "4 Years", seats: 120 },
        { name: "B.Tech Mechanical", duration: "4 Years", seats: 80 },
        { name: "B.Tech Electronics", duration: "4 Years", seats: 60 },
        { name: "M.Tech AI & ML", duration: "2 Years", seats: 30 },
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      title: "Business & Management",
      degrees: [
        { name: "BBA", duration: "3 Years", seats: 150 },
        { name: "MBA", duration: "2 Years", seats: 100 },
        { name: "B.Com", duration: "3 Years", seats: 200 },
        { name: "M.Com", duration: "2 Years", seats: 60 },
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      title: "Arts & Humanities",
      degrees: [
        { name: "BA English", duration: "3 Years", seats: 180 },
        { name: "BA Psychology", duration: "3 Years", seats: 90 },
        { name: "MA History", duration: "2 Years", seats: 40 },
        { name: "MA Sociology", duration: "2 Years", seats: 50 },
      ],
      icon: <Palette className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      title: "Science & Research",
      degrees: [
        { name: "B.Sc Physics", duration: "3 Years", seats: 70 },
        { name: "B.Sc Chemistry", duration: "3 Years", seats: 70 },
        { name: "M.Sc Biotechnology", duration: "2 Years", seats: 30 },
        { name: "PhD Mathematics", duration: "3-5 Years", seats: 15 },
      ],
      icon: <FlaskConical className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 5,
      title: "Health Sciences",
      degrees: [
        { name: "B.Sc Nursing", duration: "4 Years", seats: 60 },
        { name: "B.Pharm", duration: "4 Years", seats: 100 },
        { name: "M.Sc Nutrition", duration: "2 Years", seats: 30 },
        { name: "Doctor of Physiotherapy", duration: "4.5 Years", seats: 40 },
      ],
      icon: <HeartPulse className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
    },
  ];

  const [activeTab, setActiveTab] = useState(programs[0].id);
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const currentProgram = programs.find((program) => program.id === activeTab);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-7xl mx-auto"
        >
          <h2 className="text-5xl text-left font-funneldisplay font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg font-funneldisplay text-left text-gray-600 ">
            Explore our diverse range of undergraduate, postgraduate, and
            doctoral programs designed to shape future leaders.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Program Categories - Left Side */}
          <div className="lg:w-1/3">
            <div className="mb-4 p-3 bg-white rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">
                Program Categories
              </span>
            </div>

            <div className="space-y-2">
              {programs.map((program) => (
                <motion.div
                  key={program.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => setActiveTab(program.id)}
                    onMouseEnter={() => setHoveredProgram(program.id)}
                    onMouseLeave={() => setHoveredProgram(null)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3
                      ${
                        activeTab === program.id
                          ? `${program.color} shadow-md`
                          : "bg-white hover:bg-gray-50"
                      }
                      ${
                        hoveredProgram === program.id &&
                        hoveredProgram !== activeTab
                          ? "ring-2 ring-gray-300"
                          : ""
                      }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        activeTab === program.id
                          ? "bg-blue-200 text-blue-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {program.icon}
                    </div>
                    <span className="font-medium">{program.title}</span>
                    <span className="ml-auto text-sm bg-white/80 px-2 py-1 rounded-full">
                      {program.degrees.length} programs
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Explore All Programs Button */}
            <motion.div whileHover={{ x: 5 }} className="mt-6">
              <a
                href="#all-programs"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 delay-100 bg-[#214A9A] hover:bg-[#f08f07] text-white rounded-lg transition-colors"
              >
                Explore All Programs
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Program Details - Right Side */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProgram.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
              >
                <div
                  className={`p-4 ${currentProgram.color} flex items-center gap-3`}
                >
                  <div className="p-2 rounded-full bg-blue-200 text-blue-700">
                    {currentProgram.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{currentProgram.title}</h3>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentProgram.degrees.map((degree, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold text-lg mb-2 text-gray-800">
                          {degree.name}
                        </h4>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Duration: {degree.duration}</span>
                          <span>Seats: {degree.seats}</span>
                        </div>

                        <button className="mt-3 w-full py-2 transition-colors delay-100 bg-[#214A9A] hover:bg-[#f08f07] text-white rounded-md flex items-center justify-center gap-2">
                          Apply Now
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-800">
                      Admission Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Minimum 50% marks in qualifying examination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>
                          Valid score in entrance exam (if applicable)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>
                          Completed application form with required documents
                        </span>
                      </li>
                    </ul>
                    <button className="mt-4 px-6 py-2 delay-100 bg-[#214A9A] hover:bg-[#f08f07] text-white rounded-md transition-colors flex items-center justify-center gap-2 mx-auto">
                      Start Application Process
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;