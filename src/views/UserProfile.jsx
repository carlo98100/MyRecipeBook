import React, { useContext } from "react";
import styled from "styled-components";
import DefaultUserImage from "../assets/default-user-img.png";
import HeroImage from "../assets/userprofile-heroimage.jpg";
import ContentWrapper from "../components/ContentWrapper";
import { UserContext } from "../contexts/UserContext";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import LikedMealsList from "../components/LikedMealsList";
import { NavLink, useNavigate } from "react-router-dom";

function UserProfile() {
	const { signedInUser } = useContext(UserContext);
	const navigate = useNavigate();
	return (
		<UserProfileContainer>
			<UserShortInfoContainer>
				<ContentWrapperContainer>
					<UserProfileContent>
						<ProfileImage src={DefaultUserImage} style={{ maxWidth: "40%", borderRadius: "50%" }} alt="User" />
						<UserName>
							{signedInUser.firstname} {signedInUser.lastname}
						</UserName>
					</UserProfileContent>
					<StatisticsContainer>
						<StatisticItem>
							<IoIosNotificationsOutline size={32} />
							<StatisticText>
								<Description>Notifications</Description>
								<Value>0</Value>
							</StatisticText>
						</StatisticItem>
						<StatisticItem>
							<IoDocumentOutline size={32} />
							<StatisticText>
								<Description>Posts</Description>
								<Value>0</Value>
							</StatisticText>
						</StatisticItem>
						<StatisticItem>
							<FaRegHeart size={32} />
							<StatisticText>
								<Description>Likes</Description>
								<Value>{signedInUser.products.length}</Value>
							</StatisticText>
						</StatisticItem>
						<StatisticItem>
							<LiaUserFriendsSolid size={32} />
							<StatisticText>
								<Description>Connections</Description>
								<Value>0</Value>
							</StatisticText>
						</StatisticItem>
					</StatisticsContainer>
				</ContentWrapperContainer>
			</UserShortInfoContainer>
			<ContentWrapper>
				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<div
						style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: 12 }}
						onClick={() => navigate("/alllikedmeals")}
					>
						<h3 style={{ textTransform: "uppercase" }}>Liked meals</h3>
						{signedInUser.products.length > 0 ? (
							<a style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "#569bec" }}>
								<span style={{ fontWeight: "bold" }}>View all</span>
								<MdKeyboardArrowRight size={24} />
							</a>
						) : null}
					</div>
					{signedInUser.products.length > 0 ? (
						<LikedMealsList recipes={signedInUser.products.slice(0, 5)} />
					) : (
						<EmptyRecipesContainer>
							<EmptyMessage>Looks like you haven't liked any recipes.</EmptyMessage>
							<FindRecipesBtn onClick={() => navigate("/categories")}>Find recipes</FindRecipesBtn>
						</EmptyRecipesContainer>
					)}
				</div>
			</ContentWrapper>
		</UserProfileContainer>
	);
}

export default UserProfile;

const UserProfileContainer = styled.div`
	height: calc(100vh - 60px);
`;

const ContentWrapperContainer = styled(ContentWrapper)`
	display: flex;
	flex-direction: column;
	gap: 36px;
	padding-bottom: 72px;
`;

const UserShortInfoContainer = styled.div`
	background-image: url(${HeroImage});
	background-size: cover;
	background-position: top;
`;

const UserProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	padding: 24px;
`;

const UserName = styled.h2`
	text-align: center;
	color: ${(props) => props.theme.colors.white};
`;

const ProfileImage = styled.img`
	max-width: 40%;
	max-height: 40%;
	border-radius: 50%;
	background-color: lightgray;
`;

const StatisticsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const StatisticItem = styled.div`
	color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

const StatisticText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	font-size: 14px;
`;

const Description = styled.span``;
const Value = styled.span``;

const EmptyRecipesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const EmptyMessage = styled.p``;

const FindRecipesBtn = styled(NavLink)`
	padding: 8px 20px;
	background-color: ${(props) => props.theme.colors.primary};
	color: #ffff;
	font-weight: bold;
	border-radius: 12px;
	max-width: fit-content;
	text-decoration: none;
`;
