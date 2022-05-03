import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MainNavigator from "./src/modules/navigation/MainNavigator";
import PatientsContextProvider from "./src/modules/context/PatientsContext";
import BasicDataContextProvider from "./src/modules/context/BasicDataContext";
import PhysicalExaminationProvider from "./src/modules/context/PhysicalExaminationContext";
import PsychiatricAssessmentProvider from "./src/modules/context/PsychiatricAssessmentContext";
import OpenSansLight from "./src/assets/fonts/OpenSans-Light.ttf";
import OpenSansRegular from "./src/assets/fonts/OpenSans-Regular.ttf";
import OpenSansBold from "./src/assets/fonts/OpenSans-Bold.ttf";
import IconFont from "./src/assets/fonts/IconFont.ttf";
import useDatabase from "./src/modules/hooks/useDatabase";

export default function App() {
  console.log(`Initialize app in ${process.env.NODE_ENV}`);

  const [fontsLoaded] = useFonts({
    "OpenSans-Light": OpenSansLight,
    "OpenSans-Regular": OpenSansRegular,
    "OpenSans-Bold": OpenSansBold,
    IconFont,
  });
  const isDBLoadingCompleted = useDatabase();

  if (!fontsLoaded || !isDBLoadingCompleted) {
    return <AppLoading />;
  }
  return (
    <PatientsContextProvider>
      <BasicDataContextProvider>
        <PhysicalExaminationProvider>
          <PsychiatricAssessmentProvider>
            <MainNavigator />
          </PsychiatricAssessmentProvider>
        </PhysicalExaminationProvider>
      </BasicDataContextProvider>
    </PatientsContextProvider>
  );
}
