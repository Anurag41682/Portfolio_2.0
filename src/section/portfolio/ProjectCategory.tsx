import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

interface PropsCategory {
  categories: string[];
  onFilterProjects: (category: string) => void;
}

const ProjectCategory: React.FC<PropsCategory> = ({
  categories,
  onFilterProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const changeCategoryHandle = (activeCat: string) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };
  return (
    <div className="portfolio_categories">
      {categories.map((item) => {
        return (
          <CategoryButton
            key={item}
            category={item}
            className={`btn cat_btn ${
              activeCategory == item ? "primary" : "light"
            }`}
            onChangeCategory={() => {
              changeCategoryHandle(item);
            }}
          />
        );
      })}
    </div>
  );
};

export default ProjectCategory;
