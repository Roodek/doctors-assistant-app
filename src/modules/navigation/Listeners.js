import { Alert } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const backAction = ({ navigation, navigationRouteName, message }) => ({
  beforeRemove: (e) => {
    const { action } = e.data;
    if (
      !action.payload ||
      !action.payload.name ||
      action.payload.name !== navigationRouteName
    ) {
      e.preventDefault();

      Alert.alert("", message, [
        {
          text: "Kontynuuj",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Przerwij",
          style: "destructive",
          onPress: async () => {
            navigation.navigate(navigationRouteName);
          },
        },
      ]);
    } else navigation.dispatch(e.data.action);
  },
});

// eslint-disable-next-line import/prefer-default-export
export { backAction };
