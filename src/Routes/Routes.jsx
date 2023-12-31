import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Pages/ErrorPage";
import Home from "../Components/Pages/Home";
import AddProducts from "../Components/Pages/AddProducts";
import MyCards from "../Components/Pages/MyCards";
import Login from "../Components/Pages/Login";
import Register from "../Components/Register";
import PrivateRoutes from "../Components/Private/PrivateRoutes";
import BrandDetails from "../Components/Pages/BrandDetails";
import DetailsProduct from "../Components/Pages/DetailsProduct";
import Update from "../Components/Pages/Update";



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
            element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
        },
        {
            path:'/myCart',
            element:<PrivateRoutes><MyCards></MyCards></PrivateRoutes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/brandDetails/:name',
          element:<BrandDetails></BrandDetails>,
          loader:({params}) => fetch(`https://server-side-kappa-five.vercel.app/brands/${params.name}`)

        },
        {
          path:"/details/:id",
          element:<PrivateRoutes><DetailsProduct></DetailsProduct></PrivateRoutes>,
          
        },
        {
          path:'/update/:id',
          element:<PrivateRoutes><Update></Update></PrivateRoutes>,
          loader:({params})=> fetch(`https://server-side-kappa-five.vercel.app/brand/${params.id}`)
        }
       
      ])
    },
  ]);


export default router;