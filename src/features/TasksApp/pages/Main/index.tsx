import { useState, useEffect } from "react";
import HeaderTasks from "../../components/HeaderTasks";
import AddTask from "../../components/AddTask";
import Tasks from "../../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskList } from "../../../../redux/actions";
import {
  deleteTask,
  fetchTasks,
  updateReminder,
} from "../../../../API/taskApi";
import { State } from "../../../../redux/store";
import {ITask} from "../../components/Tasks"
import {toggleReminder} from "../../../../redux/actions"

function TasksApp() {
  const [showAddTask, setShowAddTask] = useState(false);

  const dispatch = useDispatch();
  const tasks: ITask[] = useSelector((state: State) => state.task);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      dispatch(fetchTaskList(tasksFromServer));
    };
    getTasks();
  }, []);

  // Delete Task
  const deleteTaskAction = async (id: string) => {
    deleteTask(id);
  };

  // Toggle Reminder
  const toggleReminderAction = async (id: string) => {
    await updateReminder(id);
    dispatch(toggleReminder(id))
  };

  return (
    <div className="container">
      <HeaderTasks
        title="Tasks App"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask />}
      {tasks?.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskAction}
          onToggle={toggleReminderAction}
        />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default TasksApp;
