import { IFormData } from "./interfaces";
import { FieldValues } from "react-hook-form";
class FormSubmissionUtil {
    static submitForm(data:FieldValues) {
      return console.log("Form Submitted",data)
    }
  }
  
  export default FormSubmissionUtil;