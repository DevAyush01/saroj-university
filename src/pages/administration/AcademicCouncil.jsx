import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const AcademicCouncil = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Academic Council",
          path: "/pdfs/academic_council.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default AcademicCouncil;