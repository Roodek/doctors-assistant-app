import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsList from "../../views/PatientsList";
import PatientCard from "../../views/patientCard/PatientCard";
import HeaderOptions from "./HeaderOptions";
import RegistrationNavigator from "./registrationNavigator/RegistrationNavigator";
import DiagnosisNavigator from "./diagnosisNavigator/DiagnosisNavigator";
import PatientHistory from "../../views/patientCard/PatientHistory";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
