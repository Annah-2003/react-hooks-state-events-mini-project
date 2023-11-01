import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    //filter tasks by the selected category
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
