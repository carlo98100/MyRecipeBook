import React, { useState } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function LoginForm() {
	const [signIn, setSignIn] = useState(true);

	return (
		<LogInContainer>
			<ContentWrapperContainer>
				<StyledDiv>
					<ToggleSignInbtn onClick={() => setSignIn(true)} active={signIn}>
						Sign In
					</ToggleSignInbtn>
					<ToggleSignUpBtn onClick={() => setSignIn(false)} active={!signIn}>
						Sign up
					</ToggleSignUpBtn>
				</StyledDiv>
				<ToggleContainer>
					<Title active={signIn}>Sign In</Title>
					<span style={{ fontSize: 20, color: "#8c9caf", fontWeight: 300 }}>or</span>
					<Title active={!signIn}>Sign Up</Title>
				</ToggleContainer>
				{signIn ? <SignInForm /> : <SignUpForm toggle={setSignIn} />}
			</ContentWrapperContainer>
		</LogInContainer>
	);
}

export default LoginForm;

const ContentWrapperContainer = styled(ContentWrapper)`
	display: flex;
	flex-direction: column;
	gap: 60px;
`;

const LogInContainer = styled.div`
	background-color: #314257;
	height: 100vh;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const StyledSpan = styled.span`
	background-color: ${(props) => (props.active ? "#52c4b9" : "#49596d")};
	padding: 8px 20px;
	font-size: 12px;
	color: ${(props) => (props.active ? "#FFFF" : "#8c9caf")};
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

const ToggleSignInbtn = styled(StyledSpan)`
	border-radius: 16px 0px 0px 16px;
`;
const ToggleSignUpBtn = styled(StyledSpan)`
	border-radius: 0px 16px 16px 0;
`;

const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
`;

const Title = styled.span`
	font-size: 24px;
	color: ${(props) => (props.active ? "#FFFF" : "#8c9caf")};
	border-bottom: ${(props) => (props.active ? "2px solid #52c4b9" : "none")};
	font-weight: 300;
`;
