import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Nav from "./components/Header/Nav";
import HomePage from "./components/Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Pricing from "./components/Pricing/Pricing";
import Notfound from "./components/NotFound/Notfound";
import Details from "./components/Details/Details";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path='/products' element={<Products />}></Route> */}
        <Route path={"/products/:id"} element={<Products />}></Route>
        <Route path={"/:singleId"} element={<Details />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path={"*"} element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
