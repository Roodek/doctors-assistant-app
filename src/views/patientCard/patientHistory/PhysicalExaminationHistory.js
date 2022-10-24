import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
// import AppButton from "../../components/common/AppButton";
import PhysicalExaminationForm from "../../../components/forms/PhysicalExaminationForm";
import FormContainer from "../../../components/forms/FormContainer";
import { PhysicalExaminationContext } from "../../../modules/context/PhysicalExaminationContext";
import physicalExaminationValidationSchema from "../../../constants/validationSchemas/physicalExaminationValidationSchema";

const PhysicalExaminationHistory = ({ patientId, examinationDate }) => {
  const { patientsPhysicalExamination, updatePhysicalExamination } = useContext(
    PhysicalExaminationContext
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = patientsPhysicalExamination.find(
    (physicalExamination) =>
      physicalExamination.patient_id === patientId &&
      physicalExamination.examination_date === examinationDate
  );

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const physicalExamination = values;
    const result = await updatePhysicalExamination(physicalExamination);
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={physicalExaminationValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <PhysicalExaminationForm
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            {/*<AppButton*/}
            {/*  icon="next_btn"*/}
            {/*  onPress={handleSubmit}*/}
            {/*  disabled={!isValid || isSubmitting || isNextButtonDisabled}*/}
            {/*/>*/}
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

PhysicalExaminationHistory.propTypes = {
  patientId: PropTypes.number.isRequired,
  examination_date: PropTypes.string.isRequired,
};

export default PhysicalExaminationHistory;
