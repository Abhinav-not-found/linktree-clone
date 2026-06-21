import { Navigate, Outlet } from "react-router"
import { useAuth } from "../../features/auth/hooks/useAuth"

const MainLayout = () => {
  const { user } = useAuth()
  if (user) {
    return <Navigate to={"/admin"} />
  }
  return <Outlet />
}

export default MainLayout
