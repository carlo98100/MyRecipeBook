import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper";
import styled from "styled-components";
import FoodCard from "../components/FoodCard";

function FullSearchResult() {
	const { query } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let mealsData = await foodApi.get(`/search.php?s=${query}`);
				setMeals(mealsData.data.meals);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);
	return (
		<Wrapper>
			<ContentWrapperContainer>
				<h1>
					Result for search:
					<br />
					{query}
				</h1>
				<RecipesContainer>
					{meals && meals.map((meal) => <FoodCard key={meal.idMeal} id={meal.idMeal} title={meal.strMeal} img={meal.strMealThumb} />)}
				</RecipesContainer>
			</ContentWrapperContainer>
		</Wrapper>
	);
}

export default FullSearchResult;

const Wrapper = styled.div``;

const ContentWrapperContainer = styled(ContentWrapper)`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const RecipesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	row-gap: 20px;
`;
