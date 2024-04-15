import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper";
import { IoMdArrowBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

function SpecificMeal() {
	const { id } = useParams();
	const [meal, setMeal] = useState({});
	const [markedAsLiked, setMarkedAsLiked] = useState(false);
	const { addProduct, removeProductById, signedInUser } = useContext(UserContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let mealsData = await foodApi.get(`/lookup.php?i=${id}`);
				setMeal(mealsData.data?.meals[0]);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
		if (signedInUser.products.some((product) => product.idMeal === id)) {
			setMarkedAsLiked(true);
		}
	}, []);

	const navigate = useNavigate();

	const likeMeal = () => {
		addProduct(meal);
		setMarkedAsLiked(!markedAsLiked);
	};
	const unLikeMeal = () => {
		removeProductById(meal.idMeal);
		setMarkedAsLiked((prevState) => !prevState);
	};

	return (
		<div>
			<SpecificMealContainer img={meal.strMealThumb}>
				<MealHeaderContainer>
					<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
						<IoMdArrowBack style={{ fontSize: "32px" }} onClick={() => navigate(-1)} />
						{markedAsLiked ? (
							<FaHeart style={{ fontSize: "32px" }} onClick={unLikeMeal} />
						) : (
							<FaRegHeart style={{ fontSize: "32px" }} onClick={likeMeal} />
						)}
					</div>
					<Title>{meal.strMeal}</Title>
				</MealHeaderContainer>
			</SpecificMealContainer>
			<MealDescriptionContainer>
				<ContentWrapper>
					<Subtitle>Description</Subtitle>
					<Description>
						Bring a large saucepan of salted water to the boil. Add the pasta, stir once and cook for about 10 minutes or as directed on the packet.
						Meanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil. Put the tomatoes into a salad bowl and tear the
						basil leaves over them. Add a tablespoon of olive oil and mix. When the pasta is ready, drain into a colander and run cold water over it
						to cool it quickly. Toss the pasta into the salad bowl with the tomatoes and basil. Add the sliced olives, drained mozzarella balls, and
						chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavors to mingle. Sprinkle the pasta with a
						generous grind of black pepper and drizzle with the remaining olive oil just before serving.
					</Description>
				</ContentWrapper>
			</MealDescriptionContainer>
		</div>
	);
}

export default SpecificMeal;

const SpecificMealContainer = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	width: 100vw;
	height: 50vh;
`;

const MealHeaderContainer = styled(ContentWrapper)`
	color: #ffff;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 100%;
	justify-content: space-between;
	padding-bottom: 64px;
`;

const Title = styled.h1`
	color: white;
	font-size: 32px;
	border-bottom: 2px solid #ffff;
	padding-bottom: 8px;
	width: fit-content;
	max-width: 100%;
`;

const Subtitle = styled.h2`
	font-size: 18px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const MealDescriptionContainer = styled.div`
	background-color: #ffff;
	height: 50vh;
	width: 100%;
	border-radius: 24px 24px 0 0;
	margin-top: -20px;
`;
