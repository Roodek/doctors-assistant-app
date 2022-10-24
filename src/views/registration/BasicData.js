import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import AppButton from "../../components/common/AppButton";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import basicDataValidationSchema from "../../constants/validationSchemas/basicDataValidationSchema";
import BasicDataForm from "../../components/forms/BasicDataForm";
import FormContainer from "../../components/forms/FormContainer";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";
import { Colors } from "../../constants/styles";

const BasicData = ({ route, navigation }) => {
  const {
    basicDataId,
    physicalExaminationId,
    psychiatricAssessmentId,
    register,
  } = route.params;
  const { patientsBasicData, updateBasicData } = useContext(BasicDataContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = patientsBasicData.find(
    (basicData) => basicData.id === basicDataId
  );

  const keysWithParserFunctions = {
    hospitalization_times: (val) => parseInt(val, 10),
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const basicData = parseFormFieldValuesToObject(
      values,
      keysWithParserFunctions
    );
    const result = await updateBasicData(basicData);

    if (result && register) {
      navigation.navigate("PhysicalExamination", {
        physicalExaminationId,
        psychiatricAssessmentId,
        register,
      });
    }
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer title="Wywiad" style={styles.formContainer}>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={basicDataValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <BasicDataForm
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

BasicData.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      basicDataId: PropTypes.number.isRequired,
      physicalExaminationId: PropTypes.number.isRequired,
      psychiatricAssessmentId: PropTypes.number.isRequired,
      register: PropTypes.bool,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    padding: 22,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22,
    paddingBottom: 22,
  },
});
export default BasicData;
