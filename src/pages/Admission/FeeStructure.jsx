import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';

const SIUFeeStructure = () => {
  // Transform the JSON data into table-friendly format
  const transformProgramsToTableData = (programs) => {
    return programs.map(program => {
      if (!program.fees) return [program.degree, "N/A", "N/A"];
      
      const totalFee = program.fees.total ? `₹${program.fees.total.toLocaleString('en-IN')}` : "N/A";
      
      let annualFee = "N/A";
      if (program.fees.year1) {
        annualFee = `₹${program.fees.year1.toLocaleString('en-IN')}/year`;
      }
      
      return [
        `${program.degree} (${program.specializations})`,
        totalFee,
        annualFee
      ];
    });
  };

  // Extract programs from each institute
  const regularPrograms = [];
  const globalPrograms = [];
  
  const institutes = [
    {
      name: "Saroj Institute of Management & Technology",
      programs: [
        { degree: "B.Tech", specializations: "CSE, IT, Cyber Security, IOT, EC, ME, Civil, Mechatronics, Bio-Tech, Electrical Engg", fees: { year1: 110000, year2: 110000, year3: 110000, year4: 110000, total: 440000 } },
        { degree: "M.Tech", specializations: "CSE, IT, Cyber Security, IOT, EC, ME, Civil, Mechatronics, Bio-Tech, Electrical Engg", fees: { year1: 125000, year2: 125000, total: 250000 } },
        { degree: "BCA", specializations: "AI, ML, Cyber Security", fees: { year1: 100000, year2: 100000, year3: 100000, total: 300000 } },
        { degree: "MCA", specializations: "AI, ML, Cyber Security", fees: { year1: 120000, year2: 120000, total: 240000 } },
        { degree: "Diploma Engg.", specializations: "All fields", fees: { year1: 60000, year2: 60000, year3: 60000, total: 180000 } }
      ]
    },
    {
      name: "Saroj Institute of Basic & Health Sciences",
      programs: [
        { degree: "B.Sc", specializations: "Physics, Chemistry, Biology, Mathematics", fees: { year1: 80000, year2: 80000, year3: 80000, total: 240000 } },
        { degree: "BS", specializations: "Data Sciences, Physiotherapy, Forensic Science, Radiology & Imaging, Medical Lab Technology", fees: { year1: 80000, year2: 80000, year3: 80000, total: 240000 } },
        { degree: "M.Sc", specializations: "Physics, Biology, Chemistry, Mathematics", fees: { year1: 80000, year2: 80000, total: 160000 } },
        { degree: "MS", specializations: "Data Sciences, Physiotherapy, Forensic Science, Radiology & Imaging, Medical Lab Technology", fees: { year1: 80000, year2: 80000, total: 160000 } },
        { degree: "Diploma", specializations: "Public Health", fees: { year1: 60000, total: 60000 } },
        { degree: "Ph.D", specializations: "All disciplines", fees: { year1: 100000, year2: 100000, year3: 100000, total: 300000 } }
      ]
    },
    {
      name: "Lucknow Institute of Pharmacy",
      programs: [
        { degree: "B.Pharm", specializations: "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis, Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs", fees: { year1: 100000, year2: 100000, year3: 100000, year4: 100000, total: 400000 } },
        { degree: "D.Pharm", specializations: "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis, Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs", fees: { year1: 90000, year2: 90000, total: 180000 } },
        { degree: "M.Pharm", specializations: "Pharmacology", fees: { year1: 100000, year2: 100000, total: 200000 } },
        { degree: "M.Pharm", specializations: "Medical Chemistry", fees: { year1: 90000, year2: 90000, total: 180000 } }
      ]
    },
    {
      name: "Saroj Institute of Sports Science & Research",
      programs: [
        { degree: "BS", specializations: "Sports Management, Applied Sports Psychology, Sports Nutritionist, Sports Coaching & Fitness", fees: { year1: 90000, year2: 90000, year3: 90000, total: 270000 } },
        { degree: "MS", specializations: "Sports Management, Applied Sports Psychology, Sports Nutritionist, Sports Coaching & Fitness", fees: { year1: 90000, year2: 90000, total: 180000 } }
      ]
    },
    {
      name: "Saroj Institute of Film & Fashion",
      programs: [
        { degree: "B.Design", specializations: "Fashion Design, Interior Design, Visual Communication Design, Animation & Game Design", fees: { year1: 100000, year2: 100000, year3: 100000, year4: 100000, total: 400000 } },
        { degree: "B.Sc", specializations: "Film Making, Script, Direction, Audiography, Script Writing, Cinematography", fees: { year1: 100000, year2: 100000, year3: 100000, total: 300000 } },
        { degree: "BA", specializations: "Acting & Drama, Advertising, Journalism, PR Events", fees: { year1: 100000, year2: 100000, year3: 100000, total: 300000 } },
        { degree: "M.Design", specializations: "Fashion Design, Visual Communication Design, Animation & Game Design", fees: { year1: 100000, year2: 100000, total: 200000 } },
        { degree: "M.Sc", specializations: "Film Making, Script Writing, Cinematography", fees: { year1: 100000, year2: 100000, total: 200000 } },
        { degree: "MA", specializations: "Acting & Drama, Advertising, Journalism, PR Events", fees: { year1: 100000, year2: 100000, total: 200000 } },
        { degree: "Diploma", specializations: "Film/Drama/Media", fees: { year1: 100000, total: 100000 } }
      ]
    }
  ];

  const globalInstitutes = [
    {
      name: "Saroj Institute of Management & Technology",
      programs: [
        { degree: "B.Tech", specializations: "CSE, IT, Cyber Security, IOT, EC, ME, Civil, Mechatronics, Bio-Tech, Electrical Engg", fees: { year1: 160000, year2: 160000, year3: 160000, year4: 160000, total: 640000 } },
        { degree: "M.Tech / MCA", specializations: "M.Tech (CSE, IT, Cyber Security, IOT, EC, ME, Civil, Mechatronics, Bio-Tech, Electrical Engg), MCA (AI, ML, Cyber Security)", fees: { year1: 150000, year2: 150000, year3: 150000, total: 450000 } },
        { degree: "BCA", specializations: "AI, ML, Cyber Security", fees: { year1: 150000, year2: 150000, total: 300000 } }
      ]
    },
    {
      name: "Saroj Institute of Basic & Health Sciences",
      programs: [
        { degree: "B.Sc", specializations: "Physics, Biology, Chemistry, Mathematics", fees: { year1: 125000, year2: 125000, year3: 125000, total: 375000 } },
        { degree: "BS", specializations: "Data Sciences, Physiotherapy, Forensic Science, Radiology, Imaging, Medical Lab Technology", fees: { year1: 125000, year2: 125000, year3: 125000, total: 375000 } },
        { degree: "M.Sc", specializations: "Physics, Biology, Chemistry, Mathematics", fees: { year1: 125000, year2: 125000, total: 250000 } },
        { degree: "MS", specializations: "Data Sciences, Physiotherapy, Forensic Science, Radiology, Imaging, Medical Lab Technology", fees: { year1: 125000, year2: 125000, total: 250000 } },
        { degree: "Ph.D", specializations: "Physics, Chemistry, Mathematics & Biology", fees: { year1: 150000, year2: 150000, year3: 150000, total: 450000 } },
        { degree: "Ph.D", specializations: "Data Analytics", fees: { year1: 150000, year2: 150000, year3: 150000, total: 450000 } }
      ]
    },
    {
      name: "Lucknow Institute of Pharmacy",
      programs: [
        { degree: "B.Pharm", specializations: "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis, Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs", fees: { year1: 150000, year2: 150000, year3: 150000, year4: 150000, total: 600000 } },
        { degree: "D.Pharm", specializations: "Pharmacology, Pharmaceutical Chemistry, Pharmaceutics, Pharmaceutical Analysis, Clinical Pharmacy, Pharmaceutical Biotechnology, Regulatory Affairs", fees: { year1: 140000, year2: 140000, total: 280000 } },
        { degree: "M.Pharm", specializations: "Pharmacology", fees: { year1: 150000, year2: 150000, total: 300000 } },
        { degree: "M.Pharm", specializations: "Medical Chemistry", fees: { year1: 140000, year2: 140000, total: 280000 } }
      ]
    },
    {
      name: "Saroj Institute of Sports Science & Research",
      programs: [
        { degree: "BS", specializations: "Sports Management, Applied Sports Psychology, Sports Nutritionist, Sports Coaching & Fitness", fees: { year1: 140000, year2: 140000, year3: 140000, total: 420000 } },
        { degree: "MS", specializations: "Sports Management, Applied Sports Psychology, Sports Nutritionist, Sports Coaching & Fitness", fees: { year1: 140000, year2: 140000, total: 280000 } }
      ]
    },
    {
      name: "Saroj Institute of Film & Fashion",
      programs: [
        { degree: "B.Design", specializations: "Fashion Design, Interior Design, Visual Communication Design, Animation & Game Design", fees: { year1: 150000, year2: 150000, year3: 150000, year4: 150000, total: 600000 } },
        { degree: "B.Sc", specializations: "Film Making, Script, Direction, Audiography, Script Writing, Cinematography", fees: { year1: 150000, year2: 150000, year3: 150000, total: 450000 } },
        { degree: "BA", specializations: "Acting & Drama, Advertising, Journalism, PR Events", fees: { year1: 150000, year2: 150000, year3: 150000, total: 450000 } },
        { degree: "M.Design", specializations: "Fashion Design, Visual Communication Design, Animation & Game Design", fees: { year1: 150000, year2: 150000, total: 300000 } },
        { degree: "M.Sc", specializations: "Film Making, Script Writing, Cinematography", fees: { year1: 150000, year2: 150000, total: 300000 } },
        { degree: "MA", specializations: "Acting & Drama, Advertising, Journalism, PR Events", fees: { year1: 150000, year2: 150000, total: 300000 } }
      ]
    }
  ];

  // Combine all regular and global programs
  institutes.forEach(institute => {
    regularPrograms.push(...institute.programs);
  });

  globalInstitutes.forEach(institute => {
    globalPrograms.push(...institute.programs);
  });

  const regularFeeData = transformProgramsToTableData(regularPrograms);
  const globalFeeData = transformProgramsToTableData(globalPrograms);

  const renderTable = (title, data) => (
    <div className="overflow-x-auto bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-2 text-left">Programme</th>
            <th className="px-4 py-2 text-left">Total Fees</th>
            <th className="px-4 py-2 text-left">Annual/Tuition Fees</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map(([course, total, tuition], i) => (
            <tr key={i}>
              <td className="px-4 py-2 text-gray-900">{course}</td>
              <td className="px-4 py-2 text-gray-700">{total}</td>
              <td className="px-4 py-2 text-gray-700">{tuition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Layout>
      <Helmet>
  <title>Fee Structure | Saroj International University</title>
  <meta name="description" content="Explore the detailed fee structure for all programs at Saroj International University, including tuition, hostel, and other applicable charges." />
</Helmet>

      <div className="min-h-screen flex items-center py-24 justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-6xl w-full">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
                SAROJ INTERNATIONAL UNIVERSITY, LUCKNOW
              </h2>
              <h3 className="text-2xl text-blue-600 mt-2">
                Fee Structure for Session 2025–2026
              </h3>
              <p className="text-gray-600 mt-2">
                Chandsarai, Sultanpur Road, Gosaiganj, Lucknow | Phone: 9513731275
              </p>
            </div>

            {renderTable("Regular Mode Programmes", regularFeeData)}
            {renderTable("Global Mode Programmes", globalFeeData)}

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Note:</h4>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>All fees are in Indian Rupees (₹)</li>
                <li>Fees are subject to change as per university policies</li>
                <li>Additional charges may apply for specific programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SIUFeeStructure;