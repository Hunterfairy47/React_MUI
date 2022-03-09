import { ITask } from "../../features/TasksApp/components/Tasks";

interface AddTaskActionProps{
  type: string;
  payload: ITask
}


export const addTaskAction = (data: ITask) => {
  return {
    type: "tasks/addTask",
    payload: data,
  };
};


interface FetchTaskListProps{
  type: string;
  payload: ITask[]
}

export const fetchTaskList = (data: ITask[]) => {
  return {
    type: "tasks/fetchTask",
    payload: data,
  };
};


interface ToggleReminderProps{
  type: string;
  payload: string
}
export const toggleReminder = (data: string) => {
  return {
    type: "tasks/toggleReminder",
    payload: data,
  };
};


interface DeleteTaskProps{
  type: string;
  payload: string
}
export const  deleteTask= (data: string) => {
  return {
    type: "tasks/deleteTask",
    payload: data,
  };
};

export type Action = AddTaskActionProps | FetchTaskListProps | ToggleReminderProps | DeleteTaskProps



