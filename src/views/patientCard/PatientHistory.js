import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";

import BottomMenu from "../../components/patientCard/bottomMenu";

import { PatientsContext } from "../../modules/context/PatientsContext";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import DataPicker from "../../components/common/DataPicker";
import BasicData from "../registration/BasicData";
import PhysicalExamination from "../registration/PhysicalExamination";
import PsychiatricAssessment from "../registration/PsychiatricAssessment";

const PatientHistory = ({ navigation, route }) => {
  const examinationOptions = [
    { key: "Wywiad - informacje podstawowe", value: "1" },
    { key: "Wywiad - Badanie fizykalne", value: "2" },
    { key: "Badanie psychiatryczne", value: "3" },
  ];
  const { patientId, patientBasicDataId } = route.params;
  const dates = [{ key: "21-08-2022", value: "1", content: { obj: 1 } }];
  const [selected, setSelected] = React.useState(examinationOptions[0]);
  const [selectedDate, setSelectedDate] = React.useState(dates[0]);
  console.log(patientId);
  console.log(patientBasicDataId);
  const changePick = (picked) => {
    const option = examinationOptions[parseInt(picked, 10) - 1];
    setSelected(option);
  };
  const changeDate = (picked) => {
    const option = dates[parseInt(picked, 10) - 1];
    setSelectedDate(option);
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
              <View style={{ flexDirection: "row" }}>
                <View style={styles.sicknessHistory}>
                  <Text style={styles.name}>Historia choroby</Text>
                  <DataPicker
                    selected={selected}
                    options={examinationOptions}
                    onSelect={changePick}
                  />
                </View>
                <View style={styles.sicknessHistory}>
                  <Text style={styles.name}>Data</Text>
                  <DataPicker
                    selected={selectedDate}
                    options={dates}
                    onSelect={changeDate}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 0.2 }}>
        <BottomMenu
          navigation={navigation}
          style={styles.bottomMenu}
          activeScreen="History"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 0.8,
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
});

PatientHistory.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
      patientBasicDataId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PatientHistory;
