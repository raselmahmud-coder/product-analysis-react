import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Nav from "./components/Header/Nav";
import HomePage from "./components/Home/HomePage";
import Notfound from "./components/NotFound/Notfound";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import DashBoard from "./components/Dashboard/DashBoard";
import Blog from "./components/Blog/Blog";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={"/review"} element={<CustomerReview />}></Route>
        <Route path={"/dashboard"} element={<DashBoard />}></Route>
        <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"*"} element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
