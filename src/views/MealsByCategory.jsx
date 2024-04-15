import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import foodApi from "../api/FoodApi";
import FoodCard from "../components/FoodCard";
import ContentWrapper from "../components/ContentWrapper";

function MealsByCategory() {
	const { categoryName } = useParams();
	const [meals, setMeals] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let categoriesData = await foodApi.get(`/filter.php?c=${categoryName}`);
				setMeals(categoriesData.data.meals);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);
	return (
		<ContentWrapper>
			<h1 style={{ borderBottom: "2px solid green", paddingBottom: 4 }}>Recipes</h1>
			<div style={{ display: "grid", gridTemplateColumns: "1fr", rowGap: "24px" }}>
				{meals.map((meal) => (
					<FoodCard key={meal.idMeal} title={meal.strMeal} img={meal.strMealThumb} onClick={() => navigate(`/meal/${meal.idMeal}`)} />
				))}
			</div>
		</ContentWrapper>
	);
}

export default MealsByCategory;
