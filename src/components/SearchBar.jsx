import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

function SearchBar(props) {
	return (
		<div>
			<SearchBarContainer hasInput={props.hasInput}>
				<InputField type="text" placeholder="Dessert" onChange={props.onSearch} />
				<IoSearch size={24} />
			</SearchBarContainer>
		</div>
	);
}

export default SearchBar;

const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid #373f4c;
	border-radius: 16px;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	border-bottom-left-radius: ${(props) => (props.hasInput ? "0px" : "16px")};
	border-bottom-right-radius: ${(props) => (props.hasInput ? "0px" : "16px")};
	padding: 4px 8px;
	gap: 4px;
`;

const InputField = styled.input`
	width: 100%;
	border: none;
	&:focus-visible {
		outline: none;
	}
`;
