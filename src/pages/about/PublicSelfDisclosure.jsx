import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const PublicSelfDisclosure = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Public Self Disclosure",
          path: "/pdfs/public_self_disclosure.pdf" ,
        },
        
      ]}
    />
    </Layout>
  );
};


export default PublicSelfDisclosure;