import axios from "axios";

const linkApiInstance = axios.create({
	baseURL: "/api/link",
	withCredentials: true,
});

export const getLinkAnalytics = async (linkId) => {
	const res = await linkApiInstance.get(`/analytics/${linkId}`);
	return res.data;
};

export const createLink = async (data) => {
	const res = await linkApiInstance.post("/create", data);
	return res.data;
};

export const softDeleteLink = async (linkId) => {
	const res = await linkApiInstance.patch(`/${linkId}/soft-delete`);
	return res.data;
};

export const getDeletedLinks = async () => {
	const res = await linkApiInstance.get(`/deleted/all`);
	return res.data;
};

export const hardDeleteLink = async (linkId) => {
	const res = await linkApiInstance.delete(`/${linkId}/hard-delete`);
	return res.data;
};

export const updateLink = async (linkId, data) => {
	const res = await linkApiInstance.patch(`/${linkId}`, data);

	return res.data;
};

export const getLinkById = async (linkId) => {
	const res = await linkApiInstance.get(`/link/${linkId}`);
	return res.data;
};
