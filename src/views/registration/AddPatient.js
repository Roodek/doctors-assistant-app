import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import personalDataValidationSchema from "../../constants/validationSchemas/personalDataValidationSchema";
import { PatientsContext } from "../../modules/context/PatientsContext";
import AddPatientForm from "../../components/forms/AddPatientForm";
import AppButton from "../../components/common/AppButton";
import FormContainer from "../../components/forms/FormContainer";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";
import {
  initialBasicData,
  initialPatient,
  initialPhysicalExamination,
  initialPsychiatricAssessment,
} from "../../constants/values/initalFormValues";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import { Colors } from "../../constants/styles";
import { getDateString } from "../../modules/utils/Date";

const AddPatient = ({ navigation }) => {
  const { addPatient } = useContext(PatientsContext);
  const { setBasicData } = useContext(BasicDataContext);
  const { setPsychiatricAssessment } = useContext(PsychiatricAssessmentContext);
  const { setPhysicalExamination } = useContext(PhysicalExaminationContext);

  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = initialPatient;

  const keysWithParserFunctions = {
    weight: (val) => parseInt(val, 10),
    height: (val) => parseInt(val, 10),
    bmi: (val) => parseFloat(Math.round(val * 100) / 100),
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const patient = parseFormFieldValuesToObject(
      values,
      keysWithParserFunctions
    );

    patient.id = await addPatient(patient);
    if (patient.id) {
      // await AsyncStorage.setItem("patientId", patient.id.toString());
      const basicData = initialBasicData;
      basicData.patient_id = patient.id;
      basicData.examination_date = getDateString();
      basicData.id = await setBasicData(basicData);

      const physicalExamination = initialPhysicalExamination;
      physicalExamination.patient_id = patient.id;
      physicalExamination.examination_date = getDateString();
      physicalExamination.id = await setPhysicalExamination(
        physicalExamination
      );

      const psychiatricAssessment = initialPsychiatricAssessment;
      psychiatricAssessment.patient_id = patient.id;
      psychiatricAssessment.examination_date = getDateString();
      psychiatricAssessment.id = await setPsychiatricAssessment(
        psychiatricAssessment
      );

      if (basicData.id && physicalExamination.id && psychiatricAssessment.id) {
        navigation.navigate("BasicData", {
          basicDataId: basicData.id,
          physicalExaminationId: physicalExamination.id,
          psychiatricAssessmentId: psychiatricAssessment.id,
          register: true,
        });
      }
    }
  };

  return (
    <FormContainer title="Nowy Pacjent" style={styles.formContainer}>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={personalDataValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          isValid = true,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <AddPatientForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            <AppButton
              icon="next_btn"
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting || isNextButtonDisabled}
            />
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

AddPatient.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22,
    paddingBottom: 22,
  },
});
export default AddPatient;
