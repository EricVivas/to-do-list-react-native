import React from "react";
import { View } from "react-native";
import MainDrawer from "../../navigation/mainDrawer";

const Main: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MainDrawer />
    </View>
  );
};

export default Main;
