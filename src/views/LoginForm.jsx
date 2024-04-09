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
				<ToggleContainer>
					<ToggleSignInbtn onClick={() => setSignIn(true)} $active={signIn.toString()}>
						Sign In
					</ToggleSignInbtn>
					<ToggleSignUpBtn onClick={() => setSignIn(false)} $active={(!signIn).toString()}>
						Sign up
					</ToggleSignUpBtn>
				</ToggleContainer>
				<LoginFormsContainer>
					<ToggleContainerTitles>
						<Title $active={signIn.toString()}>Sign In</Title>
						<OrText>or</OrText>
						<Title $active={(!signIn).toString()}>Sign Up</Title>
					</ToggleContainerTitles>
					{signIn ? <SignInForm /> : <SignUpForm toggle={setSignIn} />}
				</LoginFormsContainer>
			</ContentWrapperContainer>
		</LogInContainer>
	);
}

export default LoginForm;

const ContentWrapperContainer = styled(ContentWrapper)``;

const LogInContainer = styled.div`
	/* background-color: ${(props) => props.theme.colors.primaryBackground}; */
	background: linear-gradient(0deg, #222e3f 0%, #2d3c51 50%, #394b63 100%);
	height: 100vh;
`;

const ToggleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const StyledSpan = styled.span`
	background-color: ${(props) => (props.$active === "true" ? props.theme.colors.primary : props.theme.colors.primaryDark)};
	padding: 8px 20px;
	font-size: 12px;
	color: ${(props) => (props.$active === "true" ? props.theme.colors.white : props.theme.colors.primaryLight)};
	box-shadow: ${(props) => (props.$active === "true" ? `0 0 10px 2px ${props.theme.colors.shadow}` : "none")};
`;

const ToggleSignInbtn = styled(StyledSpan)`
	border-radius: 16px 0px 0px 16px;
`;
const ToggleSignUpBtn = styled(StyledSpan)`
	border-radius: 0px 16px 16px 0;
`;

const ToggleContainerTitles = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 24px;
	color: ${(props) => (props.$active === "true" ? props.theme.colors.white : props.theme.colors.textDark)};
	border-bottom: ${(props) => (props.$active === "true" ? `1px solid ${props.theme.colors.primary}` : "none")};
	padding-bottom: ${(props) => (props.$active === "true" ? "8px" : "0px")};
	font-weight: 300;
`;
const OrText = styled.h2`
	font-size: 20px;
	color: ${(props) => props.theme.colors.textDark};
	font-weight: 300;
`;

const LoginFormsContainer = styled.div`
	margin-top: 10vh;
	display: flex;
	flex-direction: column;
	gap: 60px;
`;
