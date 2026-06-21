import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../app/context/AuthContext";
import { login, logout } from "../services/auth.api";

export const useAuth = () => {
	const { user, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = async (data) => {
		try {
			const res = await login(data);
			setUser(res.user);
			navigate(`/admin/${user?.username}`);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async (data) => {
		try {
			await logout(data);
			setUser(null);
			localStorage.removeItem("user");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return { user, setUser, handleLogin, handleLogout, navigate };
};
