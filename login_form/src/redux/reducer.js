import { combineReducers } from "redux";
// Xử lý reducer con trước
const initState = {
	account: {
		username: "",
		password: "",
		role: "",
	},
};
//Khi dispatch lên thì accountReducer sẽ nhận
function accountReducer(state = initState, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				account: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				account: null,
			};
		default:
			return state;
	}
}

// Tạo reducer to (combineReducers hay còn gọi là root)
export const rootReducer = combineReducers({
	user: accountReducer,
});
