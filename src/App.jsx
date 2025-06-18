import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/notFoundPage";
import Contact from "./pages/contact/Contact";

// About Pages
import AboutSIU from "./pages/about/AboutSIU";
import HistoryPage from "./pages/about/HistoryPage";
import VisionMissionPage from "./pages/about/VisionMissionPage";
import Acts from "./pages/about/Acts";
import ApprovalsDocuments from "./pages/about/ApprovalsDocuments";
import Courses from "./pages/programs/Courses";

// Admission Pages
import AdmissionCriteria from "./pages/Admission/AdmissionCriteria";
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import ScholarshipPage from "./pages/admission/ScholarshipPage";
import SIUFeeStructure from "./pages/Admission/FeeStructure";

// Program Categories
import AiAndTechPage from "./pages/programs/AiAndTechPage";
import HealthSciencesPage from "./pages/programs/HealthSciencePage";
import HumanitiesPage from "./pages/programs/HumanitiesPage";
import EntrepreneurshipAndBusiness from "./pages/programs/EntrepreneurshipAndBusiness";
import FilmsAndFashion from "./pages/programs/FilmsAndFashion";
import ManagementAndTechPage from "./pages/programs/ManagementAndTechPage";
import PharmacyPage from "./pages/programs/PharmacyPage";
import SportsScience from "./pages/programs/SportsScience";

// Program Subpages
import BtechAIMLPage from "./pages/programs/AiAndTech/BTechAiPage";
import BtechDataSciencePage from "./pages/programs/AiAndTech/BtechDataScience";
import BAPage from "./pages/programs/Humanities/BA";
import BSPage from "./pages/programs/Humanities/BS";
import BPharmaPage from "./pages/programs/Pharma/Bpharma";
import DPharmaPage from "./pages/programs/Pharma/Dpharma";

// Administration Pages
import ChancellorPage from "./pages/administration/Chancellor";
import ViceChancellorPage from "./pages/administration/ViceChancellor";
import AcademicCouncil from "./pages/administration/AcademicCouncil";
import ExecutiveCouncil from "./pages/administration/ExecutiveCouncil";
import InternalComplaint from "./pages/administration/InternalComplaint";

// Academics
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import Statutes from "./pages/Academics/Statutes";
import AnnualReport from "./pages/Academics/AnnualReport";

// Legal
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsConditions";

// Components
import CoursePage from "./components/ShowPrograms";
import BoardOfGovernance from "./pages/about/Boards";
import Boards from "./pages/about/Boards";
import Deans from "./pages/about/dean";
import FinanceCommitee from "./pages/administration/FinanceCommitee";
import PublicSelfDisclosure from "./pages/about/PublicSelfDisclosure";
import Recognition from "./pages/about/Recognition";
import Faculty from "./pages/Academics/Faculty";
import PharmacyCouncil from "./pages/about/PharmacyCouncilofIndia";

function App() {
  return (
    <Routes>
      {/* Fallback */}
      <Route path="*" element={<ErrorPage />} />

      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Programs Overview */}
      <Route path="/programs" element={<CoursePage />} />
      <Route path="/about/all-courses" element={<Courses />} />

      {/* About */}
      <Route path="/about/about-siu" element={<AboutSIU />} />
      <Route path="/about/history" element={<HistoryPage />} />
      <Route path="/about/vision-mission" element={<VisionMissionPage />} />
      <Route path="/about/acts" element={<Acts />} />
      <Route path="/about/approvals-documents" element={<ApprovalsDocuments />} />
      <Route path="/about/annual-reports" element={<AnnualReport />} />
      <Route path="/about/boards" element={<Boards /> } />
      <Route path="/about/deans" element={<Deans /> } />
      <Route path="/about/public-self-disclosure" element={<PublicSelfDisclosure/> } />
      <Route path="/about/recognition" element={<Recognition /> } />
      <Route path="/about/lip_pharmacy_council" element={<PharmacyCouncil /> } />

      {/* Academics */}
      <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
      <Route path="/academics/statutes" element={<Statutes />} />
      <Route path="/academics/faculty" element={<Faculty /> } />

      {/* Admissions */}
      <Route path="/admissions/admission-criteria" element={<AdmissionCriteria />} />
      <Route path="/admissions/scholarship" element={<ScholarshipPage />} />
      <Route path="/admissions/admission-process" element={<AdmissionProcess />} />
      <Route path="/admissions/fee-structure" element={<SIUFeeStructure />} />

      {/* Program Categories */}
      <Route path="/programs/artificial-intelligence-technology" element={<AiAndTechPage />} />
      <Route path="/programs/health-sciences" element={<HealthSciencesPage />} />
      <Route path="/programs/humanities-education" element={<HumanitiesPage />} />
      <Route path="/programs/entrepreneurship-and-business" element={<EntrepreneurshipAndBusiness />} />
      <Route path="/programs/film-fashion" element={<FilmsAndFashion />} />
      <Route path="/programs/management-and-tech" element={<ManagementAndTechPage />} />
      <Route path="/programs/pharmacy" element={<PharmacyPage />} />
      <Route path="/programs/sports-science" element={<SportsScience />} />

      {/* Program Subpages */}
      <Route path="/programs/btech-ai-ml" element={<BtechAIMLPage />} />
      <Route path="/programs/btech-data-science" element={<BtechDataSciencePage />} />
      <Route path="/programs/ba" element={<BAPage />} />
      <Route path="/programs/bs-international-relations" element={<BSPage />} />
      <Route path="/programs/bpharm" element={<BPharmaPage />} />
      <Route path="/programs/dpharm" element={<DPharmaPage />} />

      {/* Administration */}
      <Route path="/administration/chancellor" element={<ChancellorPage />} />
      <Route path="/administration/vice-chancellor" element={<ViceChancellorPage />} />
      <Route path="/administration/academic-council" element={<AcademicCouncil />} />
      <Route path="/administration/executive-council" element={<ExecutiveCouncil />} />
      <Route path="/administration/internal-complaint" element={<InternalComplaint />} />
      <Route path="/administration/finance-commitee" element={<FinanceCommitee />} />

      {/* Contact & Legal */}
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
