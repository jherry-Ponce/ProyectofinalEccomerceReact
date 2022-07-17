import { Routes, Route } from "react-router-dom";
import { NavBar } from "../Tienda/Components/Header/NavBar";
import Product from "../Tienda/Components/Products/ProductsDetail";
import { Categoryproducts } from "../Tienda/Pages/Categoryproducts";
import { Home } from "../Tienda/Pages/Home";

export const Rutas = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Product" element={<Product/>} />
        <Route path="/Category" element={<Categoryproducts/>} />
      </Routes>
    </>
  );
};
