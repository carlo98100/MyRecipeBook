import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import ContentWrapper from "../ContentWrapper";
import { NavLink } from "react-router-dom";
// import { GoSignOut } from "react-icons/go";
import { UserContext } from "../../contexts/UserContext";

import DefaultUserProfile from "../../assets/default-user-img.png";

import { LiaSignOutAltSolid } from "react-icons/lia";
const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { signOutUser, signedInUser } = useContext(UserContext);

	return (
		<>
			<MobileNavLinksContainer>
				<HamburgerIcon className="nav-icon hamburger" onClick={() => setIsOpen(!isOpen)} />
			</MobileNavLinksContainer>
			<MobileMenu open={isOpen}>
				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<MobileCloseContainer>
						<CloseIcon className="mobile-close-icon" size={42} onClick={() => setIsOpen(!isOpen)} />
					</MobileCloseContainer>

					<ProfileContainer>
						<ProfileImage src={DefaultUserProfile} />
						<ProfileInfocontainer>
							<ProfileName>
								{signedInUser.firstname} {signedInUser.lastname}
							</ProfileName>
							<ProfileRecipePosts>70 posts</ProfileRecipePosts>
						</ProfileInfocontainer>
					</ProfileContainer>
					<NavLinks>
						<NavItem to="/" onClick={() => setIsOpen(!isOpen)}>
							<NavItemText>Profile</NavItemText>
							<NavItemUnderline />
						</NavItem>
						<NavItem to="/categories" onClick={() => setIsOpen(!isOpen)}>
							<NavItemText>Recipes</NavItemText>
							<NavItemUnderline />
						</NavItem>
					</NavLinks>
				</div>
				<SignOutBtncontainer onClick={signOutUser}>
					<SignOutbtn size={42} />
					<SignOutText>Sign Out</SignOutText>
				</SignOutBtncontainer>
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
	/* display: flex;
	flex-direction: column;
	gap: 24px; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

const SignOutbtn = styled(LiaSignOutAltSolid)`
	color: ${(props) => props.theme.colors.white};
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	/* padding-left: 20px; */
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

const SignOutBtncontainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 12px 12px;
	margin: unset;
	align-items: center;
	gap: 8px;
`;

const ProfileContainer = styled.div`
	/* display: flex;
	justify-content: center; */
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	padding: 0 12px;
`;

const ProfileImage = styled.img`
	max-width: 50%;
	max-height: 50%;
	border-radius: 50%;
	background-color: lightgray;
`;

const ProfileInfocontainer = styled.div``;

const ProfileName = styled.h2`
	color: ${(props) => props.theme.colors.white};
`;
const ProfileRecipePosts = styled.p`
	color: ${(props) => props.theme.colors.white};
`;

const SignOutText = styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 16px;
	font-weight: 400;
`;
