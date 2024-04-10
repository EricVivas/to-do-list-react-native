type TaskType = {
  id: number;
  title: string;
  done: boolean;
};

type RootDrawerNavigatorParamsListType = {
  createOrEditTask: TaskType | undefined;
  tabsFilters: { create: boolean } | undefined;
};

type RootBottomTabNavigatorParamsListType = {
  all: undefined;
  active: undefined;
  completed: undefined;
};

export type {
  TaskType,
  RootDrawerNavigatorParamsListType,
  RootBottomTabNavigatorParamsListType,
};
