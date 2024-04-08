import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signInUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSignIn = () => {
		const signedInSuccessfully = signInUser(email, password);
		if (signedInSuccessfully) {
			navigate("/");
		}
	};

	return (
		<SignInContainer>
			<InputFieldWrapper>
				<InputLabel>Email</InputLabel>
				<InputField type="text" placeholder="Enter a valid email" onChange={(e) => setEmail(e.target.value)} />
			</InputFieldWrapper>
			<InputFieldWrapper>
				<InputLabel>Password</InputLabel>
				<InputField type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
			</InputFieldWrapper>
			<SignInButton onClick={() => handleSignIn()}>Sign In</SignInButton>
		</SignInContainer>
	);
};

export default SignInForm;

const SignInContainer = styled.div`
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
