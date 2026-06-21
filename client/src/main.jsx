import { createRoot } from "react-dom/client"
import "./index.css"
import AppRoutes from "./app/AppRoutes.jsx"
import AuthContextProvider from "./app/context/AuthContext.jsx"

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AppRoutes />
  </AuthContextProvider>,
)
