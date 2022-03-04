import React from "react";
import { FaTimes } from "react-icons/fa";

type ITasks = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

type Props = {
  task: ITasks;
  onDelete: (id: number) => Promise<void>;
  onToggle: (id: number) => Promise<void>;
};
const Task = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
