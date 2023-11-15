import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home";
import AddProducts from "../Components/Pages/AddProducts";
import MyCards from "../Components/Pages/MyCards";
import Login from "../Components/Pages/Login";

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
            path:'/addProducts',
            element:<AddProducts></AddProducts>
        },
        {
            path:'/myCards',
            element:<MyCards></MyCards>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ])
    },
  ]);


export default router;