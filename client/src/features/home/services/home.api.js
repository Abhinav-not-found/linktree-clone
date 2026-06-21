import axios from "axios";

const linkApiInstance = axios.create({
	baseURL: "/api/link",
	withCredentials: true,
});

export const getLinks = async ({ username }) => {
	const res = await linkApiInstance.get(`/${username}`);
	// console.log("getLinks=>", res.data);
	return res.data;
};

export const linkClick = async ({ linkId }) => {
	const res = await linkApiInstance.patch(`/${linkId}/click`);
	console.log(res.data);
	return res.data;
};
