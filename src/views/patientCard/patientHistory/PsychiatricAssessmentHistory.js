import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PsychiatricAssessmentContext } from "../../../modules/context/PsychiatricAssessmentContext";
import AppButton from "../../../components/common/AppButton";
import psychiatricAssessmentValidationSchema from "../../../constants/validationSchemas/psychiatricAssessmentValidationSchema";
import FormContainer from "../../../components/forms/FormContainer";
import PsychiatricAssessmentForm from "../../../components/forms/PsychiatricAssessmentForm";
import { Colors } from "../../../constants/styles";

const PsychiatricAssessmentHistory = ({ patientId, examinationDate }) => {
  const { psychiatricAssessments, updatePsychiatricAssessment } = useContext(
    PsychiatricAssessmentContext
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = psychiatricAssessments.find(
    (psychiatricAssessment) =>
      psychiatricAssessment.patient_id === patientId &&
      psychiatricAssessment.examination_date === examinationDate
  );

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const psychiatricAssessment = values;
    const result = await updatePsychiatricAssessment(psychiatricAssessment);
    // TODO: Show alert with info what is wrong
  };
  return (
    <FormContainer style={styles.formContainer}>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={psychiatricAssessmentValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <PsychiatricAssessmentForm
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />
            {/* <AppButton */}
            {/*  icon="next_btn" */}
            {/*  onPress={handleSubmit} */}
            {/*  disabled={!isValid || isSubmitting || isNextButtonDisabled} */}
            {/* /> */}
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    paddingTop: 10,
    paddingBottom: 22,
  },
});
PsychiatricAssessmentHistory.propTypes = {
  patientId: PropTypes.number.isRequired,
  examinationDate: PropTypes.string.isRequired,
};

export default PsychiatricAssessmentHistory;
