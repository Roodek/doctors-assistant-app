import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { BasicDataContext } from "../../../modules/context/BasicDataContext";
import { parseFormFieldValuesToObject } from "../../../modules/utils/Parsers";
import FormContainer from "../../../components/forms/FormContainer";
import basicDataValidationSchema from "../../../constants/validationSchemas/basicDataValidationSchema";
import BasicDataForm from "../../../components/forms/BasicDataForm";
import AppButton from "../../../components/common/AppButton";

const BasicDataHistory = ({ patientId, examinationDate }) => {
  const { patientsBasicData, updateBasicData } = useContext(BasicDataContext);
  const initialState = patientsBasicData.find(
    (basicData) =>
      basicData.patient_id === patientId &&
      basicData.examination_date === examinationDate
  );
  console.log(initialState.past_psychiatric_treatment);
  const keysWithParserFunctions = {
    hospitalization_times: (val) => parseInt(val, 10),
  };

  const onButtonPressed = async (values) => {
    const basicData = parseFormFieldValuesToObject(
      values,
      keysWithParserFunctions
    );
    // const result = await updateBasicData(basicData);
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer title="Wywiad">
      <Formik
        enableReinitialize
        initialValues={initialState}
        validationSchema={basicDataValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({ handleChange, values, handleSubmit, handleBlur }) => (
          <>
            <BasicDataForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            {/* <AppButton icon="next_btn" onPress={handleSubmit} disabled />*/}
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

BasicDataHistory.propTypes = {
  patientId: PropTypes.number.isRequired,
  examinationDate: PropTypes.string.isRequired,
};

export default BasicDataHistory;
