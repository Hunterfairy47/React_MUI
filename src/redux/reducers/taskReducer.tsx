
import { ITask } from "../../features/TasksApp/components/Tasks";
import { Action } from "../actions"
import {State} from "../store"



const taskReducer = (state:ITask[] = [], action: Action) => {
  console.log({ state, action });

  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/fetchTask":
      return action.payload;
    case "tasks/toggleReminder":
      const cloneState = [...state]
      cloneState.map(item => {
        if (item.id === action.payload)
          return item.reminder = !item.reminder
      }
          )
      return cloneState;

    default:
      return state;
  }
};

export default taskReducer;
