import "./App.css";
import { Navmyn } from "./components/Navmyn";
import { ProductDetails } from "./components/ProductDetails";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishList } from "./components/WishList";

function App() {
  return (
    <BrowserRouter>
      <Navmyn />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
