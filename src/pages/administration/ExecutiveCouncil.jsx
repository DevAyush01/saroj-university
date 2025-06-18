import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const ExecutiveCouncil = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Executive Council",
          path: "/pdfs/EC.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default ExecutiveCouncil;