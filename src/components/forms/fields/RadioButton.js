import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const RadioButton = ({ name, options, defaultOptionIndex }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [optionChecked, setOptionChecked] = useState(defaultOptionIndex);
  return (
    <>
      <View style={styles.container}>
        {options.map((option, key) => {
          return (
            <View key={option} style={styles.choice}>
              {optionChecked === key ? (
                <TouchableOpacity>
                  <FontForgeIcon
                    name="checked"
                    size={38}
                    color={Colors.PINK_MEDIUM}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setOptionChecked(key);
                    setFieldValue(name, option);
                  }}
                >
                  <FontForgeIcon
                    name="unchecked"
                    size={38}
                    color={Colors.PINK_MEDIUM}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
              <Text style={styles.text}>{option}</Text>
            </View>
          );
        })}
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 12,
    marginLeft: 60,
  },
  choice: {
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    alignSelf: "center",
    marginRight: 30,
  },
});
RadioButton.defaultProps = {
  defaultOptionIndex: null,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOptionIndex: PropTypes.number,
};

export default RadioButton;
