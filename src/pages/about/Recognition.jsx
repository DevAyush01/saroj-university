import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Recognition = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Recognition",
          path: "/pdfs/UGC_Letter_Recognition.pdf",
        },
        
      ]}
    />
    </Layout>
  );
};


export default Recognition;