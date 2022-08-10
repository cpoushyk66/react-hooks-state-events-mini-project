import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [filterButton, setFilterButton] = useState("All");
  const [allTasks, setAllTasks] = useState(TASKS);
  const [formText, setFormText] = useState("");
  const [formCategory, setFormCategory] = useState("Code");

  function handleButtonFilter(event) {
    setFilterButton(event.target.textContent)
  }

  function handleFormTextUpdate(event) {
    setFormText(event.target.value)
  }

  function handleFormCategoryUpdate(event) {
    setFormCategory(event.target.value)
  }

  function handleTasks (task) {

    //Find index of object to delete.
    const taskIndex = allTasks.map(taskM => taskM.text).indexOf(task)
    //Set allTasks to all but deleted item.
    setAllTasks(() => {
      let arry = [...allTasks];
      arry.splice(taskIndex, 1)
      return arry;
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formText != '')
    {
      const newTask = {
        text: formText,
        category: formCategory
      }

      setAllTasks(() => {
        const newItems = [...allTasks]
        newItems.push(newTask);
        return newItems;
      })
    }
    else
    {alert("Task required!")}
  }

  const filteredTasks = allTasks.filter(task => {
    if (filterButton === "All") return true;

    return task.category === filterButton
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
        onClickFilter={handleButtonFilter} 
        filterButton={filterButton}
      />

      <NewTaskForm categories={CATEGORIES} 
        onTaskFormSubmit={handleFormSubmit} 
        onFormTextUpdate={handleFormTextUpdate} 
        onFormCategoryUpdate={handleFormCategoryUpdate}
      />

      <TaskList tasks={filteredTasks} 
        onRemoveTask={handleTasks
      }/>

    </div>
  );
}

export default App;
