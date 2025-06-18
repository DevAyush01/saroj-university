import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const InternalComplaint = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "Internal Complaint",
          path: "/pdfs/InternalComplaint.pdf",
        },
      ]}
    />
    </Layout>
  );
};


export default InternalComplaint;