import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/screens/main";
import AppProvider from "./src/providers/AppProviders";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <PaperProvider>
          <SafeAreaProvider>
            <Main />
          </SafeAreaProvider>
        </PaperProvider>
      </NavigationContainer>
    </AppProvider>
  );
}
