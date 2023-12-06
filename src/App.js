import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageBuild from "./pages/PageBuild/PageBuild";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import UpLoaderAllProducts from "./components/UpLoaderAllProducts/UpLoaderAllProducts";
import UsandoParticleJs from './pages/UsandoParticleJs/UsandoParticleJs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenidos!!"} />}
            />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer greeting={"Producto por Categoría: "} />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/buildPage" element={<PageBuild />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/UpLoaderAllProducts" element={<UpLoaderAllProducts />} />
            <Route path="/Particulas" element={<UsandoParticleJs />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
