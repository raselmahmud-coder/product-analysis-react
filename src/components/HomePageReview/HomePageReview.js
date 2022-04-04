import React from "react";

const HomePageReview = (props) => {
  const { comment, userName, picture, rating } = props.review;
  return (
    <div className="my-2 px-2 flex justify-center w-full overflow-hidden sm:my-2 sm:px-2 xl:my-2 xl:px-2 xl:w-1/3">
      <div className="max-w-sm bg-blue-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="p-4 rounded-lg" src={picture} alt="product-review" />
        <div className="px-5 pb-5">
          <h5 className="text-3xl font-semibold tracking-widest text-gray-900 dark:text-white">
            Name : {userName}
          </h5>
          <div className="flex items-center justify-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 text-base">
              Rating : {rating}/5
            </span>
            <span className="bg-blue-100 text-blue-800 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 text-base">
              Comment : {comment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageReview;
