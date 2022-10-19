import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PropTypes from "prop-types";
import AddPatient from "../../../views/registration/AddPatient";
import BasicData from "../../../views/registration/BasicData";
import PhysicalExamination from "../../../views/registration/PhysicalExamination";
import PsychiatricAssessment from "../../../views/registration/PsychiatricAssessment";
import HeaderOptions from "../HeaderOptions";
import { backAction } from "../Listeners";
import DiagnosisNavigator from "../diagnosisNavigator/DiagnosisNavigator";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "AddPatient",
    component: AddPatient,
    title: "Dane Osobowe",
  },
  {
    name: "BasicData",
    component: BasicData,
    title: "Informacje podstawowe",
  },
  {
    name: "PhysicalExamination",
    component: PhysicalExamination,
    title: "Badanie fizykalne",
  },

  {
    name: "PsychiatricAssessment",
    component: PsychiatricAssessment,
    title: "Badanie psychiatryczne",
  },
];

const initialRoute = Routes[0];

const RegistrationNavigator = () => {
  // console.log(route);
  // const { deletePatient } = route.params.deletePatientFromAllTables;
  return (
    <Stack.Navigator
      initialRouteName={initialRoute.name}
      screenOptions={HeaderOptions}
    >
      {Routes.map(({ name, component, title }) => (
        <Stack.Screen
          name={name}
          key={name}
          component={component}
          options={{
            title,
          }}
          listeners={({ navigation }) =>
            backAction({
              navigation,
              navigationRouteName: "PatientsList",
              message:
                "Czy na pewno chcesz przerwać wywiad i powrócić do listy pacjentów? Dane z bieżącego formularza nie zostaną zapisane.",
            })
          }
        />
      ))}
    </Stack.Navigator>
  );
};

export default RegistrationNavigator;
