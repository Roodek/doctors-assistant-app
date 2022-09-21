import * as React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";
import BasicData from "../../../views/registration/BasicData";
import HeaderOptions from "../HeaderOptions";
import PatientCard from "../../../views/patientCard/PatientCard";
import BasicDataContextProvider from "../../context/BasicDataContext";
import PatientsContextProvider from "../../context/PatientsContext";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "PatientCard",
    component: PatientCard,
    title: "Karta pacjenta",
  },
  {
    name: "BasicData",
    component: BasicData,
    title: "Informacje podstawowe",
  },
];

const initialRoute = Routes[0];

const PatientCardNavigator = ({ route }) => {
  const { patientId, patientBasicDataId } = route.params;
  return (
    <PatientsContextProvider patientId={patientId}>
      <BasicDataContextProvider patientBasicDataId={patientBasicDataId}>
        <Stack.Navigator
          initialRouteName={initialRoute.name}
          screenOptions={HeaderOptions}
        >
          {Routes.map(({ name, component, title, listeners }) => (
            <Stack.Screen
              name={name}
              key={name}
              component={component}
              options={{
                title,
              }}
              listeners={listeners}
            />
          ))}
        </Stack.Navigator>
      </BasicDataContextProvider>
    </PatientsContextProvider>
  );
};

PatientCardNavigator.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
      patientBasicDataId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default PatientCardNavigator;
