import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const SignUpForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const { AddnewUser } = useContext(UserContext);
	const handleSignUp = () => {
		if (password !== repeatPassword) {
			alert("Passwords do not match");
			return;
		}

		const newUser = {
			firstname: firstName,
			lastname: lastName,
			email: email,
			password: password,
			products: [],
		};

		console.log(newUser);
		AddnewUser(newUser);

		props.toggle(true);
	};

	return (
		<SignUpContainer>
			<InputFieldWrapper>
				<InputLabel>First name</InputLabel>
				<InputField type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
			</InputFieldWrapper>
			<InputFieldWrapper>
				<InputLabel>Last name</InputLabel>
				<InputField type="text" placeholder="Enter your Last name" onChange={(e) => setLastName(e.target.value)} />
			</InputFieldWrapper>
			<InputFieldWrapper>
				<InputLabel>Email</InputLabel>
				<InputField type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
			</InputFieldWrapper>
			<InputFieldWrapper>
				<InputLabel>Password</InputLabel>
				<InputField type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
			</InputFieldWrapper>
			<InputFieldWrapper>
				<InputLabel>Repeat password</InputLabel>
				<InputField type="password" placeholder="**********" onChange={(e) => setRepeatPassword(e.target.value)} />
			</InputFieldWrapper>
			<OptionsContainer>
				<SignUpButton onClick={() => handleSignUp()}>Sign Up</SignUpButton>
				<AlreadyMemberLink>I'm already member</AlreadyMemberLink>
			</OptionsContainer>
		</SignUpContainer>
	);
};

export default SignUpForm;

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const InputFieldWrapper = styled.div``;
const InputLabel = styled.label`
	color: ${(props) => props.theme.colors.white};
	text-transform: uppercase;
	font-weight: 300;
	font-size: 16px;
`;

const InputField = styled.input`
	color: ${(props) => props.theme.colors.white};
	background-color: transparent;
	border: none;
	padding: 8px 0px;
	border-bottom: 2px solid ${(props) => props.theme.colors.accent};
	width: 100%;
	&:focus-visible {
		outline: none;
	}
`;

const SignUpButton = styled.button`
	width: fit-content;
	padding: 8px 32px;
	border-radius: 24px;
	border: none;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

const AlreadyMemberLink = styled.span`
	color: ${(props) => props.theme.colors.slateBlue};
	border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	padding-bottom: 4px;
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;
