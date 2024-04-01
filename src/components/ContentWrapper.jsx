import React from "react";
import styled from "styled-components";

function ContentWrapper(props) {
	return (
		<Wrapper style={props.style} className={`wrapper ${props.className || ""}`}>
			{props.children}
		</Wrapper>
	);
}

export default ContentWrapper;

const Wrapper = styled.div`
	max-width: 350px;
	margin: 0 auto;
	padding: 24px 0px;
`;
