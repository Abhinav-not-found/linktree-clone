import { getLinks, linkClick } from "../services/home.api";

export default function useHome() {
	const fetchLinks = async (username) => {
		try {
			return await getLinks({ username });
		} catch (error) {
			console.log(error);
		}
	};

	const handleLinkClick = async ({ linkId }) => {
		try {
			const res = await linkClick({ linkId });
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		fetchLinks,
		handleLinkClick,
	};
}
