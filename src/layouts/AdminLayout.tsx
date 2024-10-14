import { AdminSidebar } from "@/components/dashboard/Admin/admin-sidebar"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <main className="flex">
    <AdminSidebar/>
    <Outlet />
  </main>
  )
}

export default AdminLayout