import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const FinanceCommitee = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Finance Commitee",
          path: "/pdfs/finance-commitee.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default FinanceCommitee;