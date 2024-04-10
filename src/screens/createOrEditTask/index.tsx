import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppContext from "../../contexts/appContext";
import { useNavigation } from "@react-navigation/native";
import { RootDrawerNavigatorParamsListType } from "../../utils/types";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useRoute, RouteProp } from "@react-navigation/native";

const CreateOrEditTask: React.FC = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<RootDrawerNavigatorParamsListType>>();
  const { params } =
    useRoute<
      RouteProp<RootDrawerNavigatorParamsListType, "createOrEditTask">
    >();
  const { tasks, setTasks, setSnackbar } = useContext(AppContext);
  const [task, setTask] = React.useState<string>(params?.title || "");

  useEffect(() => {
    setTask(params?.title || "");
  }, [params]);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 10,
            textAlign: "center",
            width: 200,
            fontSize: 12.5,
            textTransform: "uppercase",
          }}
        >
          What do you have to do?
        </Text>
      </View>
      <View
        style={{
          marginBottom: 10,
        }}
      >
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)}
          multiline={true}
          numberOfLines={5}
          style={{
            borderRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          mode="contained"
          onPress={() => {
            if (!params) {
              setTasks([
                ...tasks,
                {
                  id: Date.now(),
                  title: task,
                  done: false,
                },
              ]);
              setSnackbar("Task created successfully");
            } else {
              setTasks(
                tasks.map((t) => {
                  if (t.id === params.id) {
                    return {
                      ...t,
                      title: task,
                    };
                  }
                  return t;
                })
              );
              setSnackbar("Task edited successfully");
            }

            setTask("");
            navigation.navigate("tabsFilters");
          }}
          style={{
            width: 200,
          }}
        >
          {params ? "Edit Task" : "Create Task"}
        </Button>
      </View>
    </View>
  );
};

export default CreateOrEditTask;
