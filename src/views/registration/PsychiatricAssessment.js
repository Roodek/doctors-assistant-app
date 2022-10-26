import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";
import AppButton from "../../components/common/AppButton";
import psychiatricAssessmentValidationSchema from "../../constants/validationSchemas/psychiatricAssessmentValidationSchema";
import FormContainer from "../../components/forms/FormContainer";
import PsychiatricAssessmentForm from "../../components/forms/PsychiatricAssessmentForm";
import { Colors } from "../../constants/styles";

const PsychiatricAssessment = ({ route, navigation }) => {
  const { psychiatricAssessmentId, register } = route.params;
  const { psychiatricAssessments, updatePsychiatricAssessment } = useContext(
    PsychiatricAssessmentContext
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = psychiatricAssessments.find(
    (psychiatricAssessment) =>
      psychiatricAssessment.id === psychiatricAssessmentId
  );

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const psychiatricAssessment = values;
    const result = await updatePsychiatricAssessment(psychiatricAssessment);
    if (result && register) {
      navigation.navigate("PatientsList");
    } else {
      // eslint-disable-next-line react/prop-types
      navigation.goBack();
    }
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

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22 + 15,
    paddingBottom: 22,
  },
});
PsychiatricAssessment.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      psychiatricAssessmentId: PropTypes.number.isRequired,
      register: PropTypes.bool,
    }),
  }).isRequired,
};

export default PsychiatricAssessment;
