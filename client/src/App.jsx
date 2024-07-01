import { useSelector } from "react-redux"
import Home from "./pages/Home"
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"
import ProductList from "./pages/productList/ProductList"
import Register from "./pages/register/Register"
import SingleProduct from "./pages/singleProduct/SingleProduct"
import {  createBrowserRouter,  RouterProvider,  Route, createRoutesFromElements, Outlet,} from "react-router-dom";

function App() {
  const user = useSelector((state)=>(state.user.currentUser))

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<Root />} >
        <Route index element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={user? <Home/> :<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={user? <Home/> :<Register/>} />
      </Route>
    ))

  return (
    <>
    <RouterProvider router={router} />
      {/* <SingleProduct /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      {/* <Home /> */}
      {/* <ProductList/> */}


    </>
  )
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App
