import Home from "./pages/Home.jsx";
import Cart from './pages/Cart.jsx'
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import PaymentMethods from "./pages/PaymentMedthod.jsx";
import Store from "./pages/Store.jsx";
import Profile from "./pages/Profile.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import OrderTracker from "./pages/OrderTracker.jsx";
import Auth from "./pages/Auth.jsx";
import CustomerService from "./pages/Service.jsx";
import Deskboard from "./pages/deskboard.jsx";

export const App = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:'/cart',element:<Cart/>},
  {path:'/store',element:<Store/>},
  {path:'/profile',element:<Profile/>},
  {path:'/wishlist',element:<Wishlist/>},
  {path:'/track',element:<OrderTracker/>},
  {path:'/auth',element:<Auth/>},
  {path:'/service', element:<CustomerService/>}
  // {path:'/productDetails/:id',element:<ProductDetails/>}
])
