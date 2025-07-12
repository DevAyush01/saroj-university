// src/pages/tcs/CryptographyPage.jsx

import React from 'react';
import { BookOpen, Clock, User, BarChart2, Briefcase, ChevronRight, Award, BriefcaseBusiness, Globe, Check } from 'lucide-react';
import Layout from '../../components/Layout'; // Adjust path if your Layout component is elsewhere

const CryptographyPage = () => {

  const courseData = {
    id: "cryptography",
    title: "Cryptography - Practitioner's Perspective", // Derived title from previous pattern
    degree: "B.Tech-AI/ML", // Assumed
    semester: 6, // Assumed
    summary: [
      "Cryptography is the study of design and analysis of the methods used to secure information in the presence of adversaries. Cryptographic techniques are at the core of security in the cyber world. Failure to implement Cryptographic methods, or their incorrect implementation is one of the leading reasons for the vulnerabilities in web applications and security protocols.",
      "This course takes a look at the design and usage of various Cryptographic techniques used to solve practical security challenges. Students will have the ability to judge, use appropriate methods and correctly implement Cryptographic algorithms for achieving different security goals. Students will be able to take up technical/managerial roles in the software industry and the R&D sector in the area of Cryptography and Information Security.",
    ],
    prerequisites:
      "Basic Mathematics and knowledge of a programming language is useful for taking up this course.",
    syllabus: [
      {
        title: "Introduction",
        topics: [
          "Introduction and basic setting, different attack models (COA, CPA, CCA and more), Kerckhoff's law, Caesar's cipher, Substitution cipher, Brute force key search versus Cryptanalytic attacks, Caesar's cipher, Substitution cipher, Product ciphers",
          "Perfect security, Shannon's formalization, Indistinguishability-based definition of perfect security, Equivalence of different notions of perfect security, OTP, Weaknesses of perfect security",
        ],
      },
      {
        title: "Symmetric Key Encryption",
        topics: [
          "Computational security, Pseudo randomness and Stream ciphers, Stream project, Practical attacks on Stream ciphers (RC4, KeeLoq and more)",
          "PRF, PRP, Block ciphers, Iterated Block cipher design principle, Feistel construction, DES",
          "DES variants - 2DES, MITM, 3 DES, Linear and differential cryptanalysis, AES competition, AES design",
          "Block ciphers' modes of operations - ECB, CBC, CFB, OFB, Counter, and their error propagation characteristics",
        ],
      },
      {
        title: "Authentication and Integrity Protection",
        topics: [
          "Cryptographic hash functions, their security properties, design principle of MD Construction, MD4, MD4, SHA-0/1, SHA2 - and their current status, SHA3 competition and Keccak",
          "Message authentication code, Order of encryption and authentication, CBC MAC and it's weaknesses, CMAC and HMAC",
          "Lightweight block ciphers, Format Preserving Encryption (NIST SP for FPE), AEAD schemes, (their application in Disk encryption), CAESAR competition",
        ],
      },
      {
        title: "Asymmetric Key Cryptography",
        topics: [
          "Key Exchange in public setting, Merkle’s Puzzles, Diffie-Hellman key exchange",
          "Required mathematical background: GCD, Inverting elements (in a Euclidean ring), Euler’s Totient function, Euler’s theorem, Chinese Remainder theorem, Quadratic reciprocity, Coin tossing on a telephone",
          "RSA encryption, Prime numbers, Primality testing, correctness of RSA, OAEP",
          "ElGamal encryption, Elliptic curves, ECC, digital signatures",
          "Post-quantum Cryptography and migration",
          "Digital certificates and PKI, certificate expiration and revocation, PKI implementation in practice",
        ],
      },
      {
        title: "Applications and Real-life Usage",
        topics: [
          "Applied Cryptography for Blockchain, resilience against double spending",
          "Introduction to privacy enhancing techniques, K-Anonymity, Homomorphic encryption, Secure multi-party computation, differential privacy",
          "Implementation pitfalls, software vulnerabilities due to the incorrect use of Cryptography in real-life applications",
        ],
      },
    ],
    mentors: [
      {
        name: "Dr. Somitra Sanadhya",
        role: "Professor in the Department of Computer Science and Engineering, Dean for Digital Transformation, and the Chief Information Security Officer at IIT Jodhpur | Academic Expert",
        image: "/src/pages/tcs/tcsMentors/Somitra.PNG", // Assuming this path from provided file list and image
        description:
          "Dr. Somitra Sanadhya is a professor in the Department of Computer Science and Engineering, Dean for Digital Transformation, and the Chief Information Security Officer at IIT Jodhpur. He completed hi...", // From image_e25767.png (truncated)
      },
      {
        name: "Dr. Rajan M A",
        role: "Senior Scientist, TCS Research and Innovation | Industry Expert",
        image: "/src/pages/tcs/tcsMentors/Rajan1.PNG", // Assuming this path from provided file list and image
        description:
          "Dr. Rajan M A is a senior scientist in the Cyber Security and Privacy Research area at TCS Research, Bangalore since 2010. He has 22+ years of experience in the area of Cryptography, Computer networ...", // From image_e25767.png (truncated)
      },
    ],
    careerOutlook: [
      "As per Fortune Business Insights, the global quantum Cryptography market size was valued at US$170.4 million in 2023. The market is projected to grow from US$213.8 million in 2024 to US$1,617.5 million by 2032, exhibiting a CAGR of 28.8% during the forecast period."
    ],
    jobRoles: [
      "Technical roles in software industry (Cryptography and Information Security)",
      "Managerial roles in software industry (Cryptography and Information Security)",
      "R&D roles in Cryptography and Information Security sector",
    ],
    courseurl: "#", // Placeholder
    courseBanner: 'https://cdn.pixabay.com/photo/2021/05/29/15/55/ethereum-6293700_640.jpg', // Placeholder, assuming you will add this image
  };

  // Generic features (can be adapted if specific ones for this course are provided later)
  const features = [
    {
      icon: <BriefcaseBusiness className="w-8 h-8 text-blue-600" />,
      title: "Assured Internship and Placement"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Microsoft Global Certifications"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Specialisation in Generative AI"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
                {/* Displaying the first summary point in hero */}
                <p className="text-xl mb-6">{courseData.summary[0].split('.')[0]}.</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                    <BookOpen className="mr-2 h-5 w-5" />
                    <span>{courseData.degree}</span>
                  </div>
                  <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                    <Clock className="mr-2 h-5 w-5" />
                    <span>Semester {courseData.semester}</span>
                  </div>
                </div>
                <a
                  href={courseData.courseurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                  Enroll Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-lg opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-lg opacity-20 animate-pulse delay-300"></div>
                  <img
                    src={courseData.courseBanner}
                    alt={courseData.title}
                    className="relative z-10 w-full h-auto rounded-lg shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Icon Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Details</h2>

              {/* Course Overview (No Dropdown) */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Course Overview</h3>
                <div className="prose max-w-none">
                  {courseData.summary.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-2">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Syllabus (No Dropdown) */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Syllabus</h3>
                <div className="space-y-4">
                  {courseData.syllabus.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full flex justify-between items-center p-4 bg-gray-50">
                        <div className="flex items-center">
                          <span className="mr-3 text-blue-600 font-semibold">{index + 1}.</span>
                          <h4 className="text-lg font-medium text-left">{module.title}</h4>
                        </div>
                      </div>
                      <div className="p-4 border-t border-gray-200">
                        <ul className="space-y-2 pl-5">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites (No Dropdown) */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prerequisites</h3>
                <p className="text-gray-700">{courseData.prerequisites}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Mentors */}
              {courseData.mentors && courseData.mentors.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <User className="mr-2 h-5 w-5 text-blue-600" />
                    Mentors
                  </h3>
                  <div className="space-y-6">
                    {courseData.mentors.map((mentor, index) => (
                      <div key={index} className="flex items-start">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white shadow"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                          <p className="text-sm text-blue-600 mb-1">{mentor.role}</p>
                          <p className="text-sm text-gray-600 line-clamp-3">{mentor.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Outlook */}
              {courseData.careerOutlook && courseData.careerOutlook.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
                    Career Outlook
                  </h3>
                  <ul className="space-y-3">
                    {courseData.careerOutlook.map((outlook, index) => (
                      <li key={index} className="text-sm text-gray-700">{outlook}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Job Roles */}
              {courseData.jobRoles && courseData.jobRoles.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
                    Potential Job Roles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {courseData.jobRoles.map((role, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CryptographyPage;