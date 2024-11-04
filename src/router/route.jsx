//router/router.jsx
import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../pages/App"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Layout from "../Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Transaction from "../pages/Transaction";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index:true, element:<App/>},
        {path:'/signin', element:<SignIn/>},
        {path:'/signup',element:<SignUp/>},
        {path:"/dashboard",element:<ProtectedRoute><Dashboard/></ProtectedRoute>},
        {path:"/transfer/:id/:email",element:<ProtectedRoute><Transaction/></ProtectedRoute>}
      ]
    },
]);

export default router;