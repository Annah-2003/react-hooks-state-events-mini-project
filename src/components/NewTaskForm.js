import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Choose a category");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && taskCategory !== "Choose a category") {
      onTaskFormSubmit({ text: taskText, category: taskCategory });
      // Reset the form fields
      setTaskText("");
      setTaskCategory("Choose a category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        <option disabled>Choose a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
