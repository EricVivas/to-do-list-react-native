import React, { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import AppContext from "../../contexts/appContext";
import Task from "../task";
import { TaskFilterOptionEnum } from "../../utils/enums";

type ContainerTasksPropsType = {
  typeTask?: TaskFilterOptionEnum;
};

const ContainerTasks: React.FC<ContainerTasksPropsType> = ({
  typeTask = "all",
}) => {
  const { tasks } = useContext(AppContext);

  const tasksFiltered = tasks.filter((task) => {
    if (typeTask === "all") return true;
    else if (typeTask === "active") {
      return !task.done;
    } else {
      return task.done;
    }
  });

  return (
    <ScrollView
      style={{
        height: "90%",
      }}
    >
      {tasks.length ? (
        tasksFiltered.length ? (
          tasksFiltered.map((task) => <Task key={task.id} {...task} />)
        ) : (
          <Text style={{ textAlign: "center", textTransform: "uppercase" }}>
            {`No tasks of type ${typeTask}`}
          </Text>
        )
      ) : (
        <View>
          <Text style={{ textAlign: "center", textTransform: "uppercase" }}>
            No tasks
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ContainerTasks;
