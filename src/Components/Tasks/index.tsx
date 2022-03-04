import Task from "../Task";

type ITasks = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

type Props = {
  tasks: ITasks[];
  onDelete: (id: number) => Promise<void>;
  onToggle: (id: number) => Promise<void>;
};
const Tasks = ({ tasks, onDelete, onToggle }: Props) => {
  console.log(tasks);

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
