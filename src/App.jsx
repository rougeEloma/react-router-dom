//import React from 'react';
import Home from "./pages/home";
import Login from './pages/login';
import About from './pages/about';
import Products from './pages/products';
import ProductsList from './pages/productsList';
import SingleProduct from './pages/singleProduct';
import NavBar from './components/navBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return(
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element= {<ProductsList/>} />
          <Route path=":id" element={<SingleProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>

  )
}
export default App;