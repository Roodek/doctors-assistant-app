import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../constants/styles";
import ButtonWithLabel from "./ButtonWithLabel";
import { initialPhysicalExamination } from "../../constants/values/initalFormValues";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import { getDateString } from "../../modules/utils/Date";

const BottomMenu = ({
  navigation,
  patientId,
  patientBasicDataId,
  activeScreen,
}) => {
  const { setBasicData } = useContext(BasicDataContext);
  const { setPsychiatricAssessment } = useContext(PsychiatricAssessmentContext);
  const { setPhysicalExamination } = useContext(PhysicalExaminationContext);
  const [modalVisible, setModalVisible] = useState(false);
  const onButtonPressedNewExamination = () => {
    // navigation.navigate("AddExamination", { patientId, patientBasicDataId });
    setModalVisible(true);
  };
  const onButtonPressedHistory = () => {
    navigation.navigate("PatientHistory", {
      patientId,
    });
  };
  const onButtonPressedResults = () => {
    navigation.navigate("PatientResults", { patientId, patientBasicDataId });
  };
  const addNewPsychiatricAssessment = () => {
    setModalVisible(false);
    console.log("PsychiatricAssessment");
  };
  const addNewBasicData = () => {
    setModalVisible(false);
    console.log("BasicData");
  };
  const addNewPhysicalExamination = async () => {
    setModalVisible(false);
    const physicalExamination = initialPhysicalExamination;
    physicalExamination.patient_id = patientId;
    physicalExamination.id = await setPhysicalExamination(physicalExamination);
    physicalExamination.examination_date = getDateString();
    navigation.navigate("PhysicalExamination", {
      physicalExaminationId: physicalExamination.id,
      psychiatricAssessmentId: -100,
      register: false,
    });
    console.log("PhysicalExamination");
  };
  return (
    <View style={styles.iconContainer}>
      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>Wybierz nowe badanie</Text>
              <Pressable style={[styles.button]} onPress={addNewBasicData}>
                <Text style={styles.textStyle}>Dane podstawowe</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={addNewPhysicalExamination}
              >
                <Text style={styles.textStyle}>Badanie fizykalne</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={addNewPsychiatricAssessment}
              >
                <Text style={styles.textStyle}>Badanie psychiatryczne</Text>
              </Pressable>
            </View>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Zamknij</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.PURPLE_MEDIUM,
  },
  buttonClose: {
    borderRadius: 100,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    textAlign: "left",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
