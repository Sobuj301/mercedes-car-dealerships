import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home";
import AddProducts from "../Components/Pages/AddProducts";
import MyCards from "../Components/Pages/MyCards";
import Login from "../Components/Pages/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<AddProducts></AddProducts>
        },
        {
            path:'/myCart',
            element:<MyCards></MyCards>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ])
    },
  ]);


export default router;