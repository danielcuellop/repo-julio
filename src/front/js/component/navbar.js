import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear()
		navigate("/login")
	}
	return (

		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="localhost:3000/login">
					<img src="https://www.calacademy.org/sites/all/themes/calacademy_zen/images/logo-green-460px.png" alt="Logo" width="30" height="30" class="d-inline-block align-top" />
					Field Expedition
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="#">Contacto</a>
						</li>
					</ul>
					<ul class="navbar-nav">

						<li class="nav-item">
							{location.pathname === "/" && <a className="nav-link" href="http://localhost:3000/login">Login</a>}
						</li>

					</ul>
				</div>
				<div className="ml-auto">
					{location.pathname !== "/login" && location.pathname !== "/" && <button onClick={logout} className="btn btn-primary">Log Out</button>}
				</div>
			</div>
		</nav>


	);
};
