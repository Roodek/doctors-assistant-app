import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";

import BottomMenu from "../../components/patientCard/bottomMenu";

import DataPicker from "../../components/common/DataPicker";
import BasicDataHistory from "./patientHistory/BasicDataHistory";
import PhysicalExaminationHistory from "./patientHistory/PhysicalExaminationHistory";
import PsychiatricAssessmentHistory from "./patientHistory/PsychiatricAssessmentHistory";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";

const PatientHistory = ({ navigation, route }) => {
  const { patientId } = route.params;
  const { patientsBasicData } = useContext(BasicDataContext);
  const { patientsPhysicalExamination } = useContext(
    PhysicalExaminationContext
  );
  const { patientsPsychiatricAssessment } = useContext(
    PsychiatricAssessmentContext
  );
  const patientsBasicExaminations = patientsBasicData.filter(
    (record) => record.patient_id === patientId
  );

  const physicalExaminations = patientsPhysicalExamination.filter(
    (record) => record.patient_id === patientId
  );
  const psychiatricAssessments = patientsPsychiatricAssessment.filter(
    (record) => record.patient_id === patientId
  );
  const basicDataDates = patientsBasicData
    ? patientsBasicExaminations.map((record, i) => {
        return {
          key: i.toString(),
          value: record.examination_date,
          label: record.examination_date,
        };
      })
    : [
        {
          key: "100",
          value: "",
          label: "",
        },
      ];
  const physicalExaminationDates = physicalExaminations
    ? patientsPhysicalExamination.map((record, i) => {
        return {
          key: i.toString(),
          value: record.examination_date,
          label: record.examination_date,
        };
      })
    : [
        {
          key: "100",
          value: "",
          label: "",
        },
      ];
  const psychiatricAssessmentDates = psychiatricAssessments
    ? patientsPsychiatricAssessment.map((record, i) => {
        return {
          key: i.toString(),
          value: record.examination_date,
          label: record.examination_date,
        };
      })
    : [
        {
          key: "100",
          value: "",
          label: "",
        },
      ];

  const determineDates = (option) => {
    if (option === "2") {
      return basicDataDates;
    }
    if (option === "3") {
      return physicalExaminationDates;
    }
    if (option === "4") {
      return psychiatricAssessmentDates;
    }
    return [
      {
        key: "100",
        value: "",
        label: "",
      },
    ];
  };
  const examinationOptions = [
    { label: "", key: "", value: "1" },
    {
      label: "Wywiad - informacje podstawowe",
      key: "Wywiad - informacje podstawowe",
      value: "2",
    },
    {
      label: "Wywiad - Badanie fizykalne",
      key: "Wywiad - Badanie fizykalne",
      value: "3",
    },
    {
      label: "Badanie psychiatryczne",
      key: "Badanie psychiatryczne",
      value: "4",
    },
  ];

  const [selectedExamination, setSelectedExamination] = React.useState(
    examinationOptions[0]
  );
  const [selectedDate, setSelectedDate] = React.useState({});
  const [dates, setDates] = React.useState([]);
  const changePick = (picked) => {
    const option = examinationOptions[parseInt(picked, 10) - 1];
    setSelectedExamination(option);
    setDates(determineDates(picked));
    // setSelectedDate({
    //   key: "100",
    //   value: "",
    //   label: "",
    // });
  };
  const changeDate = (picked) => {
    const option = dates.find((obj) => {
      return obj.value === picked;
    });
    setSelectedDate(option);
  };
  const renderCorrespondingView = () => {
    if (selectedExamination.value === "1" || selectedDate.value === "") {
      return <></>;
    }
    if (selectedExamination.value === "2") {
      console.log("basic");
      return (
        <BasicDataHistory
          patientId={patientId}
          examinationDate={selectedDate}
        />
      );
    }
    if (selectedExamination.value === "3") {
      console.log("physical");
      return (
        <PhysicalExaminationHistory
          patientId={patientId}
          examinationDate={selectedDate}
        />
      );
    }
    if (selectedExamination.value === "4") {
      console.log("psychiatric");
      return (
        <PsychiatricAssessmentHistory
          patientId={patientId}
          examinationDate={selectedDate}
        />
      );
    }
    return <></>;
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
                    selected={selectedExamination}
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

            <View pointerEvents="none" style={styles.renderedContainer}>
              {renderCorrespondingView()}
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
});

PatientHistory.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PatientHistory;
