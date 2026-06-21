import { createBrowserRouter, RouterProvider } from "react-router"
import AddLink from "../features/admin/ui/page/AddLink"
import Admin from "../features/admin/ui/page/Admin"
import AdminHome from "../features/admin/ui/page/AdminHome"
import Analytics from "../features/admin/ui/page/Analytics"
import DeletedLink from "../features/admin/ui/page/DeletedLink"
import EditLink from "../features/admin/ui/page/EditLink"
import Login from "../features/auth/ui/pages/Login"
import Register from "../features/auth/ui/pages/Register"
import Home from "../features/home/ui/pages/Home"
import Landing from "../features/landing/pages/Landing"
import AdminLayout from "./layout/AdminLayout"
import MainLayout from "./layout/MainLayout"

const AppRoutes = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Landing />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/:username",
          element: <Home />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <AdminHome />,
        },
        {
          path: ":username",
          element: <Admin />,
        },
        {
          path: ":linkId/analytics",
          element: <Analytics />,
        },
        {
          path: "add-link",
          element: <AddLink />,
        },
        {
          path: "deleted-links",
          element: <DeletedLink />,
        },
        {
          path: "link/:linkId/edit",
          element: <EditLink />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}>{children}</RouterProvider>
}

export default AppRoutes
