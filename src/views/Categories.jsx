import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper";
import { useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";

function Categories() {
	// const [searchTerm, setSearchTerm] = useState("");
	// const [mealsFoundBySearch, setmealsFoundBySearch] = useState([]);
	// // const { signedInUser } = useContext(UserContext);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let categoriesData = await foodApi.get(`/categories.php`);
				// setCategories(categoriesData);
				setCategories(categoriesData.data.categories);
				// console.log(categoriesData.data.categories);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	// useEffect(() => {
	// 	const delayDebounceFn = setTimeout(async () => {
	// 		try {
	// 			let mealsData = await foodApi.get(`/search.php?s=${searchTerm}`);
	// 			setmealsFoundBySearch(mealsData.data.meals);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}, 1000);

	// 	return () => clearTimeout(delayDebounceFn);
	// }, [searchTerm]);

	// const navigateToProduct = (id) => {
	// 	navigate(`/meal/${id}`);
	// };

	return (
		<ContentWrapper>
			<PageTitle>Categories</PageTitle>
			<CategoriesContainer>
				{categories.map((category) => (
					<FoodCard
						key={category.idCategory}
						title={category.strCategory}
						img={category.strCategoryThumb}
						onClick={() => navigate(`/category/${category.strCategory.toLowerCase()}/meals`)}
					/>
				))}
			</CategoriesContainer>
		</ContentWrapper>
	);
}

export default Categories;

const PageTitle = styled.h1`
	border-bottom: 2px solid green;
	padding-bottom: 4px;
`;

const CategoriesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 24px;
`;
