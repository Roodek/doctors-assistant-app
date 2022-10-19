import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "native-base";
import { Colors, Typography } from "../../constants/styles";

const DataPicker = ({ selected, options, onSelect }) => {
  return (
    <View style={[styles.container]}>
      <Picker
        selectedValue={selected.value}
        onValueChange={onSelect}
        style={styles.dataPicker}
        placeholder="Wybierz"
        mode="dropdown"
      >
        {options.map((option) => {
          return (
            <Picker.Item
              label={option.label}
              value={option.value}
              key={option.key}
            />
          );
        })}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    padding: 6,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: Typography.BORDER_RADIUS,
    ...Typography.BOX_SHADOW,
    flex: 1,
  },
  dataPicker: {
    flex: 1,
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    borderRadius: Typography.BORDER_RADIUS,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
  },
});

DataPicker.defaultProps = {
  selected: "",
  options: [],
  onSelect: () => {},
};

DataPicker.propTypes = {
  selected: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};

export default DataPicker;
