import React, { useState } from "react";
import { Link } from "react-router-dom";

const logo = "/assets/logo.svg";

function Nav() {
	const [sidebarActive, setSidebarActive] = useState(false);
	return (
		<nav className="nav">
			<div>
				<div className="nav-logo">
					<img src={logo} alt="" />
				</div>
				<div className="nav-info info-1">
					<Link to="/">Features</Link>
					<Link to="/">Github</Link>
					<Link to="/">For Designers</Link>
					<Link to="/">
						<button>Documentation</button>
					</Link>
				</div>

				<div className="nav-bars">
					{sidebarActive ? (
						<div onClick={() => setSidebarActive(false)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								// fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								style={{ width: "24px" }}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</div>
					) : (
						<div onClick={() => setSidebarActive(true)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								style={{ width: "24px" }}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</div>
					)}

					{sidebarActive && (
						<div
							className="nav-info info-2"
							style={{
								position: "absolute",
								top: "24px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "20px",
								width: "200px",
								padding: " 30px 15px",
								left: "-210px",
								backgroundColor: "whitesmoke",
							}}
						>
							<Link to="/">Features</Link>
							<Link to="/">Github</Link>
							<Link to="/">For Designers</Link>
							<Link to="/">
								<button>Documentation</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
