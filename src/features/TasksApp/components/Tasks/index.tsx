import Task from "../Task";

export type ITask= {
  id: string;
  text: string;
  day: string;
  reminder: boolean;
};

type TasksProps = {
  tasks: ITask[];
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string) => Promise<void>;
};
const Tasks = ({ tasks, onDelete, onToggle }: TasksProps) => {
  return (
    <>
      {tasks.map((task, index) => (
        
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
