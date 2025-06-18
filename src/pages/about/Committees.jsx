import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Committees = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Finance Commitee",
          path: "/pdfs/finance_commitee.pdf",
        },
        {
          name: "Internal Complaint Commitee",
          path: "/pdfs/InternalComplaint.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default Committees;