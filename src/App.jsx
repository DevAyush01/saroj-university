import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/contact/Contact";
import AboutSIU from "./pages/about/AboutSIU";
import ScholarshipPage from "./pages/admission/ScholarshipPage";
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import HistoryPage from "./pages/about/HistoryPage";
import VisionMissionPage from "./pages/about/VisionMissionPage";
import Acts from "./pages/about/Acts";
import ApprovalsDocuments from "./pages/about/ApprovalsDocuments";
import ChancellorPage from "./pages/administration/Chancellor";
import ViceChancellorPage from "./pages/administration/ViceChancellor";
import ProgramsPage from "./pages/programs/ProgramsPage";
import ErrorPage from "./pages/notFoundPage";
import Courses from "./pages/about/Courses";
import AdmissionCriteria from "./pages/Admission/AdmissionCriteria";
import SIUFeeStructure from "./pages/Admission/FeeStructure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/programs" element={<ProgramsPage />} />
      
      {/* About  */}

      <Route path="/about/about-siu" element={<AboutSIU />} />
      <Route path = "about/history" element ={ <HistoryPage/> } />
      <Route path = "about/vision-mission" element ={ <VisionMissionPage/> } />
      <Route path = "about/acts" element ={ <Acts />  } />
      <Route path = "about/approvals-documents" element ={ <ApprovalsDocuments/>  } />
      <Route path = "about/courses" element ={ <Courses/> } />
      


      <Route
        path="admissions/admission-criteria"
        element={<AdmissionCriteria />}
      />

      <Route path="admissions/scholarship" element={<ScholarshipPage />} />

      <Route
        path="admissions/admission-process"
        element={<AdmissionProcess />}
      />

      <Route path="about/history" element={<HistoryPage />} />

      <Route path="about/vision-mission" element={<VisionMissionPage />} />

      <Route path="about/acts" element={<Acts />} />

      <Route
        path="about/approvals-documents"
        element={<ApprovalsDocuments />}
      />

      <Route path="/administration/chancellor" element={<ChancellorPage />} />

      <Route
        path="/administration/vice-chancellor"
        element={<ViceChancellorPage />}
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
