import { useNavigate } from "react-router";
import {
	createLink,
	getDeletedLinks,
	getLinkAnalytics,
	getLinkById,
	hardDeleteLink,
	softDeleteLink,
	updateLink,
} from "../services/admin.api";

const useAdmin = () => {
	const navigate = useNavigate();
	const fetchAnalytics = async (linkId) => {
		try {
			const res = await getLinkAnalytics(linkId);
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddLink = async (data) => {
		try {
			await createLink(data);
			navigate(-1);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSoftDelete = async (linkId) => {
		try {
			const res = await softDeleteLink(linkId);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchDeletedLinks = async () => {
		try {
			const res = await getDeletedLinks();
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	const handleHardDelete = async (linkId) => {
		try {
			const res = await hardDeleteLink(linkId);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateLink = async (linkId, data) => {
		try {
			const res = await updateLink(linkId, data);
			console.log(res);
			navigate(-1);
		} catch (error) {
			console.log(error);
		}
	};

	const getLinkByIdHandler = async (linkId) => {
		try {
			const res = await getLinkById(linkId);

			return res.link;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		fetchAnalytics,
		handleAddLink,
		handleSoftDelete,
		fetchDeletedLinks,
		handleHardDelete,
		handleUpdateLink,
		getLinkByIdHandler,
	};
};

export default useAdmin;
