import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import AllCraftItems from "../pages/AllCraftItems/AllCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyCraftList from "../pages/MyCraftList/MyCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import UpdateCraftItem from "../pages/UpdateCraftItem/UpdateCraftItem";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddArtCrafts from "../pages/AddArtCrafts/AddArtCrafts";
import AllCategory from "../pages/AllCategory/AllCategory";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/crafts')
        },
        {
          path: '/itemDetails/:id',
          element: <ItemDetails></ItemDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
         
        },
        {
          path: '/allCraftItems',
          element: <AllCraftItems></AllCraftItems>,
          loader: () => fetch('http://localhost:5000/crafts')
        },
        {
          path: 'addCraftItem',
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
          path: 'myCraftList',
          element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
        },
        {
          path: 'addArtCrafts',
          element: <AddArtCrafts></AddArtCrafts>
        },
        {
          path: '/category/:subcategory',
          element: <AllCategory></AllCategory>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.subcategory}`)
        },
        {
          path: '/categoryDetails/:id',
          element: <CategoryDetails></CategoryDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
       
        {
          path: '/updateCraft/:id',
          element: <PrivateRoute><UpdateCraftItem></UpdateCraftItem></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      
        
       
      ]
    },
  ]);

export default router;