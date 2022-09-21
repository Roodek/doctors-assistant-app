import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors, Typography } from "../../../constants/styles";
import FormError from "./FormError";

const DateInputForm = ({ name, calculateDependentValue }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    console.warn("field set: ", name);
    setDate(selectedDate);
    setFieldValue(name, formatDate(selectedDate));
    hideDatePicker();
  };
  const formatDate = (dateTime) => {
    return `${dateTime.getDate()}-${
      dateTime.getMonth() + 1
    }-${dateTime.getFullYear()}`;
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.inputBox]}
          onBlur={() => setFieldTouched(name)}
          onPress={showDatePicker}
        >
          <TextInput
            style={[styles.input]}
            placeholderTextColor={Colors.PURPLE_LIGHT}
            placeholder="Data urodzenia"
            editable={false}
            calculateDependentValue={calculateDependentValue}
            value={date && formatDate(date)}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};
DateInputForm.defaultProps = {
  calculateDependentValue: null,
};
DateInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  calculateDependentValue: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flexDirection: "row",
    padding: 7,
    alignSelf: "center",
    right: 20,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    width: "100%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
  inputBox: {
    width: "60%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    marginLeft: 52,
  },
});

DateInputForm.propTypes = {
  name: PropTypes.string.isRequired,
};
export default DateInputForm;
