import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const AcademicCalendar = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Academic Calendar",
          path: "/pdfs/academic_calendar.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default AcademicCalendar;