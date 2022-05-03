import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import * as DateTimePickerAndroid from "react-native";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";

const DateInputForm = ({ name }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Text>{(text) => setFieldValue(name, text)}</Text>
        </View>
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
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
    width: "60%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
});
DateInputForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DateInputForm;
