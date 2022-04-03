import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = ({ pd }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full overflow-hidden xl:my-2 xl:px-2">
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="p-8 rounded-t-lg"
            src={pd.picture}
            width="250"
            height="200"
            alt=""
          />
          <div className="px-5 pb-5">
            <h5 className="dark:text-white font-semibold text-capitalize text-gray-900 text-start text-xl tracking-tight">
              {pd.name}
            </h5>

            <div className="flex justify-between items-center">
              <button
                to={"/"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => navigate(`/products/${pd.name}`)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
