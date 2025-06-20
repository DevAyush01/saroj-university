import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Boards = () => {
  return (
    <Layout >
      <Helmet>
  <title>Boards | Saroj International University</title>
  <meta name="description" content="Explore the academic and administrative boards that govern Saroj International University, ensuring quality education and institutional integrity." />
</Helmet>

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