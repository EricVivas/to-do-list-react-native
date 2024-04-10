import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllTasks from "../../screens/filters/allTasks";
import ActiveTasks from "../../screens/filters/activeTasks";
import CompletedTasks from "../../screens/filters/completedTasks";
import { Icon } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { RootBottomTabNavigatorParamsListType } from "../../utils/types";

const Tab = createBottomTabNavigator<RootBottomTabNavigatorParamsListType>();

const TabsFilters: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarActiveBackgroundColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="all"
        component={AllTasks}
        options={{
          title: "All",
          tabBarIcon: () => (
            <Icon source="list-status" color={"black"} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="active"
        component={ActiveTasks}
        options={{
          title: "ACTIVE",
          tabBarIcon: () => (
            <Icon source="playlist-remove" color={"black"} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="completed"
        component={CompletedTasks}
        options={{
          title: "COMPLETED",
          tabBarIcon: () => (
            <Icon source="playlist-check" color={"black"} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsFilters;
export type { RootBottomTabNavigatorParamsListType };
