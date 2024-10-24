import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/Auth/Login";
import Contact from "@/pages/home/Contact";
import Admin from "@/pages/Admin/Admin";
import Dashboard from "@/pages/Admin/Dashboard";
import AdminLayout from "@/layouts/AdminLayout";
import Orders from "@/pages/Admin/Orders";
import Inquiries from "@/pages/Admin/Inquiries";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Dashboard/Home";
const router =  createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
        {
            path: "/auth/login",
            element: <Login />,
        },

    ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children : [
            {
                path: "/dashboard/home",
                element: <Home/>
            }
        ]
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children : [
            {
              path : "/admin/home",
              element : <Admin/>
            },

            {
                path : "/admin/dashboard",
                element : <Dashboard/>
            },
            {
                path : "/admin/orders",
                element : <Orders/>
            },
            {
                path : "/admin/inquiries",
                element : <Inquiries/>
            },
        ]
    },
    {
        path: "/contact",
        element: <Contact />,
    },

])


export default router