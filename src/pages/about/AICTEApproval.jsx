import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const AICTEApproval = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "AICTE Approval",
          path: "/pdfs/aicte_approval.pdf",
        },
        
      ]}
    />
    </Layout>
  );
};


export default AICTEApproval;