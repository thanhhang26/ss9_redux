import { BASE_URL } from "./api";
import axios from "axios";

export async function getAddressStudent() {
	try {
		const response = await axios.get(`${BASE_URL}/address`);
		return response.data;
	} catch (error) {
		return [];
	}
}
