import React, { useContext } from "react";
import { View, Text } from "react-native";
import ContainerTasks from "../../../components/containerTasks";
import { TaskFilterOptionEnum } from "../../../utils/enums";
import AppContext from "../../../contexts/appContext";
import { Snackbar } from "react-native-paper";

const AllTasks: React.FC = () => {
  const { tasks, snackbar, visible, setVisible } = useContext(AppContext);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            marginVertical: 10,
          }}
        >
          {`tasks remaining: ${tasks.filter((task) => !task.done).length}`}
        </Text>
      </View>
      <View>
        <ContainerTasks typeTask={TaskFilterOptionEnum.all} />
      </View>
      <View>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Close",
            onPress: onDismissSnackBar,
          }}
        >
          {snackbar}
        </Snackbar>
      </View>
    </View>
  );
};

export default AllTasks;
