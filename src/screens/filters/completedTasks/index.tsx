import React, { useContext } from "react";
import ContainerTasks from "../../../components/containerTasks";
import { TaskFilterOptionEnum } from "../../../utils/enums";
import { View } from "react-native";
import AppContext from "../../../contexts/appContext";
import { Snackbar } from "react-native-paper";

const CompletedTasks: React.FC = () => {
  const { snackbar, visible, setVisible } = useContext(AppContext);

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
        <ContainerTasks typeTask={TaskFilterOptionEnum.completed} />
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

export default CompletedTasks;
