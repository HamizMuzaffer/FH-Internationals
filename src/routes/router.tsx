
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/Auth/Login";
import Admin from "@/pages/Admin/Admin";
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

])


export default router