import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/contact/Contact";
import AboutSIU from "./pages/about/AboutSIU";
import AdmissionCriteria from "./pages/admission/AdmissionCriteria";
import ScholarshipPage from "./pages/admission/ScholarshipPage";
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import HistoryPage from "./pages/about/HistoryPage";
import VisionMissionPage from "./pages/about/VisionMissionPage";
import Acts from "./pages/about/Acts";
import ApprovalsDocuments from "./pages/about/ApprovalsDocuments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/about/about-siu" element={<AboutSIU />} />

      <Route path="/contact-us" element={<Contact />} />

      <Route path="admissions/admission-criteria" element={<AdmissionCriteria/>} /> 

      <Route path="admissions/scholarship" element={<ScholarshipPage />} /> 

      <Route path="admissions/admission-process" element={<AdmissionProcess />} />

      <Route path = "about/history" element ={ <HistoryPage/> } />

      <Route path = "about/vision-mission" element ={ <VisionMissionPage/> } />

      <Route path = "about/acts" element ={ <Acts />  } />

      <Route path = "about/approvals-documents" element ={ <ApprovalsDocuments/>  } />

    </Routes>
  );
}

export default App;
