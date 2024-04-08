import React, { useState } from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import ContentWrapper from "../ContentWrapper";

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
					<NavItem href="#menu" onClick={() => setIsOpen(!isOpen)}>
						<NavItemText>Menu</NavItemText>
						<NavItemUnderline />
					</NavItem>
					<NavItem href="#footer" onClick={() => setIsOpen(!isOpen)}>
						<NavItemText>Contact</NavItemText>
						<NavItemUnderline />
					</NavItem>
				</NavLinks>
			</MobileMenu>
		</>
	);
};

export default MobileNavbar;

const MobileNavLinksContainer = styled(ContentWrapper)`
	color: #373f4c;
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
	background-color: #373f4c;
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
	color: #ffff;
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	font-weight: 600;
	align-items: flex-start;
	gap: 8px;
`;

const NavItem = styled.a`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	padding: 8px 12px;
	gap: 4px;
`;

const NavItemText = styled.span`
	color: #ffff;
	font-size: 24px;
`;

const NavItemUnderline = styled.span`
	height: 2px;
	background-color: #ffff;
`;
