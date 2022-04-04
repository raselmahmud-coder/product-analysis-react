import React from "react";

const Blog = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <div className="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Purpose Of Context API
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            The Context API is a component structure provided by the React
            framework. Context provides a way to share as values (we can sent
            object, array, function so on) between components without having to
            explicitly pass a prop through every level of the tree. Using
            context, we can avoid Props Drilling Context is used when data needs
            to be accessible by many components at different nesting levels. The
            Context Provider acts a mobile tower. When a consumer needs for
            something, it finds a way the network and consumer can received it
            to where it's need to use.
          </p>
        </div>
        <div className="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is Semantic Tag?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            This Element Clearly Define which content will appear. The semantic tags help the
            search engines optimization better. And other user devices to determine the importance
            and context of web pages. The pages made with semantic elements are
            much easier to read. It has greater accessibility. It offers a
            better user experience.
            <br />
            <span className="text-blue-200">
              Example Of few Semantic Tags: --- header, section, article,
              footer, aside, main, mark.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
