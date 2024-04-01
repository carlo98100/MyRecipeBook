import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
function SpecificMeal() {
	const { id } = useParams();
	const [meal, setMeal] = useState({});
	const [markedAsLiked, setMarkedAsLiked] = useState(false);
	const { addProduct, removeProductById, user } = useContext(UserContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let mealsData = await foodApi.get(`/lookup.php?i=${id}`);
				setMeal(mealsData.data.meals[0]);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
		if (user.products.some((product) => product.idMeal === id)) {
			setMarkedAsLiked(true);
		}
	}, []);

	const navigate = useNavigate();
	const navigateBack = () => {
		navigate("/");
	};

	const likeMeal = () => {
		addProduct(meal);
		setMarkedAsLiked(!markedAsLiked);
	};
	const unLikeMeal = () => {
		removeProductById(meal.idMeal);
		setMarkedAsLiked(!markedAsLiked);
	};

	return (
		<Wrapper>
			<Header>
				<BackButton onClick={navigateBack}>
					<FaArrowLeft size={24} color="red" />
				</BackButton>
				<LikeButton onClick={markedAsLiked ? unLikeMeal : likeMeal}>
					{markedAsLiked ? <FaHeart size={24} color="red" /> : <FaRegHeart size={24} color="red" />}
				</LikeButton>
			</Header>
			<MealImage src={meal.strMealThumb} />
			<ContentWrapper style={{ display: "flex", flexDirection: "column", gap: 24 }}>
				<h1>{meal.strMeal}</h1>
				<Description>
					<h2>Description:</h2>
					<p>{meal.strInstructions}</p>
				</Description>
			</ContentWrapper>
		</Wrapper>
	);
}

export default SpecificMeal;

const Wrapper = styled.div`
	position: relative;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 12px 16px;
	position: absolute;
	width: 100%;
`;

const BackButton = styled.div`
	display: flex;
	background-color: #373f4c;
	padding: 8px;
	border-radius: 50%;
`;

const LikeButton = styled.div`
	display: flex;
	background-color: #373f4c;
	padding: 8px;
	border-radius: 50%;
`;

const MealImage = styled.img`
	width: 100%;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	color: #808080;
`;
