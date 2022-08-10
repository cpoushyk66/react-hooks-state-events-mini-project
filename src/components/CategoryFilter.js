import React from "react";

function CategoryFilter({categories, onClickFilter, filterButton}) {

  const categoryButtons = categories.map(category => {
    return <button key={category} className={(category === filterButton) ? "selected" : ""}onClick={onClickFilter}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
