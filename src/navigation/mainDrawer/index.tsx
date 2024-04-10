import { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CreateOrEditTask from "../../screens/createOrEditTask";
import TabsFilters from "../tabsFilters";
import { useTheme } from "react-native-paper";
import { RootDrawerNavigatorParamsListType } from "../../utils/types";
import AppContext from "../../contexts/appContext";

const Drawer = createDrawerNavigator<RootDrawerNavigatorParamsListType>();

function MainDrawer() {
  const { setSnackbar } = useContext(AppContext);
  const theme = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="createOrEditTask"
        component={CreateOrEditTask}
        options={{ title: "Create/edit Task" }}
        listeners={({ navigation }) => {
          return {
            drawerItemPress: () => {
              setSnackbar("");
              navigation.navigate("createOrEditTask", undefined);
            },
          };
        }}
      />
      <Drawer.Screen
        name="tabsFilters"
        component={TabsFilters}
        options={{ title: "Filters" }}
        listeners={({ navigation }) => {
          return {
            drawerItemPress: () => {
              setSnackbar("");
              navigation.navigate("tabsFilters", undefined);
            },
          };
        }}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
export type { RootDrawerNavigatorParamsListType };
