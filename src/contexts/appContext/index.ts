import { createContext } from "react";
import { TaskType } from "../../utils/types";

type AppContextValue = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  snackbar: string | null;
  setSnackbar: (message: string) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const initialContextValue: AppContextValue = {
  tasks: [],
  setTasks: (tasks) => {},
  snackbar: null,
  setSnackbar: (message) => {},
  visible: false,
  setVisible: (visible) => {},
};

const AppContext = createContext<AppContextValue>(initialContextValue);

export default AppContext;
