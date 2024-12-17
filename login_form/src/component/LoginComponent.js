import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/accountAction";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../service/accountService";
function LoginComponent() {
	const account = useSelector((state) => state.user.account); // Lấy dữ liệu về, lấy dữ liệu của user và account trong reducer.js
	const dispatch = useDispatch(); // đẩy dũ liệu lên
	const navigate = useNavigate();
	const usernameRef = useRef();
	const passwordRef = useRef();
	const handleLogin = async () => {
		let username = usernameRef.current.value;
		let password = passwordRef.current.value;
		const loginInfo = {
			username: username, //thuộc tính: giá trị
			password: password,
		};
		//call API để chc=eckLogin => kiểm tra có dữ liệu trong db => OK
		const account = await checkLogin(loginInfo);
		dispatch(login(loginInfo)); //hàm login trả về 1 action
		navigate("/students_list");
	};

	return (
		<div className="container d-flex justify-content-center align-items-center mt-5">
			<div className="card p-4 shadow" style={{ width: "400px" }}>
				<h3 className="text-center mb-4">Login</h3>
				<form>
					<div className="mb-3">
						<label className="form-label">Username:</label>
						<input ref={usernameRef} type="text" name="username" className="form-control" placeholder="Enter your username" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password:</label>
						<input ref={passwordRef} type="password" name="password" className="form-control" placeholder="Enter your password" />
					</div>
					<div className="text-center">
						<button onClick={handleLogin} type="button" className="btn btn-secondary w-100">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default LoginComponent;
