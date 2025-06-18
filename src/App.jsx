import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/contact/Contact";
import AboutSIU from "./pages/about/AboutSIU";
import ScholarshipPage from "./pages/admission/ScholarshipPage";
import AdmissionCriteria from "./pages/Admission/AdmissionCriteria"
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import HistoryPage from "./pages/about/HistoryPage";
import VisionMissionPage from "./pages/about/VisionMissionPage";
import Acts from "./pages/about/Acts";
import ApprovalsDocuments from "./pages/about/ApprovalsDocuments";
import ChancellorPage from "./pages/administration/Chancellor";
import ViceChancellorPage from "./pages/administration/ViceChancellor";
import ErrorPage from "./pages/notFoundPage";
import Courses from "./pages/programs/Courses";
import SIUFeeStructure from "./pages/Admission/FeeStructure";
import AiAndTechPage from "./pages/programs/AiAndTechPage";
import HealthSciencesPage from "./pages/programs/HealthSciencePage";
import HumanitiesPage from "./pages/programs/HumanitiesPage";
import EntrepreneurshipAndBusiness from "./pages/programs/EntrepreneurshipAndBusiness";
import FilmsAndFashion from "./pages/programs/FilmsAndFashion";
import ManagementAndTechPage from "./pages/programs/ManagementAndTechPage";
import PharmacyPage from "./pages/programs/PharmacyPage";
import SportsScience from "./pages/programs/SportsScience";
import BtechAIMLPage from "./pages/programs/AiAndTech/BTechAiPage";
import BtechDataSciencePage from "./pages/programs/AiAndTech/BtechDataScience";
import BAPage from "./pages/programs/Humanities/BA";
import BSPage from "./pages/programs/Humanities/BS";
import BPharmaPage from "./pages/programs/Pharma/Bpharma";
import DPharmaPage from "./pages/programs/Pharma/Dpharma";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      
      {/* About  */}
      <Route path="/about/about-siu" element={<AboutSIU />} />
      <Route path = "about/history" element ={ <HistoryPage/> } />
      <Route path = "about/vision-mission" element ={ <VisionMissionPage/> } />
      <Route path = "about/acts" element ={ <Acts />  } />
      <Route path = "about/approvals-documents" element ={ <ApprovalsDocuments/>  } />
      
      
      {/* Programs */}
      <Route path = "programs" element ={ <Courses/> } /> 
      <Route path= "/programs/artificial-intelligence-technology" element ={ <AiAndTechPage/>} />
      <Route path= "/programs/humanities-education" element ={ <HumanitiesPage />} />
      <Route path= "/programs/entrepreneurship-and-business" element ={ <EntrepreneurshipAndBusiness/>} />
      <Route path= "/programs/film-fashion" element ={ <FilmsAndFashion/>} />
      <Route path= "/programs/management-and-tech" element ={ <ManagementAndTechPage/>} />
      <Route path= "/programs/pharmacy" element ={ <PharmacyPage/>} />
      <Route path= "/programs/sports-science" element ={ <SportsScience/>} />
      <Route path= "/programs/health-sciences" element ={ <HealthSciencesPage/>} />

      {/* Programs Submnu Pages */}
      <Route path = "programs/btech-ai-ml" element ={ <BtechAIMLPage/> } /> 
      <Route path = "programs/btech-data-science" element ={ <BtechDataSciencePage/> } /> 

      {/* Humanities Submenu pages */}
      <Route path = "programs/ba" element ={ <BAPage/> } /> 
      <Route path = "programs/bs-international-relations" element ={ <BSPage/> } /> 

      {/* Pharma Submenu */}
       <Route path = "programs/bpharm" element ={ <BPharmaPage/> } /> 
       <Route path = "programs/dpharm" element ={ <DPharmaPage/> } />

      <Route path="admissions/admission-criteria"  element={<AdmissionCriteria />}   />
      <Route path="admissions/scholarship" element={<ScholarshipPage />} />
      <Route  path="admissions/admission-process"  element={<AdmissionProcess />}  />

      <Route path="about/history" element={<HistoryPage />} />

      <Route path="about/vision-mission" element={<VisionMissionPage />} />

      <Route path="about/acts" element={<Acts />} />

      <Route  path="about/approvals-documents"  element={<ApprovalsDocuments />}
      />

      <Route path="/administration/chancellor" element={<ChancellorPage />} />
      <Route path="/administration/vice-chancellor"  element={<ViceChancellorPage />}
      />

    {/* Admissions  */}
      <Route path="admissions/admission-criteria" element={ <AdmissionCriteria /> } /> 
      <Route path="admissions/scholarship" element={<ScholarshipPage />} /> 
      <Route path="admissions/admission-process" element={<AdmissionProcess />} />
      <Route path="admissions/fee-structure" element={<SIUFeeStructure />} />


      

    {/* Administration  */}
      <Route path = "/administration/chancellor" element ={ <ChancellorPage/>  } />
      <Route path = "/administration/vice-chancellor" element ={ <ViceChancellorPage />  } />
      <Route path = "*" element ={ <ErrorPage /> } />

  {/* Contact Us  */}
      <Route path="/contact-us" element={<Contact />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
