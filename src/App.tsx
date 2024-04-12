import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Smartphones from "./Pages/Smartphones";
import Laptops from "./Pages/Laptops";
import Fragrances from "./Pages/Fragrances";
import Skincare from "./Pages/Skincare";
import Groceries from "./Pages/Groceries";
import Homedecoration from "./Pages/Homedecoration";
import Furniture from "./Pages/Furniture";
import Tops from "./Pages/Tops";
import Womendress from "./Pages/Womendress";
import Womenshoes from "./Pages/Womenshoes";
import Menshirt from "./Pages/Menshirt";
import Menshoes from "./Pages/Menshoes";
import Menwatches from "./Pages/Menwatches";
import Womenwatch from "./Pages/Womenwatch";
import Womenbags from "./Pages/Womenbags";
import Womenjwellery from "./Pages/Womenjwellery";
import Sunglasses from "./Pages/Sunglasses";
import Automotive from "./Pages/Automotive";
import Motorcycle from "./Pages/Motorcycle";
import Lighting from "./Pages/Lighting";
import Product from "./Pages/Product";
import AddtoCart from "./Pages/AddtoCart";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import PaymentSuccessful from "./Pages/PaymentSuccessful";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products/smartphones" element={<Smartphones />} />
        <Route path="/products/laptops" element={<Laptops />} />
        <Route path="/products/fragrances" element={<Fragrances />} />
        <Route path="/products/skincare" element={<Skincare />} />
        <Route path="/products/groceries" element={<Groceries />} />
        <Route path="/products/home-decoration" element={<Homedecoration />} />
        <Route path="/products/furniture" element={<Furniture />} />
        <Route path="/products/tops" element={<Tops />} />
        <Route path="/products/womens-dresses" element={<Womendress />} />
        <Route path="/products/womens-shoes" element={<Womenshoes />} />
        <Route path="/products/mens-shirts" element={<Menshirt />} />
        <Route path="/products/mens-shoes" element={<Menshoes />} />
        <Route path="/products/mens-watches" element={<Menwatches />} />
        <Route path="/products/womens-watches" element={<Womenwatch />} />
        <Route path="/products/womens-bags" element={<Womenbags />} />
        <Route path="/products/womens-jewellery" element={<Womenjwellery />} />
        <Route path="/products/sunglasses" element={<Sunglasses />} />
        <Route path="/products/automotive" element={<Automotive />} />
        <Route path="/products/motorcycle" element={<Motorcycle />} />
        <Route path="/products/lighting" element={<Lighting />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/paymentsuccessful" element={<PaymentSuccessful />} />
      </Routes>
    </>
  );
}

export default App;
