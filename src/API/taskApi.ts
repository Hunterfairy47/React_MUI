// Fetch Tasks
export const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  console.log(data);

  return data;
};

// Fetch Task
export const fetchTask = async (id: string) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();
  return data;
};

//Delete Task
export const deleteTask = async (id: string) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });
  
};

//Toggle Reminder
 export const updateReminder = async (id: string) => {
  const taskToToggle = await fetchTask(id);
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await res.json();
  console.log(data);

 return data
};
