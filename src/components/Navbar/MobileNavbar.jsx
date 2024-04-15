import React, { useState } from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import ContentWrapper from "../ContentWrapper";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<MobileNavLinksContainer>
				<HamburgerIcon className="nav-icon hamburger" onClick={() => setIsOpen(!isOpen)} />
			</MobileNavLinksContainer>
			<MobileMenu open={isOpen}>
				<MobileCloseContainer>
					<CloseIcon className="mobile-close-icon" size={42} onClick={() => setIsOpen(!isOpen)} />
				</MobileCloseContainer>
				<NavLinks>
					<NavItem to="/categories" onClick={() => setIsOpen(!isOpen)}>
						<NavItemText>Recipes</NavItemText>
						<NavItemUnderline />
					</NavItem>
					<NavItem to="/" onClick={() => setIsOpen(!isOpen)}>
						<NavItemText>Profile</NavItemText>
						<NavItemUnderline />
					</NavItem>
				</NavLinks>
			</MobileMenu>
		</>
	);
};

export default MobileNavbar;

const MobileNavLinksContainer = styled(ContentWrapper)`
	color: ${(props) => props.theme.colors.primaryBackground};
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	padding: 12px 0;
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
	width: 36px;
	height: 36px;
`;

const MobileMenu = styled.div`
	background-color: ${(props) => props.theme.colors.primaryBackground};
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	transform: ${({ open }) => (open ? "none" : "translateX(100%)")};
	transition: transform ease-in 250ms;
	z-index: 10;
`;

const MobileCloseContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	padding-right: 12px;
	padding-top: 12px;
`;

const CloseIcon = styled(HiXMark)`
	color: ${(props) => props.theme.colors.white};
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	font-weight: 600;
	align-items: flex-start;
	gap: 8px;
`;

const NavItem = styled(NavLink)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	padding: 8px 12px;
	gap: 4px;
`;

const NavItemText = styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 24px;
`;

const NavItemUnderline = styled.span`
	height: 2px;
	background-color: ${(props) => props.theme.colors.white};
`;
