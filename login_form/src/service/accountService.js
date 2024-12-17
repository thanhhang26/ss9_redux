import axios from "axios";
import { BASE_URL } from "./api";

export async function checkLogin(loginInfo) {
	try {
		const response = await axios.get(`${BASE_URL}/account`);
		const account = response.data.find((account) => account.username == loginInfo.username && account.password == loginInfo.password);
		// hàm find() để kiểm tra
		if (account != null) {
			return account;
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
}
