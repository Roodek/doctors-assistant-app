import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsList from "../../views/PatientsList";
import PatientCard from "../../views/patientCard/PatientCard";
import HeaderOptions from "./HeaderOptions";
import RegistrationNavigator from "./registrationNavigator/RegistrationNavigator";
import DiagnosisNavigator from "./diagnosisNavigator/DiagnosisNavigator";
import PatientHistory from "../../views/patientCard/PatientHistory";
import BasicData from "../../views/registration/BasicData";
import PhysicalExamination from "../../views/registration/PhysicalExamination";
import PsychiatricAssessment from "../../views/registration/PsychiatricAssessment";
import PatientsNotes from "../../views/patientCard/PatientsNotes";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PatientsList"
        screenOptions={{ ...HeaderOptions }}
      >
        <Stack.Screen
          name="PatientsList"
          component={PatientsList}
          options={{ title: "Lista pacjentów" }}
        />
        <Stack.Screen
          name="PatientCard"
          component={PatientCard}
          options={{
            title: "Karta pacjenta",
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Diagnosis"
          component={DiagnosisNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientHistory"
          component={PatientHistory}
          options={{
            title: "Historia",
          }}
        />
        <Stack.Screen
          name="BasicData"
          component={BasicData}
          options={{
            title: "Dane podstawowe",
          }}
        />
        <Stack.Screen
          name="PhysicalExamination"
          component={PhysicalExamination}
          options={{
            title: "Badanie fizykalne",
          }}
        />
        <Stack.Screen
          name="PsychiatricAssessment"
          component={PsychiatricAssessment}
          options={{
            title: "Badanie psychiatryczne",
          }}
        />
        <Stack.Screen
          name="PatientsNotes"
          component={PatientsNotes}
          options={{
            title: "Notatki",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
