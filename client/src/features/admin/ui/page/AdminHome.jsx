import { Navigate } from "react-router"
import { useAuth } from "../../../auth/hooks/useAuth"

const AdminHome = () => {
  const { user } = useAuth()

  return <Navigate to={`/admin/${user.username}`} />
}

export default AdminHome
