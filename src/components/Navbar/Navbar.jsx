import React from "react";
import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";
// import MobileNavbar from "./MobileNavbar";
// import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
	return (
		<Container>
			<MobileNavbar />
			{/* <DesktopNavbar /> */}
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	@media screen and (max-width: ${({ theme }) => theme.sm}) {
		.desktop-nav-container {
			display: none;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.sm}) {
		.mobile-nav-links-container {
			display: none;
		}
	}
`;
