import Home from "./pages/Home.jsx";
import Cart from './pages/Cart.jsx'
import { createBrowserRouter } from "react-router";
import ProductDetails from "./pages/ProductDetails.jsx";
import PaymentMethods from "./pages/PaymentMedthod.jsx";

export const App = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:'/cart',element:<Cart/>},
  // {path:'/productDetails/:id',element:<ProductDetails/>}
])
