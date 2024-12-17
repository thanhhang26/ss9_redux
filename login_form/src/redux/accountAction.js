// viết trả về action {type:, payload:}
// account = {
//     username:"",
//     password:"",
//     role:"" //quyền
// }
export function login(account) {
	return {
		type: "LOGIN",
		payload: account,
	};
	// đây là 1 action
}

export function logout() {
	return {
		type: "LOGOUT",
		payload: null,
	};
}
