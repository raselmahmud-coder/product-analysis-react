import { useEffect, useState } from "react";
// for products hook
const useProducts = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/raselmahmud22/userReviewData/main/review.json"
    )
      .then((res) => res.json())
      .then((json) => setReviews(json));
  }, []);
  return [reviews, setReviews];
};
// for rechart
const useChart = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return [chart, setChart];
};
export { useProducts, useChart };
