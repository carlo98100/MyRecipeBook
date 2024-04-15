import React from "react";
import styled from "styled-components";

function FoodCard(props) {
	return (
		<CardContainer img={props.img} onClick={props.onClick}>
			<Title>{props.title}</Title>
		</CardContainer>
	);
}

export default FoodCard;

const CardContainer = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 300px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	border-radius: 16px;
`;

const Title = styled.h3`
	margin: 0;
	padding: 10px;
`;
