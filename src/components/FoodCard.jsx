import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FoodCard(props) {
	const navigate = useNavigate();

	const navigateToProduct = (id) => {
		navigate(`/meal/${id}`);
	};

	return (
		<FoodCardContainer onClick={() => navigateToProduct(props.id)}>
			<Img src={props.img} alt={props.title} />
			<Title>{props.title}</Title>
		</FoodCardContainer>
	);
}

export default FoodCard;

const FoodCardContainer = styled.div`
	background-color: #373f4c;
	border-radius: 16px;
	padding: 24px;
	position: relative;
`;

const Title = styled.h3`
	font-weight: bold;
	color: #32b481;
`;
const Img = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Description = styled.p`
	color: #b4b8c0;
`;

const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	position: relative;
	background-color: yellow;
`;
