import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Statutes = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Statutes Of University",
          path: "/pdfs/statutesofuniversity.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default Statutes;