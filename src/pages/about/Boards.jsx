import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Boards = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Board of Governance",
          path: "/pdfs/board_of_governance.pdf",
        },
        {
          name: "Board of Studies",
          path: "/pdfs/board_of_studies.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default Boards;