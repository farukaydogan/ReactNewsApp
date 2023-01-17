import { NavLink } from "react-router-dom";
import React from "react";
import "../style/Footer.css";

function Footer() {
	return (
		<footer class="sticky-footer">

			<NavLink to="/guncel">Güncel</NavLink>
			<NavLink to="/spor">Spor</NavLink>
			<NavLink to="/ekonomi">Ekonomi</NavLink>
			<NavLink to="/magazin">Magazin</NavLink>
			<NavLink to="/dunya">Dünya</NavLink>
			<div>
				<button> <a href="https://www.nisakayahan.com/"> Nisa Kayahan </a> </button>
			</div>
		</footer>
	);
}

export default Footer;