import React, { useContext } from "react";
import ContentWrapper from "../components/ContentWrapper";
import LikedMealsList from "../components/LikedMealsList";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { UserContext } from "../contexts/UserContext";

function AllLikedMeals() {
	const navigate = useNavigate();
	const { signedInUser } = useContext(UserContext);

	return (
		<div>
			<ContentWrapper style={{ display: "flex", flexDirection: "column", gap: 52 }}>
				<div>
					<IoMdArrowBack style={{ fontSize: "32px" }} onClick={() => navigate(-1)} />
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<h1 style={{ fontSize: "28px", borderBottom: "1px solid green", width: "fit-content", maxWidth: "100%" }}>Liked meals</h1>
					<LikedMealsList recipes={signedInUser.products} />
				</div>
			</ContentWrapper>
		</div>
	);
}

export default AllLikedMeals;
