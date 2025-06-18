import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const PharmacyCouncil = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Pharmacy Council",
          path: "/pdfs/lip_pharmacy_council.pdf",
        },
        
      ]}
    />
    </Layout>
  );
};


export default PharmacyCouncil;