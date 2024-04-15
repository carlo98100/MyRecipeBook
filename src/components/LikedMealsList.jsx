import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LikedMealsList(props) {
	const navigate = useNavigate();
	console.log("Recipes", props.recipes);
	return (
		<LikedMealsContainer>
			{props.recipes.map((meal) => (
				<MealContainer key={meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
					<Image src={meal.strMealThumb} alt="Pasta" />
					<ContentContainer>
						<Title>{meal.strMeal}</Title>
						<Description>{meal.strInstructions}</Description>
					</ContentContainer>
				</MealContainer>
			))}
		</LikedMealsContainer>
	);
}

export default LikedMealsList;

const LikedMealsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 24px;
`;

const MealContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 12px;
	grid-template-rows: 100px;
`;

const Image = styled.img`
	max-height: 100%;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Title = styled.h4``;

const Description = styled.p`
	max-height: 100%;
	overflow: hidden;
`;
