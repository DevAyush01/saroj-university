import PdfPage from "../../components/PdfPage"
import JSONFile from '../../assets/json/actPdf.json'; // json file

const Acts = () =>{


  return(
    <PdfPage JSONFile={JSONFile} />
  )

}

export default Acts