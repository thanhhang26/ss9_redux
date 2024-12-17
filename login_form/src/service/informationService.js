import { BASE_URL } from "./api";
import axios from "axios";

export async function getAllInformationStudent() {
	try {
		const response = await axios.get(`${BASE_URL}/information`);
		return response.data;
	} catch (error) {
		return [];
	}
}

export async function addNewStudent() {
	try {
		const response = await axios.post(`${BASE_URL}/information`);
		return response.data;
	} catch (error) {
		return [];
	}
}
