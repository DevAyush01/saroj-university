import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const AnnualReport = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Annual Report 2024-25",
          path: "/pdfs/annual_report_2024-25.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default AnnualReport;