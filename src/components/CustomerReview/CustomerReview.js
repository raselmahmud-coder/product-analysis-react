import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CustomerReview = () => {
  const navigate = useNavigate();
  const getParams = useParams();
  const reviewPath = useLocation();
  // console.log();
  return (
    <>
      <div
        className={
          reviewPath.pathname === "/review" ? "hidden" : "text-center my-28"
        }
      >
        <h1 className="text-center">Customer Review (3)</h1>
        <div>
          <p>products goes here </p>
        </div>
        <button
          className="lg:hover:bg-blue-800 bg-black p-3 rounded-lg text-2xl my-4 text-white uppercase"
          onClick={() => navigate("/review")}
        >
          <span>all review</span>
        </button>
      </div>
    </>
  );
};

export default CustomerReview;
