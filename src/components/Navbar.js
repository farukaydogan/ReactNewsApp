import { useRef } from "react";
import "../style/NavbarStyle.css";
import image from "../images/earth.jpeg"
import { NavLink } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
		<div class="imgs">
			<img src={image}></img>
		</div>
			<nav ref={navRef}>
				<NavLink to="/guncel">Güncel</NavLink>
				<NavLink to="/spor">Spor</NavLink>
				<NavLink to="/ekonomi">Ekonomi</NavLink>
				<NavLink to="/magazin">Magazin</NavLink>
                <NavLink to="/dunya">Dünya</NavLink>
			</nav>
			<h1>Son Dakika Haberleri</h1>
		</header>
	);
}

export default Navbar;

