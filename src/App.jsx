import Products from "./components/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes, BrowserRouter, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact='true' path="/" element={<Home/>} />

        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products/:category" element={<Products/>} />
      </Routes>

    </BrowserRouter>
  )
};

export default App; 