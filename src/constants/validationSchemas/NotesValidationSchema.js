import * as Yup from "yup";
import {
  DATE_REGEX,
  PATIENT_CODE_REGEX,
  PESEL_REGEX,
  PHONE_REGEX,
} from "../values/constants";

const NotesValidationSchema = Yup.object().shape({
  note: Yup.string().label("Notatka"),
});

export default NotesValidationSchema;
