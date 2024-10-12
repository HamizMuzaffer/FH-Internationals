import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/Auth/Login";
import Admin from "@/pages/Admin/Admin";
import Contact from "@/pages/home/Contact";
const router =  createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },

])


export default router