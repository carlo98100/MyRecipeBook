import React, { useState } from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

function SignIn() {
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
				{signIn ? (
					<SignInContainer>
						<InputFieldWrapper>
							<InputLabel>Email</InputLabel>
							<InputField type="text" placeholder="Enter a valid email" />
						</InputFieldWrapper>
						<InputFieldWrapper>
							<InputLabel>Password</InputLabel>
							<InputField type="password" placeholder="**********" />
						</InputFieldWrapper>
						<SignInButton>Sign In</SignInButton>
					</SignInContainer>
				) : (
					<SignUpContainer>
						<InputFieldWrapper>
							<InputLabel>First name</InputLabel>
							<InputField type="text" placeholder="Enter your first name" />
						</InputFieldWrapper>
						<InputFieldWrapper>
							<InputLabel>Last name</InputLabel>
							<InputField type="text" placeholder="Enter your Last name" />
						</InputFieldWrapper>
						<InputFieldWrapper>
							<InputLabel>Email</InputLabel>
							<InputField type="text" placeholder="Enter your email" />
						</InputFieldWrapper>
						<InputFieldWrapper>
							<InputLabel>Password</InputLabel>
							<InputField type="password" placeholder="**********" />
						</InputFieldWrapper>
						<InputFieldWrapper>
							<InputLabel>Repeat password</InputLabel>
							<InputField type="password" placeholder="**********" />
						</InputFieldWrapper>
						<OptionsContainer>
							<SignInButton>Sign Up</SignInButton>
							<AlreadyMemberLink onClick={() => setSignIn(true)}>I'm already member</AlreadyMemberLink>
						</OptionsContainer>
					</SignUpContainer>
				)}
			</ContentWrapperContainer>
		</LogInContainer>
	);
}

export default SignIn;

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

const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const InputFieldWrapper = styled.div``;
const InputLabel = styled.label`
	color: #ffff;
	text-transform: uppercase;
	font-weight: 300;
	font-size: 16px;
`;

const InputField = styled.input`
	color: #ffff;
	background-color: transparent;
	border: none;
	padding: 8px 0px;
	border-bottom: 2px solid #52c4b9;
	width: 100%;
	&:focus-visible {
		outline: none;
	}
`;

const SignInButton = styled.button`
	width: fit-content;
	padding: 8px 32px;
	border-radius: 24px;
	border: none;
	background-color: #52c4b9;
	color: #ffff;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

const AlreadyMemberLink = styled.span`
	color: #8c9caf;
	text-decoration: underline;
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;
