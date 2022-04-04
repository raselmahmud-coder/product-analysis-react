import { useEffect, useState } from "react";
// for products hook
const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/raselmahmud22/userReviewData/main/review.json")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return [products, setProducts];
};
// for Categories hook
const useCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`Utilities/Categories.json`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return [categories, setCategories];
};

export { useProducts, useCategory };
