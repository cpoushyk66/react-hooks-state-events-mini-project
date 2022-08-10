import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit, onFormTextUpdate, onFormCategoryUpdate}) {

  

  const optionCategories = categories.map(category => {
    if (category === 'All') return false

    return <option key={category}>{category}</option>
  })



  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input onChange={onFormTextUpdate} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={onFormCategoryUpdate} name="category">
          {optionCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
