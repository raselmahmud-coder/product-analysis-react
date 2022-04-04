import { useCategory } from "../../hooks/useProducts";
import CustomerReview from "../CustomerReview/CustomerReview";
const HomePage = () => {
  const [categories] = useCategory();
  //https://randomuser.me/api/?results=10
  return (
    <>
      <div className="mt-20 flex flex-wrap items-center mx-2 overflow-hidden sm:mx-2 xl:mx-2">
        <div className="my-2 px-2 flex justify-center w-full overflow-hidden sm:my-2 sm:px-2 xl:my-2 xl:px-2 xl:w-1/3">
          <img
            className="rounded w-48"
            src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>

        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 xl:my-2 xl:px-2 xl:w-1/2">
          <h1 className="text-5xl text-blue-400 text-uppercase tracking-widest">
            Best Airpods{" "}
          </h1>
          <h1 className="text-5xl text-blue-500 text-uppercase tracking-widest my-5">Clear Music </h1>
          <p className="text-2xl text-black text-capitalize tracking-widest my-5">
            Pods King offers you a high-quality product review website design
            with the best design created by React JS
          </p>
          <button className="lg:hover:bg-blue-800 bg-black p-3 rounded-lg text-2xl my-4 text-white">
            Live Demo
          </button>
        </div>
      </div>
      <CustomerReview/>
    </>
  );
};

export default HomePage;
