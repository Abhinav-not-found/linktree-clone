import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../features/auth/hooks/useAuth"

const AdminLayout = () => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to={"/"} />
  }
  return <Outlet />
}

export default AdminLayout
