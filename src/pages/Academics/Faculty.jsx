import Layout from "../../components/Layout";
import PdfViewer from "../../components/PdfPageView";

const Faculty = () => {
  return (
    <Layout >
    <PdfViewer
      pdfFiles={[
        {
          name: "MBA Faculty",
          path: "/pdfs/MBA.pdf",
        },
        {
          name: "MCA Faculty",
          path: "/pdfs/MCA.pdf",
        },
         {
          name: "Pharmacy",
          path: "/pdfs/Pharmacy.pdf",
        },
          {
          name: "Basic Science",
          path: "/pdfs/basic_science.pdf",
        },

      ]}
    />
    </Layout>
  );
};


export default Faculty;