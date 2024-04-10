import React, { FC, useEffect, useState } from "react";
import AppContext from "../../contexts/appContext";
import { TaskType } from "../../utils/types";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [snackbar, setSnackbar] = useState<string>("");
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(!!snackbar);
  }, [snackbar]);

  return (
    <AppContext.Provider
      value={{ tasks, setTasks, snackbar, setSnackbar, visible, setVisible }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
