import React, { useContext, useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function UserProfilePage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [mealsFoundBySearch, setmealsFoundBySearch] = useState([]);
	const { signedInUser } = useContext(UserContext);

	useEffect(() => {
		const delayDebounceFn = setTimeout(async () => {
			try {
				let mealsData = await foodApi.get(`/search.php?s=${searchTerm}`);
				setmealsFoundBySearch(mealsData.data.meals);
			} catch (e) {
				console.log(e);
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const navigate = useNavigate();

	const navigateToProduct = (id) => {
		navigate(`/meal/${id}`);
	};

	const navigateToViewAllResult = (queryString) => {
		navigate(`/searchresult/${queryString}`);
	};
	return (
		<Wrapper>
			<ContentWrapperContainer>
				{/* <SearchContainer>
					<SearchBar onSearch={(e) => setSearchTerm(e.target.value)} hasInput={searchTerm.length != ""} />
					{searchTerm.length != "" && (
						<SearchResultContainer>
							{mealsFoundBySearch &&
								mealsFoundBySearch.slice(0, 5).map((meal) => (
									<SearchResultItem key={meal.idMeal} onClick={() => navigateToProduct(meal.idMeal)}>
										<MealImage src={meal.strMealThumb} />
										<MealName>{meal.strMeal}</MealName>
									</SearchResultItem>
								))}
							<ViewAllText onClick={() => navigateToViewAllResult(searchTerm)}>View all</ViewAllText>
						</SearchResultContainer>
					)}
				</SearchContainer> */}
				<PageTitle>Liked meals</PageTitle>
				{signedInUser.products.length > 0 ? (
					<RecipesContainer>
						{signedInUser.products.map((meal) => (
							<FoodCard key={meal.idMeal} id={meal.idMeal} title={meal.strMeal} img={meal.strMealThumb} />
						))}
					</RecipesContainer>
				) : (
					<EmptyMessage>
						Looks like you haven't liked any recipes. <br />
						<br /> Go ahead and like some recipes to see them here.
					</EmptyMessage>
				)}
			</ContentWrapperContainer>
		</Wrapper>
	);
}

export default UserProfilePage;

const Wrapper = styled.div``;

const ContentWrapperContainer = styled(ContentWrapper)`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const SearchContainer = styled.div`
	position: relative;
`;

const SearchResultContainer = styled.div`
	width: 100%;
	border: 1px solid ${(props) => props.theme.colors.primaryBackground};

	border-top: none;
	display: flex;
	flex-direction: column;
	gap: 4px;
	position: absolute;
	z-index: 100;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
`;

const SearchResultItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 4px 8px;
	cursor: pointer;
`;

const MealImage = styled.img`
	width: 50px;
`;

const MealName = styled.h3``;

const RecipesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	row-gap: 20px;
`;

const EmptyMessage = styled.p`
	text-align: center;
`;

const ViewAllText = styled.span`
	text-align: center;
	padding: 8px;
	border-top: 1px solid ${(props) => props.theme.colors.primaryBackground};
`;

const PageTitle = styled.h2`
	text-align: center;
`;
