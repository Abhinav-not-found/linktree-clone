import axios from "axios";

const authApiInstance = axios.create({
	baseURL: "/api/auth",
	withCredentials: true,
});

export const login = async (data) => {
	const res = await authApiInstance.post(`/login`, data);
	return res.data;
};

export const register = async (data) => {
	const res = await authApiInstance.post(`/register`, data);
	return res.data;
};

export const logout = async () => {
	const res = await authApiInstance.post(`/logout`);
	return res.data;
};
