import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import AdminDashboard from "./layouts/Admin/AdminDashboard";
import Dashboard from "./views/Admin/Dashboard/Dashboard";
import Products from "./views/Admin/Dashboard/Products/Products";
import Prices from "./views/Admin/Dashboard/Prices/Prices";
import Cupons from "./views/Admin/Dashboard/Cupons/Cupons";
import Checkout from "./views/Checkout/Checkout";

export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'auth',
        element: <AuthLayout />, 
        children : [
            { path: 'login', element: <Login />},
            { path: 'register' , element: <SignUp /> }
        ]
       },
       {
        path:'/home',
        element: <Home />,
       },
       {
        path:'/admin-login',
        element: <AdminLogin />,
       },
       {

        path:'admin', element: <AdminDashboard />,
        children: [
            
            {path:'dashboard', element:<Dashboard />},
            {path:'products', element:<Products />},
            {path:'prices', element:<Prices />},
            {path:'cupons', element:<Cupons />},
        ] 
       },
       {path:'/checkout', element: <Checkout />}
    ])
    return element
}