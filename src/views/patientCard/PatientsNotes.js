import React, { useContext } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Colors, Typography } from "../../constants/styles";
import { PatientsContext } from "../../modules/context/PatientsContext";
import AppButton from "../../components/common/AppButton";
import FormField from "../../components/forms/fields/FormField";
import NotesValidationSchema from "../../constants/validationSchemas/NotesValidationSchema";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";

const PatientsNotes = ({ navigation, route }) => {
  const { patientId } = route.params;
  const { getRawPatientData, updatePatient } = useContext(PatientsContext);
  const initialState = getRawPatientData(patientId);
  console.log(initialState);

  const keysWithParserFunctions = {
    weight: (val) => parseInt(val, 10),
    height: (val) => parseInt(val, 10),
    bmi: (val) => parseFloat(Math.round(val * 100) / 100),
  };
  const onButtonPressed = async (values) => {
    const result = await updatePatient(values);
    if (result) {
      // eslint-disable-next-line react/prop-types
      navigation.goBack();
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.backgroundContainer}>
            <View style={[styles.container]}>
              <Formik
                initialValues={initialState}
                enableReinitialize
                validationSchema={NotesValidationSchema}
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
                    <FormField
                      name="note"
                      onChangeText={handleChange("note")}
                      placeholder="Miejsce na notatkę"
                      onBlur={handleBlur("note")}
                      keyboardType="default"
                      multiline
                      value={values.note}
                    />
                    <AppButton icon="next_btn" onPress={handleSubmit} />
                  </>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 26,
  },
  renderedContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    backgroundColor: Colors.GRAY_VERY_LIGHT,
  },
  disabledView: {
    color: Colors.GRAY_DARK,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  name: {
    flex: 11,
    marginLeft: 15,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    alignSelf: "flex-start",
  },
  patientNumber: {
    flex: 8,
    marginLeft: 5,
    color: Colors.PINK,
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  fieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginLeft: 50,
    marginVertical: 2,
  },
  listItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 70,
    marginRight: 15,
  },
  noteListItemFieldText: {
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    width: "75%",
  },
  diagnosisCode: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  sicknessHistory: {
    width: "50%",
  },
  bottomMenu: {
    flex: 1,
    bottom: 0,
    position: "absolute",
  },
  input: {
    width: "60%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
});

PatientsNotes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PatientsNotes;
