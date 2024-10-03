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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/crafts')
        },
        {
          path: '/itemDetails/:id',
          element: <ItemDetails></ItemDetails>,
         
        },
        {
          path: '/allCraftItems',
          element: <AllCraftItems></AllCraftItems>
        },
        {
          path: 'addCraftItem',
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
          path: 'myCraftList',
          element: <MyCraftList></MyCraftList>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
       
      ]
    },
  ]);

export default router;