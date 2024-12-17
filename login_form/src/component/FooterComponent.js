import React from "react";
import { Link } from "react-router-dom";
function FooterComponent() {
	return (
		<div className="container">
			<footer className="py-3 my-4">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<Link className="nav-link px-2 text-muted" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link px-2 text-muted" to="/">
							Features
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link px-2 text-muted" to="/">
							Pricing
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link px-2 text-muted" to="/">
							FAQs
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link px-2 text-muted" to="/">
							About
						</Link>
					</li>
				</ul>
				<p className="text-center text-muted">© 2021 Company, Inc</p>
			</footer>
		</div>
	);
}
export default FooterComponent;
