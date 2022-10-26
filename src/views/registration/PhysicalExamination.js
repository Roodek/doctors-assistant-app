import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import AppButton from "../../components/common/AppButton";
import physicalExaminationValidationSchema from "../../constants/validationSchemas/physicalExaminationValidationSchema";
import PhysicalExaminationForm from "../../components/forms/PhysicalExaminationForm";
import FormContainer from "../../components/forms/FormContainer";

const PhysicalExamination = ({ route, navigation }) => {
  const {
    physicalExaminationId,
    psychiatricAssessmentId,
    register,
  } = route.params;
  const { physicalExaminations, updatePhysicalExamination } = useContext(
    PhysicalExaminationContext
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = physicalExaminations.find(
    (physicalExamination) => physicalExamination.id === physicalExaminationId
  );

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const physicalExamination = values;
    const result = await updatePhysicalExamination(physicalExamination);
    if (result && register) {
      navigation.navigate("PsychiatricAssessment", {
        psychiatricAssessmentId,
        register,
      });
    } else {
      // eslint-disable-next-line react/prop-types
      navigation.goBack();
    }
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
          values,
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

PhysicalExamination.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      physicalExaminationId: PropTypes.number.isRequired,
      psychiatricAssessmentId: PropTypes.number.isRequired,
      register: PropTypes.bool,
    }),
  }).isRequired,
};

export default PhysicalExamination;
