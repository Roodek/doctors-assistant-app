import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../constants/styles";
import ButtonWithLabel from "./ButtonWithLabel";

const BottomMenu = ({
  navigation,
  patientId,
  patientBasicDataId,
  activeScreen,
}) => {
  const onButtonPressedNewExamination = () => {
    // navigation.navigate("AddExamination", { patientId, patientBasicDataId });
    console.log(activeScreen);
  };
  const onButtonPressedHistory = () => {
    console.log(patientId);
    console.log(patientBasicDataId);
    console.log("++++");
    navigation.navigate("PatientHistory", {
      patientId,
    });
  };
  const onButtonPressedResults = () => {
    navigation.navigate("PatientResults", { patientId, patientBasicDataId });
  };
  return (
    <View style={styles.iconContainer}>
      <ButtonWithLabel
        label="Historia"
        onPress={onButtonPressedHistory}
        icon="history"
        size={44}
        disabled={activeScreen === "History"}
      />
      <ButtonWithLabel
        label="Nowe badanie"
        onPress={onButtonPressedNewExamination}
        icon="new_examination"
        size={44}
        color={Colors.GREEN}
      />
      <ButtonWithLabel
        label="Wyniki"
        onPress={onButtonPressedResults}
        icon="results"
        size={44}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

BottomMenu.defaultProps = {
  patientId: 0,
  patientBasicDataId: 0,
  activeScreen: "",
};

BottomMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  patientId: PropTypes.number,
  patientBasicDataId: PropTypes.number,
  activeScreen: PropTypes.string,
};

export default BottomMenu;
