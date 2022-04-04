import CustomerReview from "../CustomerReview/CustomerReview";
const HomePage = () => {
  return (
    <>
      <div className="lg:mt-20 flex flex-wrap justify-center mx-2 overflow-hidden sm:mx-2 xl:mx-2">
        <div className="my-2 lg:mr-5 px-2 w-full overflow-hidden sm:my-2 sm:px-2 xl:my-2 xl:px-2 xl:w-1/3">
          <img
            className="rounded w-full"
            src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>

        <div className="my-2 lg:ml-5 px-2 w-full overflow-hidden sm:my-2 sm:px-2 xl:my-2 xl:px-2 xl:w-1/2">
          <h1 className="lg:text-5xl text-4xl text-center text-blue-400 uppercase tracking-widest">
            Best Airpods
          </h1>
          <h1 className="lg:text-5xl text-4xl text-center text-blue-500 uppercase tracking-widest my-5">Clear Music </h1>
          <p className="lg:text-2xl text-justify text-black text-capitalize tracking-widest my-5">
            Pods King offers you a high-quality product review website design
            with the best design created by React JS
          </p>
          <button className="bg-black block lg:hover:bg-blue-800 mx-auto my-4 p-3 rounded-lg text-2xl text-white">
            Live Demo
          </button>
        </div>
      </div>
      <CustomerReview/>
    </>
  );
};

export default HomePage;
