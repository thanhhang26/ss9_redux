import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/accountAction";
function HeaderComponent() {
	const account = useSelector((state) => state.user.account);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logout());
		navigate("/home");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/students_list">
								List
							</Link>
						</li>
						<li className="nav-item">
							{!account && (
								<Link className="nav-link" to="/login">
									Login
								</Link>
							)}
						</li>
						<li className="nav-item ms-auto">
							<div className="  mt-2 ms-2 fw-bold ">{account && account.username}</div>
						</li>
						<li className="nav-item ms-auto">
							{account && (
								<div className=" btn btn-outline-secondary ms-3  " onClick={handleLogout} Logout>
									Logout
								</div>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default HeaderComponent;
