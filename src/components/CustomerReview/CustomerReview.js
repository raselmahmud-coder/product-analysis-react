import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import AllReview from "../AllReview/AllReview";
import HomePageReview from "../HomePageReview/HomePageReview";

const CustomerReview = () => {
  const navigate = useNavigate();
  const reviewPath = useLocation();
  const [loadingReview] = useProducts();
  const initReview = loadingReview.slice(0, 3);
  return (
    <>
      {reviewPath.pathname === "/review" ? (
        <div className="mt-2 flex flex-wrap items-center mx-2 overflow-hidden sm:mx-2 xl:mx-2">
          {loadingReview.map((review) => (
            <AllReview key={review.index} review={review} />
          ))}
        </div>
      ) : (
        ""
      )}
      <div
        className={
          reviewPath.pathname === "/review" ? "hidden" : "text-center my-12"
        }
      >
        <h1 className="text-center mb-3 text-5xl">
          Customer Review ({initReview.length})
        </h1>
        <div className="mt-6 flex flex-wrap items-center mx-2 overflow-hidden sm:mx-2 xl:mx-2">
          {initReview.map((review) => (
            <HomePageReview key={review.index} review={review} />
          ))}
        </div>
        <button
          className="lg:hover:bg-blue-800 bg-black p-3 rounded-lg text-2xl my-4 text-white uppercase"
          onClick={() => navigate("/review")}
        >
          <span>See all review</span>
        </button>
      </div>
    </>
  );
};

export default CustomerReview;
