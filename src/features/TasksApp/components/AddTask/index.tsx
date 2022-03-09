import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      addTaskAction({
        id: uuidv4(),
        text,
        day,
        reminder,
      })
    );
    if (!text) {
      alert("Please add task");
      return;
    }

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Enter Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Enter Day & Time..."
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          checked={reminder}
          type="checkbox"
          value={reminder.toString()}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
