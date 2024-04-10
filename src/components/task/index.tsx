import React, { useContext } from "react";
import { View, Text } from "react-native";
import { RootDrawerNavigatorParamsListType, TaskType } from "../../utils/types";
import { Switch, Button } from "react-native-paper";
import AppContext from "../../contexts/appContext";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Task: React.FC<TaskType> = ({ id, title, done }) => {
  const navigation =
    useNavigation<DrawerNavigationProp<RootDrawerNavigatorParamsListType>>();
  const { tasks, setTasks, setSnackbar } = useContext(AppContext);

  return (
    <View
      style={{
        display: "flex",
        padding: 10,
        marginVertical: 5,
        borderWidth: 0.25,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <View>
          <Switch
            value={done}
            onValueChange={() => {
              setTasks(
                tasks.map((task) => {
                  if (task.id === id) {
                    return {
                      ...task,
                      done: !task.done,
                    };
                  }
                  return task;
                })
              );
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text>{title}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 5,
        }}
      >
        <View
          style={{
            marginHorizontal: 5,
          }}
        >
          <Button
            icon="pencil"
            mode="outlined"
            onPress={() => {
              setSnackbar("");
              navigation.navigate("createOrEditTask", { id, title, done });
            }}
          >
            Edit
          </Button>
        </View>
        <View>
          <Button
            icon="delete"
            mode="contained"
            onPress={() => {
              setTasks(tasks.filter((task) => task.id !== id));
            }}
          >
            Delete
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Task;
