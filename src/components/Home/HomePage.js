import React, { createContext, useState } from "react";
import { useCategory } from "../../hooks/useProducts";
import Categories from "../Categories/Categories";
export const ProductContext = createContext();
const HomePage = () => {
  const [categories] = useCategory();
  return (
    <div className="flex flex-wrap overflow-hidden mx-0 my-auto gap-4">
      {categories.map((pd) => (
        <Categories key={pd.id} pd={pd} />
      ))}
    </div>
  );
};

export default HomePage;
