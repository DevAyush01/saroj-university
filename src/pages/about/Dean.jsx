import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Deans = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Deans",
          path: "/pdfs/deans.pdf",
        },
        
      ]}
    />
    </Layout>
  );
};


export default Deans;